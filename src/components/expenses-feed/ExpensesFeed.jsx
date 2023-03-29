
// import Expense from "../expense/Expense";


// const ExpensesFeed = () => {
//   const items = [1, 2 ,3]
//   return (
//     <div>
//       {items.map(expense => <Expense key={expense} />)}
//     </div>
//   )
// }

// export default ExpensesFeed;


import { StyledButton, StyledContainer, StyledTitle, StyledButtonContainer, StyledButtonsContainer, StyledDiv } from '../expense/Expense.styled'

  const ExpenseFeed = (props) => {
    return (
      <StyledDiv>
      <StyledContainer category={props.category}>
        <StyledTitle>
          თარიღი: {props.category}
        </StyledTitle>
        <StyledTitle>
          კატეგორია: {props.category}
        </StyledTitle>
        <StyledButtonContainer>
          <StyledTitle>
            თანხა:
          </StyledTitle>
          <StyledButtonsContainer>
            <StyledButton>X</StyledButton>
            <StyledButton>Edit</StyledButton>
          </StyledButtonsContainer>
        </StyledButtonContainer>
      </StyledContainer>
      </StyledDiv>
      
    )
    }




export default ExpenseFeed;
