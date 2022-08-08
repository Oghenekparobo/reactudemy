import './newexpenses.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onStore})=>{ 
    // child to parent component communication

    // getting data from the child component
    const handler = (data) =>{ 

        const expenseData = {
            id: Math.random().toString(),
            ...data,
           
        }

        onStore(expenseData)

       

    }

    return(
        <div className='new-expense'>
            <ExpenseForm save={handler}/>
        </div>
    )
}

export default NewExpense;