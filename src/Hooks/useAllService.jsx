import axios from "axios";
import { useEffect, useState } from "react";


const useAllService = () => {
    const [services, setServices] = useState([]);
   

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                console.log(res.data);
                setServices(res.data)
            })
    }, []);

    return services;
};

export default useAllService;