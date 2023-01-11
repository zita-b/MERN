import Wrapper from "../assets/wrappers/Navbar"
import { NavLink } from "react-router-dom"
import links from "../utils/links"

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link

        return (
          <NavLink
            to={path}
            end
            className={({ isActive }) => 
              isActive? 'nav-link-active' : 'nav-link'
            }
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks