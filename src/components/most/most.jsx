import './most.css'
import { MOST } from '../static'

function Most() {
  return (
    <>
    <div>
        <h2 className="h2">Most Recent</h2>
        <hr />
    </div>
    <section className='containers flex'>
        {MOST.map((text) =>(
          <div key={text.id} className='mostCard'>
            <img src={text.imge} alt="" />
            <h3>{text.title}</h3>
            <p>{text.texts}</p>   
            <hr/>
            <div className='mostFelex'>
              <div className='dFelx'>
                <img src={text.user } alt="" />
                <p>{text.name}</p>
              </div>
              <div>
                <p>{text.date}</p>
              </div>
            </div>         
          </div>
        ))}
        <br /><br />
    </section>
    </>
  )
}

export default Most