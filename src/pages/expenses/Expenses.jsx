import { FC } from 'react';
import { useContext } from "react";



import ExpensesFeed from '../../components/expenses-feed/ExpensesFeed';
import Filters from '../../components/filters/Filters';
import Total from '../../components/total/Total';
import { ExpensesFeedContext } from "./ExpensesFeedContext";
import { useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { StyledExpensesMinDiv } from "./Expenses.styled";


const ExpensesScreen = () => {
  const {theme} = useContext(ThemeContext)


  return (
    <div>
      <StyledExpensesMinDiv className="mainContainer" theme={theme}>
      <Filters/>
      <ExpensesFeed/>
      <Total/>
      </StyledExpensesMinDiv>
    </div>
  )
}

export default ExpensesScreen;