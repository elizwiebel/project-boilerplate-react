'use client';

import styles from './widget.module.css';
import React, { createContext, useState, useContext, useEffect } from 'react';

const WidgetContext = createContext(null);

const WidgetProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return (
        <WidgetContext.Provider value={[theme, setTheme]}>
            {children}
        </WidgetContext.Provider>
    );
};

const WidgetContent = () => {
    console.log('component starts');
    const [theme, setTheme] = useContext(WidgetContext);
    console.log('theme', theme);

    return <div>Widget Content</div>;
};

export default function Widget() {
    return (
        <div className={styles.wrapper}>
            <h1>useContextBasicExample</h1>
            <WidgetProvider>
                <WidgetContent />
            </WidgetProvider>
        </div>
    );
}
