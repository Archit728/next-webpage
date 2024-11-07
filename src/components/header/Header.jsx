import Image from "next/image";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          The first version of GPT was released in 2018 and contained 117
          million parameters. The second version of the model, GPT-2, was
          released in 2019 with around 1.5 billion parameters. As the latest
          version, GPT-3 jumps over the last model by a huge margin with over
          175 billion parameters, which is more than 100 times its predecessor
          and ten times more than comparable programs.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <Image
            src="/people.png"
            alt="people"
            layout="responsive"
            width={182}
            height={39}
          />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <Image
          src="/ai.png"
          alt="AI"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Header;
