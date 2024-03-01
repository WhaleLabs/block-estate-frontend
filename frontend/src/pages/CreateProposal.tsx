import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { holdingData } from '../utils/mock';
import { HoldingType } from '../utils/types';

export default function CreateProposal() {
    const navigator = useNavigate();
    const [proposalTitle, setTitle] = useState('');
    const [proposalDescription, setDescription] = useState('');

    // GET OWNER DATA
    const params = useParams();
    const holdingId = params.id || '';

    const [holding, setHolding] = useState<HoldingType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchHolding() {
        try {
            // fetch the holdingData by the id here and then set using setHolding
            const holding = holdingData.find(holding => holding.id === parseInt(holdingId));
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
            proposalTitle: proposalTitle,
            proposalDescription: proposalDescription,
            holding
        };

        submitProposal(proposalData);
    };

    const maxLength = 10000;

    return (
        <div className="bg-white text-gray-700 h-[70vh] rounded-xl border-2 p-6 flex flex-col shadow-lg">
            <h2 className="text-gray-600 text-s font-semibold mb-4 flex items-center transition-colors duration-300 hover:text-gray-900 hover:cursor-pointer"
                onClick={() => navigator(-1)}
            >
                <FaArrowLeft className="mr-1 text-xs" />Return
            </h2>
            <div className="mb-4">
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
