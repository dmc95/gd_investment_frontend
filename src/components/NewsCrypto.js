import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const NewsCrypto = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://finnhub.io/api/v1/news?category=crypto&minId=0&token=cm1iqvhr01qvthn7p2ngcm1iqvhr01qvthn7p2o0"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>chargement</span>
  ) : (
    <>
      <section className="bg-cyan-200 w-[500px] h-[600px] mt-[250px] ">
        <h2 className="text-left my-2 text-xl ">Cryptomonnaies</h2>
        <div className="overflow-y-scroll">

        <a href={data[0].url} rel="noreferrer" target="_blank">
          <div className="mb-10">
            <img src={data[0].image} alt="" />
            <p className="text-left">{data[0].headline}</p>
          </div>
        </a>

        {data.map((elem, index) => (
            <a key={index} href={elem.url} rel="noreferrer" target="_blank">
            <div className="columns-2 flex justify-around">
              <h3 className="text-left ml-6 font-semibold">{elem.headline}</h3>
              <img className="w-[150px]" src={elem.image} alt="" />
            </div>
            <div>
              <p className="text-left ml-6 mb-10 text-slate-500">
                {date.toLocaleDateString(elem.datetime)}
              </p>
            </div>
          </a>
        ))}
        </div>
      </section>
    </>
  );
};

export default NewsCrypto;
