import { ExpInc, ExpIncContainer } from "./Total.style";

const Total = (props) => {
  // props.amount
  // props.text
  // props.variant = 'expense' | 'income'
  return (
    <ExpIncContainer>
      <ExpInc>შემოსავალი:</ExpInc>
      <ExpInc>გასავალი:</ExpInc>
      <ExpInc>სხვაობა:</ExpInc>
    </ExpIncContainer>
  )
}

export default Total;