const Article = ({ article }) => {
  return (
    <li key={article.id}>
      <h3>{article.title}</h3>
      <span>Author: {article.userId}</span>
      <p>{article.body}</p>
    </li>
  );
};

export default Article;
