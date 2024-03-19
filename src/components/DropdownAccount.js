import React, { useState } from "react";
import user from "../containers/assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";

const DropdownAccount = ({ token, setUser }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    setIsMenuOpen(false); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="relative">
        <img
          className="cursor-pointer w-8 hover:scale-110 transition"
          src={user}
          alt="user"
          onClick={handleMenuToggle}
        />
        {isMenuOpen && (
          <div className="absolute right-0 top-10 w-48 bg-white border border-gray-200 shadow-md rounded-md">
            {token ? (
              <>
                <div className="p-2">
                  <Link
                    to="/account"
                    className="hover:text-slate-400 cursor-pointerr:text-blue-600"
                    onClick={closeMenu} 
                  >
                    Mon compte
                  </Link>
                </div>
                <div className="p-2 hover:text-slate-400 cursor-pointer" onClick={handleLogout}>
                  Déconnexion
                </div>
              </>
            ) : (
              <>
                <div className="p-2">
                  <Link
                    to="/signup"
                    className="hover:text-blue-600"
                    onClick={closeMenu} 
                  >
                    S'inscrire
                  </Link>
                </div>
                <div className="p-2">
                  <Link
                    to="/login"
                    className="hover:text-blue-600"
                    onClick={closeMenu} 
                  >
                    Se connecter
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownAccount;
