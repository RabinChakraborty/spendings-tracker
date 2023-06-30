import { useState } from 'react';
import './ExpanseItems.css';
import ExpanseDate from './ExpanseDate';
import Card from '../ui/card';

const ExpanseItems = (props) => {
  const { amount, date, title } = props;
  const [name, setName] = useState(title);
  let a = true;
  const click = () => {
    if (a) {
      setName('Hello i am david goggings');
      a = false;
    } else {
      setName(title);
      a = true;
    }
  };
  return (
    <>
      <Card className='expense-item'>
        <ExpanseDate date={date} />
        <div className='expense-item__description'>
          <h2>{name}</h2>
          <div className='expense-item__price'>${amount}</div>
          <button onClick={click}>click</button>
        </div>
      </Card>
    </>
  );
};

export default ExpanseItems;
