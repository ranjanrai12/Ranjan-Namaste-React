import { IMG_URL } from "../../Utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img src={IMG_URL + cloudinaryImageId} />
      <div className="card-details">
        <h3 className="res-card-name">{name}</h3>
        <div className="res-meta">
          <span className="res-card-ratings">{avgRating} </span>
          <span className="res-card-time">{deliveryTime} min</span>
          <span className="res-card-cost">{costForTwo / 100}RS For Two</span>
        </div>
        <div className="res-card-cuisines">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

export default ResturantCard;
