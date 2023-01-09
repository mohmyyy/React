import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


let count = 5;
const NewExpense = (props) => {
  
  const [isEditing,setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e'+count
    };
    count++
    props.onAddExpense(expenseData)
    // console.log(expenseData)
  };
  const startEditing = () => {
    setIsEditing(true)
  }

  return <div className='new-expense'>
    {!isEditing && <button onClick={startEditing} >Add New Button</button>}
    {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />}
  </div>
}

export default NewExpense