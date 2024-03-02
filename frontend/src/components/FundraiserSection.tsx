import { Progress } from "./ui/progress";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FundraiserSection({ id, price, raised, totalTokens, holders, status, loading }:
    { id: string, price: number, raised: number, totalTokens: number, holders: object, status: string, loading: boolean }) {

    const numHolders = (holders as any[]).length;

    const navigator = useNavigate();

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
                {/* <Button variant="outline" className="w-[20%] text-xl bg-primary-600 text-white rounded-md">Fund</Button> */}
                <button
                    className="w-[20%] bg-primary-600 text-white text-lg font-semibold py-2 px-4 rounded-lg mb-2 hover:bg-primary-700 transition-colors"
                    onClick={() => navigator(`/funding/${id}`)}
                >
                    Fund
                </button>
                <p className="text-l text-gray-500">Campaign {status}</p>
            </div>
        </div>
    )
}