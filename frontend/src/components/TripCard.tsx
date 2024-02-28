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
        <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
            <img src={image} alt="" className="w-32 h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
                <div>
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <p className="text-sm text-gray-600">{location}</p>
                    <p className="text-sm text-gray-600">Dates: {startDate} - {endDate}</p>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Price: ${price}/night</p>
                    <p className={`text-sm ${status === 'Upcoming' ? 'text-blue-600' : 'text-green-600'}`}>{status}</p>
                </div>
            </div>
        </div>
    );
};
