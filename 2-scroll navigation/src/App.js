import { useRef, useState } from "react";
import "./App.css";
import Pledge from "./components/Pledge";
import Vote from "./components/Vote";
import Term from "./components/Term";
import News from "./components/News";
import Together from "./components/Together";

function App() {
  const sections = [
    {
      component: <Pledge />,
      title: "공약 뽀개기",
    },
    {
      component: <Vote />,
      title: "투표 뽀개기",
    },
    {
      component: <Term />,
      title: "용어 뽀개기",
    },
    {
      component: <News />,
      title: "소식 뽀개기",
    },
    {
      component: <Together />,
      title: "함께 뽀개기",
    },
  ];
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(index);
  };

  return (
    <>
      <header>
        <h1>2. Scroll Nevigation</h1>
        <nav>
          {sections.map((section, index) => (
            <div
              key={index}
              className={activeSection === index ? "clicked" : ""}
              onClick={() => scrollToSection(index)}
            >
              {section.title}
            </div>
          ))}
        </nav>
      </header>

      <main>
        {sections.map((section, index) => (
          <div key={index} ref={sectionRefs[index]}>
            {section.component}
          </div>
        ))}
      </main>

      <footer>
        <span>Clone Coding: NewNeek, 2024 Election Page</span>
      </footer>
    </>
  );
}

export default App;
