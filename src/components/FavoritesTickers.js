import React, { useState, useEffect } from "react";
import axios from "axios";

const FavoritesTickers = ({token }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  
  const handleRemoveTicker = async (ticker) => {
    try {
       await axios.post(
        `http://localhost:5000/users/remove-to-favorites`,
        { token: token, ticker: ticker },
        { withCredentials: true }
      );
      // Mettre à jour les données après la suppression du ticker
      setData((prevData) => prevData.filter((elem) => elem !== ticker));
   
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/usersTickers`,
          { token: token },
          { withCredentials: true }  // Pour inclure les cookies dans la requête
        );
        setData(response.data[0].favorite_tickers);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [token]);


  return isLoading ? (
    <span>En chargement</span>
  ) : (
    <div className="flex flex-col h-[300px] my-2">
    {data && data.length > 0 ? (
      data.map((elem) => (
        <div className="flex" key={elem.id}>
          <button 
            onClick={() => handleRemoveTicker(elem)}
            className="w-8 h-8 border border-black m-1 hover:scale-110 duration-100">-</button>
          <p className="my-2 flex justify-around">{elem}</p>
        </div>
      ))
    ) : (
      <p>Aucun favori trouvé</p>
    )}
  </div>
  );
};
export default FavoritesTickers;
