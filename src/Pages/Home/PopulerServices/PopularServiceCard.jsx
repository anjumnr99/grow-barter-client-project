import { Link } from "react-router-dom";


const PopularServiceCard = ({ service }) => {
    
    const { Service_Name, Service_Area, Service_Description, Service_Image, Service_Price , Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};

    console.log(service);

    console.log();
    return (
        <div className="px-4">
            {/* <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                    <img className="w-full h-full absolute top-0 left-0 object-cover" src="https://i.ibb.co/PWpbQGq/Produce-Swap.jpg" alt="Image Description"/>
                </div>
                <div className="flex flex-wrap">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            Service name
                        </h3>
                        <p className="mt-1 text-gray-800 dark:text-gray-400">
                           description
                        </p>
                        <p>
                            services provide image
                        </p>
                        <p>
                            service provider name
                        </p>
                        <div className="mt-5 sm:mt-auto">
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                                Last updated 5 mins ago
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={Service_Provider_Image} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" className="text-sm font-semibold">{Service_Provider_Name}</Link>
                        <span className="text-xs text-gray-400">4 hours ago</span>
                    </div>
                </div>
                <div>
                    <img src={Service_Image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{Service_Name}</h2>
                    <p className="text-sm text-gray-400">{Service_Description.slice(0,100)}...</p>

                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        Price : ${Service_Price}
                    </div>
                    <div className="flex space-x-2 text-sm text-gray-400">
                        View Details
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularServiceCard;