import "./footer.css"
import logo from "../assets/Escape.svg"
import { HEADER } from "../static"

const Footer = () => {
  return (
    <section>
    <div className="footerText">
        <h2 className="h2">Stay in Touch</h2>
        <hr/>
    </div>
    <div className="search">
        <input type="text"/>
        <button>Submit</button>
    </div>
    <div className="footer">
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
    </div>
    </section>
  )
}

export default Footer