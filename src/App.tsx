import ExpenseList from "./components/ExpenseList"
import Heading from "./components/Heading"
import { useState } from 'react'

Heading
function App() {
  const [expense, setExpence] = useState([{
    id: 1,
    item: 'egg',
    amount: 100,
    category: 'new'
  }, {
    id: 2,
    item: 'bread',
    amount: 100,
    category: 'new2'
  }
  ])

  return (
    <>
      <div>
        <Heading>Expense Tracker</Heading>
        <ExpenseList expenses={expense} onDelete={(id) =>
          setExpence(expense.filter(ele => ele.id != id))}></ExpenseList>
      </div>
    </>
  )
}

export default App
