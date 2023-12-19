import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import ItemList from "./ItemList";

const MenuItemCards = ({ cards, showItems, setShowIndex }) => {
  return (
    <div className="w-6/12 mx-auto ">
      <div
        onClick={setShowIndex}
        className="my-4 p-2 rounded-lg flex justify-between cursor-pointer bg-gray-200 items-center text-lg font-medium"
      >
        <header>
          {cards.title} ({cards.itemCards.length})
        </header>
        <span>{showItems ? <BsChevronDown /> : <BsChevronUp />}</span>
      </div>
      {showItems && <ItemList cards={cards.itemCards} />}
    </div>
  );
};
export default MenuItemCards;
