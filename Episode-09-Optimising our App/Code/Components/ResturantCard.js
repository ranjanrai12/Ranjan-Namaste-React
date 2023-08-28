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
    areaName,
  } = resData?.info;
  return (
    <div className="res-card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h3 className="res-card-name">{name}</h3>
      <h5>{cuisines.join(", ")} </h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRating < 4 ? { background: "red" } : { background: "lightgreen" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{deliveryTime}</h4>
        <h4>{costForTwo ? costForTwo : "₹200 for two"}</h4>
      </span>
      <div className="card-details"></div>
    </div>
  );
};

export default ResturantCard;
