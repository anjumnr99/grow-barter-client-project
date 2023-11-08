import { Link } from "react-router-dom";


const OtherServices = ({service}) => {
    const { _id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};
    return (
        <Link to={`/all-services/${_id}`} className="flex md:flex-col lg:flex-row px-1 py-4">
            <img alt="" className="flex-shrink-0 object-cover md:w-full lg:w-40 w-40 h-40 mr-4 dark:dark:bg-gray-500" src={Service_Image} />
            <div className="flex flex-col flex-grow">
                <p className="font-serif hover:underline">{Service_Name}</p>
                <p>{Service_Description?.slice(0,70)}...</p>
                <p className="mt-auto text-xs dark:dark:text-gray-400">${Service_Price}
                    <a rel="noopener noreferrer" href="#" className="block dark:dark:text-blue-400 lg:ml-4 lg:inline hover:underline">{Service_Area}</a>
                </p>
            </div>
        </Link>
    );
};

export default OtherServices;