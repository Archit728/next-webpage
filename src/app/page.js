"use client";
import { useEffect, useState } from "react";
import Blog from "../components/blog/Blog";
import Brand from "../components/Brand/Brand";
import CTA from "../components/CTA/CTA";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Possibility from "../components/Possibility/possibility";
import WhatGPT3 from "../components/WhatGPT3/whatGPT3";

// Heavy computation task
function heavyComputationTask(iterations) {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    let temp = (i * i * i) % (i + 1);
    result += temp;
  }
  return result;
}

// Rendering elements
function renderElements(data) {
  const container = document.createElement("div");
  container.id = "test-container";

  // Remove existing container if it exists
  const existingContainer = document.getElementById("test-container");
  if (existingContainer) {
    existingContainer.remove();
  }

  document.body.appendChild(container);

  // Use a portion of data to create elements
  const dataArray = Object.entries(data).slice(0, 1000);
  dataArray.forEach(([key, value], index) => {
    const newElement = document.createElement("div");
    newElement.innerText = `Item ${key}: ${value}`;
    newElement.style.cssText =
      "padding: 5px; border: 1px solid black; margin: 2px; color: white; background-color: #333;";
    container.appendChild(newElement);
  });
}

// API request function
async function fetchData() {
  console.time("API Request Duration");
  const response = await fetch("https://dummyjson.com/c/8295-5ca4-456f-a2e2");
  const data = await response.json();
  console.timeEnd("API Request Duration");
  return data;
}

export default function Home() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const runPerformanceTest = async () => {
      console.time("Total Test Duration");

      // Step 1: Heavy computation
      console.time("Computation Duration");
      const computationResult = heavyComputationTask(1000000);
      console.timeEnd("Computation Duration");
      console.log("Computation Result:", computationResult);

      // Step 2: Fetch API data
      const data = await fetchData();
      setApiData(data);

      // Step 3: Render elements
      console.time("Rendering Duration");
      renderElements(data);
      console.timeEnd("Rendering Duration");

      console.timeEnd("Total Test Duration");
    };

    runPerformanceTest();
  }, []); // Empty dependency array ensures this runs only once

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

      {/* Render API data */}
      <div id="api-data">
        {apiData
          ? Object.entries(apiData).map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
