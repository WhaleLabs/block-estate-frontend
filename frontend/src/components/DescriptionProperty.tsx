// import { useNavigate } from 'react-router-dom';

export function DescriptionProperty({loading} : 
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
                <p className="mt-4">AAAAAAA</p>
            </div>
            }
        </div>
    );
};