import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';

export function Card({id, image, title, location, price, rating, loading} : 
    {id: number, image: string, title: string, location: string, price: number, rating: number, loading: boolean}) {

    const navigator = useNavigate();

    return (
        <div className="aspect-[3/4] bg-transparent rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
             onClick={() => navigator(`/property/${id}`)}
        >
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                <FaRedo size={20} color='white' className="animate-spin"/>
            </div>
            :
            <>
                <img src={image} alt="" className="aspect-square rounded-xl object-cover w-full" />
                <div className="flex flex-row">
                    <div className="py-2 w-[80%]">
                        <h2 className="font-semibold text-primary-text">{title}</h2>
                        <p className="text-sm text-secondary-text">{location}</p>
                        <p className="text-sm text-secondary-text">${price}/night</p>
                    </div>
                    <div className="p-2 w-[20%] flex flex-row justify-end items-center space-x-2">
                        <p className='text-sm text-secondary-text'>{rating}</p>
                        <FaStar size={15} color='black'/>
                    </div>
                </div>
            </>
            }
        </div>
    );
};