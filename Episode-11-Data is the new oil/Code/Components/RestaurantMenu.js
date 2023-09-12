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
  const [showIndex, setShowIndex] = useState(0);

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

  const itemListVisibility = (p) => {
    console.log("Hello", p);
  };

  return !restaurants ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu-container bg-gray-100">
      <div className="flex gap-2 py-2 w-6/12 mx-auto">
        <img
          className="w-52 h-42"
          src={IMG_URL + "/" + restaurants.cloudinaryImageId}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-lg">{restaurants.name}</h2>
          <p>{restaurants.cuisines.join(", ")}</p>
          <span className="flex gap-1 items-center self-end flex-1">
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
      <div className="w-6/12 mx-auto flex items-center gap-2 my-2">
        <label>Veg</label>
        <input type="checkbox" className="rounded-lg" onChange={vegOnly} />
      </div>
      {menuItems.map((card, index) => {
        console.log(menuItems);
        return (
          <MenuItemCards
            key={card.card.card.title}
            cards={card.card.card}
            setShowIndex={() => {
              setShowIndex(index);
            }}
            showItems={index === showIndex && true}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
