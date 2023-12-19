import { useSelector } from "react-redux";
import { selectTodos } from "@/features/todos/todosSlice";
import TodoItem from "./TodoItem";
import { useState } from "react";
import styles from './TodosList.module.css';

function TodosList() {
  const todos = useSelector(selectTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (todos.length === 0) return null;

  const notCompleted = `${
    todos.filter((todo) => !todo.completed).length
  } tasks left to do of ${todos.length}`;

  return (
    <>
      <ul className={styles.ul}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <p>{notCompleted}</p>
    </>
  );
}

export default TodosList;
