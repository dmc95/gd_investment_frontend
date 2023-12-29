import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import MenuItems from "../containers/MenuItems";

const Navbar = () => {
    const [active, setActive] = useState(false);

    //   const showMenu = () => {
    //     setActive(!active);
    //   };
  
    return (
      <div className="fixed w-full flex justify-between items-center p-4 border-b-[1px] bg-white/95 z-50 shadow-lg">
        <Link to="/">
          <div className="text 2-xl font-bold uppercase flex items-center">
            <img alt="logo" src={logo} className="w-16 h-16" />
            <h1 className="">
              GD
              <span className="block text-2xl uppercase ml-2">Investement</span>
            </h1>
          </div>
        </Link>
  
        <nav>
          <ul className="hidden lg:flex gap-8 p-6 bg-black/10 w-full backdrop-blur-md ">
          <li className="underlined">
              <Link to="/">ACCUEIL</Link>
            </li>
            
            <li className="underlined">
              <Link to="/aPropos">À PROPOS</Link>
            </li>
          </ul>
          <MenuItems setActive={setActive} active={active} />
        </nav>
      </div>
  )
}

export default Navbar