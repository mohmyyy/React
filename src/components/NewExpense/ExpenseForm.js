import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=>{
  const titleChangeHandler = (event) => {
    console.log(event.target.value)

  }
  return <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label> Title </label>
        <input onChange={titleChangeHandler} id='titleId' type='text'/>
      </div>
      <div className='new-expense__control'>
        <label> Amount </label>
        <input id='amountId' type='number' min="0.1" step="0.01"/>
      </div>
      <div className='new-expense__control'>
        <label> Date </label>
        <input id='dateId' type='date' min="2019-01-01" max="2023-12-31"/>
      </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
  </form>
}

export default ExpenseForm