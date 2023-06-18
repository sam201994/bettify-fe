import { useState, useContext } from 'react'
import Link from 'next/link'

import { BaseContext } from 'src/context/BaseContext'
import { colors } from 'src/utils/colors'
import { ExpandMoreIcon, ExpandLessIcon } from 'src/components/Icons'
import Typography from 'src/components/Typography'
import NameAddress from 'src/components/NameAddress'
import { HeaderWrapper, ConnectWrapper } from './styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Header = () => {
  const { connect, connecting, account, disconnect, wallet } =
    useContext(BaseContext)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    // disconnect()
    setAnchorEl(null)
  }

  if (connecting) {
    return (
      <HeaderWrapper>
        <ConnectWrapper>
          <Typography type="p12" color="lightGrey">
            connecting...
          </Typography>
        </ConnectWrapper>
      </HeaderWrapper>
    )
  }
  if (wallet) {
    return (
      <div>
        <HeaderWrapper onClick={handleClick}>
          <ConnectWrapper>
            <NameAddress imgSize={18} textSize="p12" address={account} />
            {open ? (
              <ExpandLessIcon sx={{ color: colors.lightGrey }} size="12" />
            ) : (
              <ExpandMoreIcon sx={{ color: colors.lightGrey }} size="12" />
            )}
          </ConnectWrapper>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              sx={{
                backgroundColor: `${colors.secondary}`,
                color: `${colors.secondary}`,
              }}
              onClick={handleClose}
            >
              Disconnect
            </MenuItem>
          </Menu>
        </HeaderWrapper>
      </div>
    )
  }
  return (
    <HeaderWrapper onClick={() => connect()}>
      <ConnectWrapper>
        <Typography type="p12" color="lightGrey">
          Connect Wallet
        </Typography>
      </ConnectWrapper>
    </HeaderWrapper>
  )
}

export default Header
