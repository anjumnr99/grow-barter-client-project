import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";


const AddServices = () => {

    const {user} = useContext(AuthContext);

    const handleAddService = e =>{
        e.preventDefault();
        const Service_Name = e.target.Service_Name.value;
        const Service_Image = e.target.Service_Image.value;
        const Service_Description = e.target.Service_Description.value;
        const Service_Price = e.target.Service_Price.value;
        const Service_Area = e.target.Service_Area.value;
        const Service_Provider_Name = e.target.Service_Provider_Name.value;
        const  Service_Provider_Email = e.target.Service_Provider_Email.value;
        const Service_Provider_Image = user.photoURL;

        const newService = { Service_Name, Service_Image, Service_Description,  Service_Price,Service_Provider_Name, Service_Provider_Email,Service_Provider_Image,Service_Area };

        console.log(newService);

        axios.post('http://localhost:5000/services',newService )
        .then(res=>{
            console.log(res.data);
            if(res.data.acknowledged){
                toast.success('The Product added successfully!')
            } 
        })
  
           e.target.reset() ;
    }
    return (
        <div className=" py-20  ">
            <Helmet>
                <title>Grow Barter | Add Services</title>
            </Helmet>

            <form onSubmit={handleAddService} className=" max-w-5xl mx-auto px-10 ">
                <div className=" z-0 w-full mb-6 group">
                    <label htmlFor="Service_Name" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Service Name</label>
                    <input type="text" name="Service_Name" id="Service_Name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                </div>
                <div className=" z-0 w-full mb-6 group">
                    <label htmlFor="Service_Image" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 "> Picture URL of the Service
                    </label>
                    <input type="url" name="Service_Image" id="Service_Image" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                </div>
                <div className=" z-0 w-full mb-6 group">
                    <label htmlFor="Service_Description" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Description</label>
                    <input type="text" name="Service_Description" id="Service_Description" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className=" z-0 w-full mb-6 group">
                        <label htmlFor="Service_Price" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Service Price</label>

                        <input type="number" name="Service_Price" id="Service_Price" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

                    </div>
                    <div className=" z-0 w-full mb-6 group">
                        <label htmlFor="Service_Area" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 ">Area</label>
                        <input type="text" name="Service_Area" id="Service_Area" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />

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
                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 text-xl focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Service</button>
                </div>
            </form>

        </div>
    );
};

export default AddServices;