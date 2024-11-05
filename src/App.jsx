import { useState } from "react";
import "./App.css";
import MainSupport from "./components/MainSupport";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainSupport />
    </>
  );
}

export default App;
