import "./styles.css";

import { Routers } from "./router/Routers";

import { BrowserRouter as Router, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Routers />
      </Router>
    </div>
  );
}
