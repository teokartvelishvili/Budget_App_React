import {
    StyledContainer,
    StyledButton,
    StyledSignupScreenWrapper,
    StyledTitle,
    StyledDiv
} from "./Signup.styled";
import LabelInput from "../label-input/LabelInput";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);

    
    return (
    <StyledSignupScreenWrapper>
        <StyledContainer>
        <StyledTitle> გაიარეთ რეგისტრაცია </StyledTitle>
        <StyledDiv>
        <LabelInput
            id={7}
            text="სახელი"
            type={"email"}
            name={"name-field"}
            value={name}
            onChange={onNameChange}
            />
            </StyledDiv>
        <StyledDiv>
        <LabelInput
            id={1}
            text="ფოსტა"
            type={"email"}
            name={"email-field"}
            value={email}
            onChange={onEmailChange}
            />
            </StyledDiv>
            <StyledDiv>

        <LabelInput
            id={2}
            text="პაროლი"
            type={"password"}
            name={"password-field"}
            value={password}
            onChange={onPasswordChange}
            />
            </StyledDiv>
            <StyledDiv>

        <LabelInput
            id={3}
            text="გაიმეორეთ პაროლი"
            type={"password"}
            name={"password-field"}
            value={repeatPassword}
            onChange={onRepeatPasswordChange}
            />
            </StyledDiv>
        <StyledButton>რეგისტრაცია</StyledButton>
        </StyledContainer>
    </StyledSignupScreenWrapper>
    );
};

export default Signup;
