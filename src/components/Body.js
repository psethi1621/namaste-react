import { useEffect, useState } from "react";
import {LIST_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardContainer = (props) => {
  const cardsData = props.cardsData;
  const cardContainer = cardsData.map((resObj, i) => (
    <RestaurantCard resData={resObj} key={i} />
  ));
  return <div className="flex flex-wrap">{cardContainer}</div>;
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] =
    useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      LIST_URL
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchButtonHandler = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredRestaurants);
  };

  const topRatedRestaurantsButtonHandler = () => {
    // Onclick filter
    filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    setFilteredListOfRestaurants(filteredRestaurants);
  };

  return listOfRestaurants.length > 0 ? (
    <>
      <div className="body">
        <div className="flex">
          <div id="search" className="">
            <input 
              className="border border-solid border-black rounded-2xl mx-4"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="border border-solid bg-green-200 px-4 rounded-2xl mx-4" onClick={searchButtonHandler}>
              Search
            </button>
          </div>
          <button
            className="border border-solid bg-green-200 px-4 rounded-2xl mx-4"
            onClick={topRatedRestaurantsButtonHandler}
          >
            Top rated restaurant
          </button>
        </div>
        <RestaurantCardContainer cardsData={filteredListOfRestaurants} />
      </div>
    </>
  ) : (
    <Shimmer />
  );
};

export default Body;
