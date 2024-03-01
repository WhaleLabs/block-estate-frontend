import { MdLocationOn, MdDateRange } from 'react-icons/md';

export function TripCard({ image, title, location, price, startDate, endDate, status }: {
    image: string;
    title: string;
    location: string;
    price: number;
    startDate: string;
    endDate: string;
    status: string;
}) {
    return (
        <div className="flex bg-white text-black rounded-xl shadow-md overflow-hidden">
            <img src={image} alt="" className="w-[40%] object-cover" />
            <div className="p-4 w-[60%] flex flex-col justify-between">
                <div>
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <div className="flex items-center text-sm text-gray-600">
                        <MdLocationOn className="text-gray-400 mr-2" />
                        {location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <MdDateRange className="text-gray-400 mr-2" />
                        Dates: {startDate} - {endDate}
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Price: ${price}/night</p>
                    <p className={`text-sm ${status === 'Upcoming' ? 'text-blue-600' : 'text-green-600'}`}>{status}</p>
                </div>
            </div>
        </div>
    );
};
