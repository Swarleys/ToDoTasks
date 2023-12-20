"use client";
import AddTodo from "./AddTodo/AddTodo";
import HeaderTodos from "./HeaderTodos/HeaderTodos";
import TodosList from "./TodosList/TodosList";

export default function Todos() {
  return (
    <>
      <HeaderTodos />
      <AddTodo />
      <TodosList />
    </>
  );
}
