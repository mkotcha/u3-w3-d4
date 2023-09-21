import { Button, Card, Container } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link, useLocation } from "react-router-dom";

interface ArticleProps {
  article: IArticle;
}

const ArticleCard = ({ article }: ArticleProps) => {
  const published = new Date(article.published_at).toLocaleDateString();
  const location = useLocation();
  console.log(location);

  let externalLink = false;

  if (location.pathname !== "/") externalLink = true;

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">published: {published}</Card.Subtitle>
          <Card.Text>{article.summary}</Card.Text>
          <Link to={externalLink ? article.url : `article/${article.id}`}>
            <Button variant="primary">{externalLink ? "Visit site" : "Read more..."}</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ArticleCard;
