import React, { ChangeEvent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./TodoItemModal.module.css";
import { Pencil } from "lucide-react";
import { TodoItemProps } from "./TodoItem";
import { useDispatch } from "react-redux";
import { update, Todo } from "@/features/todos/todosSlice";

const TodoItemModal = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  function updateTodo(todo: Todo) {
    dispatch(update(todo));
  }

  return (
    <Dialog.Root onOpenChange={() => setNewTask(todo.task)}>
      <Dialog.Trigger asChild>
        <Pencil className={styles.pointer} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialog_overlay} />
        <Dialog.Content className={styles.dialog_content}>
          <Dialog.Title className={styles.dialog_title}>Edit ToDo</Dialog.Title>
          <Dialog.Description className={styles.dialog_description}>
            Update your Todo Task
          </Dialog.Description>

          <input
            className={styles.input}
            id="name"
            value={newTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewTask(e.target.value)
            }
          />
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                onClick={() => updateTodo({ ...todo, task: newTask })}
                className={styles.button}
              >
                Update Todo
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.icon_button} aria-label="Close">
              <Cross2Icon className={styles.pointer} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TodoItemModal;