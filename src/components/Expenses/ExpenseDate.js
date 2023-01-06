import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log(props.date,'Expense Date js')
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { day: "2-digit" });
  const day = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
}

export default ExpenseDate