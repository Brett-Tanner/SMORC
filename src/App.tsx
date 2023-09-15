import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [cartSize, setCartSize] = useState(0);

  return (
    <>
      <Nav cartSize={cartSize} />
    </>
  );
}

export default App;
