import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // Import useLocation
import { PropertyType, ReservationType } from '../utils/types';
import { cardData, reservationData } from '../utils/mock';
import { FundingSection } from '@/components/FundingSection';

export function Funding() {

    const params = useParams();
    const propertyId = params.id || '';

    const navigator = useNavigate();
    const location = useLocation(); // Use useLocation hook to access location object

    const [property, setProperty] = useState<PropertyType | null>(null);
    const [reservation, setReservation] = useState<ReservationType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [fundingAmount, setFundingAmount] = useState<number>(0); // State to store funding amount

    useEffect(() => {
        // Extract funding amount from location object
        const searchParams = new URLSearchParams(location.search);
        const amount = parseFloat(searchParams.get('amount') || '0');
        setFundingAmount(amount);
    }, [location.search]); // Update funding amount when location.search changes

    async function fetchProperty() {
        try {
            // fetch the cardData by the id here and then set using setProperty
            const property = cardData.find(property => property.id === parseInt(propertyId));
            const reservation = reservationData.find(reservation => reservation.id === parseInt(propertyId));
            setProperty(property || null);
            setReservation(reservation?.reserveData ?? null);
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProperty();
    }, [propertyId]);

    return (
        <div className='relative w-[100vw] h-[100vh] text-primary-text overflow-hidden'>

            {/* Background image */}

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
                {(property && !loading) &&
                    <FundingSection loading={loading} reservation={reservation} property={property} fundingAmount={fundingAmount} /> // Pass fundingAmount as prop
                }
            </div>
        </div>
    );
};
