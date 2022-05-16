import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
import MainComponent from "./components/MainComponent";

import { BrowserRouter as Router } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <MainComponent />
      </Router>
    </div>
  );
}

export default App;
