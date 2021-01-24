import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./Components/NavInshorts";
import Newscontent from "./Components/Newscontent";

function App() {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [totalNewsCount, setTotalNewsCount] = useState("");
  const newsApi = async () => {
    try {
      const fetchedData = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      console.log(fetchedData);
      setNews(fetchedData.data.articles);
      setTotalNewsCount(fetchedData.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(totalNewsCount);

  useEffect(() => {
    newsApi();
  }, [category, totalNewsCount]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <Newscontent />
    </div>
  );
}

export default App;
