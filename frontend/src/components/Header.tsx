import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { menuOptions } from '../utils/data';
import SearchBar from './SearchBar';
import { LocationType } from '../utils/types';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { MetaMaskButton } from '@metamask/sdk-react-ui';

export function AppHeader({filteredLocation, setFilteredLocation} : {filteredLocation: LocationType[], setFilteredLocation: React.Dispatch<React.SetStateAction<LocationType[]>>}) {

    const scrollDirection = useScrollDirection(50);
    const isHidden = (scrollDirection === 'down');

    console.log(scrollDirection);

    const translateClass = isHidden ? '-translate-y-full' : 'translate-y-0';

    const [isOpen, setIsOpen] = useState(false);
    const navigator = useNavigate();

    const handleOptionClick = (link: string) => {
        navigator(link);
        setIsOpen(false);
    };

    return (
        <header className={`transform ${translateClass} backdrop-blur-lg bg-white/30 transition-transform duration-600 sticky w-full top-0 z-20 shadow-lg`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-12">
                <div className="w-full flex justify-between items-center space-x-4">

                    {/* Logo */}

                    <h1 
                        className='text-primary-600 p-2 font-semibold cursor-pointer'
                        onClick={() => navigator('/')}
                    >
                        blockestate
                    </h1>               

                    <div className='flex flex-row items-center'>

                        {/* Search with Distance, Date and Guests */}

                        <SearchBar filteredLocation={filteredLocation} setFilteredLocation={setFilteredLocation}/>

                        {/* Dropdown Menu */}

                        <div 
                            className="relative inline-block text-left w-56"
                            onMouseLeave={() => setIsOpen(false)} 
                        >
                            <button
                                onMouseEnter={() => setIsOpen(true)}
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-primary-text"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                Your Experience
                                <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12.586l-4.293-4.293a1 1 0 011.414-1.414L10 10.172l3.879-3.879a1 1 0 111.414 1.414L10 12.586z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </button>

                            {isOpen && (
                                <div 
                                    className="absolute right-0"
                                >
                                    <div className="py-1 mt-4 w-56 rounded-md bg-white" role="menu" aria-orientation="vertical">
                                        {menuOptions.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={()  => handleOptionClick(option.link)}
                                            className="block px-4 py-2 text-sm text-primary-text hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                        >
                                            {option.name}
                                        </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Connect Button */}
                    {/* <button 
                        className="px-4 py-2 my-2 bg-primary-500 text-white rounded-lg shadow focus:outline-none hover:bg-primary-600"
                    >
                        Connect Wallet
                    </button> */}

                    <MetaMaskButton theme={'dark'} color={'blue'}  >Connect Wallet</MetaMaskButton>
                </div>
            </div>
        </header>
    );
};