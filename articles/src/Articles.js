import Article from "./Article";

const Articles = ({ articles }) => {
  let data = articles.map((article) => {
    return <Article article={article} />;
  });
  return (
    <div className="articlesContainer">
        <h1>Articles</h1>
      <ul>{data}</ul>
    </div>
  );
};

export default Articles;
