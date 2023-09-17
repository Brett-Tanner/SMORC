import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
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
    return render(
      <MemoryRouter>
        <Card card={testCard} context="shop" />
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
      // TODO: install userEvent library
      const user = userEvent.setup();

      const detailButton = await screen.findByRole("button", {
        name: "More Details",
      });
      user.click(detailButton);

      expect(screen.getByText("CMC: 3")).toBeVisible();
      expect(screen.getByText("Color: B, U")).toBeVisible();
      expect(screen.getByText("How about a pie?")).toBeVisible();
      expect(screen.getByText("Stats: 4/5")).toBeVisible();
      expect(screen.getByText("Rarity: Rare")).toBeVisible();
      expect(screen.getByText("Type: Planeswalker")).toBeVisible();
    });
  });

  describe.todo("dynamic behavior", () => {
    it("+ increases amount in cart", async () => {
      renderCard();
      const user = userEvent.setup();
      // TODO: Mock setCard or whatever it'll be called here

      const addButton = await screen.findByRole("button", { name: "+" });
      user.click(addButton);

      expect().toBeCalledTimes(1);
    });
    it("- decreases amount in cart", async () => {
      renderCard();
      const user = userEvent.setup();
      // TODO: Mock setCard or whatever it'll be called here

      const minusButton = await screen.findByRole("button", { name: "-" });
      user.click(minusButton);

      expect().toBeCalledTimes(1);
    });
    it("displayed amount in cart updates optimistically", async () => {
      renderCard();
      const user = userEvent.setup();

      const addButton = await screen.findByRole("button", { name: "+" });
      const cartCount = screen.getByText("2");

      user.click(addButton);

      expect(cartCount.innerText).toBe("3");
    });
    it("displays total cost based on number in cart", () => {});
  });

  describe.todo("variants", () => {
    it("uses flex-col in shop variant", () => {
      render(
        <MemoryRouter>
          <Card card={testCard} context="shop" />
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
          <Card card={testCard} context="cart" />
        </MemoryRouter>
      );

      const displayedCard = screen.getByRole("article", {
        name: "Oko, Prince of Something",
      });

      expect(displayedCard).toHaveClass("flex-col");
    });
  });
});
