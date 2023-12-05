"use client";

import styles from "./widget.module.css";
import React, { useState } from "react";

const Counter = ({ removeCounter }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount((count) => count + 1)}>Add</button>
            <button onClick={() => setCount((count) => count - 1)}>Subtract</button>
            <button onClick={removeCounter}>Remove Counter</button>
        </div>
    );
};

export default function Widget() {
    console.log("component starts");

    const [counters, setCounters] = useState([]);

    function addCounter() {
        setCounters([
            ...counters,
            {
                id: crypto.randomUUID(),
            },
        ]);
    }

    function removeCounter(id) {
        setCounters((counters) => {
            return counters.filter((counter) => counter.id !== id);
        });
    }

    console.log("counters", counters);

    return (
        <div className={styles.wrapper}>
            <h1>multipleCounters</h1>
            <div>
                <button onClick={addCounter}>Add Counter</button>
            </div>

            {counters.map((counter) => (
                <Counter key={counter.id} removeCounter={() => removeCounter(counter.id)} />
            ))}
        </div>
    );
}
