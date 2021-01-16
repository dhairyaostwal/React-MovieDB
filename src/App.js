import React from "react";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Row />
      <Footer />
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
