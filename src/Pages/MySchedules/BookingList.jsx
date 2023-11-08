

const BookingList = ({booking,handleRemove}) => {
    
    const { _id,
        Service_Name,
        Service_Image,
        Service_Provider_Email,
        Service_Price,
        booking_date,
        address,
        service_status,
        user_email,
    } = booking || {};

    return (

        <li className="flex flex-col py-6  sm:justify-between">
            <div className="flex flex-col lg:md:sm:flex-row w-full  lg:md:sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-full  border-transparent rounded outline-none lg:md:sm:w-32 lg:md:sm:h-32 bg-gray-500" src={Service_Image} alt="Polaroid camera" />

                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">{Service_Name}</h3>
                            <p className="text-md text-gray-600">Status : {service_status}</p>
                            <p>Booking date: {booking_date}</p>
                        </div>

                    </div>
                    <div className="flex text-sm divide-x divide-gray-700 ">
                        <button onClick={()=>handleRemove(_id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                        </button>
                        <p className="flex text-lg font-semibold items-center px-2 py-1 space-x-1">${Service_Price}</p>
                    </div>
                </div>
            </div>
        </li>

    );
};

export default BookingList;