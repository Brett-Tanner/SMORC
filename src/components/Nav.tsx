import { Link } from "react-router-dom";
import cart from "../images/cart-icon.svg";

interface props {
  cartSize: number;
}

function Nav({ cartSize }: props) {
  return (
    <nav className="fixed flex items-center w-screen h-[10dvh] py-4 px-8 bg-stone-900">
      <Link to="/" className="grow text-4xl font-death text-red-700">
        SMORC
      </Link>
      <button type="button" className="relative mt-2">
        <img src={cart} width="40" className="invert" />
        <p className="absolute -right-2 -top-3 rounded-full bg-red-600 py-1 px-2 font-bold">
          {cartSize}
        </p>
      </button>
    </nav>
  );
}

export default Nav;
