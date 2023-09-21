import { useEffect, useState } from "react";
import { IArticle } from "../interfaces/IArticle";
import { Container } from "react-bootstrap";
import Article from "./ArticleCard";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
    const fetchArticle = async () => {
      const url = "https://api.spaceflightnewsapi.net/v4/articles";
      try {
        const resp = await fetch(url);
        if (resp.ok) {
          const articles = await resp.json();
          setArticles(articles.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);

  return (
    <>
      <Container>
        <h2 className="display-3">News</h2>
        {articles.map(article => (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </Container>
    </>
  );
};
export default Articles;
