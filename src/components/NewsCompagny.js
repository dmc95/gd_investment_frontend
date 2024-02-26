import React from "react";
import axios from "axios";
import gd from "../containers/assets/images/g.png";
import { useState, useEffect } from "react";
import Spin from "./Spin";

// Obtenir la date actuelle
const dateActuelle = new Date();

// Décrémenter le jour d'un pour obtenir la date d'hier
dateActuelle.setDate(dateActuelle.getDate() - 2);

// Récupérer les composants de la date d'hier
const jourHier = dateActuelle.getDate();
const moisHier = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
const anneeHier = dateActuelle.getFullYear();

// Formater la date d'hier sous la forme 'dd/mm/yyyy'
const dateHierFormatee = `${anneeHier}-${moisHier < 10 ? "0" : ""}${moisHier}-${
  jourHier < 10 ? "0" : ""
}${jourHier}`;

// Récupérer les composants de la date
const jour = dateActuelle.getDate();
const mois = dateActuelle.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
const annee = dateActuelle.getFullYear();

// Formater la date sous la forme 'dd/mm/yyyy'
const dateFormatee = `${annee}-${mois < 10 ? "0" : ""}${mois}-${
  jour < 10 ? "0" : ""
}${jour}`;

const News = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //eslint-disable-next-line
    const fetchData = async () => {
      try {
        const response = await axios.get(
          
          "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=" +
            dateHierFormatee +
            "&to=" +
            dateFormatee +
            "&token=cm1iqvhr01qvthn7p2ngcm1iqvhr01qvthn7p2o0"
        );
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  return isLoading ? (
    <Spin />
  ) : (
    <>
     
      <div className="h-[750px] rounded-lg mx-2 z-0">
        <a href={data[0].url} rel="noreferrer" target="_blank">
          <div className="2xl:w-11/12 h-[300px] lg:flex">
            <img
              className="2xl:w-3/5 h-[400px] object-cover rounded-lg hover:shadow-2xl max-lg:mx-auto hover:shadow-white hover:scale-102 translate-x-1 ease-in-out duration-800"
              src={data[0].image ? data[0].image : gd}
              alt=""
            />
            <p className="md:text-2xl max-lg:text-center lg:ml-2">{data[0].headline}</p>
            
          </div>
        </a>


        <div className="w-full h-[330px] flex overflow-x-hidden  mt-32 ">
          {data.map((elem, index) =>
            elem.image ? (
              <a href={elem.url} rel="noreferrer" target="_blank">
                <div key={index} className="w-[240px] flex-shrink-0 mx-5 animate-scroll ">
                  <img
                    className="w-full h-[220px] object-contain hover:scale-102 translate-x-1 duration-100"
                    src={elem.image}
                    alt=""
                  />
                  <p>{elem.headline.substring(0, 70)}</p>
                </div>
              </a>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};

export default News;
