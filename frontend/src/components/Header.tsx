import { useScrollDirection } from '../hooks/use-scroll-direction';

export function AppHeader() {

    const scrollDirection = useScrollDirection(50)
    const translateClass = (scrollDirection === 'down') ? '-translate-y-full' : 'translate-y-0';

    return (
        <header className={`transform ${translateClass} transition-transform duration-600 sticky top-0 bg-transparent shadow-lg`}>
            <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md">
                <input
                    type="text"
                    className="pl-10 pr-4 py-2 w-full rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Search..."
                />
                <div className="absolute top-0 left-0 inline-flex items-center p-2">
                    <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                    </svg>
                </div>
                </div>
            </div>
            </div>
        </header>
    );
};