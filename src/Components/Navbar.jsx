import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLinks = <>
        <li className=" px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className=" px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Services
            </NavLink>
        </li>
        <li className=" px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
    </>
    return (


        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link  className="flex items-center">
                    {/* <img  className="h-8 mr-3"  /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Grow Barter</span>
                </Link>
                <div className="flex items-center justify-center gap-2 md:order-2">

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 lg:w-16 h-10 lg:h-16 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <div  className="text-3xl  lg:text-4xl" aria-hidden="true">
                                  <GiHamburgerMenu></GiHamburgerMenu>
                            </div>
                          

                        </button>
                        <div className='dropdown-content '>
                            <ul tabIndex={0} className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit ">
                                {navLinks}
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <div className="dropdown dropdown-bottom dropdown-end  " >
                            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/hDNb1rk/client2.jpg" alt="user photo" />
                            </button>
                            <div className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit '>
                                <div className="px-4 py-3">
                                    <span className="block text-lg text-gray-900 dark:text-white">Bonnie Green</span>
                                    <span className="block text-lg  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                </div>
                                <ul tabIndex={0} className=" ">
                                    <li>
                                        <Link className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link  className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                                    </li>
                                    <li>
                                        <Link  className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                                    </li>
                                    <li>
                                        <Link  className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <button className='btn btn-link no-underline text-lg'>Login</button>
                        </div>

                    </div>

                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex ">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;