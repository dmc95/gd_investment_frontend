import React, { useState } from "react";
import Cookie from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des components
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import Graphics from "./containers/Graphics";
import Etf from "./containers/Etf";
import Home from "./containers/Home";
import Account from "./containers/Account";
import Login from "./containers/Login";
import ModalSearch from "./components/ModalSearch"; // Ensure this path is correct
import Dashboard from "./containers/Dashboard"; // Ensure this path is correct

import "./App.css";
import Signup from "./containers/Signup";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleAccountDeleted = () => {
    //fonction d'affichage du toast de suppression de compte
    setShowSuccessToast(true);
  };

  const setUser = (tokenToSet) => {
    //fonction qui permet de passer le token à null
    if (tokenToSet) {
      // créer un cookie
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
      // localStorage.setItem('userToken');
    } else {
      //Supprimer le cookie
      Cookie.remove("userToken");
      //Repasser le token à null
      setToken(null);
    }
  };

  return (
    <Router>
      <Navbar token={token} setUser={setUser} />
      <div className="App w-full mx-auto">
        <Routes>
          <Route path="/graphics" element={<Graphics />} />
          <Route path="/etf" element={<Etf />} />
          <Route path="/dashboard" element={<Dashboard token={token} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            exact
            path="/"
            element={<Home showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast}/>}
            
          />
          <Route
            path="/account"
            element={
              <Account
                token={token}
                setUser={setUser}
                onAccountDeleted={handleAccountDeleted}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <ModalSearch visible={showModal} onClose={() => setShowModal(false)} />
        <Footer  setUser={setUser} token={token}/>
      </div>
    </Router>
  );
}

export default App;
