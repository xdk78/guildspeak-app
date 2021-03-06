import React, { useEffect } from 'react'
import Messages from '../../components/Messages'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { MainWrapper, SecondColumn, ThirdColumn, Row, TopWrapper, Sidebar } from './styles'
import CurrentUsersContainer from '../../containers/CurrentUsersContainer'
import CurrentGuildContainer from '../../containers/CurrentGuildContainer'
import CurrentUser from '../../components/CurrentUser'
import Guilds from '../../components/Guilds'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import dayjs from 'dayjs'

type Props = {
  channelId: string
  guildId: string
}

const UPDATE_USER_STATUS = gql`
  mutation updateUserStatus($lastSeen: DateTime!) {
    updateUserStatus(lastSeen: $lastSeen) {
      lastSeen
    }
  }
`

const Application = ({ channelId, guildId }: Props & RouteComponentProps) => {
  const [updateUserStatus] = useMutation(UPDATE_USER_STATUS)

  const updateStatus = () => {
    if (!document.hidden && document.visibilityState === 'visible' && navigator.onLine) {
      return updateUserStatus({ variables: { lastSeen: dayjs().toISOString() } })
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', updateStatus)
    return () => document.removeEventListener('visibilitychange', updateStatus)
  }, [updateStatus])

  useEffect(() => {
    const interval = setInterval(updateStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <MainWrapper>
      <TopWrapper>
        <Guilds />
      </TopWrapper>
      {guildId && channelId ? (
        <Row>
          <Sidebar>
            <CurrentGuildContainer />
            <CurrentUser />
          </Sidebar>
          <SecondColumn>
            <Messages channelId={channelId} />
          </SecondColumn>
          <ThirdColumn>
            <CurrentUsersContainer />
          </ThirdColumn>
        </Row>
      ) : (
        <Row>
          <Sidebar>
            <CurrentUser />
          </Sidebar>
          Create or select Guild
        </Row>
      )}
    </MainWrapper>
  )
}

export default withRouter(Application)
