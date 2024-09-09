import { CDN_URL } from "../utils/constants"; //named import for a named export
import { Link } from "react-router-dom";
const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    console.log("props", props);
    const { resData } = props;
    console.log("resData", resData);
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
    return (
        <div className="restaurant-card" style={styleCard}>
            <img alttext="restaurantImage" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
            <Link to="/restaurants/:resId"></Link>
        </div>
    )
};

export default RestaurantCard;