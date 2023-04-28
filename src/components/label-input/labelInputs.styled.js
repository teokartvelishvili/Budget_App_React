import styled from "styled-components";
import { THEME } from "../../ThemeColors";

export const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.className === 'AddExpenses' || props.className === 'AddExpensesRadio' ? 'row' : 'column' };
    
    label {
        order: ${props => props.className === 'AddExpensesRadio' ? '2' : '1' };
    }
    
    input {
        order: ${props => props.className === 'AddExpensesRadio' ? '1' : '2' };
        width: 100%;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        padding: 4px;
        outline-color: #4b78f5;
        background-color: ${({ theme }) => THEME[theme].inputBackground};
        color : ${({ theme }) => THEME[theme].text};
    }
    
    ${props => (props.className === 'AddExpenses' || props.className === 'AddExpensesRadio') && `
        display: flex;
        gap: 8px;
    `}
`;

export const StyledLabel = styled.label`
    color : ${({ theme }) => THEME[theme].text};
`