import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { holdingData } from '../utils/mock';
import { HoldingType } from '../utils/types';

export default function MyHolding() {

    const params = useParams();
    const holdingId = params.id || '';

    const navigator = useNavigate();

    const [holding, setHolding] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchHolding() {
        try {
            // fetch the holdingData by the id here and then set using setHolding
            const holding = holdingData.find(holding => holding.id === parseInt(holdingId));
            setHolding(holding || null);
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchHolding();
    }, [holdingId]);

    return (
        <div className='w-[100vw] h-[100vh] flex flex-row justify-center items-start p-12'>
            {(holding && !loading) ?
                <>
                    <div className='w-1/4 p-6 rounded-xl border-2 h-[75%]'>
                        <h1 className="text-xl text-black font-semibold mb-4">{holding.title}</h1>
                        <img src={holding.image} alt="" className="w-full mb-4 rounded-lg" />
                        <button
                            onClick={() => navigator(`/my-holding/${holdingId}/info`)}
                            className="block w-full mb-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        >
                            Info
                        </button>
                        <button
                            onClick={() => navigator(`/my-holding/${holdingId}/proposal`)}
                            className="block w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        >
                            Proposals
                        </button>
                    </div>
                    <div className='w-3/4 px-4'>
                        <Outlet />
                    </div>
                </>
                :
                <></>}
        </div>
    )
}