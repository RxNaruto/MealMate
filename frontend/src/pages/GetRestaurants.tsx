
import { useState } from "react";
import { useGetRestaurants } from "../hooks/getRestaurants";
import { useSearchRes } from "../hooks/searchRes";
import { SearchBarComponent } from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";

export const GetRestaurant=()=>{
    
    const [query,setQuery]=useState("");
    const {restaurant: searchedRest} = useSearchRes(query);
    const{restaurant: allRest} = useGetRestaurants();
   
    const restToRender = query.trim()===""?allRest:searchedRest;

    return(
        <div className="p-2">
            <SearchBarComponent query={query} setQuery={setQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restToRender.map((ri)=>(
            <div key={ri.id} className="bg-amber-200 rounded shadow justify-items-center">
                <RestaurantCard id={ri.id} name={ri.name} address={ri.address} contact={ri.contact}/>
               
            </div>
        ))}
      </div>
    </div>
    )
}