import { useEffect, useState } from "react";
// import resturantList from "../../Utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "../Components/Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  // useEffect used to fetch the data from api response
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const topBrandRestaurant = json.data.cards.find(
        (res) => res.card.card.id === "top_brands_for_you"
      );
      // console.log(topBrandRestaurant);
      // original RestaurantList data
      setRestaurantList(
        topBrandRestaurant.card.card.gridElements.infoWithStyle.restaurants
      );
      console.log(restaurantList);
      // copy of original RestaurantList data
      setFilterRestaurantList(
        topBrandRestaurant.card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  // filter restaurant which has avgRating greater than 4
  filterListOfTopRestaurant = () => {
    const topRestaurant = restaurantList.filter(
      (list) => list.info.avgRating > 4
    );
    setFilterRestaurantList(topRestaurant);
  };

  // input change handler
  onInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // search restaurant based on input value
  onSearchRestaurant = () => {
    const filterRestaurant = restaurantList.filter((item) => {
      return item.info.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilterRestaurantList(filterRestaurant);
  };

  // conditional rendering
  return !restaurantList.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="input-container">
        <button
          onClick={filterListOfTopRestaurant}
          style={{ background: "rgba(3, 1689, 244, 1)" }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          placeholder="Search for restaurants and food"
          value={searchValue}
          onInput={onInputChange}
        />
        <button onClick={onSearchRestaurant}>Search</button>
      </div>
      <div className="res-container">
        {filterRestaurantList.map((resturant) => {
          return <ResturantCard key={resturant.info.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
