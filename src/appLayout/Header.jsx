import Link from 'next/link'
import { HeaderWrapper } from './styles'
import NameAddress from 'src/components/NameAddress'
import { useContext } from 'react'
import { BaseContext } from 'src/context/BaseContext'
import { ExpandMoreIcon, ExpandLessIcon } from 'src/components/Icons'
import { colors } from 'src/utils/colors'
import { useState } from 'react'
import Typography from 'src/components/Typography'

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
