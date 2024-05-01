import { useEffect, useState } from "react";
import CDN_URL, {LIST_URL} from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const resData = props.resData;
  const resId = "601724";

  return (
    <div className="p-4 m-4 w-[200px] min-w-[200px] bg-slate-100 hover:bg-slate-300 rounded-2xl">
      <Link to={"/restaurant/"+resData.info.id}>
        <img
          alt="res logo"
          className="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
        <h3>{resData.info.name}</h3>
        <div>{resData.info.cuisines.join(", ")}</div>
        <div>{resData.info.avgRating} stars</div>
        <div>{resData.info.sla.deliveryTime} minutes</div>
      </Link>
    </div>
  );
};

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
              className="border border-solid border-black"
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
