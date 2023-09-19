import Nav from "./Nav";
import { useEffect, useState } from "react";
import { card } from "../declarations";
import Card from "./Card";

function Shop() {
  const [cards, setCards] = useState<card[]>([]);
  const cartCards = cards.filter((card) => card.cartCount > 0);

  useEffect(() => {
    setCards([]);
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
