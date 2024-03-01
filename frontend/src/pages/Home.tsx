// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Card } from '../components/Card';
import { cardData } from '../utils/mock';
import { LocationType } from '../utils/types';

export default function Home({filteredLocation} : {filteredLocation: LocationType[]}) {

    // const navigator = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    console.log(filteredLocation);

    return (
        <div className='w-[100vw] h-[100vh] mt-16'>
            <div className="p-6 w-full md:p-12 lg:p-12">  
                {/* <button className="self-center text-primary-text bg-red-100 p-2 m-6 hover:bg-red-400" onClick={() => setLoading(true)}>TEST LOADING</button> */}
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {cardData
                        .filter(card => filteredLocation.some(location => location.label === card.location))
                        .map((card, index) => {
                        return <Card key={index} 
                                     id={card.id}
                                     title={card.title} 
                                     pictures={card.pictures} 
                                     location={card.location} 
                                     price={card.price} 
                                     rating={card.rating}
                                     loading={loading}
                                />
                    })}
                </div>
                <div className='h-[500px] w-full'></div>
            </div>
        </div>
    )
}