import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [checked, setChecked] = useState(false);

    const toggleDarkMode = (checked) => {
        setChecked(checked);
        document.body.classList.toggle('dark-theme', checked);
    };

    return (
        <DarkModeContext.Provider value={{ checked, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
