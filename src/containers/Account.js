import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReadUser from "../components/ReadUser";
import UpdateUsername from "../components/UpdateUsername";
import UpdatePassword from "../components/UpdatePassword";
import DeleteUser from "../components/DeleteUser";

const Account = ({ token, setUser, onAccountDeleted }) => {
  const navigate = useNavigate();
  const [showUserInfo, setShowUserInfo] = useState(false); 
  const [showUsernameForm, setShowUsernameForm] = useState(false); 
  const [showPasswordForm, setShowPasswordForm] = useState(false); 

  // Fonction pour gérer le clic sur le bouton "Voir mes infos"
  const handleShowUserInfo = () => {
    setShowUserInfo(true);
    setShowUsernameForm(false);
    setShowPasswordForm(false) 
  };
  const handleUpdateUsername = () => {
    setShowUsernameForm(true); 
    setShowUserInfo(false);
    setShowPasswordForm(false) 
  };
  const handleUpdatePassword = () => {
    setShowUsernameForm(false); 
    setShowUserInfo(false);
    setShowPasswordForm(true) 
  };
  const [showModalDelete, setShowModalDelete] = useState(false);

  const openModalDelete = () => {
    setShowModalDelete(true);
  };
    // Utiliser useEffect pour surveiller les changements dans le token
    useEffect(() => {
      // Rediriger vers la page de connexion si le token est vide
      if (!token) {
        navigate("/login");
      }
    }, [token, navigate]);

  return (
    <>
      <div className="flex max-xl:flex-col-reverse justify-center items-center w-screen h-screen">
        <div className=" w-[310px] h-[450px] xm:w-[600px] bgCard flex flex-col justify-evenly items-center xl:rounded-l-2xl">
          <button
          onClick={handleShowUserInfo}
          className="bgBtn text-white py-3 rounded-xl w-5/6 border">
            Voir mes infos
          </button>
          <button 
          onClick={handleUpdateUsername}
          className="bgBtn text-white  py-3 rounded-xl w-5/6 border">
            Modifier mon nom d'utilisateur
          </button>
          <button 
          onClick={handleUpdatePassword}
          className="bgBtn text-white  py-3 rounded-xl w-5/6 border">
            Modifier mon mot de passe
          </button>
          <button
          onClick={openModalDelete}
          className="bgBtn text-white py-3 rounded-xl w-5/6 border">
            Supprimer mon compte
          </button>
        </div>
        <div className="xl:w-[350px] xl:h-[450px] xl:bg-stone-200 xl:rounded-r-2xl">
        {showUserInfo && <ReadUser token={token} />}
        {showUsernameForm && <UpdateUsername token={token} />}
        {showPasswordForm && <UpdatePassword token={token} />}
        </div>
      </div>
      <DeleteUser onAccountDeleted={onAccountDeleted} token={token} visible={showModalDelete} setUser={setUser} onClose={() => setShowModalDelete(false)}/>
    </>
  );
};

export default Account;
