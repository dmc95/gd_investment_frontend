import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer"
import Graphics from "./containers/Graphics"
import Etf from "./containers/Etf"
import "./App.css";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/graphics" element={<Graphics />}></Route>
          <Route path="/etf" element={<Etf />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
