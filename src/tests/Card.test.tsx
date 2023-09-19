import { act, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Card from "../components/Card";
import { MemoryRouter } from "react-router-dom";
import { card } from "../declarations";
import Shop from "../components/Shop";

describe("Card component", () => {
  function renderCard() {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
  }

  describe("initial view", () => {
    it("displays card art, number in cart, unit price", async () => {
      renderCard();

      const displayedCard = await screen.findByRole("article");
      const image = await screen.findByRole("img", {
        name: "Oko, Prince of Something",
      });

      expect(displayedCard).toContainElement(image);
      expect(displayedCard).toHaveTextContent("2");
      expect(displayedCard).toHaveTextContent("200");
    });

    it("displays the passed image", async () => {
      renderCard();

      const image = await screen.findByRole("img", {
        name: "Oko, Prince of Something",
      });

      expect(image).toHaveAttribute("src", "../images/cart-icon.svg");
    });

    it.todo("displays card details when details button clicked", async () => {
      renderCard();
      const user = userEvent.setup();

      const detailButton = await screen.findByRole("button", {
        name: "More Details",
      });

      await user.click(detailButton);

      expect(screen.getByText("CMC: 3")).toBeVisible();
      expect(screen.getByText("Color: B, U")).toBeVisible();
      expect(screen.getByText("How about a pie?")).toBeVisible();
      expect(screen.getByText("Stats: 4/5")).toBeVisible();
      expect(screen.getByText("Rarity: Rare")).toBeVisible();
      expect(screen.getByText("Type: Planeswalker")).toBeVisible();
    });
  });

  describe("dynamic behavior", () => {
    it("displayed amount in cart increments", async () => {
      renderCard();
      const user = userEvent.setup();

      const addButton = await screen.findByRole("button", { name: "+" });

      await act(async () => {
        await user.click(addButton);
      });
      const incrementedCount = screen.findByText("3", { selector: "p" });

      expect(incrementedCount).toBeDefined();
    });

    it("displayed amount in cart decrements", async () => {
      renderCard();
      const user = userEvent.setup();

      const minusButton = await screen.findByRole("button", { name: "-" });

      await user.click(minusButton);
      const decrementedCount = screen.findByText("1", { selector: "p" });

      expect(decrementedCount).toBeDefined();
    });

    it("stops at 0", async () => {
      renderCard();
      const user = userEvent.setup();

      const minusButton = await screen.findByRole("button", { name: "-" });

      for (let i = 0; i < 5; i++) {
        await user.click(minusButton);
      }
      const limitCount = screen.findByText("0", { selector: "p" });

      expect(limitCount).toBeDefined();
    });

    it.todo("displays total cost based on number in cart", () => {});
  });

  describe.todo("variants", () => {
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

    const fn = vi.fn();

    it("uses flex-col in shop variant", () => {
      render(
        <MemoryRouter>
          <Card card={testCard} context="shop" setCards={fn} />
        </MemoryRouter>
      );

      const displayedCard = screen.getByRole("article", {
        name: "Oko, Prince of Something",
      });

      expect(displayedCard).toHaveClass("flex");
    });
    it("uses flex-row in cart variant", () => {
      render(
        <MemoryRouter>
          <Card card={testCard} context="cart" setCards={fn} />
        </MemoryRouter>
      );

      const displayedCard = screen.getByRole("article", {
        name: "Oko, Prince of Something",
      });

      expect(displayedCard).toHaveClass("flex-col");
    });
  });
});
