import { useState, useContext } from 'react'
import Link from 'next/link'

import { BaseContext } from 'src/context/BaseContext'
import { colors } from 'src/utils/colors'
import { ExpandMoreIcon, ExpandLessIcon } from 'src/components/Icons'
import Typography from 'src/components/Typography'
import NameAddress from 'src/components/NameAddress'
import { HeaderWrapper } from './styles'

const Header = () => {
  const { connect, connecting, account, disconnect, wallet } =
    useContext(BaseContext)
  const [expand, setExpand] = useState(false)
  if (connecting) {
    return (
      <HeaderWrapper>
        <Typography type="p12" color="white">
          connecting...
        </Typography>
      </HeaderWrapper>
    )
  }
  if (wallet) {
    return (
      <HeaderWrapper>
        <NameAddress imgSize={18} textSize="p12" address={''} />
        <ExpandLessIcon sx={{ color: colors.white }} size="12" />
      </HeaderWrapper>
    )
  }
  return (
    <HeaderWrapper onClick={() => connect()}>
      <Typography type="p12" color="white">
        Connect Wallet
      </Typography>
    </HeaderWrapper>
  )
}

export default Header
