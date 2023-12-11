
interface Expense {
    id: number,
    item: string,
    amount: number,
    category: string
}

interface Props {
    expenses: Expense[],
    onDelete: (id: number) => void
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
    return (
        <div className="relative w-screen overflow-x-auto flex justify-center  sm:rounded-lg">
            <table className="text-sm w-5/6 text-left rtl:text-right text-gray-500 rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Item
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map((ele) =>
                        <tr key={ele.id} className="odd:bg-white  hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ele.item}</th>
                            <td className="px-6 py-4">{ele.amount}</td>
                            <td className="px-6 py-4">{ele.category}</td>
                            <td className="px-6 py-4"> <button className="font-medium text-blue-600 hover:underline" onClick={() => onDelete(ele.id)}>DELETE</button></td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr className="odd:bg-white even:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">Total</th>
                    <th className="px-6 py-4 text-xl">{expenses.reduce((acc, ele) => ele.amount + acc, 0)}</th>
                    <td></td>
                    <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default ExpenseList