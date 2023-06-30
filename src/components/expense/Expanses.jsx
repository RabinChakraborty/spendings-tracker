import ExpanseItems from './ExpanseItems';
import './Expanses.css';
import Card from '../ui/card';

function Expanses(ExpansesData) {
  return (
    <>
      <Card className='Expanses'>
        <ExpanseItems
          title={ExpansesData.ExpansesData[0].title}
          amount={ExpansesData.ExpansesData[0].amount}
          date={ExpansesData.ExpansesData[0].date}
        />
        <ExpanseItems
          title={ExpansesData.ExpansesData[1].title}
          amount={ExpansesData.ExpansesData[1].amount}
          date={ExpansesData.ExpansesData[1].date}
        />
        <ExpanseItems
          title={ExpansesData.ExpansesData[2].title}
          amount={ExpansesData.ExpansesData[2].amount}
          date={ExpansesData.ExpansesData[2].date}
        />
        <ExpanseItems
          title={ExpansesData.ExpansesData[3].title}
          amount={ExpansesData.ExpansesData[3].amount}
          date={ExpansesData.ExpansesData[3].date}
        />
      </Card>
    </>
  );
}

export default Expanses;
