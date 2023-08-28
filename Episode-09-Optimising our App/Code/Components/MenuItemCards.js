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
  console.log(cards);
  return (
    <div>
      <div className="item-header-title" onClick={toggleAccordian}>
        <header>{cards.title + "-" + cards.itemCards.length}</header>
        <span>{isExpanded ? <BsChevronDown /> : <BsChevronUp />}</span>
      </div>
      {isExpanded && (
        <div className="accordian-content">
          {cards.itemCards.map((item) => {
            console.log(item.card.info);
            return (
              <div className="item-card-wrapper" key={item.card.info.id}>
                <div className="details-container">
                  <div className="info-icon">
                    {item?.card?.info?.itemAttribute?.vegClassifier}
                  </div>
                  <h3 className="info-name">{item?.card?.info?.name}</h3>
                  <span className="info-price">
                    {item?.card?.info?.price / 100} Rs
                  </span>
                </div>
                <div className="item-image-container">
                  <img src={IMG_URL + "/" + item?.card?.info?.imageId} />
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
