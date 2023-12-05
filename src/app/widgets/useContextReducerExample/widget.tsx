'use client';

import styles from './widget.module.css';
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const WidgetContext = createContext(null);

const ACTIONS = {
    UPDATE_THEME: 'update_theme',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_theme': {
            console.log('update_theme action.payload', action.payload);
            return {
                ...state,
                theme: action.payload,
            };
        }
        default:
            return state;
    }
};

const WidgetProvider = ({ children }) => {
    const initialState = {
        theme: 'light',
        themeStyle: 'compact',
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <WidgetContext.Provider value={[state, dispatch]}>
            {children}
        </WidgetContext.Provider>
    );
};

const WidgetContent = () => {
    console.log('component starts');
    const [state, dispatch] = useContext(WidgetContext);
    console.log('state', state);

    useEffect(() => {
        dispatch({ type: ACTIONS.UPDATE_THEME, payload: 'dark' });
    }, []);

    return <div>{state.theme}</div>;
};

export default function Widget() {
    return (
        <div className={styles.wrapper}>
            <h1>useContextReducerExample</h1>
            <WidgetProvider>
                <WidgetContent />
            </WidgetProvider>
        </div>
    );
}
