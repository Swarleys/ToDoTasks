"use client";
import { selectTodos, add, update, remove, Todo } from "@/features/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./todos.module.css";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [title, setTitle] = useState("");

  function addTodo(title: string) {
    if (title.length === 0) return;
    dispatch(add({ title, id: crypto.randomUUID(), completed: false }));
    setTitle("");
  }

  function editTodo(todo: Todo) {
    dispatch(update(todo));
  }

  function deleteTodo(id: string) {
    dispatch(remove(id));
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
            <li key={todo.id}>
              {todo.title}{" "}
              <Pencil
                className={styles.pointer}
                onClick={() => editTodo({...todo, title: 'hola'})}
                key={`edit-${todo.id}`}
              />
              <Trash2
                className={styles.pointer}
                onClick={() => deleteTodo(todo.id)}
                key={`delete-${todo.id}`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
