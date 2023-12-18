"use client";

import { Todo, remove, toggle } from "@/features/todos/todosSlice";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";
import TodoItemModal from "./TodoItemModal";

export interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const deleteTodo = (id: string) => dispatch(remove(id));
  const toggleTodo = (id: string) => dispatch(toggle(id));

  return (
    <>
      <li className={`${styles.list} ${styles.flex}`}>
        <Checkbox.Root
          className={`${styles.pointer} ${styles["checkbox-root"]} `}
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
          id={todo.id}
        >
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={styles.label} htmlFor={todo.id}>
          <p>{todo.task}</p>
        </label>
        <TodoItemModal todo={todo} />
        <Trash2
          className={styles.pointer}
          onClick={() => deleteTodo(todo.id)}
        />
      </li>
    </>
  );
};

export default TodoItem;