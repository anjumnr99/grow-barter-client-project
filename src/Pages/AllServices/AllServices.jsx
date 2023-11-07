import axios from "axios";
import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";
import useAllService from "../../Hooks/useAllService";


const AllServices = () => {
    const services = useAllService();
    // const [services, setServices] = useState([]);
    const [isMore, setIsMore] = useState(false);

    // console.log(services);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/services')
    //         .then(res => {
    //             // console.log(res.data);
    //             setServices(res.data)
    //         })
    // }, []);

    const handleMore = () => {
        setIsMore(true);
    }

    console.log(services.length);

    return (
        <div>
            {

                isMore ? <div>
                    {
                        services?.map(service => <AllServicesCard key={service._id} service={service} ></AllServicesCard>)
                    }
                </div> : <div>
                    {
                        services?.slice(0, 6)?.map(service => <AllServicesCard key={service._id} service={service} ></AllServicesCard>)
                    }

                </div>

            }

            {
                services.length > 6 && <div className="flex justify-center items-center mt-5">
                    <button onClick={handleMore} type="button" className={`py-3 px-4 ${isMore&&'hidden'} inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border border-transparent font-bold text-green-500 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-white focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800`}>
                        More...
                    </button>
                </div>
            }
        </div>
    );
};

export default AllServices;