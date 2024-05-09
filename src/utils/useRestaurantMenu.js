import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
    // fetch data
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

  return resInfo;
};

export default useRestaurantMenu;
