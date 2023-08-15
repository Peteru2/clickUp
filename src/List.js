import React from "react";
import Navbar from "./Navbar";
import NavSec from "./NavSec";

import ShowMoreButton from "./ShowMoreButton";

const App = () => {
  const articleSegments = [
    {
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces...",
    },
    {
      title: "JavaScript Fundamentals",
      content:
        "JavaScript is a versatile programming language...",
    },
    // Add more articles as needed
  ];

  return (
    <>
    <Navbar />
    <NavSec />
    <div className="App">
      <h1>Articles</h1>
      {articleSegments.map((segment, index) => (
        <ShowMoreButton key={index} segments={[segment]} />
      ))}
    </div>
    </>
  );
};

export default App;