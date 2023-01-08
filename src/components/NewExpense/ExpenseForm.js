import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=>{
  const [enteredTitle ,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

    // State for title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
  }
  // State for Amount

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    //     setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }
    // State for Date

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value)
      // setUserInput((prevState) => {
      //   return {...prevState,
      //   enteredDate: event.target.value}
      // })
    }

    const submitEventHandler = (event)=>{
      event.preventDefault()
      const myObj = {
        title:document.getElementById('titleId').value,
        amount:document.getElementById('amountId').value,
        date:document.getElementById('dateId').value
      }
      console.log(myObj)
    }
  return <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label> Title </label>
        <input onChange={titleChangeHandler} id='titleId' type='text'/>
      </div>
      <div className='new-expense__control'>
        <label> Amount </label>
        <input onChange={amountChangeHandler} id='amountId' type='number' min="0.1" step="0.01"/>
      </div>
      <div className='new-expense__control'>
        <label> Date </label>
        <input onChange={dateChangeHandler} id='dateId' type='date' min="2019-01-01" max="2023-12-31"/>
      </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit' onClick={submitEventHandler} >Add Expense</button>
      </div>
  </form>
}

export default ExpenseForm