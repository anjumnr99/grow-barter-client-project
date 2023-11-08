import axios from "axios";
import { useEffect, useState } from "react";


const useAllService = () => {
    const [services, setServices] = useState([]);
   

    useEffect(() => {
        axios.get('https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/services',{ withCredentials: true })
            .then(res => {
                console.log(res.data);
                setServices(res.data)
            })
    }, []);

    return services;
};

export default useAllService;