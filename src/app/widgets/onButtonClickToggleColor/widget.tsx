"use client";

import styles from "./widget.module.css";
import React, { useState } from "react";

export default function Widget() {
    console.log("component starts");

    const [toggleButton, setToggleButton] = useState(false);
    console.log("toggleButton", toggleButton);

    return (
        <div className={styles.wrapper}>
            <h1>onButtonClickToggleColor</h1>
            <button onClick={() => setToggleButton((v) => !v)} className={styles.button}>
                Click Me
            </button>
            <p className={toggleButton ? styles.text : styles["text-red"]}>Change this color</p>
        </div>
    );
}
