import { useState } from "react";
import { IMG_URL } from "../../Utils/constant";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import MenuItemCards from "./MenuItemCards";
import useRestaurantMenu from "../../Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurants, menuItems] = useRestaurantMenu(resId);
  const [menuItemsCopy, setmenuItemsCopy] = useState(menuItems);

  function vegOnly(event) {
    // if (event.target.checked) {
    //   let arr = [];
    //   // menuItems.map((card) => {
    //   //   card.card.card.itemCards.filter(
    //   //     (card) => card.card.info.isVeg === 1
    //   //   );
    //   // })
    //   for (let item of menuItemsCopy) {
    //     const vegOnly = item.card.card.itemCards.filter(
    //       (card) => card.card.info.isVeg === 1
    //     );
    //     item.card.card.itemCards = vegOnly;
    //     arr.push(item);
    //   }
    //   setmenuItemsCopy(arr);
    // } else {
    //   setmenuItemsCopy(menuItems);
    // }
  }

  return !restaurants ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu-container bg-gray-100">
      <div className="flex gap-2 py-2 pl-52">
        <img
          className="w-52 h-42"
          src={IMG_URL + "/" + restaurants.cloudinaryImageId}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-lg">{restaurants.name}</h2>
          <p>{restaurants.cuisines.join(", ")}</p>
          <span className="flex gap-2 items-center self-end flex-1">
            <h5
              className="rounded-lg p-1"
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
      <div className="flex items-center gap-2 px-52 my-2">
        <label>Veg</label>
        <input type="checkbox" className="rounded-lg" onChange={vegOnly} />
      </div>
      <div className="restaurant-menu-items flex flex-col gap-1 px-52 my-2">
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
