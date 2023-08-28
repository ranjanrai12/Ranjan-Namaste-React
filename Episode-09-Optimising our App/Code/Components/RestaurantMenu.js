import { IMG_URL } from "../../Utils/constant";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import MenuItemCards from "./MenuItemCards";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurants, menuItems] = useRestaurantMenu(resId);

  return !restaurants ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-details">
        <img src={IMG_URL + "/" + restaurants.cloudinaryImageId} />
        <div className="resturant-details-container">
          <h2>{restaurants.name}</h2>
          <p>{restaurants.cuisines.join(", ")}</p>
          <span className="restaurant-info">
            <h5
              className="rating"
              style={
                restaurants.avgRating < 4
                  ? { background: "red" }
                  : { background: "green" }
              }
            >
              {restaurants.avgRating}
            </h5>
            |
            <h5>
              {restaurants.areaName}, {restaurants.locality} |
            </h5>
            <h5>{restaurants.costForTwoMessage}</h5> |
            <h5>{restaurants.sla.slaString}</h5>
          </span>
        </div>
      </div>
      <div className="restaurant-menu-items">
        {menuItems.map((card) => {
          console.log(menuItems);
          return (
            <MenuItemCards key={card.card.card.title} cards={card.card.card} />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
