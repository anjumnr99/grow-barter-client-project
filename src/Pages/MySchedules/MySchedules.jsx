
import MyBookings from "./MyBookings";
import PendingWorks from "./PendingWorks";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";



const MySchedules = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
                console.log(res.data);
            })
    }, [url]);

    console.log(bookings);
    
    return (
        <div className="my-5">
            <div className="grid  grid-cols-6 lg:md:sm:px-10  lg:md:sm:pt-10">
                <h2 className="text-2xl p-2 lg:md:sm:p-6 lg:md:sm:px-10 sm:p-10  text-green-900  col-span-3  font-semibold ">My Bookings</h2>
                <h2 className="text-2xl p-2 lg:md:sm:p-6 lg:md:sm:px-10 sm:p-10  text-green-900  col-span-3  font-semibold">My Pending Works</h2>
            </div>
            <div className=" lg:md:sm:px-10  grid grid-cols-6  divide-x divide-gray-700 ">
                <div className="flex flex-col  col-span-3 px-2 lg:md:sm:px-6 space-y-4   text-green-900">
                    <MyBookings bookings={bookings}></MyBookings>
                </div>
                <div className="flex flex-col col-span-3  p-2 lg:md:sm:p-6 space-y-4  dark:bg-gray-900 dark:text-gray-100">

                    <PendingWorks></PendingWorks>
                </div>
            </div>
        </div>
    );
};

export default MySchedules;