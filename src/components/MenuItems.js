import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemMenu from "../containers/assets/images/icons8-menu.png";
import Cancel from "../containers/assets/images/cancel.png";

const MenuItems = ({ setActive, active, token, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
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
          className=" w-14 top-0 right-0 fixed m-5 z-30"
          onClick={() => setActive(!active)}
        />
      )}
      <div className="">
        <ul
          className={`text-black text-4xl flex flex-col justify-around items-center fixed w-full h-[100vh] bg-white/100 top-0 left-0 py-20 z-20
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
            <Link to="/Etf">ETF</Link>
          </li>

          {token ? (
            <>
              <li
                className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110"
                onClick={() => setActive(!active)}
              >
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
              <div className="p-2">
                <Link
                  to="/account"
                  className="hover:text-blue-600"
                  onClick={() => setActive(!active)}
                >
                  Mon compte
                </Link>
              </div>
              <div
                className="p-2"
                onClick={() => {
                  setActive(!active);
                  handleLogout();
                }}
              >
                Déconnexion
              </div>
            </>
          ) : (
            <>
              <div className="p-2">
                <Link
                  to="/signup"
                  className="hover:text-blue-600"
                  onClick={() => setActive(!active)}
                >
                  S'inscrire
                </Link>
              </div>
              <div className="p-2">
                <Link
                  to="/login"
                  className="hover:text-blue-600"
                  onClick={() => setActive(!active)}
                >
                  Se connecter
                </Link>
              </div>
            </>
          )}
          <li
            className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110"
            onClick={() => setActive(!active)}
          >
            <Link to="/aPropos">À PROPOS</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuItems;
