// import { useNavigate } from 'react-router-dom';

export function DescriptionProject({loading} : 
    {loading: boolean}) {

    // const navigator = useNavigate();

    return (
        <div className="">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <></>
            :
            <div className="">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-4">Explore the vibrant city of New York City, NY, USA with this luxurious holding. Located in the heart of the bustling city, this property offers easy access to iconic landmarks such as Times Square, Central Park, and the Statue of Liberty. Indulge in the rich culture, diverse cuisine, and endless entertainment options that New York City has to offer.</p>
            </div>
            }
        </div>
    );
};