
import { useGetRestaurants } from "../hooks/getRestaurants";

export const GetRestaurant=()=>{

    const{restaurant} = useGetRestaurants();
    if(!restaurant || restaurant.length==0){
        return <div>
            Restaurants loading...
        </div>

    }
    return <div className="p-4 grid grid-cols-2 gap-4">
        {restaurant.map((ri)=>(
            <div key={ri.id} className="bg-white p-4 rounded shadow">
                <h1 className="text-lg font-bold">{ri.name}</h1>
                <p className="text-gray-600">{ri.address}</p>
                <p className="text-gray-600">{ri.contact}</p>
            </div>
        ))}

    </div>
}