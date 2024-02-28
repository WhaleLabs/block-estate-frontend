import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { cardData } from '../utils/mock';
import { PropertyType } from '../utils/types';

export default function Property() {

    const params = useParams();
    const propertyId = params.id || '';

    const [property, setProperty] = useState<PropertyType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchProperty() {
        try {
            // fetch the cardData by the id here and then set using setProperty
            const property = cardData.find(property => property.id === parseInt(propertyId));
            setProperty(property || null); 
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
        <div className='w-[100vw] h-[100vh]'>
            {(property && !loading) ?
            <div className="p-6 w-full md:p-12 lg:p-12 text-primary-text">
                <h1>{property.title}</h1>
                <img src={property.image} alt=""/>
                <p>{property.location}</p>
                <p>{property.price}</p>
                <p>{property.rating}</p>
            </div>            
            :
            <></>}
        </div>
    )
}