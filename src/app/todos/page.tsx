"use client";
import AddTodo from "./AddTodo";
import HeaderTodos from "./HeaderTodos";
import TodosList from "./TodosList";

export default function Todos() {
  return (
    <>
      <HeaderTodos />
      <AddTodo />
      <TodosList />
    </>
  );
}
