import React from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ title, itemCards, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="category_container bg-gray-400">
      <div
        className="category_header font-bold bg-gray-300 border-b-2 flex justify-between m-4 p-4 rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        <div>
          {title}({itemCards.length})
        </div>
        <div>⬇</div>
      </div>
      {showItems && (
        <div className="category_list">
          {itemCards.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
