// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { locationData } from '../utils/mock';
import { LocationType } from '../utils/types';
import DatePicker from './DatePicker';
import { addDays } from "date-fns"
import { DateRange } from 'react-day-picker';
import { Search } from 'lucide-react';

export default function SearchBar({filteredLocation, setFilteredLocation} : {filteredLocation: LocationType[], setFilteredLocation: React.Dispatch<React.SetStateAction<LocationType[]>>}) {

    const [isOpen, setIsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const filterLocation = () => {
        const filtered = locationData.filter(location =>
            location.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLocation(filtered);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleLocationClick = (location: string) => {
        setSearchTerm(location);
        setIsOpen(false);
    };

    useEffect(() => {
        filterLocation();
    }, [searchTerm]);


    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    return (
        <div
            className='flex-1 w-full flex-1 bg-transparent text-sm text-primary-text placeholder:text-primary-text border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
            onMouseLeave={() => setIsOpen(false)} 
        >

            {/* Location Section */}
            <div className='flex flex-row items-center'>
            <div >
            <input
                className="relative px-4 py-2 bg-transparent outline-none focus:outline-none"
                type="text"
                placeholder="Search destination"
                value={searchTerm}
                onChange={handleLocationChange}
                onMouseEnter={() => setIsOpen(true)}
            />
            {isOpen && (
                <ul 
                    className="absolute z-10"
                >
                    <div className="py-1 mt-2 shadow-md rounded-md bg-white overflow-hidden" role="menu" aria-orientation="vertical">
                        {filteredLocation.slice(0,5).map((item: any, index: number) => (
                            <li 
                                key={index}
                                onClick={()  => handleLocationClick(item.label)}
                                className="cursor-pointer block px-4 py-2 text-sm text-primary-text hover:bg-gray-100 w-full text-left"
                                role="menuitem"
                            >
                                {item.label}
                            </li>
                        ))}
                    </div>
                </ul>
            )}
            </div>
            

            {/* Calendar Section */}

            <DatePicker className="" date={date} setDate={setDate}/>

            <div 
                className="flex items-center bg-primary-600 text-white p-2 rounded-full shadow-sm cursor-pointer"
                onClick={() => alert(`Search for ${searchTerm} from ${date?.from} to ${date?.to}`)}
            >
                <Search className="text-white w-auto h-full rounded-full shadow-xl" />
            </div>

            </div>
            
        </div>
    )
}