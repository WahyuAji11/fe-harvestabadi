import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setChecked(savedDarkMode);
        document.body.classList.toggle('dark-theme', savedDarkMode);
    }, []);

    const toggleDarkMode = (checked) => {
        setChecked(checked);
        localStorage.setItem('darkMode', checked);
        document.body.classList.toggle('dark-theme', checked);
    };

    return (
        <DarkModeContext.Provider value={{ checked, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
