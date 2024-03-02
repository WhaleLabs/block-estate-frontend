import { useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { HoldingType } from '../utils/types'; // Import HoldingType from your types file
import { MdLocationOn, MdDateRange } from 'react-icons/md';

export function HoldingCard({ id, title, location, price, status, loading, totalTokens, pictures, holders }:
    HoldingType & { loading: boolean }) {

    const navigator = useNavigate();

    return (
        <div className="aspect-[4/1] w-[80%] bg-transparent rounded-xl overflow-hidden cursor-pointer shadow-lg"
            onClick={() => navigator(`/my-holding/${id}/info`)}
        >
            {loading ?
                // Placeholder for loading state
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    <FaRedo size={20} color='white' className="animate-spin" />
                </div>
                :
                <>
                    <div className="flex flex-row h-[-webkit-fill-available]">

                        <div className="py-4 px-6 w-full flex flex-col justify-evenly bg-white rounded-xl">
                            {/* Section above */}
                            <div className='flex justify-between items-end'>
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg text-primary-text">{title}</h2>
                                    <div className="flex items-center text-m text-gray-600">
                                        <MdLocationOn className="text-gray-400 mr-2" />
                                        {location}
                                    </div>
                                    <p className="text-lg text-primary-text font-bold">${price}</p>
                                </div>
                                {/* <div className="relative inline-block w-20 h-20"> 
                                    <svg className="absolute -top-0.5 -left-0.5 w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="14" stroke="#E0E0E0" strokeWidth="4" /> 
                                        <circle className="progress-ring" cx="16" cy="16" r="14" stroke="#3B82F6" strokeWidth="4" strokeDasharray={`${(numNFTs / 20) * 88} 88`} transform="rotate(-90 16 16)" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-black text-lg font-bold">{(numNFTs * 100) / 20}%</span>
                                    </div>
                                </div> */}
                            </div>

                            {/* Border line */}
                            <div className="hidden md:block border-b border-gray-300 my-2"></div>

                            {/* Section below */}
                            <div className="w-full flex flex-row justify-between">
                                {/* <div>
                                    <div className="flex items-center text-m text-gray-600">
                                        <MdDateRange className="text-gray-400 mr-2" />
                                        Start Date: {startDate}
                                    </div>
                                    <div className="flex items-center text-m text-gray-600">
                                        <MdDateRange className="text-gray-400 mr-2" />
                                        End Date: {endDate}
                                    </div>
                                    <p className="text-m text-gray-600">Status: {status}</p>
                                </div> */}

                                <div>
                                    <div className="flex items-center text-m text-gray-600">
                                        Status: {status}
                                    </div>
                                    <div className="flex items-center text-m text-gray-600">
                                        Holders: {holders.length}
                                    </div>
                                </div>

                                {/* Border line */}
                                <div className="hidden md:block border-l border-gray-300 my-4"></div>

                                <div className='justify-start'>
                                    <p className="text-m text-gray-600">Tokens: {totalTokens}</p>
                                    {/* <p className="text-m text-gray-600">Number of NFTs: {numNFTs}</p> */}
                                </div>
                            </div>
                        </div>
                        <img src={pictures[0]} alt="" className="aspect-square rounded-xr object-cover w-[100%]" />
                    </div>
                </>
            }
        </div>
    );
};
