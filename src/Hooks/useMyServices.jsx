import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const useMyServices = () => {

    const {user} = useContext(AuthContext);

    const [myServices, setMyServices] = useState([]);

    const url = `https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/pending-work?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
             console.log(res.data);
             setMyServices(res.data)   
            })
    }, [url]);

    return myServices;
};

export default useMyServices;

