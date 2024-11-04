import Blog from "../components/blog/Blog"; // Adjust path if necessary
import Brand from "../components/Brand/Brand"; // Adjust path if necessary
import CTA from "../components/CTA/CTA"; // Adjust path if necessary
import Features from "../components/features/Features"; // Adjust path if necessary
import Footer from "../components/footer/Footer"; // Adjust path if necessary
import Header from "../components/header/Header"; // Adjust path if necessary
import Navbar from "../components/navbar/Navbar"; // Adjust path if necessary
import Possibility from "../components/Possibility/possibility"; // Adjust path if necessary
import WhatGPT3 from "../components/WhatGPT3/whatGPT3"; // Adjust path if necessary

export default function Home() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
