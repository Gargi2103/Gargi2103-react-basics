import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

 
const Body = () => {

    // State Variable - super powerful variable
    const [resList, setResList] = useState([]); // removed the mock data
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    console.log("resList", resList);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        
        const json = await data.json(); // wait for the data to respond then convert in json
        
        console.log("JSON", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //Optional chaining
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    /* //conditional rendering - rendering based on a condition
    if (resList.length === 0) {
        return (
            <Shimmer />
        ) 
    } */

    return resList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button className="button"
                        onClick={() => { 
                            const restaurantsAfterFilter = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurant(restaurantsAfterFilter);
                            console.log("filteredRestaurant", restaurantsAfterFilter);
                        }}>
                        Search Button
                    </button>
                </div>
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
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )
};

export default Body;