import React from "react";

const ShowArticle = () => {
  const [specificArticle, setSpecificArticle] = useState([]);
  const { id } = useParams()
  const getSpecificArticle = async () => {
    
  }
  return (
    <>
      <div data-cy="article-display">
        <h2 data-cy="title">{article.title}</h2>
        <h3 data-cy="lead">{article.lead}</h3>
        <p data-cy="body">{article.body}</p>
      </div>
    </>
  );
};

export default ShowArticle;