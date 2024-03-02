// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { cardData } from '../utils/mock';
import { LocationType } from '../utils/types';
import { ethers } from 'ethers';

import pic2_1 from '../assets/imovel2_1.png';
import pic2_2 from '../assets/imovel2_2.png';
import pic2_3 from '../assets/imovel2_3.png';
import pic2_4 from '../assets/imovel2_4.png';
import pic2_5 from '../assets/imovel2_5.png';
import pic2_6 from '../assets/imovel2_6.png';
import pic1_0 from '../assets/imovel1.png';
import { contractAddresses } from '@/utils/addresses';
import { BlockEstateABI } from '@/contracts/BlockEstate';
import { ERC20ABI } from '@/contracts/ERC20';
import { ProjectAccountABI } from '@/contracts/ProjectAccount';
import { RentalsABI } from '@/contracts/Rentals';

export default function Home({filteredLocation, account, signer} : 
    {filteredLocation: LocationType[], account: string, signer: ethers.providers.JsonRpcSigner | null}) {

    // const navigator = useNavigate();

    const [projectsData, setProjectsData] = useState<any[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const getCardData = async () => {
        try{

            const chainId = await signer?.getChainId() as number;
            const BlockEstateContract = new ethers.Contract(contractAddresses[chainId]["BlockEstate"], BlockEstateABI, signer as ethers.providers.JsonRpcSigner);
            const PaymentTokenContract = new ethers.Contract(contractAddresses[chainId]["PaymentToken"], ERC20ABI, signer as ethers.providers.JsonRpcSigner);
            

            const numberOfProjectsBigNumber = await BlockEstateContract.functions.projectsCounter();
            const numberOfProjects = Number(ethers.utils.formatUnits(numberOfProjectsBigNumber[0]._hex, 0));
            //@ts-ignore
            let tmpProjectsData = [];
            
            await Promise.all([...Array(numberOfProjects)].map(async (_, index) => {
                const rentalCollection = await BlockEstateContract.functions.projectsRentalsCollections(index);
                const rentalCollectionContract = new ethers.Contract(rentalCollection[0], RentalsABI, signer as ethers.providers.JsonRpcSigner);
                const rentalPricePerDay = await rentalCollectionContract.functions.rentalPriceperDay();
                const name = await rentalCollectionContract.functions.name();

                let projectData = {
                    id: index,
                    title: name[0],
                    image: pic1_0,
                    location: 'Denver, CO, USA',
                    price: 100,
                    rating: 4.5,
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
        getCardData();
    })


    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className="p-6 w-full md:p-12 lg:p-12">  
                {/* <button className="self-center text-primary-text bg-red-100 p-2 m-6 hover:bg-red-400" onClick={() => setLoading(true)}>TEST LOADING</button> */}
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {projectsData
                        .filter(card => filteredLocation.some(location => location.label === card.location))
                        .map((card, index) => {
                        return <Card key={index} 
                                     id={card.id}
                                     title={card.title} 
                                     pictures={card.pictures} 
                                     location={card.location} 
                                     price={card.price} 
                                     rating={card.rating}
                                     loading={loading}
                                />
                    })}
                </div>
                <div className='h-[500px] w-full'></div>
            </div>
        </div>
    )
}