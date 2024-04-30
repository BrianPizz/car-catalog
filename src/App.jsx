import { useState } from "react";
import CarList from "./components/CarList";
import Filter from "./components/Filter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Filter />
      <CarList/>
    </>
  );
}

export default App;
