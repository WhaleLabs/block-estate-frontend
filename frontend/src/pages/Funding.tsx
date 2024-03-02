import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // Import useLocation
// import { HoldingType, ReservationType } from '../utils/types';
import { HoldingType } from '@/utils/types';
import { FundingSection } from '@/components/FundingSection';
import { fundingData } from '../utils/mock';

export function Funding() {

    const params = useParams();
    const propertyId = params.id || '';

    const navigator = useNavigate();
    const location = useLocation();

    const [property, setProperty] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [fundingAmount, setFundingAmount] = useState<number>(0);
    const [yourData, setYourData] = useState<HoldingType | null>(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const amount = parseFloat(searchParams.get('amount') || '0');
        setFundingAmount(amount);
    }, [location.search]);

    useEffect(() => {
        const selectedProperty = fundingData.find((property) => property.id === parseInt(propertyId));
        setProperty(selectedProperty || null);
        const selectedHolder = selectedProperty?.holders.find((holder) => holder.name === 'John Doe');
        setYourData(selectedHolder as any || null);
        setLoading(false);
    }, [propertyId]);

    return (
        <div className='relative w-[100vw] h-[100vh] text-primary-text overflow-hidden'>
            <div className="absolute inset-0 z-0">
                {property && !loading && (
                    <img
                        src={property.pictures[0]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            <div className="relative z-10 mt-16 p-6 w-full md:p-12 md:px-30 lg:py-12 lg:px-48 text-primary-text">
                {property && !loading && (
                    <FundingSection loading={loading} yourData={yourData} property={property} fundingAmount={fundingAmount} />
                )}
            </div>
        </div>
    );
};