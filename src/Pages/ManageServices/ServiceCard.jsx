import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin5Line } from 'react-icons/ri';
import useAllService from '../../Hooks/useAllService';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const ServiceCard = ({ service,myServices, setMyServices }) => {
    const { _id, Service_Name, Service_Area, Service_Description, Service_Image, Service_Price, Service_Provider_Description, Service_Provider_Email, Service_Provider_Image, Service_Provider_Name } = service || {};

    // const [services, setServices] = useAllService();
    

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

                fetch(`http://localhost:5000/services/${_id}`, {
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
                        const remainingProducts = myServices?.filter(item=>item?._id !== _id);
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
                        <button className="flex font-semibold items-center px-2 py-1 space-x-1">
                            <TiEdit></TiEdit>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ServiceCard;