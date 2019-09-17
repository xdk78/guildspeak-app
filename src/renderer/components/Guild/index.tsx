import React from 'react'
import { Wrapper, GuildWrapper, CurrentGuildSelector } from './styles'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = {
  name: string
  currentGuildId: string
  guildId: string
  defaultChannelId: string
  defaultChannelName: string
  setGuildId: (guildId: string) => void
  setChannel: (channelId: string, channelName: string) => void
}

const Guild = ({
  name,
  guildId,
  currentGuildId,
  setGuildId,
  defaultChannelId,
  defaultChannelName,
  setChannel,
  history
}: Props & RouteComponentProps) => {
  const changeGuild = () => {
    setGuildId(guildId)
    setChannel(defaultChannelId, defaultChannelName)
    history.push(`/app/channel/${defaultChannelId}`)
  }

  return (
    <Wrapper>
      <GuildWrapper onClick={changeGuild} title={name}>
        {name.slice(0, 1)}
      </GuildWrapper>
      <CurrentGuildSelector guildId={guildId} currentGuildId={currentGuildId} />
    </Wrapper>
  )
}

export default withRouter(Guild)
