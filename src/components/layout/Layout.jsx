import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout 