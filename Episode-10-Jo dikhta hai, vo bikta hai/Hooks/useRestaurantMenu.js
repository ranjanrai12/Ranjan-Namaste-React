import { useEffect, useState } from "react";
import {
  SWIGGY_MENU_API_URL,
  RESTAURANT_INFO,
  RESTAURANT_ITEM_CATEGORY,
} from "../Utils/constant";

const useRestaurantMenu = (resId) => {
  const [restaurants, setRestaurants] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(SWIGGY_MENU_API_URL + resId);
      const json = await data.json();
      const restaurantInfo = json?.data?.cards
        ?.map((restaurant) => restaurant.card)
        ?.find((item) => item?.card["@type"] === RESTAURANT_INFO)?.card?.info;
      setRestaurants(restaurantInfo);

      const mapMenuItems = json?.data?.cards
        .find((restaurant) => restaurant?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (item) => item?.card?.card["@type"] === RESTAURANT_ITEM_CATEGORY
        );
      setMenuItems(mapMenuItems);
    } catch (e) {
      console.log("Error: " + e);
    }
  }

  return [restaurants, menuItems];
};

export default useRestaurantMenu;
