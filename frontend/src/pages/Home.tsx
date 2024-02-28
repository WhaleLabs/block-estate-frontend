// import { useNavigate } from "react-router-dom";
import { Card } from '../components/Card';
import { cardData } from '../utils/mock';

export default function Home() {

    // const navigator = useNavigate();

    return (
        <div className='w-[100vw] h-[100vh] overflow-y-auto'>
            <div className="p-6 w-full md:p-12 lg:p-12">  
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {cardData.map((card, index) => {
                        return <Card key={index} title={card.title} image={card.image} location={card.location} price={card.price} />
                    })}
                </div>
            </div>
        </div>
    )
}