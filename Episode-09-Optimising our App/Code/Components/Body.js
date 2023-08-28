import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import resturantList from "../../Utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "../Components/Shimmer";
import useResData from "../../Hooks/useResData";

const Body = () => {
  const [restaurantList, filterRestaurantList] = useResData();

  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  if (!restaurantList) return null;

  // filter restaurant which has avgRating greater than 4
  filterListOfTopRestaurant = () => {
    const topRestaurant = restaurantList.filter(
      (list) => list.info.avgRating > 4
    );
    setfilteredRestaurants(topRestaurant);
  };

  // input change handler
  onInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // search restaurant based on input value
  onSearchRestaurant = (searchText) => {
    const filterRestaurant = restaurantList.filter((item) => {
      return item.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredRestaurants(filterRestaurant);
  };

  // conditional rendering
  return !restaurantList.length && !filterRestaurantList.length ? (
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
          onChange={(e) => {
            setSearchValue(e.target.value);
            onSearchRestaurant(e.target.value);
          }}
        />
        <button
          className="search-restaurant"
          onClick={() => onSearchRestaurant(searchValue)}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {(!filteredRestaurants.length
          ? filterRestaurantList
          : filteredRestaurants
        ).map((resturant) => {
          return (
            <Link
              key={resturant.info.id}
              to={"restaurants/" + resturant.info.id}
            >
              <ResturantCard resData={resturant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
