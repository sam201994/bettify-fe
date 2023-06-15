import Link from 'next/link'

import {
  SpaceDashboardIcon,
  BorderColorIcon,
  GamesIcon,
} from 'src/components/Icons'
import { IconButon } from 'src/components/Button'
import { SidebarWrapper, MenuWrapper, MenuItemWrapper } from './styles'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <MenuWrapper>
        <MenuItemWrapper>
          <Link href="/">
            <SpaceDashboardIcon sx={{ color: '#FFFFFF' }} />
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/bets">
            <GamesIcon sx={{ color: '#FFFFFF' }} />
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/create">
            <BorderColorIcon sx={{ color: '#FFFFFF' }} />
          </Link>
        </MenuItemWrapper>
      </MenuWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar
