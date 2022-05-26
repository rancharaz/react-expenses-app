import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'



const Expenses = ({ items }) => {

    const [yearFiltered, setYearFiltered] = useState('2022');

    const changeFilterHandler = (chosenYear) => {
        setYearFiltered(chosenYear)
        console.log('We are inside');
        console.log(chosenYear)
    }
    const expensesFiltered = items.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFiltered;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={yearFiltered} onChangeFilter={changeFilterHandler} />
                <ExpensesChart expenses={expensesFiltered} />
                <ExpenseList items={expensesFiltered} />
            </Card>
        </div>
    )
}

export default Expenses