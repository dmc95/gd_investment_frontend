import React from 'react'
import { Link } from "react-router-dom";
import ItemMenu from "./assets/images/icons8-menu.png";
import Cancel from "./assets/images/cancel.png";

const MenuItems = ({ setActive, active }) => {
  return (
    <>
      {!active ? (
        <img
          alt="ItemMenu"
          src={ItemMenu}
          className="w-10 rotate-180 lg:hidden"
          onClick={() => setActive(!active)}
        />
      ) : (
        <img
          src={Cancel}
          alt="cancel"
          className=" w-14 top-0 right-0 absolute m-5 z-20 "
          onClick={() => setActive(!active)}
        />
      )}
      <div className="">
        <ul
          className={`text-black text-4xl flex flex-col justify-around items-center fixed w-full h-[100vh] bg-white/100 top-0 left-0 py-20
        ${
          active ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500
        `}
        >
          <li
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110"
            onClick={() => setActive(!active)}
          >
            <Link to="/">ACCUEIL</Link>
          </li>
          <li
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110"
            onClick={() => setActive(!active)}
          >
            <Link to="/aPropos">À PROPOS</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MenuItems