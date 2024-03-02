import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBackIos, MdAttachMoney, MdWallet } from "react-icons/md";
// import { PropertyType, ReservationType } from '../utils/types';
import { MdLocationOn, MdAccountBalanceWallet, MdCurrencyBitcoin } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { HoldingType } from '@/utils/types';
import { ethers } from 'ethers';
import { contractAddresses } from '@/utils/addresses';
import { BlockEstateABI } from '@/contracts/BlockEstate';
import { ERC20ABI } from '@/contracts/ERC20';
import { ProjectAccountABI } from '@/contracts/ProjectAccount';
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export function FundingSection({ loading, property,  fundingAmount, account, signer }:
    { loading: boolean, property: HoldingType | null, fundingAmount: number, account: string, signer: ethers.providers.JsonRpcSigner | null}) {

    const navigator = useNavigate();

    const [userBalanceTokensFormatted, setUserBalanceTokensFormatted] = useState<number>(0);
    const [userBalancePaymentTokenFormatted, setUserBalancePaymentTokenFormatted] = useState<number>(0);

    // const [isOpenToken, setIsOpenToken] = useState(false);
    // const [selectedTokenName, setSelectedTokenName] = useState('Select a token');
    // const [selectedToken, setSelectedToken] = useState('');

    const { id } = useParams();

    const [loadingApproval, setLoadingApproval] = useState<boolean>(false);
    const [loadingPayment, setLoadingPayment] = useState<boolean>(false);

    // const handleSelectToken = (value: string, label: string) => {
    //     setSelectedToken(value);
    //     setSelectedTokenName(label);
    //     setIsOpenToken(false);
    // };

    // const [isOpenChain, setIsOpenChain] = useState(false);
    // const [selectedChainName, setSelectedChainName] = useState('Select a blockchain');
    // const [selectedChain, setSelectedChain] = useState('');

    // const handleSelectChain = (value: string, label: string) => {
    //     setSelectedChain(value);
    //     setSelectedChainName(label);
    //     setIsOpenChain(false);
    // };

    const handlePayment = async () => {
       try{
        setLoadingPayment(true);
        const chainId = await signer?.getChainId() as number;
            
        
        const blockEstateContract = new ethers.Contract(contractAddresses[chainId]["BlockEstate"], BlockEstateABI, signer as ethers.providers.JsonRpcSigner);
        
        const projectAccount = await blockEstateContract.functions.projectsAccounts(id);
        
        const projectAccountContract = new ethers.Contract(projectAccount[0], ProjectAccountABI, signer as ethers.providers.JsonRpcSigner);
        const paymentTx = await projectAccountContract.functions.engage(account, ethers.utils.parseEther(fundingAmount.toString()));
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
            
            const approveTx = await paymentTokenContract.functions.approve(projectAccount[0], ethers.utils.parseEther(fundingAmount.toString()));
            await approveTx.wait();


        } catch(err){
            console.log(err);
        } finally{
            setLoadingApproval(false);
        }
    }

    const getData = async () => {
        try{

            const chainId = await signer?.getChainId() as number;
            const BlockEstateContract = new ethers.Contract(contractAddresses[chainId]["BlockEstate"], BlockEstateABI, signer as ethers.providers.JsonRpcSigner);
            const PaymentTokenContract = new ethers.Contract(contractAddresses[chainId]["PaymentToken"], ERC20ABI, signer as ethers.providers.JsonRpcSigner);
            
           
            const projectAccount = await BlockEstateContract.functions.projectsAccounts(id);
            const projectAccountContract = new ethers.Contract(projectAccount[0], ProjectAccountABI, signer as ethers.providers.JsonRpcSigner);

            const userBalance = await projectAccountContract.functions.erc20BalanceOf(account);
            setUserBalanceTokensFormatted(Number(ethers.utils.formatEther(userBalance[0]._hex)));

            const userBalancePaymentToken = await PaymentTokenContract.functions.balanceOf(account);
            setUserBalancePaymentTokenFormatted(Number(ethers.utils.formatEther(userBalancePaymentToken[0]._hex)));

        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [signer]);

    return (
        <div className=" bg-transparent rounded-xl">
            {loading ?
                // Refazer o loading depois com algo um pouco melhor
                <></>
                :
                <>
                    {(property) && (
                        <div className='flex flex-row justify-between items-stretch'>

                            {/* Confirm data about the payment */}

                            <div className='min-w-min w-96 px-6 py-12 rounded-xl shadow-xl backdrop-blur-lg bg-white/30 rounded-xl'>
                                <button className='p-3 bg-[rgba(255,255,255,0.1)] text-white rounded-full shadow-xl' onClick={() => navigator(-1)}><MdArrowBackIos /></button>
                                <div className='flex flex-col space-y-4'>
                                    <h1 className='py-6 text-2xl font-semibold text-white'>Confirm and Pay</h1>
                                    <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                        <MdLocationOn className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                        <div className="">{property.location}</div>
                                    </div>
                                    {/* <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                        <MdDateRange className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                        <div className="">{reservation.checkIn} - {reservation.checkOut}</div>
                                    </div>
                                    <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                        <MdPerson className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                        <div className="">{reservation.guests} guests</div>
                                    </div> */}
                                    <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                        <MdAccountBalanceWallet className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                        <div className="">${userBalanceTokensFormatted} <span className='ml-2 text-sm italic'>(Tokens you own)</span></div>
                                    </div>
                                    <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                        <MdCurrencyBitcoin className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                        <div className="">{userBalancePaymentTokenFormatted} <span className='ml-2 text-sm italic'>(Balance (USDC))</span></div>
                                    </div>
                                    <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                        <MdAttachMoney className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                        <div className="">${fundingAmount} <span className='ml-2 text-sm italic'>(Value to pay (in USDC))</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Transaction interface here */}

                            <div className='min-w-min mt-60 w-96 px-6 py-6 rounded-xl shadow-xl backdrop-blur-lg bg-white/30 rounded-xl'>
                                <div className='flex flex-col space-y-4'>

                                    {/* Blockchain */}

                                    {/* <div className="flex items-center bg-[rgba(255,255,255,0.1)] border-[1px] border-white text-white p-3 rounded-full shadow-sm">
                                        <div
                                            className="relative inline-block w-full"
                                            onMouseLeave={() => setIsOpenChain(false)}
                                        >
                                            <button
                                                onMouseEnter={() => setIsOpenChain(true)}
                                                type="button"
                                                className="inline-flex justify-between w-full text-white"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                {selectedChainName}
                                                <svg
                                                    className="mr-1 ml-2 h-6 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12.586l-4.293-4.293a1 1 0 011.414-1.414L10 10.172l3.879-3.879a1 1 0 111.414 1.414L10 12.586z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {isOpenChain && (
                                                <ul
                                                    className="absolute z-10 w-full"
                                                >
                                                    <div className="py-1 mt-6 shadow-md rounded-md bg-white overflow-hidden" role="menu" aria-orientation="vertical">
                                                        {chainsData.map((chain) => (
                                                            <li
                                                                key={chain.value}
                                                                onClick={() => handleSelectChain(chain.value, chain.label)}
                                                                className="block px-4 py-2 text-sm text-primary-text hover:bg-gray-100 w-full text-left cursor-pointer"
                                                                role="menuitem"
                                                            >
                                                                {chain.label}
                                                            </li>
                                                        ))}
                                                    </div>
                                                </ul>
                                            )}
                                        </div>
                                    </div>

                                    {/* Select Token */}

                                    {/* <div className="flex items-center bg-[rgba(255,255,255,0.1)] border-[1px] border-white text-white p-3 rounded-full shadow-sm">
                                        <div
                                            className="relative inline-block w-full"
                                            onMouseLeave={() => setIsOpenToken(false)}
                                        >
                                            <button
                                                onMouseEnter={() => setIsOpenToken(true)}
                                                type="button"
                                                className="inline-flex justify-between w-full text-white"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                {selectedTokenName}
                                                <svg
                                                    className="mr-1 ml-2 h-6 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12.586l-4.293-4.293a1 1 0 011.414-1.414L10 10.172l3.879-3.879a1 1 0 111.414 1.414L10 12.586z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {isOpenToken && (
                                                <ul
                                                    className="absolute z-10 w-full"
                                                >
                                                    <div className="py-1 mt-6 shadow-md rounded-md bg-white overflow-hidden" role="menu" aria-orientation="vertical">
                                                        {tokensData.map((token) => (
                                                            <li
                                                                key={token.value}
                                                                onClick={() => handleSelectToken(token.value, token.label)}
                                                                className="block px-4 py-2 text-sm text-primary-text hover:bg-gray-100 w-full text-left cursor-pointer"
                                                                role="menuitem"
                                                            >
                                                                {token.label}
                                                            </li>
                                                        ))}
                                                    </div>
                                                </ul>
                                            )}
                                        </div>
                                    </div> */} 

                                    {loadingApproval ?
                                        <Button disabled>
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Approving...
                                        </Button>
                                        :
                                        <Button className="w-full bg-primary-500 hover:bg-primary-600" onClick={handleApprove}>Approve USDCT</Button>
                                    }  

                                    {loadingPayment ?
                                        <Button disabled>
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            Paying...
                                        </Button>
                                        :
                                        <Button className="w-full bg-primary-500 hover:bg-primary-600" onClick={handlePayment}>Reserve</Button>
                                    }  

                                
                                </div>
                            </div>
                        </div>
                    )}
                </>
            }
        </div>
    );
};