import React from 'react';

export default function Proposal() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='flex justify-between w-full px-4'>
                <h2 className="text-4xl font-bold mb-8 text-black">
                    Propositions
                </h2>

                <div className="flex items-center justify-center mb-8">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Create Proposal
                    </button>
                </div>
            </div>

            {/* Other People's Comments */}
            <div className="w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Other People's Comments</h2>
                {/* Here you can map through an array of comments and render them */}
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-lg">Comment 1</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-lg">Comment 2</p>
                </div>
                {/* Add more comments as needed */}
            </div>
        </div>
    );
};

