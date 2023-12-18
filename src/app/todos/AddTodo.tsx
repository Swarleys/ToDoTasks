"use client";

import { add } from "@/features/todos/todosSlice";
import { FormEvent, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    function addTodo() {
        if (task.length === 0) return;
        dispatch(add({ task, id: crypto.randomUUID(), completed: false }));
        setTask("");
    }

    function handleSubmit(e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        addTodo();
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTask(e.target.value)
        }
        placeholder="Add a new task"
        type="text"
        id="task"
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default AddTodo;
