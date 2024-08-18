import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsfeedCard = (props) => {
  const { data } = props;
  const { date, excerpt, thumbnail, title } = data;
  const dateSlice = date.slice(0, 10);
  const timeSlice = date.slice(11, 16);
  return (
    <div className="cards-container">
      <li className="card main-card" style={{ width: "25rem" }}>
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="date">
              {dateSlice} {timeSlice}
            </p>
          </div>
          <p className="card-text">{excerpt}</p>
        </div>
      </li>
    </div>
  );
};

export default NewsfeedCard;
