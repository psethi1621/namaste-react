import React, {useState} from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ title, itemCards }) => {
    // console.log(title);
    // console.log(itemCards);
  const [toggleList, setToggleList] = useState(false);

  const listToggler = () => {
      setToggleList(!toggleList);
  }

  return (
    <div className="category_container bg-gray-400">
      <div className="category_header font-bold bg-gray-300 border-b-2 flex justify-between m-4 p-4 rounded-xl cursor-pointer" onClick={listToggler}>
        <div>
          {title}({itemCards.length})
        </div>
        <div>⬇</div>
      </div>
      {toggleList && <div className="category_list">
        {itemCards.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>}
    </div>
  );
};

export default RestaurantCategory;
