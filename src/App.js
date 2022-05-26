import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 100,
    date: new Date(2020, 0, 14),

  },
  {
    id: 2,
    title: 'Water expenses',
    amount: 115,
    date: new Date(2020, 1, 15),

  },
  {
    id: 3,
    title: 'Electricity expenses',
    amount: 168,
    date: new Date(2020, 2, 16),

  },
  {
    id: 4,
    title: 'Internet expenses',
    amount: 200,
    date: new Date(2020, 3, 17),

  }
]




function App() {

  const [expenses, setExpenses] = useState(dummy_expenses)


  const addExpenseHandler = expense => {

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });


    /* console.log("In app.js");
    console.log(expense) */
  }


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;

