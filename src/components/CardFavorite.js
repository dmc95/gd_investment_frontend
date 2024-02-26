/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

const CardFavorite = ({ favorites }) => {


    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/daily_trade_var"
          );
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }, []);

  return (
    <div>
        {favorites}
        
    </div>
  )
}

export default CardFavorite