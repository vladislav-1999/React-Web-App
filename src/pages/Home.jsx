import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import HomeInfo from "../components/HomeInfo";
import StackBlock from "../components/StackBlock";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const response = await fetch(
          "https://rss-backend-tbjj.onrender.com/api/rss"
        );

        if (!response.ok) throw new Error("Ошибка сети");

        const data = await response.json();

        setArticles(data);
      } catch (err) {
        setError("Не удалось загрузить ленту. Убедись, что бэкенд запущен.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRSS();
  }, []);
  return (
    <>
      <HomeInfo />
      <StackBlock />
    </>
  );
}

export default Home;
