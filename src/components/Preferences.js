import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoritesTickers from './FavoritesTickers';
// import { GlobalProvider } from "../context/GlobalContext";

const Preferences = ({ onTimeFilterChange, token, favoritesUpdated }) => {
  
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/daily_trade_Etf`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []); 

  const [selectedTimeFilter, setSelectedTimeFilter] = useState('1week');


  const handleTimeFilterChange = (value) => {
    setSelectedTimeFilter(value);
    onTimeFilterChange(value);
  };

  return isLoading ? (
    <span>en Chargement</span>
  ) : (
    <div>
      <h2>Preferences</h2>
      <div className='flex flex-col h-[350px] ml-5 mt-5'>
        <label>
          Filtre:
          <select className="bg-slate-300" value={selectedTimeFilter} onChange={(e) => handleTimeFilterChange(e.target.value)}>
            <option value="1week">1 Semaine</option>
            <option value="1month">1 Mois</option>
            <option value="6month">6 Mois</option>
            <option value="1year">1 an</option>
            <option value="5year">5 ans</option>
          </select>
        </label>
      <FavoritesTickers token={token} key={favoritesUpdated.toString()}/>     
      </div>
    </div>
  );
};

export default Preferences;

