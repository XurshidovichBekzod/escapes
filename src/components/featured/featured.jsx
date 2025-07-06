import "./featured.css"
import { FEATURED } from "../static"

const Featured = () => {
  return (
    <>
    <div>
        <h2 className="h2">Featured Posts</h2>
        <hr />
    </div>
    <div className="featured-grid">
      {FEATURED.map((item) => (
        <article key={item.id} className="featured-card" style={{ backgroundImage: `url("${item.imgBackround}")` }} >
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
          <div className="card-footer">
            <div className="author-info">
              <img src={item.img} alt="" className="author-img" />
              <span>{item.name}</span>
            </div>
            <p className="date">{item.data}</p>
          </div>
        </article>
      ))}
    </div>
    </>
  );
};


export default Featured