import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { add } from "@/features/todos/todosSlice";
import TodoItemModal from "./TodoItemModal";

describe("TodoItemModal", () => {
  it("triggers the modal when SVG is clicked and updates the test", () => {
    const todo = { id: "1", task: "Sparta Technical test", completed: false };
    const store = configureStore({ reducer: todosReducer });
    store.dispatch(add(todo));

    render(
      <Provider store={store}>
        <TodoItemModal todo={todo} />
      </Provider>
    );

    const svgElement = screen.getByLabelText("edit todo");
    fireEvent.click(svgElement);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "Pokemon" } });
    expect(input.value).toBe("Pokemon");
    const button = screen.getByRole("button", { name: "Update Todo" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(store.getState().todos[0].task).toBe("Pokemon");
    expect(modal).not.toBeInTheDocument();
  });
});
