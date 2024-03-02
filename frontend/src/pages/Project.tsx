import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
// import { cardData, reservationData } from '../utils/mock';
// import { PropertyType, ReservationType } from '../utils/types';
import { fundingData } from "@/utils/mock";
import { HoldingType } from "@/utils/types";
import { MdFavorite, MdShare } from 'react-icons/md';
import { PhotoSection } from "../components/PhotoSection";
import { MapSection } from "../components/MapSection";
import { FundSection } from "@/components/FundSection";
import HoldersList from "@/components/HoldersList";
import FundraiserSection from "@/components/FundraiserSection";
// import { DescriptionProject } from "@/components/DescriptionProject";
import { DescriptionSection } from "@/components/DescriptionSection";

export default function Project() {

    const params = useParams();
    const propertyId = params.id || '';

    // const [property, setProperty] = useState<PropertyType | null>(null);
    // const [reservation, setReservation] = useState<ReservationType | null>(null);
    const [property, setProperty] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchProperty() {
        try {
            // fetch the cardData by the id here and then set using setProperty
            // const property = cardData.find(property => property.id === parseInt(propertyId));
            // const reservation = reservationData.find(reservation => reservation.id === parseInt(propertyId));
            // setProperty(property || null); 
            // setReservation(reservation?.reserveData ?? null);
            const property = fundingData.find(property => property.id === parseInt(propertyId));
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
            <div className="p-6 w-full md:p-12 md:px-30 lg:py-12 lg:px-48 text-primary-text">
                
                {/* Title Section, where is the title and the buttons to share and save */}

                <div className="flex flex-row pb-6 space-x-4">
                    <div className="flex-1 flex flex-row items-center">
                        <h1 className="text-2xl font-semibold">{property.title}</h1>
                        <div className="mx-6 text-sm text-primary-600 border-[1px] border-primary-600 py-1 px-3 rounded-full">Project</div>
                    </div>
                    {/* make as component */}
                    <button 
                        className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                    >
                        <MdShare className="mr-2"/>
                        <p>Share</p>
                    </button>
                    <button 
                        className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                    >
                        <MdFavorite className="mr-2"/>
                        <p>Save</p>
                    </button>
                </div>

                {/* Photo Section, where are the pictures of the property */}

                <PhotoSection pictures={property.pictures} loading={loading}/>

                {/* Region with Description and Reserve Section */}

                <div className="flex flex-col justify-between pt-6 md:flex-row md:space-x-6">
                    <div className="w-[80%]">
                        <FundraiserSection id={propertyId} price={property.price} raised={property.raised} totalTokens={property.totalTokens} status={property.status} holders={property.holders} loading={loading} />
                        <DescriptionSection description={property.description} loading={loading}/>
                    </div>
                    {/* separation bar */}
                    <div className="hidden md:block w-[1px] bg-gray-300 h-[80%]"></div>
                    <div className="w-[20%]">
                        <h2 className="text-xl font-semibold">Holders:</h2>
                        <HoldersList holders={property.holders as any}/>
                        {/* <FundSection id={propertyId} reservation={reservation} loading={loading}/> */}
                    </div>
                </div>

                {/* Map Section where the API will fetch the property location and show it on the map */}

                {/* <MapSection loading={loading}/> */}

                {/* Test Section only to see if the property is being fetched correctly */}

                {/* <div className="bg-red-100 py-6 mt-12 flex flex-col items-center">
                    <h1 className="font-bold mb-6">TEST SECTION</h1>
                    <h1>{property.title}</h1>
                    <img className="h-48 w-auto" src={property.image} alt=""/>
                    <p>{property.location}</p>
                    <p>{property.price}</p>
                    <p>{property.rating}</p>
                </div> */}
            </div>            
            :
            <></>}
        </div>
    )
}