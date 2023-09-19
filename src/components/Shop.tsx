import Nav from "./Nav";
import { useEffect, useState } from "react";
import { card } from "../declarations";
import Card from "./Card";

function Shop() {
  const [cards, setCards] = useState<card[]>([]);
  const cartCards = cards.filter((card) => card.cartCount > 0);

  // TODO: replace with API logic once done with styling
  useEffect(() => {
    const fakeCards = [];
    for (let i = 0; i < 16; i++) {
      fakeCards.push({
        cartCount: 2,
        cmc: 3,
        colorIdentity: ["B", "U"],
        flavor: "How about a pie?",
        img: "../images/cart-icon.svg",
        name: (Math.random() + 1).toString(36).substring(7),
        power: "4",
        price: 200,
        rarity: "rare",
        toughness: "5",
        type: "planeswalker",
      });
    }
    setCards(fakeCards);
  }, []);

  return (
    <>
      <Nav
        cart={cartCards.filter((card) => card.cartCount > 0)}
        setCards={setCards}
      />
      <main className="mt-[10dvh] h-[90vh] overflow-scroll grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-items-stretch gap-3 p-3">
        <h1 className="font-death text-red-600 text-3xl col-span-full text-center">
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
