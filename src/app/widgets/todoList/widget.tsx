'use client';

import styles from './widget.module.css';
import React, { useState, useEffect } from 'react';

export default function Widget() {
    console.log('component starts');

    const localStoreValue = localStorage.getItem('widget-todo-items');
    const initialTodos =
        localStoreValue === null ? [] : JSON.parse(localStoreValue);

    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem('widget-todo-items', JSON.stringify(todos));
    }, [todos]);

    function formSubmitHandler(e) {
        e.preventDefault();

        setTodos([
            ...todos,
            {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false,
            },
        ]);
    }

    function toggleCheckboxHandler(id, checkedValue) {
        console.log(id, checkedValue);
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: checkedValue,
                    };
                }
            });
        });
    }

    function deleteTodoHandler(id) {
        console.log('click');

        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    console.log('todos', todos);

    return (
        <div className={styles.wrapper}>
            <h1>todoList</h1>
            <form onSubmit={formSubmitHandler} className={styles.addItemForm}>
                <div className={styles.newItemInput}>
                    <label htmlFor='item'>New Item:</label>
                    <input
                        id='item'
                        type='text'
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                </div>
                <button>Add</button>
            </form>
            <ul className={styles.todoList}>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} className={styles.todoListItem}>
                            <label>
                                <input
                                    onChange={(e) =>
                                        toggleCheckboxHandler(
                                            todo.id,
                                            e.target.checked
                                        )
                                    }
                                    type='checkbox'
                                />
                                {todo.title}
                            </label>
                            <button onClick={() => deleteTodoHandler(todo.id)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
