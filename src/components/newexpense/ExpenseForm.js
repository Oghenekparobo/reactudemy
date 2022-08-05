import "./expenseform.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  // using one useState to manage the states of all the inputs
  // const [input, setInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const expenseData = {
         titleEntered: title,
         amountEntered:amount,
         dateEntered: new Date(date)
        };

        setTitle('')
        setAmount('')
        setDate('')
      }}
    >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              // setInput((prevState) => {
              //   return { ...prevState, title: e.target.value };
              // });
              // setInput({
              //   ...input,
              //   title: e.target.value,
              // });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={
              (e) => setAmount(e.target.value)
              // setInput((prevState) => {
              //   return { ...prevState, amount: e.target.value };
              // })
              // setInput({
              //   ...input,
              //   amount: e.target.value,
              // })
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-02-01"
            step="2022-06-29"
            value={date}
            onChange={
              (e) => setDate(e.target.value)
              // setInput((prevState) => {
              //   return { ...prevState, date: e.target.value };
              // })
              // setInput({
              //   ...input,
              //   date: e.target.value,
              // })
            }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
