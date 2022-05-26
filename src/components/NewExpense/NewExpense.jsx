import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'




const NewExpense = (props) => {

    const [editButton, setEditButton] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(props.onAddExpense(expenseData))
        setEditButton(false)
    }


    const formEditingHandler = () => {
        setEditButton(!false)
    }

    const stopFormEditingHandler = () => {
        setEditButton(false)
    }

    return (
        <div className='new-expense'>

            {!editButton && <button onClick={formEditingHandler}>Add new expense</button>}

            {editButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelBtn={stopFormEditingHandler} />}
        </div>
    )
}

export default NewExpense