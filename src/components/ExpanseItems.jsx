import React from 'react';
import './ExpanseItems.css';
import ExpanseDate from './ExpanseDate';

const ExpanseItems = (props) => {
  const { amount, date, title } = props;

  return (
    <>
      <div className='expense-item'>
        <ExpanseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpanseItems;
