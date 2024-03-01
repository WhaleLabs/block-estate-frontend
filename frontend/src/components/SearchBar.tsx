// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { locationData } from '../utils/mock';
import { LocationType } from '../utils/types';

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

    return (
        <div
            className='relative px-4 py-2  bg-transparent text-sm text-primary-text placeholder:text-primary-text border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
            onMouseLeave={() => setIsOpen(false)} 
        >
            <input
                className="w-full bg-transparent outline-none focus:outline-none"
                type="text"
                placeholder="Search destination"
                value={searchTerm}
                onChange={handleLocationChange}
                onMouseEnter={() => setIsOpen(true)}
            />
            {isOpen && (
                <ul 
                    className="absolute z-10 w-full"
                >
                    <div className="py-1 mt-6 shadow-md rounded-md bg-white overflow-hidden" role="menu" aria-orientation="vertical">
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
    )
}