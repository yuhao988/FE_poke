import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal"; // Import the Modal component
import "./App.css";
import Error from "./Error";
import Home from "./Home";
import Battle from "./Components/Battle";
import Classes from "./Components/Classes";
import Equipment from "./Components/Equipment";


function App() {
  // Set the app element when the component mounts
  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with your actual root element id
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
