import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

 
const Body = () => {

    // State Variable - super powerful variable
    const [resList, setResList] = useState(restaurantList); //restaurantList: comes from mock data
    
    console.log("resList", resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter(
                        (res) => {return res.info.avgRating > 4 } // we can also write as (res) => res.info.avgRating > 4
                    );
                    console.log("filteredList",filteredList);
                    setResList(filteredList);
                }}
                >
                    Top Rated Restaurants

                </button>
            </div>
            <div className="restaurant-container">
                {resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
};

export default Body;