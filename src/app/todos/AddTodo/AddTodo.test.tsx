import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "@/features/todos/todosSlice";
import AddTodo from "./AddTodo";

describe("AddTodo", () => {
  it("renders AddTodo and adds task to the store", () => {
    const store = configureStore({ reducer: todosReducer });
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const input = screen.getByPlaceholderText(
      "Add a new task"
    ) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: "Adding a task to the store" },
    });
    expect(input.value).toBe("Adding a task to the store");
    const button = screen.getByRole("button", { name: "Add" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(store.getState().todos[0].task).toBe("Adding a task to the store");
  });
});
