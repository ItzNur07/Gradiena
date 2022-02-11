import "./styles.css";
import "./sass/main.scss";
import Navbar from "./Components/Navbar";
import Gradient from "./Components/Gradient";
import Generate from "./Components/Generate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gradient />} />
          <Route path="/custom" element={<Generate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
