
import { StyeldBgWrapper } from "./LayoutStyled";
import Header from '../Header/Header';
// import { useState } from 'react';
import { useContext } from "react";
import { ThemeContext } from '../../ThemeContexts';
// import './Layout.css';

const Layout = (props) => {
    
    const themeContext = useContext(ThemeContext);


    // const onThemeChange = () => {
    //     themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");};
    
    return(
        // <div className="wraper">
        <StyeldBgWrapper theme={themeContext.theme}>
        
            <Header /> 
            {/* <button onClick={onThemeChange}>
        {themeContext.theme === "light" ? "make light" : "make dark"}
    </button> */}
            {props.children}

        </StyeldBgWrapper>
        // </div>
    );
};

export default Layout;