import Sidebar from './Sidebar'
import Header from './Header'
import { MainWrapper } from './styles'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
    </div>
  )
}

export default Layout
