import React,{useState} from "react";
// import ExpenseDate from "./components/Expenses/ExpenseDate";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure: "Manhattan,NYC",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: "Ooty,India",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: "Bangalore,India",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: "Mnagalore,Inida",
  },
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense)=> {
    console.log(expense)
    setExpenses((prevExpenses)=> [expense,...prevExpenses])
  }

  return(
      <div>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses items = {expenses} />
      </div>
    );
}

export default App;
