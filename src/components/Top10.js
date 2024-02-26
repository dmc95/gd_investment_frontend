import React, { useState, useEffect } from "react";
import axios from "axios";
import Spin from "./Spin";
import arrowUp from "../containers/assets/images/arrow-up-right.png";
import arrowDown from "../containers/assets/images/arrow-down-right.png";



const Top10 = ({ setSelectedSymbol }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (symbol) => {
    
    setSelectedSymbol(symbol);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/daily_trade_top"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Spin />
  ) : (
    <div className="h-[450px] 2xl:h-[500px] mt-20 z-20">
      {data.map((elem, key) => (
        <div
          onClick={() => handleClick(elem.symbol)}
          key={key}
          className="cursor-pointer flex flex-row justify-evenly 2xl:my-8 my-3 p-2 text-lg border rounded-lg hover:translate-x-3 shadow-md backdrop-blur-sm bg-white/30"
        >
          <p className="w-[150px]">{elem.security}</p>
          <div className="w-[300px] flex justify-evenly items-center">
            <p>{elem.close_value.substring(0, 7)}</p>
            <p
              className={
                elem.variations.substring(0, 5) < 0
                  ? "text-red-600"
                  : "text-green-600"
              }
            >
              {elem.variations.substring(0, 5)}
            </p>
            <div>
              <img src={elem.variations < 0 ? arrowDown : arrowUp} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top10;
