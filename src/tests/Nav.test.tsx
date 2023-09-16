import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Nav from "../components/Nav";

describe("Nav component", () => {
  it("displays the cartSize in a badge", () => {
    render(<Nav cartSize={10} />);

    const badge = screen.getByRole("button", { name: "10" });
    expect(badge).toHaveTextContent("10");
  });

  it.todo("reveals cart dialog when clicked", () => {});
});
