import { useState } from "react";
import FilterBar from "./FilterBar";
import ProjectList from "./ProjectList";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Web Programming Class",
    description:
      "Collection of my weekly coursework and project submissions from the Web Programming class, built with HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/ahmad02072006/web-programming-class",
    demo: "https://ahmad02072006.github.io/web-programming-class/",
  },
  {
    id: 2,
    title: "API Atlas",
    description:
      "A travel hub linking four apps: trip planner, weather with travel tips, currency converter and place info. Vanilla JavaScript with a Cloudflare Worker backend.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ahmad02072006/test-main-2",
    demo: "https://ahmad02072006.github.io/test-main-2/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio website, built with plain HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ahmad02072006/portfolio",
    demo: "https://ahmad02072006.github.io/portfolio/",
  },
  {
    id: 4,
    title: "Book Search",
    description:
      "A book finder page where you can search for books.",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/ahmad02072006/webpro-book-search",
    demo: "https://ahmad02072006.github.io/webpro-book-search/",
  },
];

const filters = ["All", "HTML", "CSS", "JavaScript"];

function App() {
  const [selected, setSelected] = useState("All");

  const visible =
    selected === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selected));

  return (
    <div className="app">
      <header className="hero">
        <h1>Ahmad's Portfolio</h1>
        <p>Web projects I built for my Web Programming class</p>
      </header>

      <FilterBar options={filters} selected={selected} onSelect={setSelected} />
      <p className="count">
        Showing {visible.length} of {projects.length} projects
      </p>
      <ProjectList projects={visible} />
    </div>
  );
}

export default App;