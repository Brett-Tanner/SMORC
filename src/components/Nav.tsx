import cart from "../images/cart-icon.svg";

interface props {
  cartSize: number;
}

function Nav({ cartSize }: props) {
  return (
    <nav className="flex items-center w-screen py-4 px-8 bg-stone-900">
      <h1 className="grow text-4xl font-death text-red-700">SMORC</h1>
      <button type="button" className="relative mt-2">
        <img src={cart} width="50" className="invert" />
        <p className="absolute -right-2 -top-3 rounded-full bg-red-600 py-1 px-2 font-bold">
          {cartSize}
        </p>
      </button>
    </nav>
  );
}

export default Nav;
