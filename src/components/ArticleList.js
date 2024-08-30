import React from "react";
import ArticleCard from "./ArticleCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../App.css";

function ArticleList({ articles, loading }) {
  return (
    <div className="article-list">
      {loading
        ? Array(10)
            .fill()
            .map((_, index) => (
              <div key={index} className="article-card-skeleton">
                <Skeleton height={200} />
                <Skeleton height={20} style={{ margin: "10px 0" }} />
                <Skeleton height={20} width="80%" />
              </div>
            ))
        : articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
    </div>
  );
}

export default ArticleList;
