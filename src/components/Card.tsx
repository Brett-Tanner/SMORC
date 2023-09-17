import { card } from "../declarations";

interface props {
  card: card;
  context: "shop" | "cart";
}

function Card({ card, context }: props) {
  return (
    <article className={context === "cart" ? "flex-col" : ""}>
      <div className="cardFace bg-stone-500 transition-transform">
        <h2>{card.name}</h2>
        <img src={card.img} alt={card.name} />
        <div>
          <div>
            <button>-</button>
            <p>{card.cartCount}</p>
            <button>+</button>
          </div>
          <p>{card.price}</p>
        </div>
        <button type="button">More Details</button>
      </div>
      <div className="cardFace bg-stone-500 rotate-flip transition-transform">
        <p>CMC: {card.cmc}</p>
        <p>Color: {card.colorIdentity.join(", ")}</p>
        <p>{card.flavor}</p>
        <p>Stats: {card.power + "/" + card.toughness}</p>
        <p>Rarity: {card.rarity}</p>
        <p>Type: {card.type}</p>
      </div>
    </article>
  );
}

export default Card;
