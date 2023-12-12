import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const BookingHandle = () => {
    const service = useLoaderData();
    // const services = useAllService();
    const { user } = useContext(AuthContext);
    const {  Service_Name, Service_Description, Service_Image, Service_Price, Service_Provider_Email, } = service || {};

    const handlePurchase = (e) => {
        e.preventDefault();
        console.log('Booked the service');
        const booking_date = e.target.date.value;
        const address = e.target.address.value;
        const user_email = user.email;
        const service_status = "Pending";


        const bookedService = { Service_Name, Service_Image, Service_Provider_Email, Service_Price, booking_date, address, service_status, user_email, Service_Description };

        axios.post('https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/bookings', bookedService, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    toast.success('You Purchase This Service')
                }
            })

    }

    return (
        
            <div className=" max-w-5xl mx-auto mt-10 flex flex-col bg-white  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                
                <div className="w-full bg-green-100 px-4 ">
                    <img className="w-full mt-4 max-h-96  " src={Service_Image} alt="" />
                    <section className="p-6  dark:dark:bg-gray-800 w-full dark:dark:text-gray-50">
                        <form onSubmit={handlePurchase} className="container flex flex-col w-full mx-auto space-y-12">
                            <fieldset className="grid gap-6 rounded-md shadow-sm dark:dark:bg-gray-900">

                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full ">
                                        <label className="text-sm">Service name</label>
                                        <input id="firstname" type="text" readOnly defaultValue={Service_Name} className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                    </div>

                                    <div className="col-span-full ">
                                        <label htmlFor="providerEmail" className="text-sm">Service Provider Email</label>
                                        <input id="providerEmail" type="email"
                                            defaultValue={Service_Provider_Email}
                                            readOnly
                                            className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                    </div>

                                    <div className="col-span-full ">
                                        <label htmlFor="userEmail" className="text-sm">User Email</label>

                                        <input type="email" name="email" id="email" defaultValue={user.email} readOnly className="w-full rounded-md  border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />

                                        {/* <input id="email"
                                    type="email" name="email" 
                                    placeholder="Enter your email" className="w-full rounded-md  border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" /> */}
                                    </div>

                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="city" className="text-sm">Service Taking Date</label>
                                        <input id="date" required type="date" name="date" className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="state" className="text-sm">Price</label>
                                        <input id="state" type="text" readOnly
                                            defaultValue={Service_Price} className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="text-sm">Address</label>
                                        <input name="address" required id="address" type="text" placeholder="Enter your address"
                                            className="w-full rounded-md border-green-700 focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1" />
                                    </div>


                                </div>
                            </fieldset>
                            <div className="flex justify-center items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">

                                <button type="submit" className="py-3 w-full px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800" href="#">
                                    Purchase this Service
                                </button>

                            </div>
                        </form>
                    </section>

                </div>

            </div>
        
    );
};

export default BookingHandle;