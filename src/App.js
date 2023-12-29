import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import "./App.css";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
