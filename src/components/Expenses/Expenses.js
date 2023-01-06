import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const Expenses = (props) => {
  console.log(props.date, "expenses Js");
  const expenses = props.item;
  console.log(props.item.date, "expense Js 1");
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </Card>
  );
};

export default Expenses;
