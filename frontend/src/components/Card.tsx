
export function Card({image, title, location, price} : {image: string, title: string, location: string, price: number}) {

    return (
        <div className="aspect-[4/5] bg-red-600 rounded-xl overflow-hidden">
            <img src={image} alt="" className="aspect-square rounded-xl object-cover w-full" />
            <div></div>
            <h1></h1>
            {title}
        </div>
    );
};