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
      setNews(fetchedData.data.articles);
      setNews((newsState) => {
        console.log(newsState);
        return newsState;
      });
      setTotalNewsCount(fetchedData.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

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
