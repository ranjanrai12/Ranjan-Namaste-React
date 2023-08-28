import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../Utils/constant";

const useResData = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  });

  async function fetchRestaurantData() {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const topBrandRestaurant = json.data.cards.find(
        (res) => res.card.card.id === "top_brands_for_you"
      );
      setRestaurantList(
        topBrandRestaurant.card.card.gridElements.infoWithStyle.restaurants
      );
      setFilterRestaurantList(
        topBrandRestaurant.card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (e) {
      console.log("Error: " + e);
    }
  }
  return [restaurantList, filterRestaurantList];
};

export default useResData;
