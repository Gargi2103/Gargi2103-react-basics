import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [restaurantMenuDetails, setRestaurantMenuDetails] = useState(null);

    console.log("restaurantMenuDetails", restaurantMenuDetails);

    const { resId } = useParams();
    console.log("resId", resId);
    useEffect(() => {
        console.log("useEffect called from Restaurant Menu");
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=405798&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        console.log("RestaurantMenu API call", json.data);
        setRestaurantMenuDetails(json.data);
    }

    if (restaurantMenuDetails === null) return <Shimmer />;
    
    console.log("restaurantMenuDetails called after if", restaurantMenuDetails);
    const { name, cloudinaryImageId, cuisines, costForTwoMessage } = restaurantMenuDetails?.cards[2]?.card?.card?.info;
    
    //const { title, categories } = restaurantMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log("categories", categories);

    const { title, itemCards } = restaurantMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <img src={CDN_URL + cloudinaryImageId} />
            <p>{cuisines.join(", ")} {"-"} {costForTwoMessage}</p>
            <ul className="listHeading">
                {title }
                {/* {categories.map((item, index) => <li key={index}>{item.title}</li>)} */}
                {itemCards.map((item, index) => <li className="list" key={index}>{item?.card?.info?.name}</li>)}
                       
            </ul>
           
        </div>
    );
};

export default RestaurantMenu;