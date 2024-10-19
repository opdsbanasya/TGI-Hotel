import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useState } from "react";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="h-[7vw] absolute inset-0 border-gray-200 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={LOGO} className="md:h-[4rem] h-14" alt="Flowbite Logo" />
                </Link>
                <button onClick={() => setShowMenu(!showMenu)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {showMenu ? (
                        <img width="50" height="50" src="https://img.icons8.com/?size=100&id=6483&format=png&color=ffffff" alt="multiply" />
                    ) : (
                        <img width="50" height="50" src="https://img.icons8.com/?size=100&id=3096&format=png&color=ffffff" alt="multiply" />
                    )}

                </button>
                <div className="md:block hidden w-full md:w-auto">
                    <ul className="font-light text-xl tracking-wide flex flex-col p-4 md:p-0 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >Home</Link>
                        </li>
                        <li>
                            <Link to="#"
                                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  md:dark:hover:bg-transparent"
                            >About</Link>
                        </li>
                        <li>
                            <Link to="#"
                                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  md:dark:hover:bg-transparent"
                            >Services</Link>
                        </li>
                        <li>
                            <Link to="#"
                                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  md:dark:hover:bg-transparent"
                            >Pricing</Link>
                        </li>
                        <li>
                            <Link to="#"
                                className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  md:dark:hover:bg-transparent"
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={`${showMenu ? "absolute right-0 top-20 text-center w-full md:w-auto bg-black bg-opacity-20 backdrop-blur-lg" : "hidden"} md:hidden`}>
                    <ul className="font-light text-xl tracking-wide flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 h-fit">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
