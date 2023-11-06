import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};
    return (
        <div>
            <div>
                <div className=" max-w-full mx-auto my-4 border-b-2 border-b-neutral p-8 sm:flex sm:space-x-6 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={Service_Provider_Image} alt="" className="object-cover object-center w-full h-full rounded dark:dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{Service_Provider_Name}</h2>
                            <span className="text-sm dark:dark:text-gray-400">{Service_Area}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:dark:text-gray-400">{Service_Provider_Email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                    <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                </svg>
                                <span className="dark:dark:text-gray-400">+25 381 77 983</span>
                            </span>
                        </div>
                    </div>
                </div>

                <section className="px-5 py-10 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <div className="container grid grid-cols-12 mx-auto gap-5 gap-y-6 ">

                        <div className=" flex col-span-12 bg-center  dark:dark:bg-gray-500 xl:col-span-8 lg:col-span-8 md:col-span-8 min-h-96">
                            <div className=" p-4 shadow-md dark:dark:dark:bg-gray-900 dark:dark:dark:text-gray-100">

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={Service_Image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:dark:dark:bg-gray-500" />

                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="#" className="block">
                                            <h3 className="text-xl font-semibold dark:dark:dark:text-violet-400">{Service_Name}</h3>
                                        </a>
                                        <p className="leadi dark:dark:dark:text-gray-400">{Service_Description}</p>
                                        <div className="text-left">
                                            <p className="text-lg font-semibold">${Service_Price}</p>

                                        </div>
                                        <button type="button" data-hs-overlay="#hs-vertically-centered-scrollable-modal" className="px-6 border-green-400 border-b-4 hover:border-green-500 hover:shadow-green-400 transition-all  shadow-green-300 shadow-inner text-xl font-semibold text-green-700 py-2 border rounded-md w-full">
                                            Book Now
                                        </button>

                                        {/* <button type="button" className ="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                                            Vertically centered scrollable modal
                                        </button> */}
                                        {/* Modal */}
                                        <div id="hs-vertically-centered-scrollable-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                                            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                                                <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                                        <h3 className="font-bold text-gray-800 dark:text-white">

                                                        </h3>
                                                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                                                            <span className="sr-only">Close</span>
                                                            <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="w-full bg-green-100 px-4 overflow-y-auto">
                                                         <img className="w-full mt-4 h-48 " src={Service_Image} alt="" />
                                                        <section className="p-6 border dark:dark:bg-gray-800 w-full dark:dark:text-gray-50">
                                                            <form  action="" className="container flex flex-col w-full mx-auto space-y-12">
                                                                <fieldset className="grid gap-6 rounded-md shadow-sm dark:dark:bg-gray-900">
                                                                    
                                                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                                                        <div className="col-span-full ">
                                                                            <label className="text-sm">Service name</label>
                                                                            <input id="firstname" type="text"readOnly defaultValue={Service_Name} className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                                                        </div>
                                                                   
                                                                        <div className="col-span-full ">
                                                                            <label htmlFor="email" className="text-sm">Service Provider Email</label>
                                                                            <input id="email" type="email" 
                                                                            defaultValue={Service_Provider_Email}
                                                                            readOnly
                                                                            className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                                                        </div>
                                                                   
                                                                        <div className="col-span-full ">
                                                                            <label htmlFor="email" className="text-sm">User Email</label>
                                                                            <input id="email" type="email" placeholder="Enter your email" className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                                                        </div>

                                                                        <div className="col-span-full sm:col-span-3">
                                                                            <label htmlFor="city" className="text-sm">Service Taking Date</label>
                                                                            <input type="date" name="" className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" id="date" />
                                                                        </div>
                                                                        <div className="col-span-full sm:col-span-3">
                                                                            <label htmlFor="state" className="text-sm">Price</label>
                                                                            <input id="state" type="text" readOnly
                                                                            defaultValue={Service_Price} className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                                                        </div>
                                                                        <div className="col-span-full">
                                                                            <label htmlFor="address" className="text-sm">Address</label>
                                                                            <input id="address" type="text" placeholder="" className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                                                        </div>
                                                                       
                                                                       
                                                                    </div>
                                                                </fieldset>
                                                               
                                                            </form>
                                                        </section>

                                                    </div>
                                                    <div className="flex justify-center items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                                        {/* <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                                                            Close
                                                        </button> */}
                                                        <button className="py-3 w-full px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800" href="#">
                                                        Purchase this Service
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 xl:col-span-4 lg:col-span-4 col-span-12 md:col-span-4  ">
                            <div className="mb-8 pb-3 space-x-5 text-xl font-semibold border-b-2 border-opacity-10 dark:dark:border-violet-400">
                                Other services of Anna
                            </div>
                            <div className="flex flex-col divide-y divide-gray-700">
                                <div className="flex md:flex-col lg:flex-row px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover md:w-full lg:w-40 w-40 h-40 mr-4 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                                    <div className="flex flex-col flex-grow">
                                        <p className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
                                        <p className="mt-auto text-xs dark:dark:text-gray-400">5 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;