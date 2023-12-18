'use client';
import styles from "./todos.module.css";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
export default function Todos() {
  return (
    <>
      <h1 className={styles.title}>ToDo Tasks for Sparta</h1>
      <p>Technical test for Sparta, using Next.js and TypeScript</p>
      <AddTodo />
      <TodosList />
    </>
  );
}
