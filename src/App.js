import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const  App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance', 
      amount: 799.49, 
      date: new Date(2021,3,6)
    },
    {
      id: 'e2',
      title: 'Tissues', 
      amount: 10.49, 
      date: new Date(2021,5,7)
    },
    {
      id: 'e1',
      title: 'Plane ticket', 
      amount: 799.49, 
      date: new Date(2021,28,11)
    },
    {
      id: 'e1',
      title: 'House', 
      amount: 10079949, 
      date: new Date(2021,2,1)
    },
  ];

  const addExpenseHandler = expense=> {
    console.log('In Apps.js');
    console.log(expense);
  }
//
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
