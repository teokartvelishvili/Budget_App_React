import './label-input.styles.css';


const LabelInputs = (props) => {
    const labelText = props.labelText;
    const type = props.type
    const name = props.name
    const id = props.id
    const placeholder = props.placeholder
    return (
        <div className="label__input__container">
            <label for={id}>{labelText}</label>
            <input type={type} name={name} id={id} onClick={props.onClick} placeholder={placeholder}/>
        </div>
    )
}

export default LabelInputs;


// import { useContext } from "react";
// import { StyledMainDiv , StyledLabel } from "./labelInputs.styled";
// import { ThemeContext } from "../../ThemeContexts";

// const LabelInputs = (props) => {
//     const {theme} = useContext(ThemeContext)
//     const labelText = props.labelText;
//     const type = props.type
//     const name = props.name
//     const id = props.id
//     const className = props.className
    
//     return (
//         <StyledMainDiv className={className} theme={theme}>
//             <StyledLabel htmlFor={id} theme={theme}>{labelText}</StyledLabel>
//             <input type={type} name={name} id={id} value={props.value} onChange={props.onChange} className={className} checked={props.checked} placeholder={props.placeholder}/>
//         </StyledMainDiv>
//     )
// }

// export default LabelInputs;