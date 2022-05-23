import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {


    const [inputData, setInputData] = useState({
        enteredtitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangedHandler = (e) => {
        setInputData({
            ...inputData,
            enteredtitle: e.target.value
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
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title"> Title</label>
                    <input type="text" onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount"> Amount</label>
                    <input type="text" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label> Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm