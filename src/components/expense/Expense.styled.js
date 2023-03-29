import styled from "styled-components";


export const StyledDiv = styled.div`
background-color: inherit;
width: 90%;
height: 500px;
margin: 40px;
padding: 10px;
border-radius: 20px;
box-shadow: 10px 5px 20px 5px;
overflow-y: scroll;
`

export const StyledContainer = styled.div`
width: 400px;
height: auto;
padding: 10px;
display: flex;
flex-direction: column;
background: rgba(60, 179, 113, 0.5);
// red
// background: rgba(255, 0, 0, 0.3);
border: 1px solid green;
border-radius: 20px;
// box-shadow: 10px 5px 20px 5px;

`;

export const StyledTitle = styled.p`
margin: 5px 0;
font-size: 16px;
`

export const StyledButtonContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const StyledButtonsContainer = styled(StyledButtonContainer)`
gap: 10px;
`

export const StyledButton = styled.button`
width: auto;
height: 30px;
padding: 5px;
box-shadow: 1px 1px 5px 1px;
background: rgba(210, 210, 210, 0.5);

`