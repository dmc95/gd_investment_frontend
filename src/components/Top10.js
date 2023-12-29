import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Nouveau composant pour afficher la valeur sélectionnée
// const SelectedSymbolDisplay = ({ selectedSymbol }) => {
//   return <p>Selected Symbol: {selectedSymbol}</p>;
// };

const Top10 = ({ setSelectedSymbol }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (symbol) => {
    console.log('Symbol clicked:', symbol);
    setSelectedSymbol(symbol);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/daily_trade_top");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Chargement</span>
  ) : (
    <div className="h-[450px] bg-green-300  ">
      {data.map((elem, key) => (
        <div onClick={() => handleClick(elem.symbol)} key={key} className="cursor-pointer flex flex-row justify-evenly my-3 p-2 text-lg border rounded-lg hover:translate-x-3 shadow-md backdrop-blur-sm bg-white/30">
          <p>{elem.symbol}</p>
          <div className="w-[300px] flex justify-evenly">
            <p>{elem.close_value.substring(0,7)}</p>
            <p>{elem.variations.substring(0,5)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top10;
