import React from "react";
import { FiPhoneCall as PhoneIcon } from "react-icons/fi";
import { AiOutlineMail as EmailIcon } from "react-icons/ai";
import { MdOutlineLocationOn as LocationIcon } from "react-icons/md";

const ContactUs = () => {
    return (
        <div id="contactus" className="h-auto min-h-[60vh]  grid grid-rows-2 md:grid-rows-1 md:grid-cols-2  p-16 w-[100%] bg-gray-300">
            <div className="w-full flex bg-gray-200 shadow-2xl">
                <div className="flex flex-col p-9 items-center text-gray-600 text-[16px] gap-y-7">
                    <p className="w-[80%]">Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <input
                        className="bg-gray-200 text-sm h-9 hover:border-highlight w-[80%] border-b-2 border-gray-500 outline-none hover:outline-none"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="bg-gray-200 text-sm h-9 hover:border-highlight w-[80%] border-b-2 border-gray-500 outline-none hover:outline-none"
                        type="text"
                        placeholder="Email"
                    />
                    <textarea
                        className="bg-gray-200 text-sm h-9 hover:border-highlight w-[80%] border-b-2 border-gray-500 outline-none hover:outline-none"
                        placeholder="Message"
                    ></textarea>
                    <button className="bg-highlight text-white y w-[50%]">Send</button>
                </div>
            </div>

            <div className="w-full h-fit row-start-1 md:col-start-2 flex flex-col md:my-auto text-2xl px-16">
                <h3 className="font-allura text-4xl py-7  text-highlight">Contact Us</h3>
                <div className="text-gray-600 text-[18px] grid grid-cols-9 gap-y-4 jgrid-rows-3">
                    <PhoneIcon className="text-2xl  col-span-1" /> <p className="col-span-8">+000 00 000 000</p>
                    <EmailIcon className="text-2xl  col-span-1" /> <p className="col-span-8">info@ecake.com</p>
                    <LocationIcon className="text-2xl inline-block  col-span-1" /> <p className="col-span-8"> street Address, city, Country</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
