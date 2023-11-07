import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const useMyServices = () => {

    const {user} = useContext(AuthContext);

    const [myServices, setMyServices] = useState([]);

    const url = `http://localhost:5000/pending-work?email=${user?.email}`;
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

