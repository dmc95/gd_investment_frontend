import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spin from './Spin';
import arrowUp from "../containers/assets/images/arrow-up-right.png"
import arrowDown from "../containers/assets/images/arrow-down-right.png"

const CarouselEtf = ({divParent, divCard, styleText, divText}) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:5000/daily_trade_all");
            setData(response.data);
            setIsLoading(false);
            console.log(data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchData();
      }, []);
// 
  return isLoading ? (
    <Spin />
  ) : (
    <div className='flex justify-center'>
    <div className={divParent}>
      {data.map((elem, key) => (
          <div key={key} className={divCard}>
          <p className={styleText}>{elem.symbol}</p>
          <div className={divText}>
            <p className='text-[#6764E9] 2xl:text-2xl'>{elem.close_value.substring(0,7)}</p>
            <p className={elem.variations.substring(0,5) < 0 ? 'text-red-600 2xl:text-xl' : 'text-green-600 2xl:text-xl'} >{elem.variations.substring(0,5)}</p>
            <div>
              <img src={elem.variations < 0 ? arrowDown : arrowUp} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  )
}

export default CarouselEtf