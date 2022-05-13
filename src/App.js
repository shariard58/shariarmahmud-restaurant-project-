import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
import MainComponent from "./components/MainComponent";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
