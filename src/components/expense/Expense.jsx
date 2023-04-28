// import { FC } from 'react';

import ExpenseFeed from '../../components/expenses-feed/ExpensesFeed';
import Filters from '../../components/filters/Filters';
import Total from '../../components/total/Total';


const ExpensesScreen = () => {
  return (
    <div>
      <Filters/>

      <ExpenseFeed/>
      
      <Total/>
    </div>
  );
};

export default ExpensesScreen;







