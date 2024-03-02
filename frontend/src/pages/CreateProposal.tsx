import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { fundingData } from '../utils/mock';
import { HoldingType } from '../utils/types';

export default function CreateProposal() {
    const navigator = useNavigate();
    const [proposalTitle, setTitle] = useState('');
    const [proposalType, setType] = useState('');
    const [proposalAmount, setAmount] = useState('');
    const [proposalDescription, setDescription] = useState('');

    // GET OWNER DATA
    const params = useParams();
    const holdingId = params.id || '';

    const [holding, setHolding] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchHolding() {
        try {
            // fetch the fundingData by the id here and then set using setHolding
            const holding = fundingData.find(holding => holding.id === parseInt(holdingId));
            setHolding(holding || null);
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchHolding();
    }, [holdingId]);
    // GET OWNER DATA

    const handleDescriptionChange = (e: any) => {
        setDescription(e.target.value);
    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e: any) => {
        setAmount(e.target.value);
    }

    const handleTypeChange = (e: any) => {
        setType(e.target.value);
    }

    const submitProposal = async (proposalData: any) => {
        try {
            console.log('Sending proposal data to backend:', proposalData);
            // Send the proposalData to the backend
        } catch (error) {
            console.error('Error submitting proposal:', error);
        }
    };

    const handleSubmit = () => {
        const proposalData = {
            proposalType: proposalType,
            proposalAmount: proposalAmount,
            proposalTitle: proposalTitle,
            proposalDescription: proposalDescription,
            owner: 'John Doe', // Replace with actual owner
            timestamp: new Date().toISOString(),
            holding
        };

        submitProposal(proposalData);
    };

    const maxLength = 10000;

    return (
        <div className="bg-white text-gray-700 h-[70vh] rounded-xl border-2 p-6 flex flex-col shadow-lg">
            <div className='flex flex-row justify-between mb-2'>
                <h2 className="text-gray-600 text-s font-semibold mb-4 flex items-center transition-colors duration-300 hover:text-gray-900 hover:cursor-pointer"
                    onClick={() => navigator(-1)}
                >
                    <FaArrowLeft className="mr-1 text-xs" />Return
                </h2>
                {/* <div className="relative">
                    <select
                        name="proposalType"
                        id="proposalType"
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        defaultValue="default"
                    >
                        <option value="default" disabled hidden>Proposal Type</option>
                        <option value="sell">Sell</option>
                        <option value="bailout">Bailout</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L6 8h8l-4 4z" /></svg>
                    </div>
                </div> */}
                <div className="flex items-center">
                    <h2 className="block text-gray-700 font-semibold mr-2">Proposal Type:</h2>
                    <input
                        type="radio"
                        id="sell"
                        name="proposalType"
                        value="sell"
                        className="hidden"
                        checked={proposalType === 'sell'}
                        onChange={handleTypeChange}
                    />
                    <label
                        htmlFor="sell"
                        className={`bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md cursor-pointer mr-2 ${proposalType === 'sell' ? 'bg-red-400' : ''
                            } hover:bg-gray-100 hover:border-gray-400`}
                    >
                        Sell
                    </label>
                    <input
                        type="radio"
                        id="bailout"
                        name="proposalType"
                        value="bailout"
                        className="hidden"
                        checked={proposalType === 'bailout'}
                        onChange={handleTypeChange}
                    />
                    <label
                        htmlFor="bailout"
                        className={`bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md cursor-pointer ${proposalType === 'bailout' ? 'bg-red-400' : ''
                            } hover:bg-gray-100 hover:border-gray-400`}
                    >
                        Bailout
                    </label>
                </div>
            </div>
            <div className="mb-4 flex justify-between">
                <div className='w-[75%]'>
                    <label htmlFor="proposalTitle" className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        id="proposalTitle"
                        name="proposalTitle"
                        className="border bg-transparent border-gray-300 rounded-md p-2 w-full"
                        value={proposalTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className='w-[17.5%]'>
                    <label htmlFor="proposalAmount" className="block text-gray-700 font-semibold mb-2">Amount</label>
                    <input
                        type="number"
                        id="proposalAmount"
                        name="proposalAmount"
                        className="border bg-transparent border-gray-300 rounded-md p-2 w-full"
                        value={proposalAmount}
                        onChange={handleAmountChange}
                    />
                </div>
            </div>
            <div className="mb-4 h-[100%]">
                <label htmlFor="proposalDescription" className="block text-gray-700 font-semibold mb-2 relative">
                    Description
                    <span className="text-gray-400 text-xs absolute bottom-0 right-0">{proposalDescription.length} / {maxLength}</span>
                </label>
                <textarea
                    id="proposalDescription"
                    name="proposalDescription"
                    className="border bg-transparent border-gray-300 rounded-md p-2 w-full h-[80%]"
                    value={proposalDescription}
                    onChange={handleDescriptionChange}
                    maxLength={maxLength}
                ></textarea>
            </div>
            <button
                className="bg-blue-500 text-white self-end w-[20%] font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
            // disabled={!proposalTitle || !proposalDescription}
            >
                Submit
            </button>

        </div>
    );
};
