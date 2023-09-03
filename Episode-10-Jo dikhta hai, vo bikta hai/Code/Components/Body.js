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
      <div className="flex items-center justify-center p-2 m-2 gap-4">
        <button
          onClick={filterListOfTopRestaurant}
          className="bg-blue-400 p-1 rounded-lg hover:bg-blue-600"
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          className="w-[25rem] p-1 rounded-lg border-[1px] border-black"
          placeholder="Search for restaurants and food"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onSearchRestaurant(e.target.value);
          }}
        />
        <button
          className="bg-blue-400 p-1 rounded-lg hover:bg-blue-600"
          onClick={() => onSearchRestaurant(searchValue)}
        >
          Search
        </button>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
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
