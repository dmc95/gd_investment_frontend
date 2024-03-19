import NewsCompagny from "../components/NewsCompagny";
import Top from "../components/Top";
import NewsCrypto from "../components/NewsCrypto";
import CarouselEtf from "../components/CarouselEtf";
import { ToastContainer, toast, Bounce } from "react-toastify";
import React, { useEffect } from "react";

const Home = ({ showSuccessToast }) => {
  useEffect(() => {
    if (showSuccessToast) {
      toast.success('Votre compte a bien été supprimer', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",  
        transition: Bounce,
      });
      // setShowSuccessToast(false);
    }
  }, [showSuccessToast]);   
    
  return (
    <>
    {showSuccessToast && <ToastContainer/>}
    <section className="w-[310px] sm:w-full 2xl:w-5/6 xl:w-5/6 h-[3200px] xm:h-[3300px] md:h-[3400px] lg:h-[3600px] 2xl:h-[2500px] xl:h-[3100px]  mx-auto z-0">
      <div className="pt-[250px] flex-col flex 2xl:flex-row">
        <div className="2xl:flex 2xl:flex-col flex-row w-full 2xl:w-6/12">
          <NewsCompagny />
          <NewsCrypto />
        </div>
        <div className="2xl:w-6/12 flex justify-center">
          <Top />
        </div>
      </div>
      <div className="w-full">
        <CarouselEtf
          divParent={"2xl:w-11/12 lg:h-[600px] h-[600px] flex items-end overflow-x-hidden"}
          divText={"w-[300px]"}
          divCard={
            " mx-2 sm:w-1/2 sm:h-1/4 w-3/12 md:h-1/3 2xl:my-8 my-3 p-2 text-lg border borderColor rounded-lg shadow-md backdrop-blur-sm bg-white/30 animate-scroll"
          }
          styleText={"w-[150px] font-semibold 2xl:text-3xl"}
          />
      </div>
    </section>
          </>
  );
};

export default Home;



