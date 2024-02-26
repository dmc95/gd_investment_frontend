import React from 'react'
import { Line } from "react-chartjs-2";
import symbolColors from "../components/symbolColors";
import formatDate from '../formatDate';

const ChartsEtf = ({data, selectedSymbol}) => {
    const datasetColor = symbolColors[selectedSymbol]
  return (
    <div className='flex justify-center '>

<div className="w-full xl:w-8/12 2xl:w-7/12 bg-slate-100">
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
    </div>
  )
}

export default ChartsEtf




