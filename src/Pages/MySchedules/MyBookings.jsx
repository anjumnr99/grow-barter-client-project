import BookingList from "./BookingList";

const MyBookings = ({ bookings }) => {


    return (
        <div>
            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    bookings?.map(booking => <BookingList key={booking._id} booking={booking}></BookingList> )
                }

            </ul>
        </div>
    );
};

export default MyBookings;