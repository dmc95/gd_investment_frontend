import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import close from "../containers/assets/images/cancel.png";
import SearchResult from "./SearchResult"; // Ensure this path is correct

const ModalSearch = ({ visible, onClose }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/daily_trade_Etf`
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [onClose]);

  if (!visible) return null;

  const handleSelect = (symbol) => {
    navigate("/graphics", { state: { symbol: symbol } });
    onClose();
  };

  const tab = data
    .filter((item) => item.security.toLowerCase().includes(search.toLowerCase()))
    .map((item, index) => (
      <SearchResult
        key={index}
        symbol={item.security}
        value={item.close_value.substring(0, 7)}
        onSelect={() => handleSelect(item.symbol)}
      />
    ));

  return (
    <div className="z-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <div className="z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
        {" "}
        <div className="bg-white w-2/6 h-1/4 rounded-xl overflow-y-auto">
          <div className="flex justify-between">

          <p className=" m-5 text-lg font-semibold">Rechercher un indice ETF</p>
            <button 
            onClick={onClose}>
              <img
                className="w-10 hover:rotate-90 delay-150 transition mr-10"
                src={close}
                alt="close"
              />
            </button>
          </div>
          <div className="flex justify-evenly">
            <input
              placeholder="  Rechercher"
              className="w-96 h-10 border border-purple-500 rounded-lg"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {tab}
        </div>
      </div>
    </div>
  );

};



export default ModalSearch;
