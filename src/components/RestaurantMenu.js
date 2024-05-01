import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
    console.log(resInfo);
  }, []);

  fetchMenu = async () => {
    console.log(MENU_URL + resId);
    const data = await fetch(MENU_URL + resId);
    obj = await data.json();
    setResInfo(obj?.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Name: {resInfo?.cards[2].card?.card?.info?.name}</h1>
      <h2>Restaurant Id: {resInfo?.cards[2].card?.card?.info?.id}</h2>
      <h2>Menu</h2>
      <ul>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => {
        return <li key={item?.card?.info?.id}>{item?.card?.info?.name +"- Rs."+item?.card?.info?.price/100 }</li>
      })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
