import Image from "next/image";
import "./brand.css";
const Brand = () => {
  return (
    <div className="gpt3__brands">
      <div>
        <Image
          src="/slack.png"
          alt="slack"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <div>
        <Image
          src="/atlassian.png"
          alt="atlassian"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <div>
        <Image
          src="/google.png"
          alt="google"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <div>
        <Image
          src="/shopify.png"
          alt="shopify"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <div>
        <Image
          src="/dropbox.png"
          alt="dropbox"
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Brand;
