import React, { useState } from 'react';

export default function ProposalCard({ title, owner, timestamp, type, amount, description, image, status }:
    { title: string, owner:string, timestamp: string, type: string, amount: number, description: string, image: string, status: string }) {
    const [expanded, setExpanded] = useState(false);
    const [vote, setVote] = useState('');

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-400';
            case 'Approved':
                return 'bg-green-400';
            case 'Rejected':
                return 'bg-red-400';
            default:
                return 'bg-gray-400';
        }
    };

    const statusColorClass = getStatusColor(status);

    return (
        <div className="bg-white flex flex-col rounded-lg shadow-md p-4 my-4 text-black">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src={image} alt="Proposal" className="w-12 h-12 rounded-full" />
                        <div>
                            <h2 className="text-lg font-semibold">{owner}</h2>
                            <p className="text-sm">
                                {timestamp}
                            </p>
                        </div>
                    </div>
                    <p className={`font-semibold rounded-full px-3 py-1 text-white  ${statusColorClass}`}>{status}</p>
                </div>

                {/* Border line */}
                <div className="hidden md:block border-b border-gray-300 my-3"></div>

                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-2xl">{title}</h2>
                    <div className='flex flex-col'>
                        <p className="font-normal">Type: <span>{type}</span></p>
                        <p className="font-normal">Amount: <span>{amount}</span></p>
                    </div>
                </div>
            </div>
            {expanded && (
                <div className="mt-4">
                    <div className="mb-2">
                        <span className="font-semibold">Description:</span> {description}
                    </div>
                    <div className="mb-2">
                        <p className="font-semibold">Vote:</p>
                        <div>
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="vote"
                                    value="for"
                                    checked={vote === 'for'}
                                    onChange={() => setVote('for')}
                                /> For
                            </label>
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="vote"
                                    value="against"
                                    checked={vote === 'against'}
                                    onChange={() => setVote('against')}
                                /> Against
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="vote"
                                    value="abstain"
                                    checked={vote === 'abstain'}
                                    onChange={() => setVote('abstain')}
                                /> Abstain
                            </label>
                        </div>
                    </div>
                </div>
            )}
            <button
                className="text-blue-500 focus:outline-none self-center"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};
