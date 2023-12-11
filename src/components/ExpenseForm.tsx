import categories from "../category"
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver  } from "@hookform/resolvers/zod"
const schema = z.object({
    item:z.string().min(2).max(50),
    amount:z.number({invalid_type_error:'Amount is requred'}).min(0.1).max(10000),
    categories:z.enum(categories,{errorMap:()=>
        ({message:'Category is requred'})
    })
})
interface Props{
    onSubmit:(data:ExpenceFormData)=>void
}
type ExpenceFormData=z.infer<typeof schema>;
const ExpenceForm = ({onSubmit}:Props)=>{
    const {register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm<ExpenceFormData>({resolver:zodResolver(schema)})
    return(
        <form className="w-" onSubmit={handleSubmit(data => {onSubmit(data);reset()})} >

            <div className="mb-6">
                <label htmlFor="item" className="block mb-2 text-sm font-medium text-gray-900 ">Item</label>
                <input {...register('item')} type="text" id="item" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" />
                {errors.item&& <p>{errors.item.message}</p> }
            </div>
            <div className="mb-3" >
                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                <input {...register('amount',{valueAsNumber:true})} type="number" id="amount" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500" />
                {errors.amount && <p>{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                <select {...register('categories')} name="categories" id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value=""></option>
                    {categories.map(ele =>
                        <option key={ele} value={ele}>{ele}</option>
                    )}
                </select>
                {errors.categories && <p>{errors.categories.message}</p>}
            </div>
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
        </form>
    )
}

export default ExpenceForm