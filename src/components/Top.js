import React from "react";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Top10 from "./Top10";

const Top = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/daily_trade/${selectedSymbol}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [selectedSymbol]);



  return isLoading ? (
    <span>chargement</span>
  ) : (
    <>
      <div className="w-[500px] h-[800px]">
        <div className="h-[350px] bg-slate-400">
          <Line
            data={{
              labels: data.map((elem) =>elem.date_trade.substring(2,10)),
              datasets: [
                {
                  label: selectedSymbol,
                  data: data.map((elem,index) =>  elem.close_value),
                },
              ],
            }}
          />
        </div>
        <Top10 setSelectedSymbol={setSelectedSymbol} />
      </div>
    </>
  );
};

export default Top;
