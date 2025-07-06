import logo from "../assets/Escape.svg"
import { HEADER } from "../static"

import "./header.css"

const Header = () => {
  return (
    <header className="header">
        <nav className="container navbar">
            <div className="navLogo">
              <img src={logo} alt="" />
            </div>
            <ul className="navCollection">
                {HEADER.map((text, k) => (
                  <li key={k}>
                    <a href="#">{text}</a>
                  </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header