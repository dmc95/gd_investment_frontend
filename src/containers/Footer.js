import React from 'react'
import { Link } from "react-router-dom";
import mail from "../containers/assets/images/message.png"
import logo from "../containers/assets/images/logoDbis.PNG"
import linkedin from "../containers/assets/images/linkedin2.png"

const Footer = ({token}) => {
  return (
    <section className="footer h-[515px] xm:h-[415px] w-full xl:h-[480px]  md:h-[760px] xls:h-[440px] bg-black/70 bottom-0">
    <div className="w-full xlx:w-[930px] md:w-2/3 sm:mx-auto flex flex-wrap justify-evenly pt-20">
      <div className="flex flex-col max-xlx:mb-5 h-[180px]">
          <div className="">
        <img
          className="w-7 h-7 rounded-lg mt-5"
          src={mail}
          alt="mail"
          />
          <span className=" text-white text-sm">mickael.dolphin@live.fr</span>
          </div>
      </div>
      <div className="text-white flex max-md:flex-col sm:mb-10">
        <span className="border-r h-56 max-md:h-0"></span>
        <ul className="px-10 text-left">
          <li className="mb-5 font-semibold">Plan du site</li>
          <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/">ACCUEIL</Link></li>
          <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/Etf">ETF</Link></li>
          {token ? (
            <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/dashboard">DASHBOARD</Link></li>
          ) : ""}
          <li className="mb-2 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-110 duration-150"><Link to="/">À PROPOS</Link></li>
        </ul>
        <span className="border-r h-56 max-md:h-0"></span>

      </div>
        <div className="flex max-slg:flex-col text-white">
        <ul className="px-10">
          <li className="font-semibold">Autre réalisation</li>
          <button className="py-6 text-white transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
            <a href="https://databisolutions.fr/" rel="noreferrer" target="_blank">
              <img className="w-12 h-12 rounded-md" src={logo} alt="DBIS" />
            </a>
          </button>
        </ul>
        <span className="border-r h-56 text-left max-md:h-0"></span>
        <ul className="px-10">
          <li className="font-semibold">Liens Sociaux</li>
          <button className="py-4 text-white transition ease-in-out delay-250 hover:-translate-y-0.5 hover:scale-105 hover:text-white duration-500">
          <a href="https://linkedin.com/in/mickaël-dolphin-dev" rel="noreferrer" target="_blank">
              <img className="w-16 h-16" src={linkedin} alt="linkedin" />
            </a>
          </button>
        </ul>
        </div>
      <div className="mx-auto bottom-0 border-b pt-10 w-11/12"></div>
      <div className="flex justify-around w-11/12">
        <p className="text-white font-semibold">©2024-Mick.DMC</p>
        <button className="xl:text-md font-semibold text-white transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-500">
          <Link to="/mentions">Mentions Legales</Link>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Footer