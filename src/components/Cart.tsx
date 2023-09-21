import { card } from "../declarations";
import Card from "./Card";

interface props {
  open: boolean;
  cart?: card[];
  setCards?: React.Dispatch<React.SetStateAction<card[]>>;
}

function Cart({ open, cart, setCards }: props) {
  const backdropClasses = open
    ? "w-full min-h-[90vh] absolute inset-0 mt-[10vh] bg-red-600 bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
    : "hidden";

  const dialogClasses = open
    ? "max-h-full w-full flex flex-col items-center p-10 gap-3 overflow-scroll"
    : "hidden";

  if (cart && setCards && cart?.length > 0) {
    return (
      <div className={backdropClasses}>
        <div role="dialog" className={dialogClasses}>
          <h1 className="font-death text-stone-800 text-5xl text-center">
            Loot
          </h1>
          {cart.map((card) => {
            return (
              <Card
                key={card.name}
                card={card}
                context="cart"
                setCards={setCards}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={backdropClasses}>
        <div
          role="dialog"
          className={dialogClasses + " h-full justify-center gap-10"}
        >
          <h1 className="font-death text-stone-800 text-5xl text-center">
            Loot
          </h1>
          <p className="font-relocation text-4xl">No go face yet (</p>
        </div>
      </div>
    );
  }
}

export default Cart;
