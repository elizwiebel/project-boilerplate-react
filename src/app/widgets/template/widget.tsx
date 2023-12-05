'use client';

import styles from './widget.module.css';
import React from 'react';

export default function Widget() {
    console.log('component starts');

    return (
        <div className={styles.wrapper}>
            <h1>template</h1>
        </div>
    );
}
