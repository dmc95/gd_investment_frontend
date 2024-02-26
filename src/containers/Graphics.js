import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation

const Graphics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Use useLocation to access the navigation state
  const selectedSymbol = location.state?.symbol; // Get the symbol from the state
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSymbol) {
      navigate("/");
      
    } else {
      const fetchData = async () => {
        try {
          // console.log(selectedSymbol);
          // Adjust API call as needed to fetch data for the selected symbol
          const response = await axios.get(
            `http://localhost:5000/daily_trade/${selectedSymbol}`
          );
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line
  }, [selectedSymbol]);

  // Chart data configuration
  const chartData = {
    labels: data.map((elem) => elem.date_trade.substring(2, 10)),
    datasets: [
      {
        label: selectedSymbol,
        data: data.map((elem) => elem.close_value),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div className="py-44">
      {selectedSymbol && (
        <div className="pt-[200px]">
          <div className="h-[700px] mx-auto cursor-pointer flex flex-row justify-evenly my-3 p-2 text-lg border rounded-lg shadow-md backdrop-blur-sm bg-white/30 w-9/12 ease-in-out duration-500">
            <div className="w-8/12 flex justify-evenly z-0">
              <Line data={chartData} />
          <p>{data.symbol}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphics;
