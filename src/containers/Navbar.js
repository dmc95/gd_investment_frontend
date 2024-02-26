import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import MenuItems from "../components/MenuItems";

import Search from "../containers/assets/images/chercher.png";
import ModalSearch from "../components/ModalSearch";
import DropdownAccount from "../components/DropdownAccount";

const Navbar = ({ token, setUser }) => {
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="bg w-full flex justify-between items-center mb-32 p-4 border-b-[1px] bg-white/95 z-50 shadow-lg fixed">
        <Link to="/">
          <div className="text 2-xl font-bold uppercase flex items-center">
            <img alt="logo" src={logo} className="w-16 h-16" />
            <h1 className="ml-[5px] text-lg">
              GD
              <span className="block xm:text-3xl uppercase ">Investement</span>
            </h1>
          </div>
        </Link>
        <nav>
          <ul className="hidden lg:flex gap-8 p-6 bg-black/10 w-full backdrop-blur-md ">
            <li className="underlined" onClick={openModal}>
              <img
                className="w-8 hover:scale-105 transition cursor-pointer"
                src={Search}
                alt="search"
              />
            </li>
            <li className="underlined">
              <Link to="/">ACCUEIL</Link>
            </li>
            <li className="underlined">
              <Link to="/Etf">ETF</Link>
            </li>
            {token ? (
              <>
                <li className="underlined">
                  <Link to="/dashboard">DASHBOARD</Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li className="underlined">
              <Link to="/aPropos">À PROPOS</Link>
            </li>
            <li className="underlined">
              <DropdownAccount token={token} setUser={setUser} />
            </li>
          </ul>
          <MenuItems setActive={setActive} active={active} token={token} setUser={setUser}/>
        </nav>
      </div>
      <ModalSearch visible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
