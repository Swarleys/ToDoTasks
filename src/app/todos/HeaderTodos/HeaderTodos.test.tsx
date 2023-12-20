import { fireEvent, render, screen } from "@testing-library/react";
import HeaderTodos from "./HeaderTodos";

describe("HeaderTodos", () => {
  let cookieValue = {};

  beforeEach(() => {
    cookieValue = {};
    Object.defineProperty(document, "cookie", {
      get: jest.fn().mockImplementation(() => {
        return Object.entries(cookieValue)
          .map(([key, val]) => `${key}=${val}`)
          .join("; ");
      }),
      set: jest.fn().mockImplementation((cookie) => {
        const [key, val] = cookie.split("=");
        // @ts-ignore
        cookieValue[key.trim()] = val;
      }),
    });

    const location = window.location;
    delete (global.window as any).location;
    global.window.location = { ...location, reload: jest.fn() };
  });
  it("renders the title", () => {
    render(<HeaderTodos />);

    const titleElement = screen.getByText(/ToDo Tasks/i);
    expect(titleElement).toBeInTheDocument();
    const buttonElement = screen.getByText(/Log out/i);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(document.cookie).toContain("user-token=;");
    expect(window.location.reload).toHaveBeenCalled();
  });

});
