import { useDispatch, useSelector } from "react-redux";
import { load, selectTodos, Todo } from "@/features/todos/todosSlice";
import TodoItem, { TodoSocketItem } from "../TodoItem/TodoItem";
import styles from "./TodosList.module.css";
import { useEffect } from "react";

function TodosList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    dispatch(load(storedTodos));
  }, [dispatch]);

  if (todos.length === 0) return null;

  const notCompleted = todos.filter((todo) => !todo.completed).length;

  const notCompletedText = `${notCompleted} task${
    notCompleted === 1 ? "" : "s"
  } left to do of ${todos.length}`;

  return (
    <>
      <h1>My todos</h1>
      <ul className={styles.ul}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <p>{notCompletedText}</p>
    </>
  );
}

interface TodosSocketListProps {
  todos: Todo[];
}

export function TodosSocketList({ todos }: TodosSocketListProps) {
  if (todos.length === 0) return null;

  const notCompleted = todos.filter((todo) => !todo.completed).length;

  const notCompletedText = `${notCompleted} task${
    notCompleted === 1 ? "" : "s"
  } left to do of ${todos.length}`;

  return (
    <>
    <h2>Todo tasks from sockets</h2>
      <ul className={styles.ul}>
        {todos.map((todo) => (
          <TodoSocketItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <p>{notCompletedText}</p>
    </>
  );
}

export default TodosList;
