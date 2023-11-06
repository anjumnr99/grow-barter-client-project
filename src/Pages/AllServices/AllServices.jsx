import axios from "axios";
import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";


const AllServices = () => {
    
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                // console.log(res.data);
                setServices(res.data)
            })
    }, []);

    console.log(services);
    
    return (
        <div>
             {
                services?.map(service => <AllServicesCard key={service._id} service={service} ></AllServicesCard>)
             }
        </div>
    );
};

export default AllServices;