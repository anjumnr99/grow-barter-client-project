import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    return (
        <div className="bg-transparent px-4 py-3">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden text-2xl h-5 w-5">
                            <GiHamburgerMenu></GiHamburgerMenu>

                        </label>
                        <ul tabIndex={0} className="menu dropdown-content bg z-[1]  p-2 shadow bg-base-100 rounded-box min-w-max">
                            <li className="text-md border-none font-semibold text-slate-600">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <li className="text-md  font-semibold text-slate-600">Dashboard</li>
                                <ul className="  bg-transparent">

                                    <li className="text-md  font-semibold  text-slate-600">
                                        <NavLink
                                            to="/manage-services"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                            }
                                        >
                                            My Services
                                        </NavLink>
                                    </li>


                                    <li className="text-md  font-semibold text-slate-600">
                                        <NavLink
                                            to="/add-services"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                            }
                                        >
                                            Add Services
                                        </NavLink>
                                    </li>
                                    <li className="text-md  font-semibold text-slate-600">
                                        <NavLink
                                            to="/my-schedules"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                            }
                                        >
                                            My Schedules
                                        </NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li className="text-md  font-semibold text-slate-600">
                                <NavLink
                                    to="/services"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Grow Barter</a>
                </div>



                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal text-center px-1">
                        <li className="text-md lg:text-xl font-semibold text-slate-600">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="text-md lg:text-xl font-semibold text-slate-600">
                            <NavLink
                                to="/services"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>
                                    <li className="text-md lg:text-xl font-semibold text-slate-600">Dashboard</li>

                                </summary>
                                <ul className=" border bg-green-100 menu dropdown-content bg z-[1]  p-2 shadow rounded-box min-w-max">

                                    <li className=" text-md lg:text-xl font-semibold  text-slate-600">
                                        <NavLink
                                            to="/manage-services"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                            }
                                        >
                                            My Services
                                        </NavLink>
                                    </li>


                                    <li className="text-md lg:text-xl font-semibold text-slate-600">
                                        <NavLink
                                            to="/add-services"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                            }
                                        >
                                            Add Services
                                        </NavLink>
                                    </li>
                                    <li className="text-md lg:text-xl font-semibold text-slate-600">
                                        <NavLink
                                            to="/my-schedules"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "   text-green-700 font-bold" : ""
                                            }
                                        >
                                            My Schedules
                                        </NavLink>
                                    </li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center gap-3">
                    <div className="flex-shrink-0 hidden  group lg:block">
                        <div className="flex items-center">
                            <img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            <div className="ml-3">
                                <h3 className="font-semibold text-gray-800 dark:text-white">Maria Wanner</h3>
                                <p className="text-sm font-medium text-gray-400">maria@gmail.com</p>
                            </div>
                        </div>
                    </div>


                    <div className="dropdown lg:hidden dropdown-end">
                        <label tabIndex={0} className="">
                            <img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-fit">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Maria Wanner</h3>
                            <p className="text-lg font-medium text-gray-400">maria@gmail.com</p>
                        </ul>
                    </div>


                    <button className="text-xl  lg:text-2xl font-semibold text-green-700">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "  text-green-700 font-bold" : ""
                            }
                        >
                            Login
                        </NavLink>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;