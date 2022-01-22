import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  const [shown, setShown] = useState(true);
  return <div>{shown && <Home />}</div>;
}

export default App;
