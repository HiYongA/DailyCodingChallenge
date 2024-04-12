import "./App.css";
import Pledge from "./components/Pledge";
import Vote from "./components/Vote";
import Term from "./components/Term";
import News from "./components/News";
import Together from "./components/Together";

function App() {
  const sections = [<Pledge />, <Vote />, <Term />, <News />, <Together />];

  return (
    <>
      <header>
        <h1>2. Scroll Nevigation</h1>
        <nav>
          <div>공약 뽀개기</div>
          <div>투표 뽀개기</div>
          <div>용어 뽀개기</div>
          <div>소식 뽀개기</div>
          <div>함께 뽀개기</div>
        </nav>
      </header>

      <main>
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </main>

      <footer>
        <span>Clone Coding: NewNeek, 2024 Election Page</span>
      </footer>
    </>
  );
}

export default App;
