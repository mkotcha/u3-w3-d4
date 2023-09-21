import { Container } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

interface ArticleProps {
  article: IArticle;
}

const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <Container>
      <p>
        <Link to={`article/${article.id}`}>article {article.title}</Link>
      </p>
    </Container>
  );
};

export default ArticleCard;
