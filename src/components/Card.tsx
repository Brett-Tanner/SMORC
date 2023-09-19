import { useState } from "react";
import { card } from "../declarations";

interface props {
  card: card;
  context: "shop" | "cart";
  setCards: React.Dispatch<React.SetStateAction<card[]>>;
}

function Card({ card, context, setCards }: props) {
  const [side, setSide] = useState<"front" | "back">("front");
  const articleClasses = `p-3 rounded-xl bg-stone-700 text-center text-neutral-400${
    context === "cart" ? " md:w-3/4" : ""
  }`;
  const classes = `flex gap-2 justify-center items-center ${
    context === "cart" ? "gap-5" : " flex-col"
  }`;

  const handleIncrement = () => {
    setCards((cards) => {
      return cards.map((stateCard) => {
        if (stateCard.name === card.name) {
          return { ...stateCard, cartCount: card.cartCount + 1 };
        } else {
          return { ...stateCard };
        }
      });
    });
  };

  const handleDecrement = () => {
    if (card.cartCount <= 0) return false;

    setCards((cards) => {
      return cards.map((stateCard) => {
        if (stateCard.name === card.name) {
          return { ...stateCard, cartCount: card.cartCount - 1 };
        } else {
          return { ...stateCard };
        }
      });
    });
  };

  // TODO: if in cart context, render a remove from cart button instead
  if (side === "front") {
    return (
      <article className={articleClasses}>
        <div title="cardFace" className={"cardFace " + classes}>
          <h2 className="font-bold text-xl">{card.name}</h2>
          <img src={card.img} alt={card.name} />
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={handleDecrement}
              className="bg-stone-600 p-1 rounded-s-md hover:bg-stone-500"
            >
              -
            </button>
            <p className="bg-stone-400 p-1 text-red-800">{card.cartCount}</p>
            <button
              type="button"
              onClick={handleIncrement}
              className="bg-stone-600 p-1 rounded-e-md hover:bg-stone-500"
            >
              +
            </button>
          </div>
          <p>Unit Price: ${card.price}</p>
          <p>Total Price: ${card.price * card.cartCount}</p>
          <button
            type="button"
            onClick={() => setSide("back")}
            className={`bg-stone-600 hover:bg-stone-500 rounded ${
              context === "cart" ? " basis-2/12" : " w-1/2"
            }`}
          >
            More Details
          </button>
        </div>
      </article>
    );
  } else {
    return (
      <article className={articleClasses}>
        <div title="cardBack" className={"cardBack " + classes}>
          <h2 className="font-bold text-xl">{card.name}</h2>
          <p className="italic">{card.flavor}</p>
          <p>CMC: {card.cmc}</p>
          <p>Color: {card.colorIdentity.join(", ")}</p>
          <p>Stats: {card.power + "/" + card.toughness}</p>
          <p>Rarity: {capitalize(card.rarity)}</p>
          <p>Type: {capitalize(card.type)}</p>
          <button
            type="button"
            onClick={() => setSide("front")}
            className={`bg-stone-600 hover:bg-stone-500 rounded ${
              context === "cart" ? " basis-2/12" : " w-1/2"
            }`}
          >
            Key Info
          </button>
        </div>
      </article>
    );
  }
}

function capitalize(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

export default Card;
