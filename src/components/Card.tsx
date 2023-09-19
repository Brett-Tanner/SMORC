import { useState } from "react";
import { card } from "../declarations";

interface props {
  card: card;
  context: "shop" | "cart";
  setCards: React.Dispatch<React.SetStateAction<card[]>>;
}

function Card({ card, context, setCards }: props) {
  const [side, setSide] = useState<"front" | "back">("front");
  const commonClasses = "transition-transform";
  const classes =
    context === "shop" ? commonClasses + " flex-col" : commonClasses + " flex";

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

  if (side === "front") {
    return (
      <article className="p-3 rounded-xl bg-stone-500">
        <div title="cardFace" className={"cardFace " + classes}>
          <h2>{card.name}</h2>
          <img src={card.img} alt={card.name} />
          <div>
            <div>
              <button type="button" onClick={handleDecrement}>
                -
              </button>
              <p>{card.cartCount}</p>
              <button type="button" onClick={handleIncrement}>
                +
              </button>
            </div>
            <p>Unit Price: ${card.price}</p>
            <p>Total Price: ${card.price * card.cartCount}</p>
          </div>
          <button type="button" onClick={() => setSide("back")}>
            More Details
          </button>
        </div>
      </article>
    );
  } else {
    return (
      <article className="p-3 rounded-xl bg-stone-500">
        <div title="cardBack" className={"cardBack " + classes}>
          <h2>{card.name}</h2>
          <p>CMC: {card.cmc}</p>
          <p>Color: {card.colorIdentity.join(", ")}</p>
          <p>{card.flavor}</p>
          <p>Stats: {card.power + "/" + card.toughness}</p>
          <p>Rarity: {card.rarity}</p>
          <p>Type: {card.type}</p>
          <button type="button" onClick={() => setSide("front")}>
            Key Info
          </button>
        </div>
      </article>
    );
  }
}

export default Card;
