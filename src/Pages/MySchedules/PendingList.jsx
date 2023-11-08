import { useState } from "react";


const PendingList = ({list,handleStatus}) => {

    

    const { _id,
        Service_Name,
        Service_Image,
        Service_Provider_Email,
        Service_Price,
        booking_date,
        address,
        service_status,
        user_email,
    } = list || {};

    const [defaultValue, setDefaultValue] = useState(service_status)

    const handleStatusUpdate = e =>{
        //    const status = e.target.value;
        //    console.log(status);
           setDefaultValue(e.target.value)
           handleStatus(_id,e.target.value)
    }
    return (
        <li className="flex flex-col py-6  sm:justify-between">
            <div className="flex flex-col lg:md:sm:flex-row w-full  lg:md:sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-full border-transparent rounded outline-none lg:md:sm:w-32 lg:md:sm:h-32 bg-gray-500" src={Service_Image} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1 ">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">{Service_Name}</h3>
                            <p className="text-sm dark:text-gray-400">Status : {defaultValue} </p>
                        </div>

                    </div>

                    <div className="flex text-sm ">
                        {/* <button onClick={()=>handleRemove(_id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                        </button> */}
                        <button type="button" className="flex items-center px-2 py-1 space-x-1">
                            <div className="text-right">
                                <label htmlFor="underline_select" className="sr-only">Underline select</label>
                                <select defaultValue={defaultValue} onChange={handleStatusUpdate} id="underline_select" className="block py-2.5 px-0 lg:md:sm:px-1 w-full text-sm lg:md:sm:text-lg text-green-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    

                                    <option  value="pending">Pending</option>
                                    <option className=" select" value="in progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PendingList;