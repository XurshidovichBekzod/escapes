import { TRAVEL } from "../static"
import "./travel.css"

function Travel() {
  return (
    <section className="container">
        <div className="travelText">
           {TRAVEL.map((text, k) => (
              <p key={k}>
                <a href="#">{text}</a>
              </p>
           ))}
        </div>
    </section>
  )
}

export default Travel