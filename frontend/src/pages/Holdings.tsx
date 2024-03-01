import { useState } from 'react';
import { HoldingType } from '../utils/types';
import { HoldingCard } from '../components/HoldingCard';
import { holdingData } from '../utils/mock';

export default function Holdings() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className='w-full h-full'>
            <h2 className="text-3xl font-normal text-primary-text mt-10 ml-6">Current Holdings</h2>
            <div className="p-6 w-full md:p-12 lg:p-12">
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
