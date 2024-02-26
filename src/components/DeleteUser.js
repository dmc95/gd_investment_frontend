import React from "react";
import { useNavigate } from "react-router-dom";
import close from "../containers/assets/images/cancel.png";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = ({ visible, onClose, token, setUser, onAccountDeleted }) => {
  const navigate = useNavigate();
  if (!visible) return null;

  const handleDeleteAccount = async () => {
    try {
      await axios.delete("http://localhost:5000/user/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Compte utilisateur supprimé avec succès");
      setUser(null);
      onAccountDeleted()
      navigate("/");
    } catch (error) {
      toast.error('Erreur lors de la suppression du compte utilisateur', {
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
 
  return (
    <>
      <ToastContainer />
      <div className="z-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
        <div className="z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
          {" "}
          <div className="bg-white xl:w-2/6 h-1/4 rounded-xl overflow-y-auto">
            <div className="flex justify-around">
              <p className=" m-5 text-lg font-semibold">
                Voulez vous vraiment supprimer votre compte?
              </p>
              <button onClick={onClose}>
                <img
                  className="w-10 hover:rotate-90 delay-150 transition"
                  src={close}
                  alt="close"
                />
              </button>
            </div>
            <div className="flex justify-evenly items-center mt-10">
              <input
                onClick={handleDeleteAccount}
                placeholder="  Rechercher"
                className="w-96 h-10 border border-purple-500 rounded-lg bg-slate-400 hover:bg-red-300"
                type="submit"
                value="Supprimer mon compte"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
