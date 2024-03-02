import { Progress } from "./ui/progress";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { scanUrls } from "@/utils/addresses";
import { ethers } from "ethers";

export default function FundraiserSection({ id, price, raised, totalTokens, holders, status, loading, walletAddress , invested, chainId }:
    { id: string, price: number, raised: number, totalTokens: number, holders: object, status: string, loading: boolean, 
        walletAddress: string, invested: number, chainId: number}) {

    const numHolders = (holders as any[]).length;

    // PROJECT WALLET ADDRESS

    const yourName = "John Doe"; // your identity

    const [yourData, setYourData] = useState<any>(null);
    const [fundingAmount, setFundingAmount] = useState<number>(0);

    useEffect(() => {
        const yourData = (holders as any[]).find((holder: any) => holder.name === yourName);
        setYourData(yourData);
    }, [holders, yourName]);

    const navigator = useNavigate();

    const handleFundingAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFundingAmount(parseFloat(event.target.value) || 0);
    };

    const handleFund = () => {
        // Here you can perform any action with the funding amount, for now, we're just logging it
        console.log("Funding amount:", fundingAmount);
        // Construct the URL with query parameters
        const url = `/funding/${id}?amount=${fundingAmount}`;
        // Navigate to the URL
        navigator(url);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mb-4">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-row items-end justify-between">
                    <div className="flex flex-row items-end">
                        <p className="text-5xl font-semibold">${raised}</p>
                        <p className="text-xl ml-4">{numHolders} Holder{numHolders !== 1 ? 's' : ''}</p>
                    </div>
                    <p className="text-2xl font-semibold">{(raised / price * 100).toFixed(2)}% of ${price} goal</p>
                </div>
                <div className="w-full mt-4">
                    <Progress value={raised / price * 100} />
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between mt-4">
                <div className="flex flex-row justify-start items-start w-[75%]">
                    <DialogDemo navigator={navigator} handleFund={handleFund} fundingAmount={fundingAmount} id={id} handleFundingAmountChange={handleFundingAmountChange} />
                    <div className="ml-4">
                        <div>
                            {walletAddress ? (
                                <a href={`${scanUrls[chainId]}/address/${walletAddress}`} target="_blank" rel="noopener noreferrer">
                                    <p>Project Account: {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : '...'}</p>
                                </a>
                            ) : (
                                <>
                                    <p>Project Account: Error retrieving wallet address</p>
                                </>
                            )}
                        </div>
                        <p className="text-l text-gray-500">You Raised: {invested ?? "You Haven't Raised in this property yet"}</p>
                    </div>
                </div>
                <p className="text-l text-gray-500">Campaign {status}</p>
            </div>
        </div>
    )
}

export function DialogDemo({ navigator, id, handleFund, fundingAmount, handleFundingAmountChange }: { navigator: any, id: string, fundingAmount: number, handleFund: any, handleFundingAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="w-[25%] bg-primary-600 text-white text-lg font-semibold py-2 px-4 rounded-lg mb-2 hover:bg-primary-700 transition-colors"
                >
                    Fund
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Fund</DialogTitle>
                    <DialogDescription>
                        Write the amount you want to fund
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="fundingAmount" className="text-right">
                        Funding Amount
                    </Label>
                    <Input id="fundingAmount" value={fundingAmount} className="col-span-3" onChange={handleFundingAmountChange} />
                </div>
                <DialogFooter>
                    {/* Call handleFund function when the button is clicked */}
                    <Button type="submit" onClick={handleFund}>Go To Confirmation Page</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
