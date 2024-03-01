import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { holdingData } from '../utils/mock';
import { HoldingType } from '../utils/types';

export default function HoldingInfo() {

    const params = useParams();
    const holdingId = params.id || '';

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
        <div className='flex flex-row'>
            {(holding && !loading) ?
                <div className="p-6 w-full text-black md:p-12 lg:p-12 bg-white rounded-xl border border-gray-300 shadow-lg">
                    {/* <h1 className="text-3xl font-semibold mb-4">{holding.title}</h1> */}
                    <img src={holding.image} alt={holding.title} className="w-full h-auto mb-4 rounded-lg" />
                    <div className="text-lg mb-4">
                        <p><strong className="text-gray-600">Location:</strong> {holding.location}</p>
                        <p><strong className="text-gray-600">Price:</strong> ${holding.price.toLocaleString()}</p>
                        <p><strong className="text-gray-600">Rating:</strong> {holding.rating}</p>
                        {/* <p><strong className="text-gray-600">Start Date:</strong> {holding.startDate}</p>
                        <p><strong className="text-gray-600">End Date:</strong> {holding.endDate}</p> */}
                        {/* <p><strong className="text-gray-600">Status:</strong> {holding.status}</p> */}
                        {/* <p><strong className="text-gray-600">Tokens:</strong> {holding.tokens}</p>
                        <p><strong className="text-gray-600">Number of NFTs:</strong> {holding.numNFTs}</p> */}
                    </div>
                </div>

                :
                <></>}
        </div>
    )
}