import { act, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Card from "../components/Card";
import { MemoryRouter } from "react-router-dom";
import { card } from "../declarations";

describe("Card component", () => {
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

  function renderCard() {
    const fn = vi.fn();
    render(
      <MemoryRouter>
        <Card card={testCard} context="shop" setCards={fn} />
      </MemoryRouter>
    );
    return fn;
  }

  describe("initial view", () => {
    it("displays card art, number in cart, unit price, total price", async () => {
      renderCard();

      const displayedCard = await screen.findByRole("article");
      const image = await screen.findByRole("img", {
        name: "Oko, Prince of Something",
      });

      expect(displayedCard).toContainElement(image);
      expect(displayedCard).toHaveTextContent("2");
      expect(displayedCard).toHaveTextContent("Unit Price: $200");
      expect(displayedCard).toHaveTextContent("Total Price: $400");
    });

    it("displays the passed image", async () => {
      renderCard();

      const image = await screen.findByRole("img", {
        name: "Oko, Prince of Something",
      });

      expect(image).toHaveAttribute("src", "../images/cart-icon.svg");
    });

    it("displays card details when details button clicked", async () => {
      renderCard();
      const user = userEvent.setup();

      const detailButton = await screen.findByRole("button", {
        name: "More Details",
      });

      await act(async () => {
        await user.click(detailButton);
      });

      expect(screen.getByTitle("cardBack")).toBeVisible();
    });
  });

  describe("dynamic behavior", () => {
    it("displayed amount in cart increments", async () => {
      const fn = renderCard();
      const user = userEvent.setup();

      const addButton = await screen.findByRole("button", { name: "+" });

      await act(async () => {
        await user.click(addButton);
      });

      expect(fn).toBeCalledTimes(1);
    });

    it("displayed amount in cart decrements", async () => {
      const fn = renderCard();
      const user = userEvent.setup();

      const minusButton = await screen.findByRole("button", { name: "-" });

      await user.click(minusButton);

      expect(fn).toBeCalledTimes(1);
    });

    it("stops at 0", async () => {
      const fn = vi.fn();
      render(
        <MemoryRouter>
          <Card
            card={{ ...testCard, cartCount: 0 }}
            context="shop"
            setCards={fn}
          />
        </MemoryRouter>
      );

      const user = userEvent.setup();
      const minusButton = await screen.findByRole("button", { name: "-" });
      await user.click(minusButton);

      expect(fn).toBeCalledTimes(0);
    });
  });

  describe("variants", () => {
    const fn = vi.fn();

    it("uses flex-col in shop variant", () => {
      render(
        <MemoryRouter>
          <Card card={testCard} context="shop" setCards={fn} />
        </MemoryRouter>
      );

      const displayedCard = screen.getByTitle("cardFace");

      expect(displayedCard).toHaveClass("flex-col");
    });

    it("uses flex-row in cart variant", () => {
      render(
        <MemoryRouter>
          <Card card={testCard} context="cart" setCards={fn} />
        </MemoryRouter>
      );

      const displayedCard = screen.getByTitle("cardFace");

      expect(displayedCard).toHaveClass("flex");
    });
  });
});
