// import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  // const [amount,setTitle] = useState(props.amount)
  // const clickHandler = () => {
  //   setTitle(amount+100);
  // }
  // const deleteHandler = () => {
  //   const items = document.getElementsByClassName("expenses");
  //   const nodeToDelete = document.getElementById(props.title).parentElement;
  //   if (nodeToDelete) {
  //     nodeToDelete.parentElement.removeChild(nodeToDelete);
  //   }
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div id={props.title} className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}> Delete Me! </button> */}
      {/* <button className="expense-item__price" onClick={clickHandler}> Add $100 </button>
      <button className="expense-item__price" onClick={deleteHandler}> Delete Me! </button> */}
    </Card>
  );
};

export default ExpenseItem;
