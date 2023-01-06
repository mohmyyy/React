import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  console.log(props.date,"expense Item Js");
  const clickHandler = () => {
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
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Delete Me! </button>
    </Card>
  );
};

export default ExpenseItem;
