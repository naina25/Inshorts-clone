import { useState } from "react";
import "./App.css";
import NavInshorts from "./Components/NavInshorts";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
    </div>
  );
}

export default App;
