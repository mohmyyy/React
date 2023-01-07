import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  console.log(props.date,"expense Item Js");
  const [amount,setTitle] = useState(props.amount)
  console.log(amount)
  const clickHandler = () => {
    setTitle(amount+100);
    console.log(amount)
  }
  const deleteHandler = () => {
    const items = document.getElementsByClassName("expenses");
    console.log(items);
    const nodeToDelete = document.getElementById(props.title).parentElement;
    console.log(nodeToDelete);
    if (nodeToDelete) {
      nodeToDelete.parentElement.removeChild(nodeToDelete);
    }
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div id={props.title} className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* <button onClick={clickHandler}> Delete Me! </button> */}
      <button className="expense-item__price" onClick={clickHandler}> Add $100 </button>
      <button className="expense-item__price" onClick={deleteHandler}> Delete Me! </button>
    </Card>
  );
};

export default ExpenseItem;
