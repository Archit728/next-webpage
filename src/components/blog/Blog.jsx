import Article from "../article/Article"; // Adjust path if necessary
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl="/blog01.png"
            date="Jul 05, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl="/blog02.png"
            date="Jul 05, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl="/blog03.png"
            date="Jul 05, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl="/blog04.png"
            date="Jul 05, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl="/blog05.png"
            date="Jul 05, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
