import React, { useState, useEffect } from "react";
import NewsDashboard from "../components/NewsDashboard";
import LineChart from "../components/LineChart";
import TickersEtf from "../components/TickersEtf";
import { useNavigate } from "react-router-dom";
import Preferences from "../components/Preferences";
import CarouselEtf from "../components/CarouselEtf";
import CardFavorite from "../components/CardFavorite";

const Dashboard = ({ token }) => {
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("1week");
  const navigate = useNavigate();

  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

  const updateFavorites = () => {
    setFavoritesUpdated(!favoritesUpdated);
  };

  useEffect(() => {
    // Utiliser useEffect pour surveiller les changements dans le token
    // Si le token est null (non connecté), rediriger vers la page de connexion
    if (!token) {
      navigate("/login"); 
    }
  }, [token, navigate]);

  const handleSymbolClick = (symbol) => {
    // Check if the symbol is already selected
    if (selectedSymbols.includes(symbol)) {
      // Symbol is selected, remove it from the list
      setSelectedSymbols((prevSymbols) =>
        prevSymbols.filter((s) => s !== symbol)
      );
    } else {
      // Symbol is not selected, add it to the list
      setSelectedSymbols((prevSymbols) => [...prevSymbols, symbol]);
    }
  };

  const handleTimeFilterChange = (filter) => {
    setSelectedTimeFilter(filter);
  };

  return (
    <>
      <div className="mx-auto pt-44 w-10/12 h-screen">
      <CarouselEtf
        divParent={"-mt-10 2xl:w-11/12 h-[150px] flex items-end overflow-x-hidden "}
        divText={"w-[300px] flex justify-evenly items-center"}
        divCard={
          "flex mx-2 sm:w-1/2 sm:h-1/4 w-3/12 md:h-1/3 2xl:my-8 my-3 p-2 text-sm border borderColor rounded-lg shadow-md bg-black/70 animate-scrollSpeed"
        }
        styleText={"w-[150px] font-semibold text-sm text-white"}
      />
        <div className="h-screen flex">
          <div className="flex flex-col w-2/12">
            <div className="h-1/2 border borderColor mx-2 rounded-lg overflow-y-scroll bgCard">
              <TickersEtf
                onSymbolClick={handleSymbolClick}
                token={token}
                updateFavorites={updateFavorites}
              />
            </div>
            <div className="h-1/3 border borderColor m-2 rounded-lg overflow-y-scroll bgCard">
              <Preferences
              favoritesUpdated={favoritesUpdated}
                onTimeFilterChange={handleTimeFilterChange}
                token={token}
              />
            </div>
          </div>

          <div className="flex flex-col w-8/12">
            <div className="h-1/6 borderColor border mx-2 overflow-y-scroll rounded-lg bgCard">
              <NewsDashboard />
            </div>
            <div className="h-4/6 border borderColor m-2 rounded-lg z-10 bgCard">
              <LineChart
                selectedSymbols={selectedSymbols}
                filter={selectedTimeFilter}
              />
            </div>
          </div>

          <div className="w-2/12">
            <div className="xl:h-[965px] border borderColor mx-2 rounded-lg bgCard">
              <CardFavorite favorites={ favoritesUpdated } token={token}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
