import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProposalCard from '../components/ProposalCard';
import { proposalData } from '../utils/mock';

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

            <div className="w-full px-4">
                {proposalData.map((proposal, index) => (
                    <ProposalCard
                        key={index}
                        owner={proposal.owner}
                        timestamp={proposal.timestamp}
                        title={proposal.title}
                        type={proposal.type}
                        amount={proposal.amount}
                        description={proposal.description}
                        image={proposal.image}
                        status={proposal.status}
                    />
                ))}
            </div>
        </div>
    );
};

