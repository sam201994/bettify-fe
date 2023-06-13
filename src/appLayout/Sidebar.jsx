import Link from 'next/link'
import { SidebarWrapper } from './styles'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/bets">
              <div>Bets</div>
            </Link>
          </li>
          <li>
            <Link href="/creat">
              <div>Create Bet</div>
            </Link>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  )
}

export default Sidebar
