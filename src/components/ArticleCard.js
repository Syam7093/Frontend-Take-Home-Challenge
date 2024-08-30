import React from "react";
import "../App.css";

function ArticleCard({ article }) {
  const title = article?.title || article?.webTitle || article?.headline?.main;
  const description =
    article?.description || article?.abstract || article?.lead_paragraph || "";
  const url = article?.url || article?.webUrl || article?.web_url;
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default ArticleCard;
