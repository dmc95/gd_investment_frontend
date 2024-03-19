import React, { useState } from "react";
import Top10Etf from "../components/Top10Etf";
import Flop10Etf from "../components/Flop10Etf";

const Etf = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <div className="pt-72 ">
      <div className="flex flex-col justify-evenly">
        <Top10Etf setSelectedSymbol={setSelectedSymbol} />
        <Flop10Etf />
      </div>
    </div>
  );
};

export default Etf;
