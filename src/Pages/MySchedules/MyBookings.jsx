import toast from "react-hot-toast";
import BookingList from "./BookingList";
import Swal from "sweetalert2";

const MyBookings = ({ bookings, setBookings }) => {

    const handleRemove = id => {

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
                fetch(`https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                }, { credentials : "include" })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            toast.success('Remove successful');
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        })




    }


    return (
        <div>

            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    bookings?.map(booking => <BookingList handleRemove={handleRemove} key={booking._id} booking={booking} setBookings={setBookings}></BookingList>)
                }

            </ul>

        </div>
    );
};

export default MyBookings;