import { Link } from "react-router-dom";

const AllServicesCard = ({ service }) => {

    const {_id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};

    return (
        <div>
            <div className="flex flex-col  md:h-96 p-3 my-4 mx-2 md:mx-3 lg:mx-auto items-center bg-green-100 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-green-200 dark:border-gray-700 dark:bg-green-800 dark:hover:bg-green-500">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-[50%] md:rounded-none md:rounded-l-lg" src={Service_Image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="flex-shrink-0 group block">
                        <div className="flex items-center my-2 mb-5">
                            <img className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full" src={Service_Provider_Image} alt="Image Description" />
                            <div className="ml-3">
                                <h3 className="font-semibold text-gray-800 dark:text-white">{Service_Provider_Name}</h3>
                                <p className="text-sm font-medium text-gray-400">{Service_Provider_Email}</p>
                            </div>
                        </div>
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Service_Name}</h5>
                    <p className="mb-3 font-normal text-lg  text-gray-500 dark:text-gray-400">{Service_Description.slice(0, 100)}...</p>
                    <p className="text-lg">Area: {Service_Area} </p>
                    <div className="flex justify-between mt-4">
                        <p className="text-lg">Price: ${Service_Price}</p>
                        <Link to={`/all-services/${_id}`}>
                            <button type="button" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-green-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all hover:border-green-800 text-base dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                View Details
                                <svg className="w-3 h-auto" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z" fill="currentColor" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllServicesCard;