import './expensedate.css';

function ExpenseDate(props) {
   
  return (
    
    <>
      <div className="expense-date">
        <div>
          <div className='expense-date__month'>{props.month}</div>
          <div className='expense-date__year'>{props.year}</div>
          <div className='expense-date__day'>{props.day}</div>
        </div>

      </div>
    </>
  );
}

export default ExpenseDate;
