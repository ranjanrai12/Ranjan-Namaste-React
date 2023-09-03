import { useState } from "react";
import { IMG_URL } from "../../Utils/constant";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const MenuItemCards = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { cards } = props;

  const toggleAccordian = () => {
    setIsExpanded(!isExpanded);
  };

  // return <div>{cards.itemCards[0].card.info.name}</div>;
  return (
    <div>
      <div
        className=" p-2 rounded-lg flex justify-between cursor-pointer bg-gray-200 items-center text-lg font-medium"
        onClick={toggleAccordian}
      >
        <header>{cards.title + "-" + cards.itemCards.length}</header>
        <span>{isExpanded ? <BsChevronDown /> : <BsChevronUp />}</span>
      </div>
      {isExpanded && (
        <div className="">
          {cards.itemCards.map((item) => {
            return (
              <div className="flex justify-between p-1" key={item.card.info.id}>
                <div className="flex flex-col gap-2">
                  <h3 className="flex gap-2 font-medium">
                    <span>{item?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}</span>
                    {item?.card?.info?.name}
                  </h3>
                  <div className="ml-8">{item?.card?.info?.price / 100} Rs</div>
                </div>
                <div className="relative">
                  <img
                    className="w-[120px] h-[95px]"
                    src={IMG_URL + "/" + item?.card?.info?.imageId}
                  />
                  <button className="absolute bg-emerald-400 rounded-lg p-1 translate-x-[50%]  bottom-0">
                    Add +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default MenuItemCards;
