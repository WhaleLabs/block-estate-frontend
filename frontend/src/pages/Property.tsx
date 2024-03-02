import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { cardData, reservationData } from '../utils/mock';
import { PropertyType, ReservationType } from '../utils/types';
import { MdFavorite, MdShare } from 'react-icons/md';
import { PhotoSection } from "../components/PhotoSection";
import { MapSection } from "../components/MapSection";
import { ReserveSection } from "../components/ReserveSection";
import { ethers } from "ethers";
import { contractAddresses } from "@/utils/addresses";
import { ProjectAccountABI } from "@/contracts/ProjectAccount";
import { ERC20ABI } from "@/contracts/ERC20";
import { BlockEstateABI } from "@/contracts/BlockEstate";

export default function Property({account, signer} : 
    {account: string, signer: ethers.providers.JsonRpcSigner | null}) {

    const params = useParams();
    const propertyId = params.id || '';

    const [property, setProperty] = useState<PropertyType | null>(null);
    const [reservation, setReservation] = useState<ReservationType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [loadingApproval, setLoadingApproval] = useState<boolean>(false);
    const [loadingPayment, setLoadingPayment] = useState<boolean>(false);

    const {id} = useParams();

    async function fetchProperty() {
        try {
            // fetch the cardData by the id here and then set using setProperty
            const property = cardData[0];
            const reservation = reservationData[0];
            setProperty(property || null); 
            setReservation(reservation?.reserveData ?? null);
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    }

    const handlePayment = async () => {
        try{
         setLoadingPayment(true);
         const chainId = await signer?.getChainId() as number;
             
         
         const blockEstateContract = new ethers.Contract(contractAddresses[chainId]["BlockEstate"], BlockEstateABI, signer as ethers.providers.JsonRpcSigner);
         
         const projectAccount = await blockEstateContract.functions.projectsAccounts(id);
         
         const projectAccountContract = new ethers.Contract(projectAccount[0], ProjectAccountABI, signer as ethers.providers.JsonRpcSigner);
         const paymentTx = await projectAccountContract.functions.engage(account, ethers.utils.parseEther(Number(800).toString()));
         await paymentTx.wait();
 

        } catch(err){
               console.log(err);
        } finally{
               setLoadingPayment(false);
        }
     };
 
     const handleApprove = async () => {
         try{
             setLoadingApproval(true);
             const chainId = await signer?.getChainId() as number;
             
             const paymentTokenContract = new ethers.Contract(contractAddresses[chainId]["PaymentToken"], ERC20ABI, signer as ethers.providers.JsonRpcSigner);
             const blockEstateContract = new ethers.Contract(contractAddresses[chainId]["BlockEstate"], BlockEstateABI, signer as ethers.providers.JsonRpcSigner);
             
             const projectAccount = await blockEstateContract.functions.projectsAccounts(id);
             
             const approveTx = await paymentTokenContract.functions.approve(projectAccount[0], ethers.utils.parseEther(Number(800).toString()));
             await approveTx.wait();
 
 
         } catch(err){
             console.log(err);
         } finally{
             setLoadingApproval(false);
         }
     }

    useEffect(() => {
        fetchProperty();
    }, [propertyId]);

    return (
        <div className='w-[100vw] h-[100vh]'>
            {(property && !loading) ?
            <div className="p-6 w-full md:p-12 md:px-30 lg:py-12 lg:px-48 text-primary-text">
                
                {/* Title Section, where is the title and the buttons to share and save */}

                <div className="flex flex-row pb-6 space-x-4">
                    <h1 className=" flex-1 text-2xl font-semibold">{property.title}</h1>
                    {/* make as component */}
                    <button 
                        className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                    >
                        <MdShare className="mr-2"/>
                        <p>Share</p>
                    </button>
                    <button 
                        className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                    >
                        <MdFavorite className="mr-2"/>
                        <p>Save</p>
                    </button>
                </div>

                {/* Photo Section, where are the pictures of the property */}

                <PhotoSection pictures={property.pictures} loading={loading}/>

                {/* Region with Description and Reserve Section */}

                <div className="flex flex-col justify-between pt-6 md:flex-row md:space-x-6">
                    <div className="">
                        <h2 className="text-xl font-semibold">Description</h2>
                        <p className="mt-4">Explore the vibrant city of New York City, NY, USA with this luxurious holding. Located in the heart of the bustling city, this property offers easy access to iconic landmarks such as Times Square, Central Park, and the Statue of Liberty. Indulge in the rich culture, diverse cuisine, and endless entertainment options that New York City has to offer.</p>
                    </div>
                    <div className="">
                        <ReserveSection id={propertyId} reservation={reservation} loading={loading}/>
                    </div>
                </div>

                {/* Map Section where the API will fetch the property location and show it on the map */}

                <MapSection loading={loading}/>

                {/* Test Section only to see if the property is being fetched correctly */}

                <div className="bg-red-100 py-6 mt-12 flex flex-col items-center">
                    <h1 className="font-bold mb-6">TEST SECTION</h1>
                    <h1>{property.title}</h1>
                    <img className="h-48 w-auto" src={property.image} alt=""/>
                    <p>{property.location}</p>
                    <p>{property.price}</p>
                    <p>{property.rating}</p>
                </div>
            </div>            
            :
            <></>}
        </div>
    )
}