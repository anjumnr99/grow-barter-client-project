import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import PendingList from "./PendingList";


const PendingWorks = () => {
    const { user } = useContext(AuthContext);
    const [pendingWorks, setPendingWorks] = useState([]);

   const url = `http://localhost:5000/pending-work?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
             console.log(res.data);
              setPendingWorks(res.data)   
            })
    }, [url]);

    console.log(pendingWorks);
    return (
        <div>
            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    pendingWorks?.map(list=><PendingList key={list._id} list={list} ></PendingList>)
                }
            </ul>
        </div>
    );
};

export default PendingWorks;