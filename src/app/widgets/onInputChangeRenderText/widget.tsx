'use client';

import styles from './widget.module.css';
import React, { useState } from 'react';

export default function Widget() {
    console.log('component starts');
    const [inputText, setInputText] = useState(null);

    return (
        <div className={styles.wrapper}>
            <h1>onInputChangeRenderText</h1>
            <label>
                Input:
                <input
                    type='text'
                    onChange={(e) => setInputText(e.target.value)}
                />
            </label>
            <div>{inputText ?? 'Text will appear here'}</div>
        </div>
    );
}
