"use client";

import { Todo, remove, toggle } from "@/features/todos/todosSlice";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";
import TodoItemModal from "../TodoItemModal/TodoItemModal";

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
        <div className={styles.flex}>
          <Checkbox.Root
            className={`${styles.pointer} ${styles["checkbox-root"]} `}
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            id={todo.id}
          >
            <Checkbox.Indicator>
              <CheckIcon color="#059669" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className={styles.label} htmlFor={todo.id}>
            <p>{todo.task}</p>
          </label>
        </div>
        <div className={styles.icons_container}>
          <TodoItemModal todo={todo} />
          <Trash2
            className={styles.pointer}
            onClick={() => deleteTodo(todo.id)}
            size={20}
            color="#DC2626"
            aria-label="delete todo"
          />
        </div>
      </li>
    </>
  );
};

export default TodoItem;
