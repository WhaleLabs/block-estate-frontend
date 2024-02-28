// import { useNavigate } from 'react-router-dom';

export function DescriptionSection({loading} : 
    {loading: boolean}) {

    // const navigator = useNavigate();

    return (
        <div className=" bg-transparent rounded-xl overflow-hidden cursor-pointer">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <></>
            :
            <div className="w-full h-[200px] bg-red-100">
                AAAAAAAAAAAAA
            </div>
            }
        </div>
    );
};