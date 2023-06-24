import Link from 'next/link'

import {
  SpaceDashboardIcon,
  BorderColorIcon,
  GamesIcon,
} from 'src/components/Icons'
import { SidebarWrapper, MenuWrapper, MenuItemWrapper } from './styles'
import { colors } from 'src/utils/colors'

const Sidebar = () => {
  const customStyles = {
    color: colors.white,
    '&:hover': { color: colors.lightGrey },
  }

  return (
    <SidebarWrapper>
      <MenuWrapper>
        <MenuItemWrapper>
          <Link href="/">
            <SpaceDashboardIcon sx={customStyles} />
          </Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Link href="/bets">
            <GamesIcon sx={customStyles} />
          </Link>
        </MenuItemWrapper>
     {/*   <MenuItemWrapper>
          <Link href="/create">
            <BorderColorIcon sx={customStyles} />
          </Link>
        </MenuItemWrapper>*/}
      </MenuWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar
