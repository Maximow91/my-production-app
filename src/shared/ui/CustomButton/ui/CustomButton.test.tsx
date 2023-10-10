import { render, screen } from "@testing-library/react";
import { CustomButton, ButtonTheme } from "../ui/CustomButton";

describe("CustomButton", () => {
  test("render test", () => {
    render(<CustomButton>Test</CustomButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("must add class clear ", () => {
    render(<CustomButton theme={ButtonTheme.CLEAR}>Test</CustomButton>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
