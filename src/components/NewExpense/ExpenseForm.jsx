import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredtitle, setenteredtitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    /*         const [inputData, setInputData] = useState({
                enteredtitle: '',
                enteredAmount: '',
                enteredDate: ''
            })
        
     
            const titleChangedHandler = (e) => {
                setInputData({
                    ...inputData,
                    enteredtitle: e.target.value
                })

                //depends on the previous state to change

                setInputData((prevState) => {
                    return { ...prevState, enteredTitle:event.target.value}
                })
            }
        
            const amountChangeHandler = (e) => {
                setInputData({
                    ...inputData,
                    enteredAmount: e.target.value
                })
            }
        
            const dateChangeHandler = (e) => {
                setInputData({
                    ...inputData,
                    enteredDate: e.target.value
                })
            } */
    const titleChangedHandler = (e) => {
        setenteredtitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enteredtitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setenteredtitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title"> Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount"> Amount</label>
                    <input type="text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label> Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.cancelBtn}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm