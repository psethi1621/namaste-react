import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <div>
                Image : 
                <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            /></div>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;