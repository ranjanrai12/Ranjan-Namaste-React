import { useState } from "react";
import resturantList from "../../Utils/mockData";
import ResturantCard from "./ResturantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resturantList);
  const [searchValue, setSearchValue] = useState("");

  filterList = () => {
    return restaurantList.filter((list) => list.data.avgRating > 4);
  };
  onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="body">
      <div className="input-container">
        <button
          onClick={() => setRestaurantList(filterList)}
          style={{ background: "rgba(3, 1689, 244, 1)", cursor: "pointer" }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          placeholder="Search for restaurants and food"
          onInput={onSearch}
        />
      </div>
      <div className="res-container">
        {restaurantList.map((resturant) => {
          return <ResturantCard key={resturant.data.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
