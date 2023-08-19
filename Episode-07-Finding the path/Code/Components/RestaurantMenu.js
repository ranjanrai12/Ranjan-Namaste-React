import { useEffect, useState } from "react";
import {
  IMG_URL,
  SWIGGY_MENU_API_URL,
  RESTAURANT_INFO,
  RESTAURANT_ITEM_CATEGORY,
} from "../../Utils/constant";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import MenuItemCards from "./MenuItemCards";

const RestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const { resId } = useParams();

  useEffect(() => {
    getMenuDetails();
  }, []);

  const getMenuDetails = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);
    const json = await data.json();
    const restaurantInfo = json?.data?.cards
      ?.map((restaurant) => restaurant.card)
      ?.find((item) => item?.card["@type"] === RESTAURANT_INFO)?.card?.info;
    console.log(restaurantInfo);
    console.log("menu json", json);
    setRestaurants(restaurantInfo);

    const mapMenuItems = json?.data?.cards
      .find((restaurant) => restaurant?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => item?.card?.card["@type"] === RESTAURANT_ITEM_CATEGORY
      );
    setMenuItems(mapMenuItems);
    console.log("menuItems", mapMenuItems);
  };

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

        {/*<div className="menu-title" onClick={() => setIsActive(!isActive)}>
            <div>{card.card.card.title}</div>
            <div>{isActive ? "-" : "+"}</div>
        </div>*/}

        {/*menuItems[0].card.card.itemCards.map((item) => {
          return <div key={item.card.info.id}>{item.card.info.name}</div>;
        })*/}
      </div>
    </div>
  );
};

export default RestaurantMenu;
