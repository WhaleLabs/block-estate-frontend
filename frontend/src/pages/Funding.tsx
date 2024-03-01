import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PropertyType, ReservationType } from '../utils/types';
import { cardData, reservationData } from '../utils/mock';
import { PaymentSection } from '../components/PaymentSection';

export function Funding() {

    const params = useParams();
    const propertyId = params.id || '';

    const navigator = useNavigate();

    const [property, setProperty] = useState<PropertyType | null>(null);
    const [reservation, setReservation] = useState<ReservationType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
                {(property && !loading) ?
                <>
                    <PaymentSection loading={loading} reservation={reservation} property={property}/>
                </>
                :
                <></>
                }
            </div>
        </div>
    );
};