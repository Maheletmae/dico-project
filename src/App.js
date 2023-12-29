import "./App.css";
import logo from "./shecodes-logo.png";
import DicoSearch from "./DicoSearch.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <img
            src={logo}
            className="app-logo img-fluid"
            alt="shecodes logo"
          ></img>
        </header>
        <main>
          <DicoSearch />
        </main>
        <footer className="footer">
          Coded by Mahelet for SheCodes boothcamp
        </footer>
      </div>
    </div>
  );
}
