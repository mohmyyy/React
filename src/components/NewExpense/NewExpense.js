import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = () => {
  // const values = document.getElementsByClassName('new-expense__control')

  // console.log(values)
  return <div className='new-expense'>
    <ExpenseForm/>
  </div>
}

export default NewExpense