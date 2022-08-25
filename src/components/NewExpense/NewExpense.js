import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {

  const onSaveExpenseDataHandler=(enteredExepenseData) => {
    const enteredData = {
      ...enteredExepenseData,
      id: Math.random().toString()
    };
  
    props.onAddExpense(enteredData);
    
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;