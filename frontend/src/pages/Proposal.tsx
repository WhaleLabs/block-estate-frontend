import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Proposal() {

    const navigator = useNavigate();

    const params = useParams();
    const holdingId = params.id || '';

    return (
        <div className="flex flex-col items-center justify-center">
            <div className='flex justify-between w-full px-4'>
                <h2 className="text-4xl font-bold mb-8 text-black">
                    Propositions
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigator(`/my-holding/${holdingId}/create-proposal`)}
                    >
                        Create Proposal
                    </button>
                </div>
            </div>

            <div className="w-full max-w-lg">
                {/* Replace with a map function */}
                <div className="flex flex-row justify-between items-center mb-4 border-2 rounded-md px-4">
                    <div className="flex flex-row items-center">
                        <img src="https://via.placeholder.com/150" alt="" className="w-12 h-12 rounded-full" />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">John Doe</h2>
                            <p className="text-gray-600">Proposal for 10% of the tokens</p>
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">Status: Pending</p>
                    </div>
                    <div className="ml-4">
                        <p className="text-gray-600">Date: 12/12/2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

