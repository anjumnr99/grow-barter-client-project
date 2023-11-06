import { Link } from "react-router-dom";

const AllServicesCard = ({service}) => {

    const { Service_Name, Service_Area, Service_Description, Service_Image, Service_Price , Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};

    return (
        <div>
            <div  className="flex flex-col  md:h-96 p-3 my-4 mx-2 md:mx-3 lg:mx-auto items-center bg-green-100 border border-green-400 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                    <p className="mb-3 font-normal text-lg  text-gray-500 dark:text-gray-400">{Service_Description.slice(0,100)}...</p>
                    <p className="text-lg">Area: {Service_Area} </p>
                    <div className="flex justify-between mt-4">
                        <p className="text-lg">Price: ${Service_Price}</p>
                        <Link className="text-xl font-semibold ">
                           View Details
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllServicesCard;