import React, { useState, useEffect } from "react";
import { Line as ChartJSLine } from "react-chartjs-2";
import axios from "axios";
// import Spin from "./Spin";
import symbolColors from "../components/symbolColors";
import formatDate from "../formatDate";

const LineChart = ({ selectedSymbols, filter }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Selected Symbols:", selectedSymbols);
      console.log("Filter:", filter);
        if (!selectedSymbols || selectedSymbols.length === 0) {
          // Return early if selectedSymbols is undefined or empty
          return;
        }
        // Fetch data for each selected symbol
        const promises = selectedSymbols.map(async (symbol) => {
          const response = await axios.get(
            `http://localhost:5000/daily_trade_periode/${symbol}&${filter}`
          );
          return {
            symbol: symbol,
            data: response.data,
          };
        });

        // Wait for all requests to complete
        const results = await Promise.all(promises);

        // Reset chartData before adding new datasets
        setChartData({
          labels: results[0].data.map((elem) =>
            elem.date_trade.substring(2, 10)
          ),
          datasets: [],
        });

        // Update chartData with new datasets
        const newDatasets = results.map((result) => ({
          label: result.symbol,
          data: result.data.map((elem) => elem.close_value),
          fill: true,
          borderColor: symbolColors[result.symbol],
          tension: 0.1,
        }));

        setChartData((prevChartData) => ({
          labels: results[0].data.map((elem) =>
           formatDate(elem.date_trade.substring(2, 10)) 
          ),
          datasets: [...prevChartData.datasets, ...newDatasets],
        }));

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (selectedSymbols.length > 0) {
      fetchData();
    } else {
      // Reset chartData if no symbols are selected
      setChartData({
        labels: [],
        datasets: [],
      });
    }
  }, [selectedSymbols, filter]);

  return isLoading ? (
   <p className="flex justify-center">Cliquez sur un indice ETF pour afficher le graphique</p>
  ) : (
    <div className="h-full p-10">
      <h2>Performances</h2>
      <ChartJSLine data={chartData} /> 
    </div>
  );
};


export default LineChart;
