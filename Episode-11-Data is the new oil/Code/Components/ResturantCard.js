import { useContext } from "react";
import { IMG_URL } from "../../Utils/constant";
import { AiFillStar } from "react-icons/ai";
import UserContext from "../../Context/UserContext";

const ResturantCard = (props) => {
  const { resData } = props;
  const { userName } = useContext(UserContext);

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
    <div className="shadow-lg w-52 p-2 hover:scale-95 transform transition-transform duration-800 ease-in-out">
      <img
        src={IMG_URL + cloudinaryImageId}
        className="object-contain w-full"
      />
      <h3 className="text-lg font-medium my-1 truncate" title={name}>
        {name}
      </h3>
      <h5 className="truncate" title={cuisines.join(", ")}>
        {cuisines.join(", ")}{" "}
      </h5>
      <h5 className="my-1">{areaName}</h5>
      <span className="flex justify-between items-center">
        <div
          className="flex items-center gap-2 p-1 rounded-lg"
          style={
            avgRating < 4 ? { background: "red" } : { background: "lightgreen" }
          }
        >
          <AiFillStar />
          {avgRating}
        </div>
        <h4>{deliveryTime}</h4>
        <h4>{costForTwo ? costForTwo : "₹200 for two"}</h4>
        <h5>{userName}</h5>
      </span>
      <div className="card-details"></div>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 rounded-lg m-2 bg-black text-white z-1">
          Promoted
        </label>
        <ResturantCard resData={props.resData} />
      </div>
    );
  };
};

export default ResturantCard;
