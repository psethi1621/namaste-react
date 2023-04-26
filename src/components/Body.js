import { useState } from "react";
import CDN_URL  from "../utils/constants";
import cardObj from "../utils/MockData";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  const resData = props.resData;



  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res logo"
        className="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      ></img>
      <h3>{resData.data.name}</h3>
      <div>{resData.data.cuisines.join(", ")}</div>
      <div>{resData.data.avgRating} stars</div>
      <div>{resData.data.sla.deliveryTime} minutes</div>
    </div>
  );
};

const RestaurantCardContainer = (props) => {
  const cardsData = props.cardsData;
  // console.log(resObj);
  // React dont recommend index as key, best thing is to use unique key as id
  const cardContainer = cardsData.map((resObj, i) => (
    <RestaurantCard resData={resObj} key={i} />
  ));
  return <div className="res-container">{cardContainer}</div>;
};

const Body = () => {

    let [listOfRestaurants, setListOfRestaurants] = useState(cardObj);


  return (
    <>
      <div className="body">
        <div className="filter">
            <button className="top-rated-btn" onClick={()=> {
                // Onclick filter
                listOfRestaurants = listOfRestaurants.filter((res) => (res.data.avgRating > 4) );
                setListOfRestaurants(listOfRestaurants);
            }}>Top rated restaurant</button>
        </div>
        <RestaurantCardContainer cardsData={listOfRestaurants} />
      </div>
    </>
  );
};

export default Body;
