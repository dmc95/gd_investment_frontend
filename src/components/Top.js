import React from "react";
import axios from "axios";
import formatDate from "../formatDate";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Top10 from "./Top10";
import symbolColors from "../components/symbolColors";

const Top = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSymbol, setSelectedSymbol] = useState('AVGO');



  useEffect(() => {
    const fetchData = async () => {
      try {
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
  }, [selectedSymbol]);

const datasetColor = symbolColors[selectedSymbol]

  return isLoading ? (
    <span>chargement</span>
  ) : (
    <>
      <div className="max-2xl:w-full 2xl:w-10/12">
        <div className=" sm:w-[100%] sm:h-2/12 bg-slate-200">
          {/* xl:h-3/5 */}
          <Line
            data={{
              labels: data.map((elem) =>formatDate(elem.date_trade.substring(2,10))),
              datasets: [
                {
                  label: selectedSymbol,
                  borderColor: datasetColor,
                  data: data.map((elem) =>  elem.close_value),
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
