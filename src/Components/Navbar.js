import { NavLink, useLocation } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === "/";

    const handleIsActive = (e) => {
        return {
            color: e.isActive ? "lightblue" : "",
            textDecoration: e.isActive ? "underline" : "",
        };
    };

    return (
        <nav className={`h-[14vh] w-screen  ${isHome ? "absolute inset-0 bg-transparent" : "bg-black my-auto"} z-50`}>
            <div className="max-w-full flex flex-wrap items-center justify-between mx-auto px-10 py-[15px]">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={LOGO} className="md:h-[4rem] h-14" alt="Logo" />
                </NavLink>
                <button onClick={() => setShowMenu(!showMenu)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    {showMenu ? (
                        <img width="50" height="50" src="https://img.icons8.com/?size=100&id=6483&format=png&color=ffffff" alt="close" />
                    ) : (
                        <img width="50" height="50" src="https://img.icons8.com/?size=100&id=3096&format=png&color=ffffff" alt="menu" />
                    )}
                </button>
                <div className="md:block hidden w-full md:w-auto">
                    <ul className="font-light text-xl tracking-wide flex flex-col p-4 md:p-0 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <NavLink
                                style={handleIsActive}
                                to="/"
                                className="block py-2 px-3 text-white rounded md:border-0 md:hover:text-blue-700 md:p-0"
                            >Home</NavLink>
                        </li>

                        <li>
                            <NavLink
                                style={handleIsActive}
                                to="/facilities"
                                className="block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                            >Services</NavLink>
                        </li>
                        <li>
                            <NavLink
                                style={handleIsActive}
                                to="/pricing"
                                className="block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                                >Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                style={handleIsActive}
                                to="/about"
                                className="block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                                >About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                style={handleIsActive}
                                to="/contact-form"
                                className="block py-2 px-3 text-gray-900 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
                                >Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`${showMenu ? "absolute right-0 top-20 text-center w-full md:w-auto bg-black bg-opacity-20 backdrop-blur-lg" : "hidden"} md:hidden`}>
                    <ul className="font-light text-xl tracking-wide flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 h-fit">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/facilities" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
