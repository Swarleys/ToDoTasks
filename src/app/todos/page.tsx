"use client";
import AddTodo from "./AddTodo/AddTodo";
import FilterTodo from "./FilterTodos/FilterTodo";
import HeaderTodos from "./HeaderTodos/HeaderTodos";
import TodosList, { TodosSocketList } from "./TodosList/TodosList";
import { useEffect, useState } from "react";
import socket from "@/lib/socket";
import { Todo } from "@/features/todos/todosSlice";

export default function Todos() {
  const [socketTodos, setSocketTodos] = useState<Todo[]>([]);
  useEffect(() => {
    socket.on("connection", () => {
      console.log("Conectado al servidor");
    });

    socket.on("addTodo", (todo) => {
      setSocketTodos((prev) => [...prev, todo]);
    });

    socket.on("updateTodo", (todo) => {
      setSocketTodos((prev) => {
        const index = prev.findIndex((t) => t.id === todo.id);
        const newTodos = [...prev];
        newTodos[index] = todo;
        return newTodos;
      });
    });

    socket.on("removeTodo", (id) => {
      setSocketTodos((prev) => {
        const index = prev.findIndex((t) => t.id === id);
        const newTodos = [...prev];
        newTodos.splice(index, 1);
        return newTodos;
      });
    });

    socket.on("toggleTodo", (id, completed) => {
      console.log(id, completed);
      setSocketTodos((prev) => {
        const index = prev.findIndex((t) => t.id === id);
        prev[index].completed = completed;
        const newTodos = prev;
        return [...newTodos];
      });
    });

    return () => {
      socket.off("addTodo");
      socket.off("connection");
      socket.off("updateTodo");
      socket.off("removeTodo");
      socket.off("toggleTodo");
    };
  }, []);
  return (
    <>
      <FilterTodo />
      <HeaderTodos />
      <AddTodo />
      <TodosList />
      <TodosSocketList todos={socketTodos} />
    </>
  );
}
