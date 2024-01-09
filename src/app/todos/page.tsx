"use client";
import AddTodo from "./AddTodo/AddTodo";
import FilterTodo from "./FilterTodos/FilterTodo";
import HeaderTodos from "./HeaderTodos/HeaderTodos";
import TodosList from "./TodosList/TodosList";

export default function Todos() {
  return (
    <>
      <FilterTodo />
      <HeaderTodos />
      <AddTodo />
      <TodosList />
    </>
  );
}
