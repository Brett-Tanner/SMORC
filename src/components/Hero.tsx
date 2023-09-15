import hero from "../images/hero.jpg";

function Hero() {
  return (
    <main
      style={{ backgroundImage: `url(${hero})` }}
      className="grow max-h-full overflow-hidden mt-[10dvh] bg-cover bg-center bg-no-repeat bg-fixed md:shadow-hero"
    >
      <div className="max-h-full flex flex-col justify-center items-center md:items-start gap-3  overflow-scroll w-full py-32 md:p-3">
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>{" "}
        <div className="w-4/5 md:w-[20vw] h-[10dvh] bg-stone-900 text-neutral-200">
          Test div
        </div>
        {/* TODO: add welcome heading, skewed notice with reasons it's better, and link to the shop page in the left shadow */}
      </div>
    </main>
  );
}

export default Hero;
