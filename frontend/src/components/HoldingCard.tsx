import { useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { HoldingType } from '../utils/types'; // Import HoldingType from your types file

export function HoldingCard({ id, image, title, location, price, rating, startDate, endDate, status, tokens, numNFTs, loading }:
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
                        <div className="py-4 px-6 w-full flex flex-col justify-between bg-white rounded-xl">
                            {/* Section above */}
                            <div className="w-full">
                                <h2 className="font-semibold text-lg text-primary-text">{title}</h2>
                                <p className="text-m text-gray-600">{location}</p>
                                <p className="text-lg text-primary-text font-bold">${price}</p>
                            </div>

                            {/* Border line */}
                            <div className="hidden md:block border-b border-gray-300 my-4"></div>

                            {/* Section below */}
                            <div className="w-full flex flex-row justify-between">
                                <div>
                                    <p className="text-m text-gray-600">Start Date: {startDate}</p>
                                    <p className="text-m text-gray-600">End Date: {endDate}</p>
                                    <p className="text-m text-gray-600">Status: {status}</p>
                                </div>

                                {/* Border line */}
                                <div className="hidden md:block border-l border-gray-300 my-4"></div>

                                <div className='justify-start'>
                                    <p className="text-m text-gray-600">Tokens: {tokens}</p>
                                    <p className="text-m text-gray-600">Number of NFTs: {numNFTs}</p>
                                </div>
                            </div>
                        </div>

                        <img src={image} alt="" className="aspect-square rounded-xr object-cover w-[40%]" />
                    </div>

                </>
            }
        </div>
    );
};
