import { useState } from "react";
import logo from "../assets/images/logo-01.png";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Avatar } from "../assets/images/avatar-01.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
    const cartCount = useSelector((state) => state.cart);
    const [toggleMenu, setToggleMenu] = useState(false);
    let navigate = useNavigate();

    const navRoute = (path = `/cart`) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <header className="p-2 items-center h-[10%] w-full justify-between md:justify-around  px-5 bg-gray-100 sticky top-0 shabdow-lg flex">
                {/* desktop */}

                <img src={logo} onClick={() => navRoute("/home")} className="w-12" alt="logo" />

                <ul className="list-style-none hidden md:flex md:bg-black-100 w-[70%] justify-center self-center text-gray-500">
                    <li className="px-3 hover:text-red-300">
                        <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
                            Home
                        </Link>
                    </li>
                    <li className="px-3 hover:text-red-300" onClick={() => window.scrollTo(0, 0)}>
                        <Link to="/cake">Cakes</Link>
                    </li>
                    <li className="px-3 hover:text-red-300">
                        <HashLink smooth to="/Home#aboutus">
                            About
                        </HashLink>
                    </li>
                    <li className="px-3 hover:text-red-300">
                        <HashLink smooth to="/Home#contactus">
                            Contact Us
                        </HashLink>
                    </li>
                </ul>

                <div className="flex justify-center gap-2">
                    <div className="flex justfy-start relative h-9  w-10 md:w-16" onClick={() => navRoute()}>
                        <BsCart2 className="text-gray-500 text-3xl" />
                        <p className="bg-highlight text-sm leading-5 right-0 top-0 w-5 h-5 rounded-full text-center absolute text-gray-100">
                            {cartCount.length}
                        </p>
                    </div>
                    <div className="hidden md:flex justify-center ml-1 items-center w-full h-full hover:200">
                        <Avatar
                            onClick={() => {
                                navRoute("/login");
                            }}
                            className="w-8 h-8 avatar"
                        />
                    </div>
                    <GiHamburgerMenu className=" md:hidden flex  w-14 h-10 avatar" onClick={() => setToggleMenu(!toggleMenu)} />
                </div>
                <div style={{ display: toggleMenu ? "block" : "none" }} className="bg-gray-200 -z-50 absolute shadow-2xl py-4 right-0 top-[80%] w-[60%] h-fit">
                    <div className="flex justify-center ml-1 items-center w-full h-full hover:200">
                        <Avatar
                            onClick={() => {
                                navRoute("/login");
                                setToggleMenu(!toggleMenu);
                            }}
                            className="w-8 h-8 avatar"
                        />
                    </div>
                    <ul className="list-style-none py-5  w-full text-center self-center text-gray-500" onClick={() => setToggleMenu(!toggleMenu)}>
                        <li className="px-3 py-4 hover:text-red-300">
                            <Link
                                to="/home"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setToggleMenu(!toggleMenu);
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="px-3 py-4 hover:text-red-300" onClick={() => setToggleMenu(!toggleMenu)}>
                            <Link to="/cake">Cakes</Link>
                        </li>
                        <li className="px-3 py-4 hover:text-red-300" onClick={() => setToggleMenu(!toggleMenu)}>
                            <HashLink smooth to="/Home#aboutus">
                                About
                            </HashLink>
                        </li>
                        <li className="px-3 py-4 hover:text-red-300" onClick={() => setToggleMenu(!toggleMenu)}>
                            <HashLink smooth to="/Home#contactus">
                                Contact Us
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
