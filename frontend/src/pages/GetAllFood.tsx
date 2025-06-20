import { useGetAllFoods } from "../hooks/getAllFoods"

export const GetAllFoods=()=>{

    const{foods} = useGetAllFoods();
    if(!foods || foods.length==0){
        return <div>
            food loading...
        </div>

    }
    return <div className="p-4 grid grid-cols-2 gap-4">
        {foods.map((fooditems)=>(
            <div key={fooditems.id} className="bg-white p-4 rounded shadow">
                <h1 className="text-lg font-bold">{fooditems.name}</h1>
                <p className="text-gray-600">{fooditems.description}</p>
            </div>
        ))}

    </div>
}