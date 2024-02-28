
export function Card({image, title, location, price} : {image: string, title: string, location: string, price: number}) {

    return (
        <div className="aspect-[3/4] bg-transparent rounded-xl overflow-hidden cursor-pointer">
            <img src={image} alt="" className="aspect-square rounded-xl object-cover w-full" />
            <div className="py-2">
                <h2 className="font-semibold text-primary-text">{title}</h2>
                <p className="text-sm text-secondary-text">{location}</p>
                <p className="text-sm text-secondary-text">${price}/night</p>
            </div>
        </div>
    );
};