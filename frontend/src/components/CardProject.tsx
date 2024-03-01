import { useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"

// Precisa fazer novas props só para projeto

export function CardProject({id, pictures, title, location, price, rating, loading} : 
    {id: number, pictures: string[], title: string, location: string, price: number, rating: number, loading: boolean}) {

    const [isHidden, setIsHidden] = useState(true);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToPrevImage = () => {
        setIsTransitioning(true);
        const newIndex = (currentImageIndex - 1 + pictures.length) % pictures.length;
        setCurrentImageIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const goToNextImage = () => {
        setIsTransitioning(true);
        const newIndex = (currentImageIndex + 1) % pictures.length;
        setCurrentImageIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const navigator = useNavigate();

    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="aspect-[3/4] bg-transparent rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
             onClick={() => navigator(`/projects/${id}`)}
        >
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                <FaRedo size={20} color='white' className="animate-spin"/>
            </div>
            :
            <div className='relative'>
                <div
                    onMouseEnter={() => setIsHidden(false)}
                    onMouseLeave={() => setIsHidden(true)}
                >
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                        {pictures.map((image, index) => (
                            <>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className={`absolute aspect-square rounded-xl object-cover hover:brightness-9 top-0 left-0 w-full ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        } ${isTransitioning && 'pointer-events-none -translate-x-[100%] transition'}
                                    }`}
                                />
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className={`-z-10 absolute aspect-square rounded-xl object-cover hover:brightness-9 top-0 left-0 w-full ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            </>
                        ))}
                    </div>
                    <div className="absolute right-3 top-[40%]">
                        {!isHidden &&
                        <button 
                            className='p-2 text-sm bg-white text-primary-text rounded-full shadow-xl opacity-75 hover:opacity-100' 
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNextImage();
                            }}
                        >
                                <MdArrowForwardIos/>
                        </button>
                        }
                    </div>
                    <div className="absolute left-3 top-[40%]">
                        {(!isHidden && !(currentImageIndex === 0)) &&
                        <button 
                            className='p-2 text-sm bg-white text-primary-text rounded-full shadow-xl opacity-75 hover:opacity-100' 
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevImage();
                            }}
                        >
                            <MdArrowBackIos/>
                        </button>
                        }
                    </div>
                </div>
                <Progress value={progress} className="w-full mt-4 mb-2 h-3" />
                <div className="flex flex-row">
                    <div className="py-2 w-[60%]">
                        <h2 className="font-semibold text-primary-text">{title}</h2>
                        <p className="text-sm text-secondary-text">{location}</p>
                    </div>
                    <div className="py-2 w-[40%] flex flex-col justify-center items-end px-2">
                        <p className="text-md font-semibold text-primary-text">${price} mi</p>
                        <p className="text-sm text-primary-600">{progress}%</p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};