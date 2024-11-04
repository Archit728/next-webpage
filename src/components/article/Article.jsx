import Image from "next/image";
import "./article.css";
// Parameter Destructuring
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <Image
          src={imgUrl}
          alt="blog"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
