import { useState } from "react";
import { useSearchFood } from "../hooks/searchFood";

export const Searchbar=()=>{
    const[query,setQuery]=useState("");
    const{foods} = useSearchFood(query);
    return <div className="p-4">
        <input type="text"
        placeholder="Search Food..."
        value={query} 
        onChange={(e)=>{
            setQuery(e.target.value);
        }}/>
        <div className="p-4 grid grid-cols-2 gap-4">
        {foods.map((fooditems)=>(
            <div key={fooditems.id} className="bg-white p-4 rounded shadow">
                <h1 className="text-lg font-bold">{fooditems.name}</h1>
                <p className="text-gray-600">{fooditems.description}</p>
            </div>
        ))}

    </div>
    </div>
}