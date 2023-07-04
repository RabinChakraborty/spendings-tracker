import React, { useState } from 'react';
import './expenseForm.css';
const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const changeTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };
  const changeAmount = (e) => {
    // console.log(e.target.value);
    setAmount(e.target.value);
  };
  const changeDate = (e) => {
    // console.log(e.target.value);
    setDate(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    const Formdata = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(Formdata);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={changeTitle} />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              onChange={changeAmount}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2023-12-31'
              onChange={changeDate}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
