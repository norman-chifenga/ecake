import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = new useNavigate();

    const handleShopNow = () => {
        navigate("/cake");
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen h-fit w-full z-[-40] flex px-[10%]  ">
            <div className="flex flex-col justify-center w-[70%] md:static z-[-100] absolute py-5 md:w-full items-start">
                <h1 className="md:text-4xl  text-2xl md:w-[80%] max-s-[100%] top-0 left-0 w-[300px] leading-normal mb-7 font-extrabold text-gray-500">
                    <span className="font-allura text-highlight text-7xl"> Delicious cake</span> <br />
                    Deliciously delivered direct to your door!
                </h1>
                <p className="md:w-[50%] w-[70%] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam hic iste fugit</p>
                <button onClick={() => handleShopNow()} className="bg-highlight mt-8 text-white hover:text-highlight: px-7 py-2 rounded-xl">
                    Shop now
                </button>
            </div>
            <div className="flex justify-center align-center max-w-[100%] z-[-101] opacity-20 md:opacity-100  item-center overflow-hidden">
                <img src={require("../../assets/images/cake2034.png")} className="object-contain" alt="hero" />
            </div>
        </div>
    );
};

export default Hero;
