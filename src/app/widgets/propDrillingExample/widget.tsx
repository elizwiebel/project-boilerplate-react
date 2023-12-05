'use client';

import styles from './widget.module.css';
import React, { useState } from 'react';

const WidgetContent = ({ children }) => {
    return (
        <div className={styles['content-wrapper']}>
            <p className={styles.content}>Widget Content</p>
            {children}
        </div>
    );
};

const Button = ({ setCount }) => {
    return <button onClick={setCount}>Click Me</button>;
};

const ButtonWrapper = ({ setCount }) => {
    return (
        <div>
            <Button setCount={setCount} />
        </div>
    );
};

export default function Widget() {
    console.log('component starts');
    const [count, setCount] = useState(0);

    return (
        <div className={styles.wrapper}>
            <h1>propDrillingExample</h1>
            <div className={styles.count}>Count: {count}</div>
            <WidgetContent>
                <ButtonWrapper
                    setCount={() => setCount((count) => count + 1)}
                />
            </WidgetContent>
        </div>
    );
}
