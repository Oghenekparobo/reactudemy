import "./newexpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onStore }) => {
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };
  const stopEditHandler = () => {
    setEdit(false);
  };
  // child to parent component communication
  // getting data from the child component
  const handler = (expenses) => {
    const expenseData = {
      id: Math.random().toString(),
      ...expenses,
    };
    setEdit(false);
    //    console.log('from expense data' , expenseData);

    onStore(expenseData);
  };

  return (
    <div className="new-expense">
      {!edit && <button onClick={editHandler}>Add New Expense</button>}
      {edit && <ExpenseForm save={handler} onCancel={stopEditHandler} />}
    </div>
  );
};

export default NewExpense;
