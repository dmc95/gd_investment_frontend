import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = async (event) => {
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

    // Vérifier si le mot de passe est valide
    if (!isValidPassword(password)) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.", {
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

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email: email,
        password: password,
      });
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      toast.error(" Echec de connexion. Vérifiez vos Identifiant et mot de passe.", {
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
    // Utiliser une regex pour définir le format de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
      <div className="pt-[200px] flex flex-col justify-center items-center w-screen h-screen">
        <h2 className="py-2 text-xl">Connexion</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[310px] h-[450px] xm:w-[600px] bgCard justify-evenly items-center rounded-2xl"
        >
          <input
            className="border py-3 rounded-xl w-5/6 p-1"
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            
            }}
          />
          <input
            className="border py-3 rounded-xl w-5/6 p-1"
            placeholder="mot de passe"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            placeholder="Se connecter"
            className="cursor-pointer border bg-lime-200 font-semibold py-3 rounded-xl w-5/6"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
