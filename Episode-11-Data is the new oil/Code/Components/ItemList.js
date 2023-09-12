import { IMG_URL } from "../../Utils/constant";

const ItemList = (props) => {
  return (
    <div className="">
      {props.cards.itemCards.map((item) => {
        return (
          <div className="flex justify-between p-1" key={item.card.info.id}>
            <div className="flex flex-col gap-2">
              <h3 className="flex gap-2 font-medium">
                <span>{item?.card?.info?.isVeg === 1 ? "🟢" : "🔴"}</span>
                {item?.card?.info?.name}
              </h3>
              <div className="ml-8">
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}{" "}
                Rs
              </div>
            </div>
            <div className="relative">
              <img
                className="w-[120px] h-[95px]"
                src={IMG_URL + "/" + item?.card?.info?.imageId}
              />
              <button className="absolute bg-gray-50 text-black shadow-lg rounded-lg p-1 translate-x-[50%]  bottom-0">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
