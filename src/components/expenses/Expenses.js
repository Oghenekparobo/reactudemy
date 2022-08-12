import { useState } from "react";
import Card from "../ui/Card";
import "./expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("1999");
  // console.log('data from expenses' , props.items);

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filtering expenses to display expenses according to year
  const filteredExpenses = props.items.filter((expense) => {
    const date = expense.date.getFullYear().toString();
    return date === filteredYear;
  });

 
  return (
    <>
      <div className="">
        <Card className="expenses">
          <ExpensesFilter OnFilter={filterHandler} year={filteredYear} />
          <ExpensesList expenses={filteredExpenses}/>
        </Card>
      </div>
    </>
  );
}

export default Expenses;
