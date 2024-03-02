import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fundingData } from '../utils/mock';
import { HoldingType } from '../utils/types';
import { PhotoSection } from "../components/PhotoSection";

export default function HoldingInfo() {

    const params = useParams();
    const holdingId = params.id || '';

    const [holding, setHolding] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchHolding() {
        try {
            // fetch the fundingData by the id here and then set using setHolding
            const holding = fundingData.find(holding => holding.id === parseInt(holdingId));
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
                <div className="p-4 w-full text-black md:p-6 lg:p-6 bg-white rounded-xl border border-gray-300 shadow-lg">
                    <PhotoSection pictures={holding.pictures} loading={loading} />
                    <div className="text-lg mb-4">
                        <p><strong className="text-gray-600">Location:</strong> {holding.location}</p>
                        <p><strong className="text-gray-600">Price:</strong> ${holding.price.toLocaleString()}</p>
                        {/* <p><strong className="text-gray-600">Rating:</strong> {holding.rating}</p> */}
                    </div>

                    {/* Section for Holders and Total Tokens */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">Holders</h2>
                        <div className="divide-y divide-gray-200">
                            {holding.holders.map((individualHolder: any, index: any) => (
                                <div key={index} className="py-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-lg font-semibold">{individualHolder.name}</p>
                                        <p className="text-sm text-gray-500">Tokens: {individualHolder.tokens}</p>
                                    </div>
                                    {/* You can add additional elements/icons here if needed */}
                                </div>
                            ))}
                        </div>
                        <p className="mt-2">Total Tokens: {holding.totalTokens}</p>
                    </div>
                </div>
                :
                <></>}
        </div>
    )
}
