import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin5Line } from 'react-icons/ri';
import useAllService from '../../Hooks/useAllService';
import Swal from 'sweetalert2';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ServiceCard = ({ service, myServices, setMyServices }) => {
    const { _id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};

    const { user } = useContext(AuthContext);


    // const [services, setServices] = useAllService();

    const handleUpdate = (e) => {
        
        console.log("updated");
        const Service_Name = e.target.Service_Name.value;
        const Service_Image = e.target.Service_Image.value;
        const Service_Description = e.target.Service_Description.value;
        const Service_Price = e.target.Service_Price.value;
        const Service_Area = e.target.Service_Area.value;
        const Service_Provider_Name = e.target.Service_Provider_Name.value;
        const  Service_Provider_Email = e.target.Service_Provider_Email.value;
       

        const updatedService = { Service_Name, Service_Image, Service_Description,  Service_Price,Service_Provider_Name, Service_Provider_Email,Service_Provider_Image,Service_Area };

        
        axios.put(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/my-services/update/${_id}`,updatedService ,{ withCredentials: true })
        .then(res=>{
            console.log(res.data);
            if(res.data.acknowledged){
                
                toast.success('The Product Updated successfully!')
            } 
        })
    }

    const handleRemove = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/services/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Your Product has been removed.',
                                'success'
                            )
                            const remainingProducts = myServices?.filter(item => item?._id !== _id);
                            setMyServices(remainingProducts)
                        }

                    })

            }
        })
    }

    return (
        <div className="px-4">

            <div className="flex flex-col w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-green-900 text-gray-100">

                <div>
                    <img src={Service_Image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{Service_Name}</h2>
                    <p className="text-sm text-gray-400">{Service_Description?.slice(0, 100)}...</p>

                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        Price : ${Service_Price}
                    </div>
                    <div className="flex text-2xl divide-x divide-gray-400 ">
                        <button onClick={handleRemove} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <RiDeleteBin5Line></RiDeleteBin5Line>

                        </button>
                        <button className="flex font-semibold items-center px-2 py-1 space-x-1" data-hs-overlay="#hs-scroll-inside-body-modal" >
                            <TiEdit></TiEdit>
                        </button>

                        {/* <button type="button" className=" inline-flex   transition-all " data-hs-overlay="#hs-scroll-inside-body-modal">
                            Scroll inside body
                        </button> */}

                        <div id="hs-scroll-inside-body-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
                                <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                        <h3 className="font-bold text-gray-800 dark:text-white">
                                            Update the Service
                                        </h3>
                                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-scroll-inside-body-modal">
                                            <span className="sr-only">Close</span>
                                            <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                    <form onSubmit={handleUpdate} className=" p-4 overflow-y-auto max-w-5xl mx-auto px-10 ">

                                        <div className=" z-0 w-full mb-6 group">
                                            <label htmlFor="Service_Name" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Service Name</label>
                                            <input type="text" name="Service_Name" id="Service_Name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" defaultValue={Service_Name} required />

                                        </div>
                                        <div className=" z-0 w-full mb-6 group">
                                            <label htmlFor="Service_Image" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 "> Picture URL of the Service
                                            </label>
                                            <input type="url" name="Service_Image" id="Service_Image" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" defaultValue={Service_Image} required />

                                        </div>
                                        <div className=" z-0 w-full mb-6 group">
                                            <label htmlFor="Service_Description" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Description</label>
                                            <input type="text" name="Service_Description" id="Service_Description" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" defaultValue={Service_Description} required />

                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            <div className=" z-0 w-full mb-6 group">
                                                <label htmlFor="Service_Price" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Service Price</label>

                                                <input type="number" name="Service_Price" id="Service_Price" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" defaultValue={Service_Price} required />

                                            </div>
                                            <div className=" z-0 w-full mb-6 group">
                                                <label htmlFor="Service_Area" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Area</label>
                                                <input type="text" name="Service_Area" id="Service_Area" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                                    defaultValue={Service_Area} required />

                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            <div className=" z-0 w-full mb-6 group">
                                                <label htmlFor="Service_Provider_Name" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Your name </label>
                                                <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="Service_Provider_Name" id="Service_Provider_Name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" defaultValue={user.displayName} disabled />

                                            </div>
                                            <div className=" z-0 w-full mb-6 group">
                                                <label htmlFor="Service_Provider_Email" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Your Email</label>
                                                <input type="email" name="Service_Provider_Email" id="Service_Provider_Email" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" defaultValue={user.email} disabled />

                                            </div>
                                        </div>


                                        <div className="text-center mb-5">
                                            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 text-xl focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "  data-hs-overlay="#hs-scroll-inside-body-modal">Update Service</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div >
    );
};

export default ServiceCard;