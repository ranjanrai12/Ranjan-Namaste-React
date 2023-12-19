import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Code/Components/Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../Utils/appStore";
import "@testing-library/jest-dom";

describe("Header page", () => {
  it("should render header component with logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  it("should render header component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartText = screen.getByText(/Cart/);
    expect(cartText).toBeInTheDocument();
  });
  it("should logout button on click on login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
