import { render, screen } from "@testing-library/react";
import Contact from "../Code/Components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page", () => {
  it("Should load contact page in DOM", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    console.log(heading);
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should check inpul element is preset or not", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });
});
