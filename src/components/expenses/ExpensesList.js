import ExpenseItem from "./ExpenseItem";
import "./expenseslist.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        you have no expenses in this year
      </h2>
    );
  }

  return (
    <>
      <ul className="expenses-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
