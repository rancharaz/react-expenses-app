import React, { useState } from 'react'
import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'


const ExpenseItem = (props) => {

    const amount = props.amount;


    const [title, setTitle] = useState(props.title)

    const handleClick = () => {
        setTitle(!title)
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button className='expense-item__price' onClick={handleClick}>Change Title</button>
        </Card>

    )
}

export default ExpenseItem