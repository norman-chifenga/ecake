import React from "react";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <div className="bg-gray-200 pt-12">
            <div className="md:grid md:grid-rows-1 justify-start md:grid-cols-3 px-8 bg-gray-200 ">
                <div className="flex flex-col p-9 w-full h-fit">
                    <p className="text-gray-600 text-sm">Spread the Deliciouses</p>
                    <ul className="list-none  flex gap-6 mt-4">
                        <li>
                            <TiSocialFacebook className="text-gray-600 text-2xl" />
                        </li>
                        <li>
                            <TiSocialTwitter className="text-gray-600 text-2xl" />
                        </li>
                        <li>
                            <TiSocialInstagram className="text-gray-600 text-2xl" />
                        </li>
                        <li>
                            <TiSocialYoutube className="text-gray-600 text-2xl" />
                        </li>
                    </ul>
                </div>

                <div className="flex w-full h-full items-start md:justify-around justify-start align-center p-9">
                    <ul className="list-style-none text-sm flex md:bg-black-100 gap-y-3 flex-col text-gray-500">
                        <li className=" hover:text-red-300">
                            <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-red-300">
                            <Link to="/cake">Cakes</Link>
                        </li>
                        <li className="hover:text-red-300">
                            <HashLink smooth to="/Home#aboutus">
                                About
                            </HashLink>
                        </li>
                        <li className="hover:text-red-300">
                            <HashLink smooth to="/Home#contactus">
                                Contact Us
                            </HashLink>
                        </li>
                    </ul>

                    <ul className="list-style-none text-sm flex md:bg-black-100 gap-y-3 flex-col text-gray-500">
                        <li className="hover:text-red-300">Cancellation and Refund</li>
                        <li className="hover:text-red-300">Terms and Conditions</li>
                        <li className="hover:text-red-300">Career</li>
                    </ul>
                </div>

                <div className=" flex  justify-start md:justify-end w-full p-9 md:gap-y-6">
                    <div className="flex flex-col w-[70%]  gap-y-6">
                        <p className="text-gray-600 text-sm">Subscribe to Our Newsletter</p>
                        <input
                            className="w-[100%] text-sm h-7 hover:border-highlight border-b-2 border-gray-500 outline-none"
                            type="email"
                            replacement="enter email address"
                        />
                        <button className="bg-highlight w-[100%] text-white text-base hover:text-highlight: px-7 py-1">Subscribe</button>
                    </div>
                </div>
            </div>

            <hr className="bg-gray-400 h-[3px] w-[90%] m-auto " />

            <div className="flex text-sm py-8 px-16 justify-between text-gray-600  bg-gray-200">
                <p> &copy; 2022 ecake</p>
                <div>
                    <p className="text-gray-600 text-sm">We accept:</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
