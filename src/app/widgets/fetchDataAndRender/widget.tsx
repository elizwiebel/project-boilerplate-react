"use client";

import styles from "./widget.module.css";
import React, { useState, useEffect } from "react";

export default function Widget() {
    console.log("component starts");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect with no dependencies runs");

        async function fetchData() {
            console.log("fetching data starts");

            try {
                const response = await fetch("/data-pokemon.json");
                const data = await response.json();

                if (!response.ok) {
                    const message = `${response.status}`;
                    throw new Error(message);
                }

                setData(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={styles.wrapper}>
            <h1>fetchDataAndRender</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
