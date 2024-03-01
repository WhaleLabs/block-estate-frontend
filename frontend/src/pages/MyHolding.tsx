import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { holdingData } from '../utils/mock';
import { HoldingType } from '../utils/types';

export default function MyHolding() {

    const params = useParams();
    const holdingId = params.id || '';

    const navigator = useNavigate();

    const [holding, setHolding] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchHolding() {
        try {
            // fetch the holdingData by the id here and then set using setHolding
            const holding = holdingData.find(holding => holding.id === parseInt(holdingId));
            setHolding(holding || null);
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchHolding();
    }, [holdingId]);

    return (
        <div className='w-[100vw] h-[100vh] flex flex-row justify-center items-start py-[5%] px-[10%]'>
            {(holding && !loading) ?
                <>
                    <div className='w-1/4 p-6 rounded-xl border-2 h-[70vh] shadow-lg'>
                        <h1 className="text-xl text-black font-semibold mb-4">{holding.title}</h1>
                        <img src={holding.image} alt="" className="w-full mb-4 rounded-lg" />
                        <button
                            onClick={() => navigator(`/my-holding/${holdingId}/info`)}
                            className="block w-full mb-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        >
                            Info
                        </button>
                        <button
                            onClick={() => navigator(`/my-holding/${holdingId}/proposal`)}
                            className="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        >
                            Proposals
                        </button>
                        <div className="py-4 self-end">
                            <h2 className="text-black text-l font-semibold">
                                Your Tokens: {holding.tokens}
                            </h2>
                            <div className="flex items-center flex-row py-1 text-start">
                                <h2 className="text-black text-l font-semibold py-2">You have {holding.numNFTs} NFTs and owns about:</h2>
                                <div className="relative inline-block w-16 h-16">
                                    <svg className="absolute -top-0.5 -left-0.5 w-full h-full" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#E0E0E0" strokeWidth="4" />
                                        <circle className="progress-ring" cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="4" strokeDasharray={`${(holding.numNFTs / 20) * 63} 63`} transform="rotate(-90 12 12)" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-black text-1xl font-bold">{(holding.numNFTs * 100)/20}%</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-3/4 px-4'>
                        <Outlet />
                    </div>
                </>
                :
                <></>}
        </div>
    )
}