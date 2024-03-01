import { useNavigate } from 'react-router-dom';

export function AppHeader({isHidden} : {isHidden: boolean}) {

    const translateClass = isHidden ? '-translate-y-full' : 'translate-y-0';

    const navigator = useNavigate();

    return (
        <header className={`transform ${translateClass} backdrop-blur-lg bg-white/30 transition-transform duration-600 absolute w-full top-0 z-20 shadow-lg`}>
            <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
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

                {/* Navigation Menu Basic */}
                <button 
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
                </button>

                {/* Location Button */}
                <button 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow focus:outline-none hover:bg-green-600"
                >
                    Location
                </button>

                {/* Date Button */}
                <button 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow focus:outline-none hover:bg-green-600"
                >
                    Date
                </button>
                </div>
            </div>
        </header>
    );
};