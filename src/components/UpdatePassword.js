import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePassword = ({ token }) => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheckChange = (event) => {
    setPasswordCheck(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifier si les deux champs de mot de passe correspondent
    if (password !== passwordCheck) {
      toast.error("Les mots de passe ne correspondent pas.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return; // Empêcher l'envoi du formulaire si les mots de passe ne correspondent pas
    }

    // Vérifier si le mot de passe est valide
    if (!isValidPassword(password)) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères, dont une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      await axios.put(
        "http://localhost:5000/user/password",
        { password: password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPassword("");
      setPasswordCheck("");
      toast.success("Mot de passe modifié avec succès", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Erreur lors de la modification du mot de passe", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  // Fonction pour vérifier si le mot de passe est valide
  const isValidPassword = (password) => {
    // Utilisation d'une regex pour définir le format du mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center w-full h-[320px]">
        <h2 className="font-semibold text-lg mt-12">
          Modifier votre mot de passe
        </h2>
        <form
          className="flex flex-col justify-evenly h-[300px] mt-3"
          onSubmit={handleSubmit}
        >
          <input
            className="border-2 p-2 rounded-md w-[250px]"
            placeholder="Saisissez votre mot de passe"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            className="border-2 p-2 rounded-md w-[250px]"
            placeholder="Vérifier votre mot de passe"
            type="password"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
          />
          <input
            className="cursor-pointer border-2 bg-red-300 p-2 rounded-md"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default UpdatePassword;
