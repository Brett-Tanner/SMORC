import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Nav from "../components/Nav";
import { MemoryRouter } from "react-router-dom";
import { card } from "../declarations";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Nav component", () => {
  const testCard: card = {
    cartCount: 2,
    cmc: 3,
    colorIdentity: ["B", "U"],
    flavor: "How about a pie?",
    img: "../images/cart-icon.svg",
    name: "Oko, Prince of Something",
    power: "4",
    price: 200,
    rarity: "rare",
    toughness: "5",
    type: "planeswalker",
  };

  it("doesn't show cart if no cart passed", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(
      screen.queryByRole("button", { name: "10" })
    ).not.toBeInTheDocument();
  });

  it("displays the cart size in a badge", () => {
    const fn = vi.fn();
    const testCards = new Array(10).map(() => {
      return {
        ...testCard,
        name: (Math.random() + 1).toString(36).substring(7),
      };
    });

    render(
      <MemoryRouter>
        <Nav cart={testCards} setCards={fn} />
      </MemoryRouter>
    );

    const badge = screen.getByRole("button", { name: "10" });
    expect(badge).toHaveTextContent("10");
  });

  it("displays the cartSize even if 0", () => {
    const fn = vi.fn();

    render(
      <MemoryRouter>
        <Nav cart={[]} setCards={fn} />
      </MemoryRouter>
    );

    const badge = screen.getByRole("button", { name: "0" });
    expect(badge).toHaveTextContent("0");
  });

  it("reveals cart dialog when clicked", async () => {
    const fn = vi.fn();
    const user = userEvent.setup();
    const testCards = new Array(5).map(() => {
      return {
        ...testCard,
        name: (Math.random() + 1).toString(36).substring(7),
      };
    });

    render(
      <MemoryRouter>
        <Nav cart={testCards} setCards={fn} />
      </MemoryRouter>
    );

    const cartButton = screen.getByRole("button", { name: "5" });
    await act(async () => await user.click(cartButton));
    const cart = screen.getByRole("dialog");

    expect(cart).toBeVisible();
  });
});
