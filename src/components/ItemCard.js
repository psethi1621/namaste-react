import React from "react";
import CDN_URL from "../utils/constants";

const ItemCard = ({ item }) => {
//   console.log(item);
  return (
    <div className="h-auto bg-gray-200 shadow-sm rounded-lg m-4 p-4 flex justify-between">
      <div className="w-9/12">
        <div className="font-semibold w-full">{item?.card?.info?.name} - Rs. {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</div>
        <span className="text-xs">{item?.card?.info?.description}</span>
      </div>
      <div className="w-3/12 h-full">
        <img src={CDN_URL + item?.card?.info?.imageId} alt="Food image" className="m-2 p-2 w-full h-full"/>
      </div>
    </div>
  );
};

export default ItemCard;
