import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUsername = ({ token }) => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Vérifier si le nom d'utilisateur est valide
      if (!isValidUsername(username)) {
        setErrorMessage("Le nom d'utilisateur n'est pas valide.");
        return;
      }

      const response = await axios.put(
        "http://localhost:5000/user/username",
        { username: username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsername("");
      toast.success("Nom d'utilisateur modifié avec succès", {
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
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fonction pour vérifier si le nom d'utilisateur est valide
  const isValidUsername = (username) => {
    // Utilisation d'une regex pour définir le format du nom d'utilisateur
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col  items-center w-full h-[250px]">
        <h2 className="font-semibold text-lg mt-12">
          Modifier votre nom d'utilisateur
        </h2>
        <form
          className="flex flex-col justify-around h-[300px]"
          onSubmit={handleSubmit}
        >
          <input
            className="border-2 p-2 rounded-md"
            placeholder="Nouveau nom utilisateur"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setErrorMessage(""); // Effacer le message d'erreur lorsque l'utilisateur modifie le champ
            }}
          />
          <input
            className="cursor-pointer border-2 bg-red-300 p-2 rounded-md"
            type="submit"
          />
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
};

export default UpdateUsername;
