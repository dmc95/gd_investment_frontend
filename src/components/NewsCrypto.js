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
      <section className="xl:w-full  mt-20 rounded-lg border borderColor bg-white/30 xl:mx-5 max-2xl:mb-10 shadow-md">
        <h2 className="text-left my-2 text-xl ml-1">Cryptomonnaies</h2>

        <div className="mx-2 xl:flex">
          <a href={data[0].url} rel="noreferrer" target="_blank">
            <div className="mb-10 mx-auto">
              <img className="object-contain " src={data[0].image} alt="" />
              <p className="text-left text-xl">{data[0].headline}</p>
            </div>
          </a>
          <div className="flex flex-col justify-evenly">
            {data.map((elem, index) => (
              <>
                <a key={index} href={elem.url} rel="noreferrer" target="_blank">
                  <div className=" flex justify-between 2xl:flex-col-reverse">
                    <h3 className="text-left ml-6 font-semibold">
                      {elem.headline}
                    </h3>
                    <img
                      className="w-[150px] 3xl:w-[250px] object-contain 2xl:ml-6"
                      src={elem.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-left ml-6 mb-10 text-slate-500">
                      {date.toLocaleDateString(elem.datetime)}
                    </p>
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsCrypto;
