import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Spin from "./Spin";

const NewsDashboard = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.polygon.io/v2/reference/news?limit=10&apiKey=twkp9CD6f52IuhhvtCwBN2FC1rx6mS3M"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  return isLoading ? (
    <Spin />
  ) : (
    <>
      {data.results.map((elem, index) => (
        <a key={index} href={elem.article_url} rel="noreferrer" target="_blank" >
          <div className="border-b-2 border-black mb-5 mx-5 hover:scale-102 duration-100">
            <table className=" my-2 ">
              <tbody className="">
                <tr className="">
                  <td className="w-5/6">{elem.title}</td>
                  <td className="w-1/6">{elem.author}</td>
                  <td>{formatDate(elem.published_utc)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </a>
      ))}
    </>
  );
};

export default NewsDashboard;
