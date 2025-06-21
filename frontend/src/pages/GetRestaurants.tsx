
import { useState } from "react";
import { useGetRestaurants } from "../hooks/getRestaurants";
import { useSearchRes } from "../hooks/searchRes";
import { SearchBarComponent } from "../components/SearchBar";

export const GetRestaurant=()=>{
    
    const [query,setQuery]=useState("");
    const {restaurant: searchedRest} = useSearchRes(query);
    const{restaurant: allRest} = useGetRestaurants();
   
    const restToRender = query.trim()===""?allRest:searchedRest;

    return(
        <div className="p-4">
            <SearchBarComponent query={query} setQuery={setQuery} />
        <div className="grid grid-cols-2 gap-4">
        {restToRender.map((ri)=>(
            <div key={ri.id} className="bg-white p-4 rounded shadow">
                <h1 className="text-lg font-bold">{ri.name}</h1>
                <p className="text-gray-600">{ri.address}</p>
                <p className="text-gray-600">{ri.contact}</p>
            </div>
        ))}
      </div>
    </div>
    )
}