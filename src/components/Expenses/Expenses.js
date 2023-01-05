import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) =>{
  return (
    <Card className="expenses">
    {props.item.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        LocationOfExpenditure={expense.LocationOfExpenditure}
      />
    ))}
    </Card>
  );
}

export default Expenses