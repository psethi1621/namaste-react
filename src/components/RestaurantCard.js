import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const resData = props.resData;
    console.log("resData", resData);
    return (
    <div className="p-4 m-4 w-[200px] min-w-[200px] bg-slate-100 hover:bg-slate-400 rounded-2xl">
      <Link to={"/restaurant/"+resData.info.id}>
        <img
          alt="Restaurant Logo"
          className="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
        <h3 className="font-bold text-lg py-2">{resData.info.name}</h3>
        <div>{resData.info.cuisines.join(", ")}</div>
        <div>{resData.info.avgRating} stars</div>
        <div>{resData.info.sla.deliveryTime} minutes</div>
      </Link>
    </div>
    );
}

export const withPromotedLabel = (RestaurantCard) => {

    return (props) => <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
    </>
}

export default RestaurantCard;