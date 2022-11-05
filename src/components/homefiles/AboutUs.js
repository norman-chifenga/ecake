import React from "react";
import heroImage from "../../assets/images/baking.jpg";

const AboutUs = () => {
    return (
        <div id="aboutus" className="h-auto min-h-[60vh] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2   p-16 text-white w-[100%] bg-gray-300">
            <div className="w-full flex flex-col justify-between text-2xl p-6">
                <h3 className="font-allura text-4xl py-7 text-highlight">About Us</h3>
                <p className="text-gray-600 text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum non perspiciatis nemo necessitatibus! Dolorem odit atque, voluptates
                    voluptatem natus, laboriosam autem, ipsum optio at nam vitae cumque praesentium itaque? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Rerum eum non perspiciatis nemo necessitatibus! Dolorem odit atque, voluptates voluptatem natus, laboriosam autem, ipsum optio at nam
                    vitae cumque praesentium itaque?
                </p>
            </div>

            {/* https://www.mindfood.com/article/baking-for-therapy-and-self-empowerment/ */}
            <div className="w-full my-auto h-fit flex justify-end shadow-2xl">
                <img src={heroImage} className="max-h-[60vh]" alt="hero" />
            </div>
        </div>
    );
};

export default AboutUs;
