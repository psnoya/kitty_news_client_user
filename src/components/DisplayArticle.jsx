import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showArticle } from "../modules/getArticles";

const DisplayArticle = () => {
  const [specificArticle, setSpecificArticle] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getSpecificArticle = async () => {
      const response = await showArticle(id);
      setSpecificArticle(response);
    };
    getSpecificArticle();
  }, [id]);

  let articleView = specificArticle.map((article) => {
    return (
      <>
        <h2 data-cy="title">{article.title}</h2>
        <h3 data-cy="lead">{article.lead}</h3>
        <p data-cy="body">{article.body}</p>
      </>
    );
  });
  
  return (
    <>
      <div data-cy="article-display">{articleView}</div>
    </>
  );
};

export default DisplayArticle;
