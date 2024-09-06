import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("categories", categories);
  return (
    <div className="menu m-auto w-6/12 bg-gray-400 rounded-xl p-4">
      <div className="m-4 p-4 bg-gray-300 rounded-xl">
        <h1 className="font-bold text-center">{name}</h1>
        <h2 className="font-bold text-center">Menu</h2>
        <p className="font-bold text-center">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      {categories.map((category, index) => (
        // Controlled component
        <RestaurantCategory
          itemCards={category?.card?.card?.itemCards}
          title={category?.card?.card?.title}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
