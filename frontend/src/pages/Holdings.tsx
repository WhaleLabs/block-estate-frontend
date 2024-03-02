import { useState } from 'react';
import { HoldingType } from '../utils/types';
import { HoldingCard } from '../components/HoldingCard';
import { fundingData } from '../utils/mock';

export default function Holdings() {
    const [loading, setLoading] = useState<boolean>(false);

    const yourName = "John Doe"; // your identity

    // Filter holdings where your name matches one of the holders' names
    const filteredHoldings = fundingData.filter(holding => holding.holders.some(holder => holder.name === yourName));

    return (
        <div className='container w-[100vw] px-[5vw] py-4'>
            <h2 className="text-3xl font-bold text-gray-800">Current Holdings</h2>
            <div className="w-full py-3">
                <div className='grid grid-cols-1 gap-6'>
                    {filteredHoldings.map((holding, index) => (
                        <HoldingCard
                            key={index}
                            id={holding.id}
                            title={holding.title}
                            location={holding.location}
                            price={holding.price}
                            raised={holding.raised}
                            holders={holding.holders}
                            status={holding.status}
                            totalTokens={holding.totalTokens}
                            loading={loading}
                            pictures={holding.pictures}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
