import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const UpdateProduct = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id } = service || {};
    const {  Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};
    console.log(service);



    const handleUpdate = (e) => {
        e.preventDefault();

        console.log("updated");
        const Service_Name = e.target.Service_Name.value;
        const Service_Image = e.target.Service_Image.value;
        const Service_Description = e.target.Service_Description.value;
        const Service_Price = e.target.Service_Price.value;
        const Service_Area = e.target.Service_Area.value;
        const Service_Provider_Name = e.target.Service_Provider_Name.value;
        const Service_Provider_Email = e.target.Service_Provider_Email.value;


        const updatedService = { Service_Name, Service_Image, Service_Description, Service_Price, Service_Provider_Name, Service_Provider_Email, Service_Provider_Image, Service_Area };


        axios.put(`https://grow-barter-server-project-459qixagw-anjus-projects-6a90d7b7.vercel.app/my-services/update/${_id}`, updatedService, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {

                    toast.success('The Service Updated successfully!')
                }
            })
    }


   
    return (
        <div className="py-20">
            <Helmet>
                <title>Grow Barter | Update Service</title>
            </Helmet>

            
                <form onSubmit={handleUpdate} className=" max-w-5xl mx-auto px-10 ">

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
                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 text-xl focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 " data-hs-overlay="#hs-scroll-inside-body-modal">Update Service</button>
                </div>

            </form>
            
            
        </div>
    );
};

export default UpdateProduct;