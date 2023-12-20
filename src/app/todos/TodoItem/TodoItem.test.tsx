import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { add } from "@/features/todos/todosSlice";

describe("TodoItem", () => {
  it("renders the todo text", () => {
    const todo = { id: "1", task: "Sparta Technical test", completed: false };
    const store = configureStore({ reducer: todosReducer });
    store.dispatch(add(todo));
    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    const todoElement = screen.getByText(/Sparta Technical test/i);
    expect(todoElement).toBeInTheDocument();
  });

  it("Complete the task task", () => {
    const todo = { id: "1", task: "Sparta Technical test", completed: false };
    const store = configureStore({ reducer: todosReducer });
    store.dispatch(add(todo));
    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    const todoElement = screen.getByLabelText("Sparta Technical test");
    expect(store.getState().todos[0].completed).toBe(false);
    todoElement.click();
    expect(store.getState().todos[0].completed).toBe(true);
  });

  it("Delete the task task", () => {
    const todo = { id: "1", task: "Sparta Technical test", completed: false };
    const store = configureStore({ reducer: todosReducer });
    store.dispatch(add(todo));
    render(
      <Provider store={store}>
        <TodoItem todo={todo} />
      </Provider>
    );

    const svgElement = screen.getByLabelText("delete todo");
    expect(store.getState().todos.length).toBe(1);
    fireEvent.click(svgElement);
    expect(store.getState().todos.length).toBe(0);
  });
});
