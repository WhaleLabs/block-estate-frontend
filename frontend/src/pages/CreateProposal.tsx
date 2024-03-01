import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { holdingData } from '../utils/mock';
import { HoldingType } from '../utils/types';

const CreateProposal = () => {
    const navigator = useNavigate();
    const [description, setDescription] = useState('');

    const handleChange = (e: any) => {
        setDescription(e.target.value);
    };

    const maxLength = 10000; // Maximum character limit for the textarea


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

    return (
        <div className="bg-white text-gray-700 h-[70vh] rounded-xl border-2 p-6 flex flex-col shadow-lg">
            <h2 className="text-gray-600 text-s font-semibold mb-4 flex items-center transition-colors duration-300 hover:text-gray-900 hover:cursor-pointer"
                onClick={() => navigator(-1)}
            >
                <FaArrowLeft className="mr-1 text-xs" />Return
            </h2>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                <input type="text" id="title" name="title" className="border bg-transparent border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4 h-[100%]">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2 relative">
                    Description
                    <span className="text-gray-400 text-xs absolute bottom-0 right-0">{description.length} / {maxLength}</span>
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="border bg-transparent border-gray-300 rounded-md p-2 w-full h-[80%]"
                    value={description}
                    onChange={handleChange}
                    maxLength={maxLength}
                ></textarea>
            </div>
            <button className="bg-blue-500 text-white self-end w-[20%] font-semibold px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
    );
};

export default CreateProposal;
