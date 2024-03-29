// import { useNavigate } from 'react-router-dom';

export function DescriptionSection({loading, description} : 
    {loading: boolean, description: string}) {

    // const navigator = useNavigate();

    return (
        <div className="">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <></>
            :
            <div className="">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-4">{description}</p>
            </div>
            }
        </div>
    );
};