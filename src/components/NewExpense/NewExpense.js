import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


let count = 5;
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e'+count
    };
    count++
    props.onAddExpense(expenseData)
    // console.log(expenseData)
  };

  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
  </div>
}

export default NewExpense