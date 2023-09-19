import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Nav from "../components/Nav";
import { MemoryRouter } from "react-router-dom";

describe("Nav component", () => {
  it("doesn't show cart if no size passed", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(
      screen.queryByRole("button", { name: "10" })
    ).not.toBeInTheDocument();
  });

  it("displays the cartSize in a badge", () => {
    render(
      <MemoryRouter>
        <Nav cartSize={10} />
      </MemoryRouter>
    );

    const badge = screen.getByRole("button", { name: "10" });
    expect(badge).toHaveTextContent("10");
  });

  it("displays the cartSize even if 0", () => {
    render(
      <MemoryRouter>
        <Nav cartSize={0} />
      </MemoryRouter>
    );

    const badge = screen.getByRole("button", { name: "0" });
    expect(badge).toHaveTextContent("0");
  });

  it.todo("reveals cart dialog when clicked", () => {});
});
