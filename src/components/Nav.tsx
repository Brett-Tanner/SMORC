import { Link } from "react-router-dom";
import cartIcon from "../images/cart-icon.svg";
import { card } from "../declarations";
import Cart from "./Cart";
import { useState } from "react";

interface props {
  cart?: card[];
  setCards?: React.Dispatch<React.SetStateAction<card[]>>;
}

function Nav({ cart, setCards }: props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Cart open={cartOpen} cart={cart} setCards={setCards} />
      <nav className="fixed flex items-center w-screen h-[10dvh] py-4 px-8 bg-stone-900">
        <Link to="/" className="grow text-4xl font-death text-red-700">
          SMORC
        </Link>
        {cart !== undefined && setCards !== undefined ? (
          <button
            type="button"
            className="relative mt-2"
            onClick={() => setCartOpen((open) => (open ? false : true))}
          >
            <img src={cartIcon} width="40" className="invert" />
            <p className="absolute -right-2 -top-3 rounded-full bg-red-600 py-1 px-2 font-bold">
              {cart.length}
            </p>
          </button>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Nav;
