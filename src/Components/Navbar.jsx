import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext } from "react";
import { IoIosPerson } from 'react-icons/io';
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('Logout Successfully!')

                navigate('/login')
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
            })
    }

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
                <div className="navbar-end flex ">

                    {
                        user?.email ? <div>

                            <div className="flex-shrink-0 hidden lg:flex gap-1  group ">
                                <div className="flex  items-center">
                                    <img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full" src={user.photoURL} alt="Image Description" />
                                    <div className="ml-1">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">{user.displayName}</h3>
                                        <p className="text-sm font-medium text-gray-400">{user.email}</p>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="text-xl ml-3  font-semibold text-green-700">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "  text-green-700 font-bold" : ""
                                        }
                                    >
                                        Logout
                                    </NavLink>

                                </button>
                             
                            </div>
                            <div className="dropdown lg:hidden dropdown-end ">
                                <label tabIndex={0} className="">
                                    <img className="inline-block flex-shrink-0 h-12 w-12 rounded-full" src={user.photoURL} alt="Image Description" />
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-fit">
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{user.displayName}</h3>
                                    <p className="text-lg font-medium text-gray-400">{user.email}</p>
                                </ul>
                            </div>
                            <button onClick={handleLogOut} className="text-xl ml-3 lg:text-2xl lg:hidden  font-semibold text-green-700">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "  text-green-700 font-bold" : ""
                                        }
                                    >
                                        Logout
                                    </NavLink>

                                </button>


                        </div> :
                            <div className="flex justify-center items-center gap-3">

                                <label tabIndex={0} className="avatar">
                                    <div className="">
                                        <IoIosPerson className="text-4xl text-green-600  "></IoIosPerson>
                                    </div>
                                </label>

                                <button className="text-lg lg:text-xl font-semibold text-slate-600">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "  text-green-500 font-bold" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>

                                </button>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;