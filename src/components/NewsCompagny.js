import React from "react";
import axios from "axios";
import gd from "../containers/assets/images/g.png";
import { useState, useEffect } from "react";

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
          // "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT,AAPL,META&limit=4&language=fr&filter_entities=true&language=en&api_token=JRNK6vugw8FwjYD7KHFhFD4S58zJUUHprPB7SK4P"
          "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=" +
            dateHierFormatee +
            "&to=" +
            dateFormatee +
            "&token=cm1iqvhr01qvthn7p2ngcm1iqvhr01qvthn7p2o0"
        );
        console.log(response.data);
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
    <span>chargement</span>
  ) : (
    <>
      {/* <div className="w-[820px] h-[500px] bg-red-500">
       {data.map((elem,index)=>(
       <p>{elem.title}</p> 
       ))}
      </div> */}
      <div className="w-[1020px] h-[750px] bg-red-500 rounded-lg">
        <a href={data[0].url} rel="noreferrer" target="_blank">
          <div className="w-[1020px] h-[300px] flex ">
            <img
              className="w-[800px] h-[400px] object-contain rounded-tl-lg"
              src={data[0].image ? data[0].image : gd}
              alt=""
            />
            <p className="text-2xl">{data[0].headline}</p>
          </div>
        </a>


        <div className="w-[1020px] h-[330px] flex overflow-hidden overflow-x-scroll mt-32">
          {data.map((elem, index) =>
            elem.image ? (
              <a href={elem.url} rel="noreferrer" target="_blank">
                <div key={index} className="w-[240px] flex-shrink-0 mx-5">
                  <img
                    className="w-[350px] h-[220px] object-contain"
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
