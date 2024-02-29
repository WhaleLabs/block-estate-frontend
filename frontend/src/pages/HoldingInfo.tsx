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
                <div className="p-6 w-full md:p-12 lg:p-12 text-primary-text rounded-xl border-2">
                    <h1 className="text-2xl font-semibold mb-2">{holding.title}</h1>
                    <img src={holding.image} alt="" className="w-full mb-4 rounded-lg" />
                    <p className="text-lg mb-2">{holding.location}</p>
                    <p className="text-lg mb-2">${holding.price.toLocaleString()}</p>
                    <p className="text-lg mb-2">Rating: {holding.rating}</p>
                    <p className="text-lg mb-2">Start Date: {holding.startDate}</p>
                    <p className="text-lg mb-2">End Date: {holding.endDate}</p>
                    <p className="text-lg mb-2">Status: {holding.status}</p>
                    <p className="text-lg mb-2">Tokens: {holding.tokens}</p>
                    <p className="text-lg mb-2">Number of NFTs: {holding.numNFTs}</p>
                </div>
                :
                <></>}
        </div>
    )
}