import "./App.css";
import logo from "./shecodes-logo.png";

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
        <a className="btn btn-primary">Hello</a>
        <footer>Coded by Mahelet for SheCodes boothcamp</footer>
      </div>
    </div>
  );
}
