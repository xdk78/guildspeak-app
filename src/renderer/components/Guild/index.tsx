/**
  * @author rlot <rj23@protonmail.com>
  * @author alufers <alufers@wp.pl>
  * @author xdk78 <xdk78888@gmail.com>
  * @author Bjornskjald <github@bjorn.ml>
*/
import * as React from 'react'
import ChannelContainer from '../../containers/ChannelContainer'
import { RouteProps } from 'react-router'
import { Wrapper, GuildName } from './styles'

interface Props {
  name: string
  channels: any[]
}

const Guild: React.SFC<Props & RouteProps> = ({ name, channels }) => (
  <Wrapper>
    <GuildName>{name}</GuildName>
    {channels.map(el => <ChannelContainer name={el.name} id={el.id} key={el.id} />)}
  </Wrapper>
)

export default Guild