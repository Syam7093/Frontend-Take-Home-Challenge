import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { fetchAllNews } from "./services/newsService";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllNews("", {});
        setArticles(data);
      } catch (err) {
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialArticles();
  }, []);

  const handleSearch = async (query, filters) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllNews(query, filters);
      if (data.length === 0) {
        setError("No articles found for this search.");
      }
      setArticles(data);
    } catch (err) {
      setError("Failed to fetch articles. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="cards">
        <ArticleList articles={articles} loading={loading} />
      </div>
    </div>
  );
}

export default App;
