import Sidebar from './Sidebar'
import { MainWrapper } from './styles'
import Header from './Header'

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
