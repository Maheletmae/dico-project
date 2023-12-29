import "./App.css";
import logo from "./shecodes-logo.png";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img
          src={logo}
          className="app-logo img-fluid"
          alt="shecodes logo"
        ></img>
      </header>
      <a className="btn btn-primary">Hello</a>
    </div>
  );
}

export default App;
