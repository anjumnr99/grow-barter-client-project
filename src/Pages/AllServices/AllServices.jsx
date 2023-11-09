import axios from "axios";
import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";
import useAllService from "../../Hooks/useAllService";
import { Helmet } from "react-helmet";


const AllServices = () => {
    const services = useAllService();
    // const [services, setServices] = useState([]);
    const [isMore, setIsMore] = useState(false);
    const [search, setSearch] = useState('');
    const [searchService, setSearchService] = useState([]);
    const [noMatches, setNoMatches] = useState('')

    // console.log(services);

    // useEffect(() => {
    //     axios.get('https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/services')
    //         .then(res => {
    //             // console.log(res.data);
    //             setServices(res.data)
    //         })
    // }, []);

    const handleMore = () => {
        setIsMore(true);
    };

    const handleSearch = () => {
        const inputField = document.getElementById('input-field');
        const inputFieldValue = inputField.value;
        console.log(inputFieldValue);
        setSearch(inputFieldValue);

        const findService = services.filter(item => item.Service_Name.toUpperCase() === search.toUpperCase());
        console.log(findService);
        if (findService) {
            setSearchService(findService);
        } else {
            setNoMatches('No matches data found')
        }


    }

    // useEffect(() => {
    //     if (search) {
    //         const findService = services.filter(item => item.Service_Name.toUpperCase() === search.toUpperCase());
    //         console.log(findService);
    //         if (findService) {
    //             setSearchService(findService);
    //         } else {
    //             setNoMatches('No matches data found')
    //         }
    //     }


    // }, [search, services])


    const yes = noMatches === '';

    console.log(yes);
    console.log(services);

    return (
        <div className=" min-h-[80vh]">
            <Helmet>
                <title>Grow Barter | All Services</title>
            </Helmet>

            <div className="flex flex-col max-w-5xl py-6 mt-5 px-5 mx-auto ">
                <h1 className="text-2xl font-semibold mb-2">Search here by Service name</h1>

                {/* <div className=" flex w-full ">
                    <input id="input-field" type="text" placeholder="Search…" className=" input w-full py-2 pl-10 text-sm rounded-md  focus:outline-none dark:dark:bg-gray-800 dark:dark:text-gray-100 focus:border-green-600 focus:dark:dark:bg-gray-900 focus:ring-0 focus:dark:dark:border-violet-400  " />
                    <button onClick={handleSearch} className="btn border border-green-500 rounded-l-none text-white bg-green-300">Search</button>
                </div> */}

                <fieldset onClick={handleSearch} className=" w-full space-y-1 dark:dark:text-gray-100">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:dark:text-gray-100">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" id="input-field" name="Search" placeholder="Search..." className=" w-full py-2 pl-10 text-sm rounded-md  focus:outline-none dark:dark:bg-gray-800 dark:dark:text-gray-100 focus:border-green-600 focus:dark:dark:bg-gray-900 focus:ring-0 focus:dark:dark:border-violet-400" />
                    </div>
                </fieldset>

            </div>

          

            <div>

                {
                    search ? <div>
                        {
                            isMore ? <div >
                                {
                                    searchService?.map(service => <AllServicesCard key={service._id} service={service}  ></AllServicesCard>)
                                }
                            </div> : <div>
                                {
                                    searchService?.slice(0, 6)?.map(service => <AllServicesCard key={service._id} service={service} ></AllServicesCard>)
                                }

                            </div>

                        }
                    </div>
                        : <div>
                            {

                                isMore ? <div >
                                    {
                                        services?.map(service => <AllServicesCard key={service._id} service={service}  ></AllServicesCard>)
                                    }
                                </div> : <div>
                                    {
                                        services?.slice(0, 6)?.map(service => <AllServicesCard key={service._id} service={service} ></AllServicesCard>)
                                    }

                                </div>


                            }
                        </div>
                }

            </div>


            {/* <div className="">
                <div className="input-group flex justify-center items-center">
                    <input id="input-field" type="text" placeholder="Search…" className="input  input-bordered border-r-0 w-full  max-w-md" />
                    <button  className="btn border border-green-700 rounded-l-none text-white bg-green-500 ">Search</button>
                </div>
            </div> */}


            {
                !isMore ? <div className="flex justify-center items-center mt-5">
                    <button onClick={handleMore} type="button" className={`py-3 px-4 ${isMore && 'hidden'} inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border border-transparent font-bold text-green-500 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-white focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800`}>
                        More...
                    </button>
                </div> : ''


                // <div>
                //     {
                //         services.length > 6 && isMore ? <div className="flex justify-center items-center mt-5">
                //             <button onClick={handleMore} type="button" className={`py-3 px-4 ${isMore && 'hidden'} inline-flex justify-center items-center gap-2 rounded-md bg-white/[.1] border border-transparent font-bold text-green-500 hover:text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-white focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800`}>
                //                 More...
                //             </button>
                //         </div> : ''
                //     }
                // </div>
            }


        </div>
    );
};

export default AllServices;