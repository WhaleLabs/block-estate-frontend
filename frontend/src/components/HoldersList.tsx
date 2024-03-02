import React from 'react';
import { HoldingHolderType } from '../utils/types';

interface HoldersListProps {
    holders: HoldingHolderType[];
}

const HoldersList: React.FC<HoldersListProps> = ({ holders }) => {
    return (
        <div className="divide-y divide-gray-200">
            {holders.map((individualHolder, index) => (
                <div key={index} className="py-4 flex items-center justify-between">
                    <div>
                        <p className="text-lg font-semibold">{individualHolder.name}</p>
                        <p className="text-sm text-gray-500">Tokens: {individualHolder.tokens}</p>
                    </div>
                    {/* You can add additional elements/icons here if needed */}
                </div>
            ))}
        </div>
    );
};

export default HoldersList;
