
import { useContext, useEffect, useState } from "react";
import useMyServices from "../../Hooks/useMyServices";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import axios from "axios";
import { Helmet } from "react-helmet";



const ManageServices = () => {
   

    const { user } = useContext(AuthContext);

    const [myServices, setMyServices] = useState([]);

    const url = `https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/my-services?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setMyServices(res.data)
            })
    }, [url]);

    console.log('My Services',myServices);

    return (
        <div className="mt-10 py-10 h-[80vh] ">
            <Helmet>
                <title>Grow Barter | Manage Services</title>
            </Helmet>

            {
                myServices.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-1 ">

                {
                    myServices?.map(service =>
                        <ServiceCard key={service._id} myServices={myServices} setMyServices={setMyServices} service={service}></ServiceCard>)
                }

            </div> : <div className="flex items-center justify-center  p-5">
                <p className="text-2xl font-bold ">No Services available</p>
            </div>
            }



        </div>
    );
};

export default ManageServices;