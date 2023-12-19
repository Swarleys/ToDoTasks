"use client";

import { add } from "@/features/todos/todosSlice";
import { FormEvent, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ AddTodo.module.css";

function AddTodo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  function handleSubmit(
    e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    dispatch(add({ task, id: crypto.randomUUID(), completed: false }));
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        placeholder="Add a new task"
        type="text"
        id="task"
        className={styles.input}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={styles.button}
        disabled={!task}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
