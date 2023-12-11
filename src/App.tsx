import ExpenceFilter from "./components/ExpenseFilter"
import ExpenceForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import Heading from "./components/Heading"
import { useEffect, useState } from 'react'

Heading
function App() {
  
  type exp = {
    id: number;
    item: string;
    amount: number;
    categories: string;
  }[]

  const [expense, setExpence] = useState<exp>(() => {
    const storedExpense = localStorage.getItem('expense');
    return storedExpense ? JSON.parse(storedExpense) : [];
  });

  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense));
  }, [expense]);

  const onChage=(category:string)=>{
    setCategory(category)
  }
  const [category,setCategory] = useState('')
  const visibleExpence = category ? expense.filter(item => item.categories ==category):expense
  return (
      <div>
        <Heading>Expense Tracker</Heading>
        <div className="relative w-screen overflow-x-auto flex flex-col items-center sm:rounded-lg">
            <div className="m-5 w-3/5">
          <ExpenceForm onSubmit={data => setExpence([...expense, { ...data, id: expense.length+1}])}></ExpenceForm>
            </div>
          <div className="m-5  self-start">
          <ExpenceFilter selectedCategory={onChage} />
          </div>
        <ExpenseList expenses={visibleExpence} onDelete={(id) =>
            setExpence(expense.filter(ele => ele.id != id))}></ExpenseList>
        </div>
      </div>
  )
}
export default App
