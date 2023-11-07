import { Link } from "react-router-dom";


const PopularServiceCard = ({ service }) => {

    const { _id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};

    // console.log(service);

    console.log();
    return (
        <div className="px-4">
           
            <div className="flex flex-col w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-green-900 text-gray-100">
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
                    <p className="text-sm text-gray-400">{Service_Description?.slice(0, 100)}...</p>

                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        Price : ${Service_Price}
                    </div>


                    <Link to={`/all-services/${_id}`}>
                        <div className="flex  space-x-2 text-lg hover:text-green-300 text-gray-200">
                            {/* <button>View Details</button> */}
                            <button type="button" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-green-700 shadow-sm align-middle hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-base dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                View Details
                                <svg className="w-3 h-auto" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PopularServiceCard;