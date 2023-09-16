import hero from "../images/hero.jpg";

function Hero() {
  return (
    <main
      style={{ backgroundImage: `url(${hero})` }}
      className="grow max-h-full overflow-hidden mt-[10dvh] bg-cover bg-center bg-no-repeat bg-fixed md:shadow-hero"
    >
      <div className="h-full flex flex-col justify-around items-center md:items-start gap-3  overflow-scroll w-full py-32 md:p-6 font-relocation text-red-600">
        <div className="w-[20vw]">
          <h1 className="text-4xl">Welcome to numba 1 facerush store!</h1>
          <p></p>
        </div>

        <div className="flex flex-col gap-3 border-2 border-red-600 p-4 w-[20vw] rotate-6">
          <h2 className="text-xl">
            Why better den dumb{" "}
            <a
              href="https://heartfelt-paprenjak-3cf070.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              blu
            </a>{" "}
            card?
          </h2>
          <ul className="flex flex-col gap-2 text-lg">
            <li>1. Red go face</li>
            <li>3. If go face, other player die</li>
            <li>4. Death best counterspell!</li>
            <li>5. No intelyjense needed!!!</li>
          </ul>
        </div>

        <a
          href=""
          className="bg-red-600 rounded-full text-stone-900 p-4 ml-[5vw]"
        >
          Buy SMORC
        </a>
      </div>
    </main>
  );
}

export default Hero;
