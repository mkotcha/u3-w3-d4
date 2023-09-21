import { Container } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCard from "./ArticleCard";

const Article = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchArticle = async () => {
      const url = "https://api.spaceflightnewsapi.net/v4/articles/";
      try {
        const resp = await fetch(url + params.id);
        if (resp.ok) {
          const article = await resp.json();
          setArticle(article);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, []);

  return (
    <>
      {article && (
        <div key={article.id}>
          <ArticleCard article={article} />
        </div>
      )}
    </>
  );
};

export default Article;
