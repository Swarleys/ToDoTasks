"use client";
import { selectTodos, add } from "@/features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./todos.module.css";
import { useState } from "react";
export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [title, setTitle] = useState("");

  function addTodo(title: string) {
    if (title.length === 0) return;
    dispatch(add({ title, id: crypto.randomUUID(), completed: false }));
    setTitle("");
  }
  return (
    <div>
      <h1 className={styles.title}>ToDo Tasks for Sparta</h1>
      <p>Technical test for Sparta, using Next.js and TypeScript</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Add a new task"
      />
      <button onClick={() => addTodo(title)}>Add</button>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
