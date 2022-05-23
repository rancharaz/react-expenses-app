import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
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




  return (
    <>
      <NewExpense />
      {expenses && expenses.map(expense => {

        return (
          <div key={expense.id}>

            <Expenses title={expense.title} amount={expense.amount} date={expense.date} />

          </div>
        )
      })}
    </>
  );
}

export default App;

