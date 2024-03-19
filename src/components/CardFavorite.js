/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const CardFavorite = ({ favorites, token }) => {


    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/users/favorites",  {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
          
          console.log(response.data);
          setData(response.data[0].favorite_tickers);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }, [token]);

  return isLoading ?(
    <span>En chargement</span>
  ) : (
    <div>
        {favorites}
        
        <ul className="flex flex-col" >

        {data && data.length > 0 ? data.map((elem, index)=>(
          <li className="h-16 borderColor m-5 shadow-md rounded-md p-5 font-semibold border-2" key={index}>{elem}</li>
          )) : (
            <p className="mx-auto">Aucun Favori</p>
          )}
          </ul>
    </div>
  )
}

export default CardFavorite