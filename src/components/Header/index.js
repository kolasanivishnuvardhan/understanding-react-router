import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about"  className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </ul>
    </div>
  </nav>
)

export default Header
