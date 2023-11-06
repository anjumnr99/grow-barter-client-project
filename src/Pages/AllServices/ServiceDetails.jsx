import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};
    return (
        <div>
            <div>
                <div className=" max-w-full mx-auto my-4 border-b-2 border-b-neutral p-8 sm:flex sm:space-x-6 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={Service_Provider_Image} alt="" className="object-cover object-center w-full h-full rounded dark:dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{Service_Provider_Name}</h2>
                            <span className="text-sm dark:dark:text-gray-400">{Service_Area}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:dark:text-gray-400">{Service_Provider_Email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                    <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                </svg>
                                <span className="dark:dark:text-gray-400">+25 381 77 983</span>
                            </span>
                        </div>
                    </div>
                </div>

                <section className="px-5 py-10 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <div className="container grid grid-cols-12 mx-auto gap-5 gap-y-6 ">

                        <div className=" flex col-span-12 bg-center  dark:dark:bg-gray-500 xl:col-span-8 lg:col-span-8 md:col-span-8 min-h-96">
                            <div className=" p-4 shadow-md dark:dark:dark:bg-gray-900 dark:dark:dark:text-gray-100">

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={Service_Image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:dark:dark:bg-gray-500" />

                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="#" className="block">
                                            <h3 className="text-xl font-semibold dark:dark:dark:text-violet-400">{Service_Name}</h3>
                                        </a>
                                        <p className="leadi dark:dark:dark:text-gray-400">{Service_Description}</p>
                                        <div className="text-left">
                                            <p className="text-lg font-semibold">${Service_Price}</p>

                                        </div>
                                        <button type="button" className="px-6 border-green-400 border-b-4 hover:border-green-500 hover:shadow-green-400   shadow-green-300 shadow-inner text-xl font-semibold text-green-700 py-2 border rounded-md w-full">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 xl:col-span-4 lg:col-span-4 col-span-12 md:col-span-4  ">
                            <div className="mb-8 pb-3 space-x-5 text-xl font-semibold border-b-2 border-opacity-10 dark:dark:border-violet-400">
                                Other services of Anna
                            </div>
                            <div className="flex flex-col divide-y divide-gray-700">
                                <div className="flex md:flex-col lg:flex-row px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover md:w-full lg:w-40 w-40 h-40 mr-4 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                                    <div className="flex flex-col flex-grow">
                                        <p className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
                                        <p className="mt-auto text-xs dark:dark:text-gray-400">5 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;