import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AppHeader({isHidden} : {isHidden: boolean}) {

    const options = [
        { name: 'Home', link: '/' },
        { name: 'Trips', link: '/trips' },
        { name: 'My Holdings', link: '/holdings' },
        { name: 'Profile', link: '/profile' },
      ];
      

    const translateClass = isHidden ? '-translate-y-full' : 'translate-y-0';

    const [isOpen, setIsOpen] = useState(false);
    const navigator = useNavigate();

    const handleOptionClick = (link: string) => {
        navigator(link);
        setIsOpen(false);
    };

    return (
        <header className={`transform ${translateClass} backdrop-blur-lg bg-white/30 transition-transform duration-600 absolute w-full top-0 z-20 shadow-lg`}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center space-x-4">
                    {/* Search Input */}
                    {/* <div className="relative w-full max-w-xs"> 
                        <input
                        type="text"
                        className="pl-10 pr-4 py-2 w-full rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                        placeholder="Search..."
                        />
                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                        <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        </div>
                    </div> */}

                    {/* Dropdown Menu */}

                    <div className="relative inline-block text-left w-56">
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
                                onMouseLeave={() => setIsOpen(false)} 
                                className="absolute right-0 mt-4 w-56 rounded-md bg-white"
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    {options.map((option, index) => (
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

                    {/* Navigation Menu Basic */}
                    {/* <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow focus:outline-none hover:bg-blue-600"
                        onClick={() => navigator('/')}
                    >
                        Home
                    </button>

                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow focus:outline-none hover:bg-blue-600"
                        onClick={() => navigator('/trips')}
                    >
                        Trips
                    </button>

                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow focus:outline-none hover:bg-blue-600"
                        onClick={() => navigator('/holdings')}
                    >
                        My Holdings
                    </button>
                    
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow focus:outline-none hover:bg-blue-600"
                        onClick={() => navigator('/profile')}
                    >
                        Profile
                    </button> */}

                    {/* Location Button */}
                    <button 
                        className="px-4 py-2 my-2 bg-green-500 text-white rounded-lg shadow focus:outline-none hover:bg-green-600"
                    >
                        Location
                    </button>

                    {/* Date Button */}
                    <button 
                        className="px-4 py-2 my-2 bg-green-500 text-white rounded-lg shadow focus:outline-none hover:bg-green-600"
                    >
                        Date
                    </button>

                    {/* Connect Button */}
                    <button 
                        className="px-4 py-2 my-2 bg-green-500 text-white rounded-lg shadow focus:outline-none hover:bg-green-600"
                    >
                        Connect Wallet
                    </button>
                </div>
            </div>
        </header>
    );
};