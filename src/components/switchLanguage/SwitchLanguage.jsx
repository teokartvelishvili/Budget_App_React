import {StyledLangDiv, StyledGeoFlagDiv, StyledEnFlagDiv }  from "./Switchlanguage.js";
import './switchLanguage.css';
import { LanguageContext } from "../../LanguageContext";
import { useContext } from "react";

const SwitchLanguage = (props) => {
    const langContext = useContext(LanguageContext);

    const geOnCklick = () => {
        langContext.setLanguage("ge")
    }
    const enOnClick = () => {
        langContext.setLanguage("en")
    }
    
    return (
        <StyledLangDiv>
            <StyledGeoFlagDiv
            className={"GeoFlag" + (langContext.language === "ge" ? "unvisible" : "")} 
            onClick={geOnCklick}>
            </StyledGeoFlagDiv>

            <StyledEnFlagDiv 
            className={"EnFlag" + (langContext.language === "en" ? "unvisible" : "")} 
            onClick={enOnClick}>
    
            </StyledEnFlagDiv>


        </StyledLangDiv>
    )

}

export default SwitchLanguage;