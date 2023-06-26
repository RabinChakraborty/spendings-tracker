import React from 'react';
import './ExpanseItems.css';
import ExpanseDate from './ExpanseDate';
import Card from './card';

const ExpanseItems = (props) => {
  const { amount, date, title } = props;

  return (
    <>
      <Card className='expense-item'>
        <ExpanseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </Card>
    </>
  );
};

export default ExpanseItems;
