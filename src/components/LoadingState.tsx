function LoadingState() {
  const cards = [];
  for (let i = 0; i < 50; i++) {
    cards.push(
      <div
        key={i}
        className="animate-pulse bg-stone-600 opacity-50 rounded flex flex-col p-3 gap-3 h-[60vh]"
      >
        <div className="animate-pulse bg-red-800 rounded basis-4/5"></div>
        <div className="animate-pulse bg-red-800 rounded basis-1/5"></div>
      </div>
    );
  }

  return cards.map((card) => card);
}

export default LoadingState;
