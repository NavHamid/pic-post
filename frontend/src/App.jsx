import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <div className="app-shell">
        <div className="bg-orb orb-one" aria-hidden="true" />
        <div className="bg-orb orb-two" aria-hidden="true" />

        <header className="topbar">
          <div>
            <p className="brand-kicker">Vision Board</p>
            <h1 className="brand-title">Hamid Ansiar UI</h1>
          </div>

          <nav className="topbar-nav">
            <NavLink to="/feed" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Feed
            </NavLink>
            <NavLink to="/create-post" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Create Post
            </NavLink>
          </nav>
        </header>

        <main className="page-wrap">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App