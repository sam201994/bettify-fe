import { useState, useContext } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { BaseContext } from 'src/context/BaseContext'
import { colors } from 'src/utils/colors'
import { ExpandMoreIcon, ExpandLessIcon } from 'src/components/Icons'
import Typography from 'src/components/Typography'
import NameAddress from 'src/components/NameAddress'
import { HeaderWrapper, ConnectWrapper } from './styles'

const Header = () => {
  const { connect, connecting, account, disconnect, wallet } =
    useContext(BaseContext)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDisconnect = async () => {
    await disconnect(wallet)
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
      <HeaderWrapper>
        <ConnectWrapper
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <NameAddress
            isOnClick={false}
            imgSize={18}
            textSize="p12"
            address={account}
          />
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
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: colors.secondary,
              borderRadius: '8px',
            },
            '& .MuiList-root': {
              padding: '0',
            },
          }}
        >
          <MenuItem
            sx={{
              '&:hover': {
                backgroundColor: colors.lightBlack,
              },
              backgroundColor: 'inherit',
              color: colors.lightGrey,
              fontSize: '14px',
              // color: 'inherit' when selected
              "&[aria-selected='true']": {
                backgroundColor: 'inherit',
                color: 'inherit',
              },
            }}
            onClick={handleDisconnect}
          >
            Disconnect
          </MenuItem>
        </Menu>
      </HeaderWrapper>
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
