import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { add } from "@/features/todos/todosSlice";
import TodosList from "./TodosList";

describe("TodosList", () => {
  it("renders the todos list correctly", () => {
    const todos = [
      { id: "1", task: "Unit Testing", completed: false },
      { id: "2", task: "E2E", completed: true },
    ];

    const store = configureStore({ reducer: {todos: todosReducer} });
    store.dispatch(add(todos[0]));
    store.dispatch(add(todos[1]));

    render(
      <Provider store={store}>
        <TodosList />
      </Provider>
    );

    todos.forEach((todo) => {
      const listItem = screen.getByText(todo.task);
      expect(listItem).toBeInTheDocument();
    });
  });
});
