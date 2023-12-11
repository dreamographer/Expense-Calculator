import categories from "../category"
interface Props{
    selectedCategory:(category:string)=>void,
}
const ExpenceFilter = ({ selectedCategory }: Props)=>{
    return(
        <>
            <label htmlFor="categories" className="block mb-2  text-sm font-medium text-gray-900">Select an option</label>
            <select onChange={(event) => selectedCategory(event.target.value)} id="categories" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option  value=''>ALL Category</option>
                {categories.map(ele=>
                    <option key={ele} value={ele}>{ele}</option>
                )}
                
            </select>

        </>
    )
}

export default ExpenceFilter