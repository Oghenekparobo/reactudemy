import "./expenseform.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>title</label>
            <input type="text" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"  />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2020-02-01" step="2022-06-29"  />
        </div>
      </div>
      <div className="new-expense__actions">
          <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
