import Nav from "./Nav";
import { useEffect, useState } from "react";
import { card } from "../declarations";
import { apiCard, response } from "../api";
import Card from "./Card";

function Shop() {
  const [cards, setCards] = useState<card[]>([]);
  const cartCards = cards.filter((card) => card.cartCount > 0);

  useEffect(() => {
    setCards([]);

    async function getCards() {
      const response = await fetch(
        "https://api.magicthegathering.io/v1/cards?colorIdentity=R&pageSize=50"
      );
      const json: response = await response.json();
      const apiCards = json.cards.map((apiCard: apiCard) => {
        const newCard: card = {
          cartCount: 0,
          cmc: apiCard.cmc,
          flavor: apiCard.flavor,
          id: apiCard.id,
          img: apiCard.imageUrl,
          name: apiCard.name,
          power: apiCard.power,
          price: Math.floor(Math.random() * 100),
          rarity: apiCard.rarity,
          toughness: apiCard.toughness,
          type: apiCard.type,
        };
        return newCard;
      });
      const deDuped: card[] = apiCards.filter((card: card) => {
        return (
          card.img !== undefined &&
          apiCards.find((apiCard) => apiCard.id === card.id)
        );
      });

      setCards(deDuped);
    }

    getCards();
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
              key={card.id}
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
