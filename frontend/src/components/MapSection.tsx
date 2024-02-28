// import { useNavigate } from 'react-router-dom';

export function MapSection({loading} : 
    {loading: boolean}) {

    // const navigator = useNavigate();

    return (
        <div className="w-full h-[200px] bg-gray-100 mt-6">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <></>
            :
            <p>MAP</p>
            }
        </div>
    );
};