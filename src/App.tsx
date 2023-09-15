import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  const [cartSize, setCartSize] = useState(0);

  return (
    <>
      <Nav cartSize={cartSize} />
      <Hero />
    </>
  );
}

export default App;
