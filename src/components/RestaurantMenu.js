import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Name: {resInfo?.cards[2].card?.card?.info?.name}</h1>
      <h2>Restaurant Id: {resInfo?.cards[2].card?.card?.info?.id}</h2>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item) => {
            console.log(item);
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name +
                  "- Rs." +
                  item?.card?.info?.price / 100}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
