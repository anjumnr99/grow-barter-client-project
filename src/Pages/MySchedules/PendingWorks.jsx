import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import PendingList from "./PendingList";
import toast from "react-hot-toast";



const PendingWorks = ({ bookings, setBookings }) => {
    const { user } = useContext(AuthContext);

    const [pendingWorks, setPendingWorks] = useState([]);

    const url = `https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/pending-work?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setPendingWorks(res.data)
            })
    }, [url]);

    console.log(bookings);



    const handleStatus = (id, status_value) => {

        console.log(id, status_value);

        // const filter = pendingWorks?.filter(item=>item._id === id);
        // console.log('Filterd',filter);

        // axios.patch(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/bookings/${id}`,{service_status : status_value})
        // .then(res=>{
        //     console.log(res.data);

        // })


        fetch(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ service_status: status_value })
        }, { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.service_status = status_value;
                    const newBookings = [updated, ...remaining];
                    // setPendingWorks(newBookings);
                    setBookings(newBookings)
                }
            })
    }

    console.log(pendingWorks);
    return (
        <div>
            {
                pendingWorks.length > 0 ? <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        pendingWorks?.map(list => <PendingList
                            key={list._id}

                            handleStatus={handleStatus}
                            list={list} ></PendingList>)
                    }
                </ul> : <div className="flex items-center justify-center mt-10">
                            <p className="text-2xl ">You have no available pending works</p>
                        </div>
            }
        </div>
    );
};

export default PendingWorks;