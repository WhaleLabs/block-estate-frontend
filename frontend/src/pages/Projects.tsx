// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { LocationType } from '../utils/types';
import { FundingCard } from '@/components/FundingCard';
import { ethers } from 'ethers';
import { BlockEstateABI } from '@/contracts/BlockEstate';
import { contractAddresses } from '@/utils/addresses';
import { ERC20ABI } from '@/contracts/ERC20';
import { ProjectAccountABI } from '@/contracts/ProjectAccount';

import pic2_1 from '../assets/imovel2_1.png';
import pic2_2 from '../assets/imovel2_2.png';
import pic2_3 from '../assets/imovel2_3.png';
import pic2_4 from '../assets/imovel2_4.png';
import pic2_5 from '../assets/imovel2_5.png';
import pic2_6 from '../assets/imovel2_6.png';


export default function Projects({filteredLocation, account, signer} : 
    {filteredLocation: LocationType[], account: string, signer: ethers.providers.JsonRpcSigner | null}) {

        const [projectsData, setProjectsData] = useState<any[]>([]);

    const getFundgingData = async () => {
        try{

            const chainId = await signer?.getChainId() as number;
            const BlockEstateContract = new ethers.Contract(contractAddresses[chainId]["BlockEstate"], BlockEstateABI, signer as ethers.providers.JsonRpcSigner);
            const PaymentTokenContract = new ethers.Contract(contractAddresses[chainId]["PaymentToken"], ERC20ABI, signer as ethers.providers.JsonRpcSigner);
            

            const numberOfProjectsBigNumber = await BlockEstateContract.functions.projectsCounter();
            const numberOfProjects = Number(ethers.utils.formatUnits(numberOfProjectsBigNumber[0]._hex, 0));
            //@ts-ignore
            let tmpProjectsData = [];
            
            await Promise.all([...Array(numberOfProjects)].map(async (_, index) => {
                const projectAccount = await BlockEstateContract.functions.projectsAccounts(index);
                const projectAccountContract = new ethers.Contract(projectAccount[0], ProjectAccountABI, signer as ethers.providers.JsonRpcSigner);
                const amountToRaise = await projectAccountContract.functions.totalAmountToRaise();
                const name = await projectAccountContract.functions.name();

                const amountRaised = await PaymentTokenContract.functions.balanceOf(projectAccount[0]);

                let projectData = {
                        id: index,
                        title: name[0],
                        // image: imovel1,
                        location: 'New York City, NY, USA',
                        price: ethers.utils.formatEther(amountToRaise[0]._hex),
                        raised: ethers.utils.formatEther(amountRaised[0]._hex),
                        status: 'Available', //Available, Reserved, Funded
                        // startDate: '2024-03-01',
                        // endDate: '2024-03-05',
                        // rating: 4.5,
                        // tokens: 100,
                        // numNFTs: 5,
                        holders: [
                            { name: 'John Doe',raised:3000, tokens: 50, nfts: 3 },
                            { name: 'Alice Smith',raised:39000 , tokens: 30, nfts: 2 },
                            { name: 'Emily Johnson',raised:9000, tokens: 20, nfts: 0 }
                        ],
                        totalTokens: 500,
                        pictures: [
                            pic2_1,
                            pic2_2,
                            pic2_3,
                            pic2_4,
                            pic2_5,
                            pic2_6,
                        ]
                    }
                
                tmpProjectsData.push(projectData);



            }));
            //@ts-ignore
            setProjectsData([...tmpProjectsData]);


        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getFundgingData();
    })

    // const navigator = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className="p-6 w-full md:p-12 lg:p-12">  
                {/* <button className="self-center text-primary-text bg-red-100 p-2 m-6 hover:bg-red-400" onClick={() => setLoading(true)}>TEST LOADING</button> */}
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {projectsData
                        .filter(card => filteredLocation.some(location => location.label === card.location))
                        .map((card, index) => {
                        return <FundingCard
                                    key={index} 
                                    id={card.id}
                                    title={card.title} 
                                    pictures={card.pictures} 
                                    location={card.location} 
                                    price={card.price} 
                                    raised={card.raised}
                                    holders={card.holders}
                                    status={card.status}
                                    totalTokens={card.totalTokens}
                                    loading={loading}
                                />
                    })}
                </div>
                <div className='h-[500px] w-full'></div>
            </div>
        </div>
    )
}