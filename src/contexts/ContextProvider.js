import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(); //to close the sidebar when we are on mobile, otherwise sidebar will be open by default
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(true);
    const [colorName, setColorName] = useState('blue-theme')
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    }
    const setColor = (color, colorName) => {
        setCurrentColor(color);
        setColorName(colorName);
        console.log(colorName)
        localStorage.setItem('colorMode', color);
    }
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (<StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setCurrentColor,
            setCurrentMode, 
            themeSettings, 
            setThemeSettings,
            setMode,
            setColor,
            colorName
        }}>
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext);