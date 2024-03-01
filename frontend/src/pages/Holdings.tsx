import { useState } from 'react';
import { HoldingType } from '../utils/types';
import { HoldingCard } from '../components/HoldingCard';
import { holdingData } from '../utils/mock';

export default function Holdings() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className='container mt-16 w-[100vw] px-[5vw] py-4'>
            <h2 className="text-3xl font-bold text-gray-800">Current Holdings</h2>
            <div className="w-full py-3">
                <div className='grid grid-cols-1 gap-6'>
                    {holdingData.map((holding, index) => (
                        <HoldingCard
                            key={index}
                            id={holding.id}
                            title={holding.title}
                            image={holding.image}
                            location={holding.location}
                            price={holding.price}
                            rating={holding.rating}
                            startDate={holding.startDate}
                            endDate={holding.endDate}
                            status={holding.status}
                            tokens={holding.tokens}
                            numNFTs={holding.numNFTs}
                            loading={loading}
                            pictures={holding.pictures}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
