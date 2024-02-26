import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Empêcher le rafraîchissement
    event.preventDefault();

    // Vérifier si l'e-mail est valide
    if (!isValidEmail(email)) {
      toast.error("Veuillez saisir une adresse e-mail valide.", {
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
      return;
    }

    // Vérifier si le nom d'utilisateur est valide
    if (!isValidUsername(username)) {
      toast.error(
        "Le nom d'utilisateur doit contenir uniquement des lettres, des chiffres, des tirets et des underscores.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }

    // Vérifier si le mot de passe est valide
    if (!isValidPassword(password)) {
      toast.error(
        "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
        {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/users/signup", {
        username: username,
        email: email,
        password: password,
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'inscription.", {
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
    }
  };

  // Fonction pour vérifier si l'e-mail est valide
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction pour vérifier si le nom d'utilisateur est valide
  const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    return usernameRegex.test(username);
  };

  // Fonction pour vérifier si le mot de passe est valide
  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
    <ToastContainer />
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h2 className="py-2 text-xl ">Formulaire d'inscription</h2>
        <form
          className="flex flex-col w-[310px] h-[450px] xm:w-[600px] bgCard justify-evenly items-center rounded-2xl"
          onSubmit={handleSubmit}
        >
          <input
            className="border  py-3 rounded-xl w-5/6 p-1"
            placeholder="Nom d'utilisateur"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            placeholder="email"
            className="border  py-3 rounded-xl w-5/6 p-1"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            placeholder="Mot de Passe"
            className="border py-3 rounded-xl w-5/6 p-1"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            type="submit"
            className="border bg-lime-200 font-semibold py-3 rounded-xl w-5/6"
          >
            {" "}
            S'inscrire
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
