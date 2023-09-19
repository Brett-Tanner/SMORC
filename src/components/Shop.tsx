import Nav from "./Nav";
import { useEffect, useState } from "react";
import { card } from "../declarations";
import Card from "./Card";

function Shop() {
  const [cards, setCards] = useState<card[]>([]);
  const cartCards = cards.filter((card) => card.cartCount > 0);

  useEffect(() => {
    setCards([
      {
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
      },
    ]);
  }, []);

  return (
    <>
      <Nav cartSize={cartCards.length} />
      <main className="mt-[10dvh]">
        <h1 className="font-death text-red-600 text-3xl">
          RED LIKE BLOOD OF ENEMY
        </h1>
        {cards.map((card) => {
          return (
            <Card
              key={card.name}
              card={card}
              context="shop"
              setCards={setCards}
            />
          );
        })}
      </main>
    </>
  );
}

export default Shop;
