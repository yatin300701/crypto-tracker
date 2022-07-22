import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./component/Homepage";
import Coingraph from "./component/Coingraph";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/page/:id" element={<Coingraph />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
