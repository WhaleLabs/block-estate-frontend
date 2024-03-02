const RentalsContract = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "amountsLockedForRentals",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "availableDays",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "availableToRent",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "blockEstate",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract BlockEstate"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "endDates",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getApproved",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_symbol",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_paymentToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "blockEstateAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_rentalPriceperDay",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_projectAccount",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isApprovedForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ownerOf",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "paymentToken",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rentProperty",
            "inputs": [
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_startDate",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_endDate",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rentalPriceperDay",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rentalStarted",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "rentalsCounter",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "retrieveAmountLocked",
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setAvailableToRent",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPaymentToken",
            "inputs": [
                {
                    "name": "_newPaymentToken",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPricePerDay",
            "inputs": [
                {
                    "name": "_newPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUnavailableToRent",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "splitRental",
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_intermediaryDates",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startDates",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                {
                    "name": "interfaceId",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenURI",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Initialized",
            "inputs": [
                {
                    "name": "version",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RentalMinted",
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "_account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_startDate",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "_endDate",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "RentalSplit",
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "_account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "_intermediaryDates",
                    "type": "uint256[]",
                    "indexed": false,
                    "internalType": "uint256[]"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ERC721IncorrectOwner",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InsufficientApproval",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidApprover",
            "inputs": [
                {
                    "name": "approver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOperator",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidReceiver",
            "inputs": [
                {
                    "name": "receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidSender",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721NonexistentToken",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidInitialization",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotInitializing",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OwnableInvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableUnauthorizedAccount",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x60806040523480156200001157600080fd5b506200001c62000022565b620000d6565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000735760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620000d35780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b61353d80620000e66000396000f3fe608060405234801561001057600080fd5b50600436106102415760003560e01c80638da5cb5b11610145578063ceef12b6116100bd578063f077dcf11161008c578063f7e3e31211610071578063f7e3e31214610571578063f7fb876314610591578063f82b77771461059a57600080fd5b8063f077dcf11461053e578063f2fde38b1461055e57600080fd5b8063ceef12b61461048d578063cfda6d83146104a0578063db0e4544146104c3578063e985e9c5146104d657600080fd5b8063a3bbf53b11610114578063b266c661116100f9578063b266c66114610447578063b88d4fde14610467578063c87b56dd1461047a57600080fd5b8063a3bbf53b14610421578063a9e22da41461043457600080fd5b80638da5cb5b146103b65780638f697cd6146103f357806395d89b4114610406578063a22cb4651461040e57600080fd5b80633644e515116101d85780636a326ab1116101a757806370a082311161018c57806370a0823114610393578063715018a6146103a6578063863a4689146103ae57600080fd5b80636a326ab1146103735780636a631c521461038657600080fd5b80633644e5151461032e57806342842e0e146103445780636352211e14610357578063688e61231461036a57600080fd5b80630b91edc5116102145780630b91edc5146102d057806323b872dd146102d857806326b39476146102eb5780633013ce291461030e57600080fd5b806301ffc9a71461024657806306fdde031461026e578063081812fc14610283578063095ea7b3146102bb575b600080fd5b610259610254366004612c7f565b6105c5565b60405190151581526020015b60405180910390f35b6102766106aa565b6040516102659190612d0a565b610296610291366004612d1d565b610760565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610265565b6102ce6102c9366004612d5f565b6107b5565b005b6102ce6107c4565b6102ce6102e6366004612d89565b6108b0565b6102596102f9366004612d1d565b600c6020526000908152604090205460ff1681565b6002546102969073ffffffffffffffffffffffffffffffffffffffff1681565b6103366109a1565b604051908152602001610265565b6102ce610352366004612d89565b6109bf565b610296610365366004612d1d565b6109df565b61033660055481565b6102ce610381366004612dc5565b6109ea565b6007546102599060ff1681565b6103366103a1366004612dc5565b610aee565b6102ce610b8f565b6102ce610ba3565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff16610296565b610336610401366004612de0565b610c8d565b6102766112db565b6102ce61041c366004612e21565b61132c565b6102ce61042f366004612d1d565b611337565b6102ce610442366004612d1d565b61148e565b610336610455366004612d1d565b60086020526000908152604090205481565b6102ce610475366004612e87565b611550565b610276610488366004612d1d565b611568565b6102ce61049b366004612f81565b6115dd565b6102596104ae366004612d1d565b600a6020526000908152604090205460ff1681565b6102ce6104d1366004613049565b611b27565b6102596104e43660046130f4565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020908152604080832093909416825291909152205460ff1690565b61033661054c366004612d1d565b60096020526000908152604090205481565b6102ce61056c366004612dc5565b611d9d565b6003546102969073ffffffffffffffffffffffffffffffffffffffff1681565b61033660065481565b6103366105a8366004612d5f565b600b60209081526000928352604080842090915290825290205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061065857507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806106a457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930080546060919081906106dc90613127565b80601f016020809104026020016040519081016040528092919081815260200182805461070890613127565b80156107555780601f1061072a57610100808354040283529160200191610755565b820191906000526020600020905b81548152906001019060200180831161073857829003601f168201915b505050505091505090565b600061076b82611e01565b5060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff166106a4565b6107c0828233611e7f565b5050565b60035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f52656e74616c733a2063616c6c6572206973206e6f742074686520426c6f636b60448201527f457374617465000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b73ffffffffffffffffffffffffffffffffffffffff8216610900576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b600061090d838333611e8c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461099b576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640161087d565b50505050565b6000805446146109b8576109b3612051565b905090565b5060015490565b6109da83838360405180602001604052806000815250611550565b505050565b60006106a482611e01565b60045473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610aa7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f52656e74616c733a2063616c6c6572206973206e6f74207468652070726f6a6560448201527f6374206163636f756e7400000000000000000000000000000000000000000000606482015260840161087d565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60007f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316610b61576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b73ffffffffffffffffffffffffffffffffffffffff9092166000908152600390920160205250604090205490565b610b976120e6565b610ba16000612174565b565b60035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f52656e74616c733a2063616c6c6572206973206e6f742074686520426c6f636b60448201527f4573746174650000000000000000000000000000000000000000000000000000606482015260840161087d565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6000818310610d1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f52656e74616c733a2073746172742064617465206d757374206265206265666f60448201527f726520656e642064617465000000000000000000000000000000000000000000606482015260840161087d565b428311610dad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f52656e74616c733a2073746172742064617465206d75737420626520696e207460448201527f6865206675747572650000000000000000000000000000000000000000000000606482015260840161087d565b60075460ff16610e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f52656e74616c733a2070726f7065727479206973206e6f7420617661696c616260448201527f6c6520746f2072656e7400000000000000000000000000000000000000000000606482015260840161087d565b825b828111610f06576000818152600c602052604090205460ff16610ec0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f52656e74616c733a206461746520616c72656164792072656e74656400000000604482015260640161087d565b6000818152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055610eff6001826131a9565b9050610e41565b50600580549081906000610f19836131bc565b9091555050600081815260086020908152604080832087905560099091528082208590556004805491517fb3f9ea34000000000000000000000000000000000000000000000000000000008152339181019190915273ffffffffffffffffffffffffffffffffffffffff9091169063b3f9ea3490602401602060405180830381865afa158015610fad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd191906131f4565b90506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611042573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106691906131f4565b6110728361271061320d565b61107c9190613224565b600480546040517fdd63769900000000000000000000000000000000000000000000000000000000815233928101929092523060248301526044820185905291925073ffffffffffffffffffffffffffffffffffffffff9091169063dd63769990606401600060405180830381600087803b1580156110fa57600080fd5b505af115801561110e573d6000803e3d6000fd5b5050336000908152600b602090815260408083208884529091528120859055915061271090508261113f898961325f565b60065461114c919061320d565b611156919061320d565b6111609190613224565b600254600480546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821692810192909252602482018490529293506000929091169063a9059cbb906044016020604051808303816000875af11580156111e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112099190613272565b905080611272576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52656e74616c733a207061796d656e74206661696c6564000000000000000000604482015260640161087d565b61127c898661220a565b878973ffffffffffffffffffffffffffffffffffffffff16867f6d9ab4e363eed1a938981f32a743d9e44e840454754b3a4591ca77b4c28b22f78a6040516112c691815260200190565b60405180910390a45092979650505050505050565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930180546060917f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300916106dc90613127565b6107c03383836122bb565b60008181526009602052604090205442116113d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f52656e74616c733a2072656e74616c20686173206e6f7420656e64656420796560448201527f7400000000000000000000000000000000000000000000000000000000000000606482015260840161087d565b336000818152600b602090815260408083208584529091528082208054908390556004805483517fdd63769900000000000000000000000000000000000000000000000000000000815230928101929092526024820195909552604481018290529151909373ffffffffffffffffffffffffffffffffffffffff169263dd637699926064808201939182900301818387803b15801561147257600080fd5b505af1158015611486573d6000803e3d6000fd5b505050505050565b60045473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461154b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f52656e74616c733a2063616c6c6572206973206e6f74207468652070726f6a6560448201527f6374206163636f756e7400000000000000000000000000000000000000000000606482015260840161087d565b600655565b61155b8484846108b0565b61099b33858585856123dc565b606061157382611e01565b50600061158b60408051602081019091526000815290565b905060008151116115ab57604051806020016040528060008152506115d6565b806115b5846125d3565b6040516020016115c692919061328f565b6040516020818303038152906040525b9392505050565b336115e7846109df565b73ffffffffffffffffffffffffffffffffffffffff161461168a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f52656e74616c733a2063616c6c6572206973206e6f7420746865206f776e657260448201527f206f66207468652072656e74616c000000000000000000000000000000000000606482015260840161087d565b6000838152600860205260409020544210611727576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f52656e74616c733a2072656e74616c2068617320616c7265616479207374617260448201527f7465640000000000000000000000000000000000000000000000000000000000606482015260840161087d565b806117b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f52656e74616c733a206e6f20696e7465726d656469617279206461746573207060448201527f726f766964656400000000000000000000000000000000000000000000000000606482015260840161087d565b6000838152600a602052604090205460ff1615611853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f52656e74616c733a2072656e74616c2068617320616c7265616479207374617260448201527f7465640000000000000000000000000000000000000000000000000000000000606482015260840161087d565b61185c83612691565b6000838152600860205260409020545b6000848152600960205260409020548110156118cd576000818152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556118c690826131a9565b905061186c565b50600083815260086020526040812054905b82811015611a8c57818484838181106118fa576118fa6132be565b905060200201351161198e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f52656e74616c733a20696e7465726d656469617279206461746573206d75737460448201527f20626520696e20617363656e64696e67206f7264657200000000000000000000606482015260840161087d565b6000858152600960205260409020548484838181106119af576119af6132be565b9050602002013510611a43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f52656e74616c733a20696e7465726d656469617279206461746573206d75737460448201527f206265206265666f72652074686520656e642064617465000000000000000000606482015260840161087d565b611a663383868685818110611a5a57611a5a6132be565b90506020020135610c8d565b50838382818110611a7957611a796132be565b60200291909101359250506001016118df565b50336000818152600b60209081526040808320888452825280832080549084905560099092528220549092611ac2918590610c8d565b336000818152600b6020908152604080832085845290915290819020859055519192509087907f6f7622caca84584bd87e67586dfe5baaa6982bf4473fda2591306764f014332b90611b1790899089906132ed565b60405180910390a3505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015611b725750825b905060008267ffffffffffffffff166001148015611b8f5750303b155b905081158015611b9d575080155b15611bd4576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315611c355784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b6002805473ffffffffffffffffffffffffffffffffffffffff808c167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600380548b841690831617905560068990556004805492891692909116919091179055604080516020601f8f018190048102820181019092528d8152611d1e918f908f9081908401838280828437600081840152601f19601f820116905080830192505050505050508c8c8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506126f292505050565b46600055611d2a612051565b6001558315611d8e5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b611da56120e6565b73ffffffffffffffffffffffffffffffffffffffff8116611df5576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b611dfe81612174565b50565b60008181527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079302602052604081205473ffffffffffffffffffffffffffffffffffffffff16806106a4576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240161087d565b6109da8383836001612704565b60008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930260205260408120547f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793009073ffffffffffffffffffffffffffffffffffffffff90811690841615611f0757611f07818587612910565b73ffffffffffffffffffffffffffffffffffffffff811615611f7f57611f31600086600080612704565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600383016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff861615611fca5773ffffffffffffffffffffffffffffffffffffffff861660009081526003830160205260409020805460010190555b600085815260028301602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a811691821790925591518893918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a495945050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61207c6106aa565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b336121257f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610ba1576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161087d565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b73ffffffffffffffffffffffffffffffffffffffff821661225a576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b600061226883836000611e8c565b905073ffffffffffffffffffffffffffffffffffffffff8116156109da576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316612341576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161087d565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260058401602090815260408083209488168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001687151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff83163b156125cc576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a029061245190889088908790879060040161333f565b6020604051808303816000875af19250505080156124aa575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526124a791810190613388565b60015b612539573d8080156124d8576040519150601f19603f3d011682016040523d82523d6000602084013e6124dd565b606091505b508051600003612531576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161087d565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014611486576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161087d565b5050505050565b606060006125e0836129c0565b600101905060008167ffffffffffffffff81111561260057612600612e58565b6040519080825280601f01601f19166020018201604052801561262a576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461263457509392505050565b60006126a06000836000611e8c565b905073ffffffffffffffffffffffffffffffffffffffff81166107c0576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810183905260240161087d565b6126fa612aa2565b6107c08282612b09565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793008180612746575073ffffffffffffffffffffffffffffffffffffffff831615155b156128ba57600061275685611e01565b905073ffffffffffffffffffffffffffffffffffffffff8416158015906127a957508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612807575073ffffffffffffffffffffffffffffffffffffffff80821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209388168352929052205460ff16155b15612856576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161087d565b82156128b857848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b600093845260040160205250506040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61291b838383612b4c565b6109da5773ffffffffffffffffffffffffffffffffffffffff831661296f576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240161087d565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440161087d565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612a09577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310612a35576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612a5357662386f26fc10000830492506010015b6305f5e1008310612a6b576305f5e100830492506008015b6127108310612a7f57612710830492506004015b60648310612a91576064830492506002015b600a83106106a45760010192915050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610ba1576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b11612aa2565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930080612b3d84826133ed565b506001810161099b83826133ed565b600073ffffffffffffffffffffffffffffffffffffffff831615801590612c4957508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612bf9575073ffffffffffffffffffffffffffffffffffffffff80851660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209387168352929052205460ff165b80612c49575060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611dfe57600080fd5b600060208284031215612c9157600080fd5b81356115d681612c51565b60005b83811015612cb7578181015183820152602001612c9f565b50506000910152565b60008151808452612cd8816020860160208601612c9c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006115d66020830184612cc0565b600060208284031215612d2f57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612d5a57600080fd5b919050565b60008060408385031215612d7257600080fd5b612d7b83612d36565b946020939093013593505050565b600080600060608486031215612d9e57600080fd5b612da784612d36565b9250612db560208501612d36565b9150604084013590509250925092565b600060208284031215612dd757600080fd5b6115d682612d36565b600080600060608486031215612df557600080fd5b612dfe84612d36565b95602085013595506040909401359392505050565b8015158114611dfe57600080fd5b60008060408385031215612e3457600080fd5b612e3d83612d36565b91506020830135612e4d81612e13565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215612e9d57600080fd5b612ea685612d36565b9350612eb460208601612d36565b925060408501359150606085013567ffffffffffffffff80821115612ed857600080fd5b818701915087601f830112612eec57600080fd5b813581811115612efe57612efe612e58565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715612f4457612f44612e58565b816040528281528a6020848701011115612f5d57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600060408486031215612f9657600080fd5b83359250602084013567ffffffffffffffff80821115612fb557600080fd5b818601915086601f830112612fc957600080fd5b813581811115612fd857600080fd5b8760208260051b8501011115612fed57600080fd5b6020830194508093505050509250925092565b60008083601f84011261301257600080fd5b50813567ffffffffffffffff81111561302a57600080fd5b60208301915083602082850101111561304257600080fd5b9250929050565b60008060008060008060008060c0898b03121561306557600080fd5b883567ffffffffffffffff8082111561307d57600080fd5b6130898c838d01613000565b909a50985060208b01359150808211156130a257600080fd5b506130af8b828c01613000565b90975095506130c2905060408a01612d36565b93506130d060608a01612d36565b9250608089013591506130e560a08a01612d36565b90509295985092959890939650565b6000806040838503121561310757600080fd5b61311083612d36565b915061311e60208401612d36565b90509250929050565b600181811c9082168061313b57607f821691505b602082108103613174577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156106a4576106a461317a565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036131ed576131ed61317a565b5060010190565b60006020828403121561320657600080fd5b5051919050565b80820281158282048414176106a4576106a461317a565b60008261325a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b818103818111156106a4576106a461317a565b60006020828403121561328457600080fd5b81516115d681612e13565b600083516132a1818460208801612c9c565b8351908301906132b5818360208801612c9c565b01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020815281602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561332657600080fd5b8260051b80856040850137919091016040019392505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261337e6080830184612cc0565b9695505050505050565b60006020828403121561339a57600080fd5b81516115d681612c51565b601f8211156109da576000816000526020600020601f850160051c810160208610156133ce5750805b601f850160051c820191505b81811015611486578281556001016133da565b815167ffffffffffffffff81111561340757613407612e58565b61341b816134158454613127565b846133a5565b602080601f83116001811461346e57600084156134385750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611486565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156134bb5788860151825594840194600190910190840161349c565b50858210156134f757878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122004a6842e41e4a53a084cdd42540f3d735b277049d5206dbe348cfbafae7066db64736f6c63430008170033",
        "sourceMap": "380:6541:64:-:0;;;1663:54;;;;;;;;;-1:-1:-1;1687:22:64;:20;:22::i;:::-;380:6541;;7711:422:1;8870:21;7900:15;;;;;;;7896:76;;;7938:23;;-1:-1:-1;;;7938:23:1;;;;;;;;;;;7896:76;7985:14;;-1:-1:-1;;;;;7985:14:1;;;:34;7981:146;;8035:33;;-1:-1:-1;;;;;;8035:33:1;-1:-1:-1;;;;;8035:33:1;;;;;8087:29;;158:50:71;;;8087:29:1;;146:2:71;131:18;8087:29:1;;;;;;;7981:146;7760:373;7711:422::o;14:200:71:-;380:6541:64;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106102415760003560e01c80638da5cb5b11610145578063ceef12b6116100bd578063f077dcf11161008c578063f7e3e31211610071578063f7e3e31214610571578063f7fb876314610591578063f82b77771461059a57600080fd5b8063f077dcf11461053e578063f2fde38b1461055e57600080fd5b8063ceef12b61461048d578063cfda6d83146104a0578063db0e4544146104c3578063e985e9c5146104d657600080fd5b8063a3bbf53b11610114578063b266c661116100f9578063b266c66114610447578063b88d4fde14610467578063c87b56dd1461047a57600080fd5b8063a3bbf53b14610421578063a9e22da41461043457600080fd5b80638da5cb5b146103b65780638f697cd6146103f357806395d89b4114610406578063a22cb4651461040e57600080fd5b80633644e515116101d85780636a326ab1116101a757806370a082311161018c57806370a0823114610393578063715018a6146103a6578063863a4689146103ae57600080fd5b80636a326ab1146103735780636a631c521461038657600080fd5b80633644e5151461032e57806342842e0e146103445780636352211e14610357578063688e61231461036a57600080fd5b80630b91edc5116102145780630b91edc5146102d057806323b872dd146102d857806326b39476146102eb5780633013ce291461030e57600080fd5b806301ffc9a71461024657806306fdde031461026e578063081812fc14610283578063095ea7b3146102bb575b600080fd5b610259610254366004612c7f565b6105c5565b60405190151581526020015b60405180910390f35b6102766106aa565b6040516102659190612d0a565b610296610291366004612d1d565b610760565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610265565b6102ce6102c9366004612d5f565b6107b5565b005b6102ce6107c4565b6102ce6102e6366004612d89565b6108b0565b6102596102f9366004612d1d565b600c6020526000908152604090205460ff1681565b6002546102969073ffffffffffffffffffffffffffffffffffffffff1681565b6103366109a1565b604051908152602001610265565b6102ce610352366004612d89565b6109bf565b610296610365366004612d1d565b6109df565b61033660055481565b6102ce610381366004612dc5565b6109ea565b6007546102599060ff1681565b6103366103a1366004612dc5565b610aee565b6102ce610b8f565b6102ce610ba3565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff16610296565b610336610401366004612de0565b610c8d565b6102766112db565b6102ce61041c366004612e21565b61132c565b6102ce61042f366004612d1d565b611337565b6102ce610442366004612d1d565b61148e565b610336610455366004612d1d565b60086020526000908152604090205481565b6102ce610475366004612e87565b611550565b610276610488366004612d1d565b611568565b6102ce61049b366004612f81565b6115dd565b6102596104ae366004612d1d565b600a6020526000908152604090205460ff1681565b6102ce6104d1366004613049565b611b27565b6102596104e43660046130f4565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020908152604080832093909416825291909152205460ff1690565b61033661054c366004612d1d565b60096020526000908152604090205481565b6102ce61056c366004612dc5565b611d9d565b6003546102969073ffffffffffffffffffffffffffffffffffffffff1681565b61033660065481565b6103366105a8366004612d5f565b600b60209081526000928352604080842090915290825290205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061065857507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806106a457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930080546060919081906106dc90613127565b80601f016020809104026020016040519081016040528092919081815260200182805461070890613127565b80156107555780601f1061072a57610100808354040283529160200191610755565b820191906000526020600020905b81548152906001019060200180831161073857829003601f168201915b505050505091505090565b600061076b82611e01565b5060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff166106a4565b6107c0828233611e7f565b5050565b60035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f52656e74616c733a2063616c6c6572206973206e6f742074686520426c6f636b60448201527f457374617465000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b73ffffffffffffffffffffffffffffffffffffffff8216610900576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b600061090d838333611e8c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461099b576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640161087d565b50505050565b6000805446146109b8576109b3612051565b905090565b5060015490565b6109da83838360405180602001604052806000815250611550565b505050565b60006106a482611e01565b60045473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610aa7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f52656e74616c733a2063616c6c6572206973206e6f74207468652070726f6a6560448201527f6374206163636f756e7400000000000000000000000000000000000000000000606482015260840161087d565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60007f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316610b61576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b73ffffffffffffffffffffffffffffffffffffffff9092166000908152600390920160205250604090205490565b610b976120e6565b610ba16000612174565b565b60035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f52656e74616c733a2063616c6c6572206973206e6f742074686520426c6f636b60448201527f4573746174650000000000000000000000000000000000000000000000000000606482015260840161087d565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6000818310610d1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f52656e74616c733a2073746172742064617465206d757374206265206265666f60448201527f726520656e642064617465000000000000000000000000000000000000000000606482015260840161087d565b428311610dad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f52656e74616c733a2073746172742064617465206d75737420626520696e207460448201527f6865206675747572650000000000000000000000000000000000000000000000606482015260840161087d565b60075460ff16610e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f52656e74616c733a2070726f7065727479206973206e6f7420617661696c616260448201527f6c6520746f2072656e7400000000000000000000000000000000000000000000606482015260840161087d565b825b828111610f06576000818152600c602052604090205460ff16610ec0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f52656e74616c733a206461746520616c72656164792072656e74656400000000604482015260640161087d565b6000818152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055610eff6001826131a9565b9050610e41565b50600580549081906000610f19836131bc565b9091555050600081815260086020908152604080832087905560099091528082208590556004805491517fb3f9ea34000000000000000000000000000000000000000000000000000000008152339181019190915273ffffffffffffffffffffffffffffffffffffffff9091169063b3f9ea3490602401602060405180830381865afa158015610fad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd191906131f4565b90506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611042573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106691906131f4565b6110728361271061320d565b61107c9190613224565b600480546040517fdd63769900000000000000000000000000000000000000000000000000000000815233928101929092523060248301526044820185905291925073ffffffffffffffffffffffffffffffffffffffff9091169063dd63769990606401600060405180830381600087803b1580156110fa57600080fd5b505af115801561110e573d6000803e3d6000fd5b5050336000908152600b602090815260408083208884529091528120859055915061271090508261113f898961325f565b60065461114c919061320d565b611156919061320d565b6111609190613224565b600254600480546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821692810192909252602482018490529293506000929091169063a9059cbb906044016020604051808303816000875af11580156111e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112099190613272565b905080611272576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52656e74616c733a207061796d656e74206661696c6564000000000000000000604482015260640161087d565b61127c898661220a565b878973ffffffffffffffffffffffffffffffffffffffff16867f6d9ab4e363eed1a938981f32a743d9e44e840454754b3a4591ca77b4c28b22f78a6040516112c691815260200190565b60405180910390a45092979650505050505050565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930180546060917f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300916106dc90613127565b6107c03383836122bb565b60008181526009602052604090205442116113d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f52656e74616c733a2072656e74616c20686173206e6f7420656e64656420796560448201527f7400000000000000000000000000000000000000000000000000000000000000606482015260840161087d565b336000818152600b602090815260408083208584529091528082208054908390556004805483517fdd63769900000000000000000000000000000000000000000000000000000000815230928101929092526024820195909552604481018290529151909373ffffffffffffffffffffffffffffffffffffffff169263dd637699926064808201939182900301818387803b15801561147257600080fd5b505af1158015611486573d6000803e3d6000fd5b505050505050565b60045473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461154b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f52656e74616c733a2063616c6c6572206973206e6f74207468652070726f6a6560448201527f6374206163636f756e7400000000000000000000000000000000000000000000606482015260840161087d565b600655565b61155b8484846108b0565b61099b33858585856123dc565b606061157382611e01565b50600061158b60408051602081019091526000815290565b905060008151116115ab57604051806020016040528060008152506115d6565b806115b5846125d3565b6040516020016115c692919061328f565b6040516020818303038152906040525b9392505050565b336115e7846109df565b73ffffffffffffffffffffffffffffffffffffffff161461168a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f52656e74616c733a2063616c6c6572206973206e6f7420746865206f776e657260448201527f206f66207468652072656e74616c000000000000000000000000000000000000606482015260840161087d565b6000838152600860205260409020544210611727576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f52656e74616c733a2072656e74616c2068617320616c7265616479207374617260448201527f7465640000000000000000000000000000000000000000000000000000000000606482015260840161087d565b806117b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f52656e74616c733a206e6f20696e7465726d656469617279206461746573207060448201527f726f766964656400000000000000000000000000000000000000000000000000606482015260840161087d565b6000838152600a602052604090205460ff1615611853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f52656e74616c733a2072656e74616c2068617320616c7265616479207374617260448201527f7465640000000000000000000000000000000000000000000000000000000000606482015260840161087d565b61185c83612691565b6000838152600860205260409020545b6000848152600960205260409020548110156118cd576000818152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556118c690826131a9565b905061186c565b50600083815260086020526040812054905b82811015611a8c57818484838181106118fa576118fa6132be565b905060200201351161198e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f52656e74616c733a20696e7465726d656469617279206461746573206d75737460448201527f20626520696e20617363656e64696e67206f7264657200000000000000000000606482015260840161087d565b6000858152600960205260409020548484838181106119af576119af6132be565b9050602002013510611a43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f52656e74616c733a20696e7465726d656469617279206461746573206d75737460448201527f206265206265666f72652074686520656e642064617465000000000000000000606482015260840161087d565b611a663383868685818110611a5a57611a5a6132be565b90506020020135610c8d565b50838382818110611a7957611a796132be565b60200291909101359250506001016118df565b50336000818152600b60209081526040808320888452825280832080549084905560099092528220549092611ac2918590610c8d565b336000818152600b6020908152604080832085845290915290819020859055519192509087907f6f7622caca84584bd87e67586dfe5baaa6982bf4473fda2591306764f014332b90611b1790899089906132ed565b60405180910390a3505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015611b725750825b905060008267ffffffffffffffff166001148015611b8f5750303b155b905081158015611b9d575080155b15611bd4576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315611c355784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b6002805473ffffffffffffffffffffffffffffffffffffffff808c167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600380548b841690831617905560068990556004805492891692909116919091179055604080516020601f8f018190048102820181019092528d8152611d1e918f908f9081908401838280828437600081840152601f19601f820116905080830192505050505050508c8c8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506126f292505050565b46600055611d2a612051565b6001558315611d8e5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b611da56120e6565b73ffffffffffffffffffffffffffffffffffffffff8116611df5576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b611dfe81612174565b50565b60008181527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079302602052604081205473ffffffffffffffffffffffffffffffffffffffff16806106a4576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240161087d565b6109da8383836001612704565b60008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930260205260408120547f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793009073ffffffffffffffffffffffffffffffffffffffff90811690841615611f0757611f07818587612910565b73ffffffffffffffffffffffffffffffffffffffff811615611f7f57611f31600086600080612704565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600383016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff861615611fca5773ffffffffffffffffffffffffffffffffffffffff861660009081526003830160205260409020805460010190555b600085815260028301602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a811691821790925591518893918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a495945050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61207c6106aa565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b336121257f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610ba1576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161087d565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b73ffffffffffffffffffffffffffffffffffffffff821661225a576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b600061226883836000611e8c565b905073ffffffffffffffffffffffffffffffffffffffff8116156109da576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240161087d565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316612341576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161087d565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260058401602090815260408083209488168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001687151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff83163b156125cc576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a029061245190889088908790879060040161333f565b6020604051808303816000875af19250505080156124aa575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526124a791810190613388565b60015b612539573d8080156124d8576040519150601f19603f3d011682016040523d82523d6000602084013e6124dd565b606091505b508051600003612531576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161087d565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014611486576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161087d565b5050505050565b606060006125e0836129c0565b600101905060008167ffffffffffffffff81111561260057612600612e58565b6040519080825280601f01601f19166020018201604052801561262a576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461263457509392505050565b60006126a06000836000611e8c565b905073ffffffffffffffffffffffffffffffffffffffff81166107c0576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810183905260240161087d565b6126fa612aa2565b6107c08282612b09565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793008180612746575073ffffffffffffffffffffffffffffffffffffffff831615155b156128ba57600061275685611e01565b905073ffffffffffffffffffffffffffffffffffffffff8416158015906127a957508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612807575073ffffffffffffffffffffffffffffffffffffffff80821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209388168352929052205460ff16155b15612856576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161087d565b82156128b857848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b600093845260040160205250506040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61291b838383612b4c565b6109da5773ffffffffffffffffffffffffffffffffffffffff831661296f576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240161087d565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440161087d565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612a09577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310612a35576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612a5357662386f26fc10000830492506010015b6305f5e1008310612a6b576305f5e100830492506008015b6127108310612a7f57612710830492506004015b60648310612a91576064830492506002015b600a83106106a45760010192915050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610ba1576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b11612aa2565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930080612b3d84826133ed565b506001810161099b83826133ed565b600073ffffffffffffffffffffffffffffffffffffffff831615801590612c4957508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612bf9575073ffffffffffffffffffffffffffffffffffffffff80851660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209387168352929052205460ff165b80612c49575060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611dfe57600080fd5b600060208284031215612c9157600080fd5b81356115d681612c51565b60005b83811015612cb7578181015183820152602001612c9f565b50506000910152565b60008151808452612cd8816020860160208601612c9c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006115d66020830184612cc0565b600060208284031215612d2f57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612d5a57600080fd5b919050565b60008060408385031215612d7257600080fd5b612d7b83612d36565b946020939093013593505050565b600080600060608486031215612d9e57600080fd5b612da784612d36565b9250612db560208501612d36565b9150604084013590509250925092565b600060208284031215612dd757600080fd5b6115d682612d36565b600080600060608486031215612df557600080fd5b612dfe84612d36565b95602085013595506040909401359392505050565b8015158114611dfe57600080fd5b60008060408385031215612e3457600080fd5b612e3d83612d36565b91506020830135612e4d81612e13565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215612e9d57600080fd5b612ea685612d36565b9350612eb460208601612d36565b925060408501359150606085013567ffffffffffffffff80821115612ed857600080fd5b818701915087601f830112612eec57600080fd5b813581811115612efe57612efe612e58565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715612f4457612f44612e58565b816040528281528a6020848701011115612f5d57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600060408486031215612f9657600080fd5b83359250602084013567ffffffffffffffff80821115612fb557600080fd5b818601915086601f830112612fc957600080fd5b813581811115612fd857600080fd5b8760208260051b8501011115612fed57600080fd5b6020830194508093505050509250925092565b60008083601f84011261301257600080fd5b50813567ffffffffffffffff81111561302a57600080fd5b60208301915083602082850101111561304257600080fd5b9250929050565b60008060008060008060008060c0898b03121561306557600080fd5b883567ffffffffffffffff8082111561307d57600080fd5b6130898c838d01613000565b909a50985060208b01359150808211156130a257600080fd5b506130af8b828c01613000565b90975095506130c2905060408a01612d36565b93506130d060608a01612d36565b9250608089013591506130e560a08a01612d36565b90509295985092959890939650565b6000806040838503121561310757600080fd5b61311083612d36565b915061311e60208401612d36565b90509250929050565b600181811c9082168061313b57607f821691505b602082108103613174577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156106a4576106a461317a565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036131ed576131ed61317a565b5060010190565b60006020828403121561320657600080fd5b5051919050565b80820281158282048414176106a4576106a461317a565b60008261325a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b818103818111156106a4576106a461317a565b60006020828403121561328457600080fd5b81516115d681612e13565b600083516132a1818460208801612c9c565b8351908301906132b5818360208801612c9c565b01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020815281602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561332657600080fd5b8260051b80856040850137919091016040019392505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261337e6080830184612cc0565b9695505050505050565b60006020828403121561339a57600080fd5b81516115d681612c51565b601f8211156109da576000816000526020600020601f850160051c810160208610156133ce5750805b601f850160051c820191505b81811015611486578281556001016133da565b815167ffffffffffffffff81111561340757613407612e58565b61341b816134158454613127565b846133a5565b602080601f83116001811461346e57600084156134385750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611486565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156134bb5788860151825594840194600190910190840161349c565b50858210156134f757878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122004a6842e41e4a53a084cdd42540f3d735b277049d5206dbe348cfbafae7066db64736f6c63430008170033",
        "sourceMap": "380:6541:64:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2673:311:2;;;;;;:::i;:::-;;:::i;:::-;;;611:14:71;;604:22;586:41;;574:2;559:18;2673:311:2;;;;;;;;3545:146;;;:::i;:::-;;;;;;;:::i;4791:154::-;;;;;;:::i;:::-;;:::i;:::-;;;1814:42:71;1802:55;;;1784:74;;1772:2;1757:18;4791:154:2;1638:226:71;4617:113:2;;;;;;:::i;:::-;;:::i;:::-;;6153:95:64;;;:::i;5494:578:2:-;;;;;;:::i;:::-;;:::i;1027:45:64:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;537:26;;;;;;;;;6272:179;;;:::i;:::-;;;3054:25:71;;;3042:2;3027:18;6272:179:64;2908:177:71;6138:132:2;;;;;;:::i;:::-;;:::i;3365:118::-;;;;;;:::i;:::-;;:::i;645:29:64:-;;;;;;4364:137;;;;;;:::i;:::-;;:::i;722:27::-;;;;;;;;;3043:265:2;;;;;;:::i;:::-;;:::i;3155:101:0:-;;;:::i;6053:92:64:-;;;:::i;2441:144:0:-;1313:22;2570:8;;;2441:144;;2334:1499:64;;;;;;:::i;:::-;;:::i;3755:150:2:-;;;:::i;5012:144::-;;;;;;:::i;:::-;;:::i;3841:388:64:-;;;;;;:::i;:::-;;:::i;4237:119::-;;;;;;:::i;:::-;;:::i;779:45::-;;;;;;:::i;:::-;;;;;;;;;;;;;;6336:233:2;;;;;;:::i;:::-;;:::i;3971:255::-;;;;;;:::i;:::-;;:::i;4509:1536:64:-;;;;;;:::i;:::-;;:::i;881:45::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1725:597;;;;;;:::i;:::-;;:::i;5222:210:2:-;;;;;;:::i;:::-;5388:27;;;;5310:4;5388:27;;;:20;:27;;;;;;;;:37;;;;;;;;;;;;;;;5222:210;831:43:64;;;;;;:::i;:::-;;;;;;;;;;;;;;3405:215:0;;;;;;:::i;:::-;;:::i;570:30:64:-;;;;;;;;;681:32;;;;;;935:78;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2673:311:2;2786:4;2821:40;;;2836:25;2821:40;;:104;;-1:-1:-1;2877:48:2;;;2892:33;2877:48;2821:104;:156;;;-1:-1:-1;1149:25:4;1134:40;;;;2941:36:2;2802:175;2673:311;-1:-1:-1;;2673:311:2:o;3545:146::-;2076:21;3670:14;;3590:13;;2076:21;;;3670:14;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3545:146;:::o;4791:154::-;4858:7;4877:22;4891:7;4877:13;:22::i;:::-;-1:-1:-1;7442:7:2;7523:26;;;:17;:26;;;;;;;;4917:21;7372:184;4617:113;4688:35;4697:2;4701:7;966:10:3;4688:8:2;:35::i;:::-;4617:113;;:::o;6153:95:64:-;1417:11;;;;966:10:3;1393:36:64;;;1385:87;;;;;;;8845:2:71;1385:87:64;;;8827:21:71;8884:2;8864:18;;;8857:30;8923:34;8903:18;;;8896:62;8994:8;8974:18;;;8967:36;9020:19;;1385:87:64;;;;;;;;;6217:15:::1;:23:::0;;;::::1;::::0;;6153:95::o;5494:578:2:-;5588:16;;;5584:87;;5627:33;;;;;5657:1;5627:33;;;1784:74:71;1757:18;;5627:33:2;1638:226:71;5584:87:2;5889:21;5913:34;5921:2;5925:7;966:10:3;5913:7:2;:34::i;:::-;5889:58;;5978:4;5961:21;;:13;:21;;;5957:109;;6005:50;;;;;9262:42:71;9331:15;;;6005:50:2;;;9313:34:71;9363:18;;;9356:34;;;9426:15;;9406:18;;;9399:43;9225:18;;6005:50:2;9050:398:71;5957:109:2;5574:498;5494:578;;;:::o;6272:179:64:-;6329:7;6373:16;;6356:13;:33;:87;;6419:24;:22;:24::i;:::-;6349:94;;6272:179;:::o;6356:87::-;-1:-1:-1;6392:24:64;;;6272:179::o;6138:132:2:-;6224:39;6241:4;6247:2;6251:7;6224:39;;;;;;;;;;;;:16;:39::i;:::-;6138:132;;;:::o;3365:118::-;3428:7;3454:22;3468:7;3454:13;:22::i;4364:137:64:-;1573:14;;;;966:10:3;1549:39:64;;;1541:94;;;;;;;9655:2:71;1541:94:64;;;9637:21:71;9694:2;9674:18;;;9667:30;9733:34;9713:18;;;9706:62;9804:12;9784:18;;;9777:40;9834:19;;1541:94:64;9453:406:71;1541:94:64;4454:12:::1;:39:::0;;;::::1;;::::0;;;::::1;::::0;;;::::1;::::0;;4364:137::o;3043:265:2:-;3106:7;2076:21;3184:19;;;3180:87;;3226:30;;;;;3253:1;3226:30;;;1784:74:71;1757:18;;3226:30:2;1638:226:71;3180:87:2;3283:18;;;;;;;;:11;;;;:18;;-1:-1:-1;3283:18:2;;;;;3043:265::o;3155:101:0:-;2334:13;:11;:13::i;:::-;3219:30:::1;3246:1;3219:18;:30::i;:::-;3155:101::o:0;6053:92:64:-;1417:11;;;;966:10:3;1393:36:64;;;1385:87;;;;;;;8845:2:71;1385:87:64;;;8827:21:71;8884:2;8864:18;;;8857:30;8923:34;8903:18;;;8896:62;8994:8;8974:18;;;8967:36;9020:19;;1385:87:64;8643:402:71;1385:87:64;6115:15:::1;:22:::0;;;::::1;6133:4;6115:22;::::0;;6053:92::o;2334:1499::-;2423:7;2464:8;2451:10;:21;2443:77;;;;;;;10066:2:71;2443:77:64;;;10048:21:71;10105:2;10085:18;;;10078:30;10144:34;10124:18;;;10117:62;10215:13;10195:18;;;10188:41;10246:19;;2443:77:64;9864:407:71;2443:77:64;2552:15;2539:10;:28;2531:82;;;;;;;10478:2:71;2531:82:64;;;10460:21:71;10517:2;10497:18;;;10490:30;10556:34;10536:18;;;10529:62;10627:11;10607:18;;;10600:39;10656:19;;2531:82:64;10276:405:71;2531:82:64;2632:15;;;;2624:70;;;;;;;10888:2:71;2624:70:64;;;10870:21:71;10927:2;10907:18;;;10900:30;10966:34;10946:18;;;10939:62;11037:12;11017:18;;;11010:40;11067:19;;2624:70:64;10686:406:71;2624:70:64;2721:10;2705:210;2738:8;2733:1;:13;2705:210;;2774:16;;;;:13;:16;;;;;;;;2770:95;;2811:38;;;;;11299:2:71;2811:38:64;;;11281:21:71;11338:2;11318:18;;;11311:30;11377;11357:18;;;11350:58;11425:18;;2811:38:64;11097:352:71;2770:95:64;2898:5;2879:16;;;:13;:16;;;;;:24;;;;;;2748:6;2879:24;2893:1;2748:6;:::i;:::-;;;2705:210;;;-1:-1:-1;2945:14:64;;;;;;2927:15;2970:16;2945:14;2970:16;:::i;:::-;;;;-1:-1:-1;;2999:19:64;;;;:10;:19;;;;;;;;:32;;;3042:8;:17;;;;;;:28;;;3114:14;;;:42;;;;;3145:10;3114:42;;;1784:74:71;;;;3114:14:64;;;;;:30;;1757:18:71;;3114:42:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3083:73;;3169:21;3224:14;;;;;;;;;;;:26;;;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3193;:20;3216:5;3193:28;:::i;:::-;:59;;;;:::i;:::-;3265:14;;;:82;;;;;3299:10;3265:82;;;13066:34:71;;;;3319:4:64;13116:18:71;;;13109:43;13168:18;;;13161:34;;;3169:83:64;;-1:-1:-1;3265:14:64;;;;;:33;;12978:18:71;;3265:82:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3392:10:64;3368:35;;;;:23;:35;;;;;;;;:44;;;;;;;;:67;;;:35;-1:-1:-1;3526:5:64;;-1:-1:-1;3510:13:64;3485:21;3496:10;3485:8;:21;:::i;:::-;3464:17;;:43;;;;:::i;:::-;:59;;;;:::i;:::-;:67;;;;:::i;:::-;3566:12;;3597:14;;;3559:61;;;;;3566:12;3597:14;;;3559:61;;;13513:74:71;;;;13603:18;;;13596:34;;;3448:83:64;;-1:-1:-1;3544:12:64;;3566;;;;3559:29;;13486:18:71;;3559:61:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3544:76;;3636:7;3631:74;;3660:33;;;;;14093:2:71;3660:33:64;;;14075:21:71;14132:2;14112:18;;;14105:30;14171:25;14151:18;;;14144:53;14214:18;;3660:33:64;13891:347:71;3631:74:64;3715:19;3721:3;3726:7;3715:5;:19::i;:::-;3777:10;3772:3;3750:48;;3763:7;3750:48;3789:8;3750:48;;;;3054:25:71;;3042:2;3027:18;;2908:177;3750:48:64;;;;;;;;-1:-1:-1;3818:7:64;;2334:1499;-1:-1:-1;;;;;;;2334:1499:64:o;3755:150:2:-;3889:9;3882:16;;3802:13;;2076:21;;3882:16;;;:::i;5012:144::-;5097:52;966:10:3;5130:8:2;5140;5097:18;:52::i;3841:388:64:-;3915:18;;;;:8;:18;;;;;;3936:15;-1:-1:-1;3907:82:64;;;;;;;14445:2:71;3907:82:64;;;14427:21:71;14484:2;14464:18;;;14457:30;14523:34;14503:18;;;14496:62;14594:3;14574:18;;;14567:31;14615:19;;3907:82:64;14243:397:71;3907:82:64;966:10:3;4002:14:64;4019:37;;;:23;:37;;;;;;;;:47;;;;;;;;;;;4079:51;;;;4141:14;;;:70;;;;;4183:4;4141:70;;;13066:34:71;;;;13116:18;;;13109:43;;;;13168:18;;;13161:34;;;4141:70:64;;4019:47;;:37;4141:14;;:33;;12978:18:71;;;;;4141:70:64;;;;;;4002:14;4141;:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3896:333;3841:388;:::o;4237:119::-;1573:14;;;;966:10:3;1549:39:64;;;1541:94;;;;;;;9655:2:71;1541:94:64;;;9637:21:71;9694:2;9674:18;;;9667:30;9733:34;9713:18;;;9706:62;9804:12;9784:18;;;9777:40;9834:19;;1541:94:64;9453:406:71;1541:94:64;4319:17:::1;:29:::0;4237:119::o;6336:233:2:-;6449:31;6462:4;6468:2;6472:7;6449:12;:31::i;:::-;6490:72;966:10:3;6538:4:2;6544:2;6548:7;6557:4;6490:33;:72::i;3971:255::-;4035:13;4060:22;4074:7;4060:13;:22::i;:::-;;4093:21;4117:10;4544:9;;;;;;;;;-1:-1:-1;4544:9:2;;;4468:92;4117:10;4093:34;;4168:1;4150:7;4144:21;:25;:75;;;;;;;;;;;;;;;;;4186:7;4195:18;:7;:16;:18::i;:::-;4172:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;4144:75;4137:82;3971:255;-1:-1:-1;;;3971:255:2:o;4509:1536:64:-;966:10:3;4613:17:64;4621:8;4613:7;:17::i;:::-;:33;;;4605:92;;;;;;;15348:2:71;4605:92:64;;;15330:21:71;15387:2;15367:18;;;15360:30;15426:34;15406:18;;;15399:62;15497:16;15477:18;;;15470:44;15531:19;;4605:92:64;15146:410:71;4605:92:64;4716:20;;;;:10;:20;;;;;;4739:15;-1:-1:-1;4708:86:64;;;;;;;15763:2:71;4708:86:64;;;15745:21:71;15802:2;15782:18;;;15775:30;15841:34;15821:18;;;15814:62;15912:5;15892:18;;;15885:33;15935:19;;4708:86:64;15561:399:71;4708:86:64;4813:29;4805:81;;;;;;;16167:2:71;4805:81:64;;;16149:21:71;16206:2;16186:18;;;16179:30;16245:34;16225:18;;;16218:62;16316:9;16296:18;;;16289:37;16343:19;;4805:81:64;15965:403:71;4805:81:64;4906:23;;;;:13;:23;;;;;;;;4905:24;4897:72;;;;;;;15763:2:71;4897:72:64;;;15745:21:71;15802:2;15782:18;;;15775:30;15841:34;15821:18;;;15814:62;15912:5;15892:18;;;15885:33;15935:19;;4897:72:64;15561:399:71;4897:72:64;4982:15;4988:8;4982:5;:15::i;:::-;5014:9;5026:20;;;:10;:20;;;;;;5010:119;5052:18;;;;:8;:18;;;;;;5048:22;;5010:119;;;5094:16;;;;:13;:16;;;;;:23;;;;5113:4;5094:23;;;;;;5072:6;;5108:1;5072:6;:::i;:::-;;;5010:119;;;-1:-1:-1;5141:20:64;5164;;;:10;:20;;;;;;;5195:438;5214:29;;;5195:438;;;5296:12;5272:18;;5291:1;5272:21;;;;;;;:::i;:::-;;;;;;;:36;5264:103;;;;;;;16764:2:71;5264:103:64;;;16746:21:71;16803:2;16783:18;;;16776:30;16842:34;16822:18;;;16815:62;16913:24;16893:18;;;16886:52;16955:19;;5264:103:64;16562:418:71;5264:103:64;5414:18;;;;:8;:18;;;;;;5390;;5409:1;5390:21;;;;;;;:::i;:::-;;;;;;;:42;5382:110;;;;;;;17187:2:71;5382:110:64;;;17169:21:71;17226:2;17206:18;;;17199:30;17265:34;17245:18;;;17238:62;17336:25;17316:18;;;17309:53;17379:19;;5382:110:64;16985:419:71;5382:110:64;5507:63;966:10:3;5534:12:64;5548:18;;5567:1;5548:21;;;;;;;:::i;:::-;;;;;;;5507:12;:63::i;:::-;;5600:18;;5619:1;5600:21;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;5245:3:64;;5195:438;;;-1:-1:-1;966:10:3;5643:20:64;5666:37;;;:23;:37;;;;;;;;:47;;;;;;;;;;5724:51;;;;5851:8;:18;;;;;;5666:47;;5810:60;;5837:12;;5810;:60::i;:::-;966:10:3;5881:37:64;;;;:23;:37;;;;;;;;:50;;;;;;;;;;:65;;;5972:55;5788:82;;-1:-1:-1;966:10:3;5984:8:64;;5972:55;;;;6008:18;;;;5972:55;:::i;:::-;;;;;;;;4594:1451;;;4509:1536;;;:::o;1725:597::-;8870:21:1;4302:15;;;;;;;4301:16;;4348:14;;4158:30;4726:16;;:34;;;;;4746:14;4726:34;4706:54;;4770:17;4790:11;:16;;4805:1;4790:16;:50;;;;-1:-1:-1;4818:4:1;4810:25;:30;4790:50;4770:70;;4856:12;4855:13;:30;;;;;4873:12;4872:13;4855:30;4851:91;;;4908:23;;;;;;;;;;;;;;4851:91;4951:18;;;;4968:1;4951:18;;;4979:67;;;;5013:22;;;;;;;;4979:67;1941:12:64::1;:36:::0;;::::1;::::0;;::::1;::::0;;;::::1;;::::0;;;1988:11:::1;:45:::0;;;;::::1;::::0;;::::1;;::::0;;2044:17:::1;:38:::0;;;2093:14:::1;:57:::0;;;;::::1;::::0;;;::::1;::::0;;;::::1;::::0;;2171:28:::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;::::1;::::0;2185:5;;;;;;2171:28;::::1;2185:5:::0;;;;2171:28;::::1;;;;;;;;;;;;;;;;;;;;;;;;;2191:7;;2171:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;2171:13:64::1;::::0;-1:-1:-1;;;2171:28:64:i:1;:::-;2239:13;2220:16;:32:::0;2290:24:::1;:22;:24::i;:::-;2263;:51:::0;5066:101:1;;;;5100:23;;;;;;5142:14;;-1:-1:-1;18057:50:71;;5142:14:1;;18045:2:71;18030:18;5142:14:1;;;;;;;5066:101;4092:1081;;;;;1725:597:64;;;;;;;;:::o;3405:215:0:-;2334:13;:11;:13::i;:::-;3489:22:::1;::::0;::::1;3485:91;;3534:31;::::0;::::1;::::0;;3562:1:::1;3534:31;::::0;::::1;1784:74:71::0;1757:18;;3534:31:0::1;1638:226:71::0;3485:91:0::1;3585:28;3604:8;3585:18;:28::i;:::-;3405:215:::0;:::o;17912:241:2:-;17975:7;7231:18;;;:9;:18;;;;;;;;;18037:88;;18083:31;;;;;;;;3054:25:71;;;3027:18;;18083:31:2;2908:177:71;16078:120:2;16158:33;16167:2;16171:7;16180:4;16186;16158:8;:33::i;10386:856::-;10472:7;7231:18;;;:9;:18;;;;;;2076:21;;7231:18;;;;;10638;;;10634:86;;10672:37;10689:4;10695;10701:7;10672:16;:37::i;:::-;10764:18;;;;10760:258;;10880:48;10897:1;10901:7;10918:1;10922:5;10880:8;:48::i;:::-;10971:17;;;;;;;:11;;;:17;;;;;:22;;;;;;10760:258;11032:16;;;;11028:109;;11092:15;;;;;;;:11;;;:15;;;;;:20;;11111:1;11092:20;;;11028:109;11147:18;;;;:9;;;:18;;;;;;:23;;;;;;;;;;;;;;11186:27;;11147:18;;11186:27;;;;;;;11231:4;10386:856;-1:-1:-1;;;;;10386:856:2:o;6459:459:64:-;6524:7;6625:95;6759:6;:4;:6::i;:::-;6743:24;;;;;;;6592:303;;;;;;18377:25:71;;;;18418:18;;;18411:34;;;;6790:14:64;18461:18:71;;;18454:34;6827:13:64;18504:18:71;;;18497:34;6871:4:64;18547:19:71;;;18540:84;18349:19;;6592:303:64;;;;;;;;;;;;6564:346;;;;;;6544:366;;6459:459;:::o;2658:162:0:-;966:10:3;2717:7:0;1313:22;2570:8;;;;2441:144;2717:7;:23;;;2713:101;;2763:40;;;;;966:10:3;2763:40:0;;;1784:74:71;1757:18;;2763:40:0;1638:226:71;3774:248:0;1313:22;3923:8;;3941:19;;;3923:8;3941:19;;;;;;;;3975:40;;3923:8;;;;;3975:40;;3847:24;;3975:40;3837:185;;3774:248;:::o;11564:327:2:-;11631:16;;;11627:87;;11670:33;;;;;11700:1;11670:33;;;1784:74:71;1757:18;;11670:33:2;1638:226:71;11627:87:2;11723:21;11747:32;11755:2;11759:7;11776:1;11747:7;:32::i;:::-;11723:56;-1:-1:-1;11793:27:2;;;;11789:96;;11843:31;;;;;11871:1;11843:31;;;1784:74:71;1757:18;;11843:31:2;1638:226:71;17308:369:2;2076:21;17470:22;;;17466:91;;17515:31;;;;;1814:42:71;1802:55;;17515:31:2;;;1784:74:71;1757:18;;17515:31:2;1638:226:71;17466:91:2;17566:27;;;;;;;;:20;;;:27;;;;;;;;:37;;;;;;;;;;;;;:48;;;;;;;;;;;;;17629:41;;586::71;;;17629::2;;559:18:71;17629:41:2;;;;;;;17401:276;17308:369;;;:::o;873:963:22:-;1053:14;;;;:18;1049:781;;1091:67;;;;;:36;;;;;;:67;;1128:8;;1138:4;;1144:7;;1153:4;;1091:67;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1091:67:22;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1087:733;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1448:6;:13;1465:1;1448:18;1444:362;;1552:39;;;;;1814:42:71;1802:55;;1552:39:22;;;1784:74:71;1757:18;;1552:39:22;1638:226:71;1444:362:22;1758:6;1752:13;1743:6;1739:2;1735:15;1728:38;1087:733;1205:51;;;1215:41;1205:51;1201:182;;1325:39;;;;;1814:42:71;1802:55;;1325:39:22;;;1784:74:71;1757:18;;1325:39:22;1638:226:71;1087:733:22;873:963;;;;;:::o;637:698:28:-;693:13;742:14;759:17;770:5;759:10;:17::i;:::-;779:1;759:21;742:38;;794:20;828:6;817:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;817:18:28;-1:-1:-1;794:41:28;-1:-1:-1;955:28:28;;;971:2;955:28;1010:282;1041:5;;1180:10;1175:2;1164:14;;1159:32;1041:5;1146:46;1236:2;1227:11;;;-1:-1:-1;1256:21:28;1010:282;1256:21;-1:-1:-1;1312:6:28;637:698;-1:-1:-1;;;637:698:28:o;13096:227:2:-;13147:21;13171:40;13187:1;13191:7;13208:1;13171:7;:40::i;:::-;13147:64;-1:-1:-1;13225:27:2;;;13221:96;;13275:31;;;;;;;;3054:25:71;;;3027:18;;13275:31:2;2908:177:71;2232:149:2;6931:20:1;:18;:20::i;:::-;2335:39:2::1;2359:5;2366:7;2335:23;:39::i;16380:719::-:0;2076:21;16595:9;;:31;;-1:-1:-1;16608:18:2;;;;;16595:31;16591:460;;;16642:13;16658:22;16672:7;16658:13;:22::i;:::-;16642:38;-1:-1:-1;16808:18:2;;;;;;;:35;;;16839:4;16830:13;;:5;:13;;;;16808:35;:69;;;;-1:-1:-1;5388:27:2;;;;5310:4;5388:27;;;:20;:27;;;;;;;;:37;;;;;;;;;;;;16847:30;16808:69;16804:142;;;16904:27;;;;;1814:42:71;1802:55;;16904:27:2;;;1784:74:71;1757:18;;16904:27:2;1638:226:71;16804:142:2;16964:9;16960:81;;;17018:7;17014:2;16998:28;;17007:5;16998:28;;;;;;;;;;;;16960:81;16628:423;16591:460;17061:26;;;;:17;;:26;;-1:-1:-1;;17061:26:2;;;:31;;;;;;;;;;;;;;;16380:719::o;8573:368::-;8685:38;8699:5;8706:7;8715;8685:13;:38::i;:::-;8680:255;;8743:19;;;8739:186;;8789:31;;;;;;;;3054:25:71;;;3027:18;;8789:31:2;2908:177:71;8739:186:2;8866:44;;;;;13543:42:71;13531:55;;8866:44:2;;;13513:74:71;13603:18;;;13596:34;;;13486:18;;8866:44:2;13339:297:71;23958:916:33;24011:7;;24095:8;24086:17;;24082:103;;24132:8;24123:17;;;-1:-1:-1;24168:2:33;24158:12;24082:103;24211:8;24202:5;:17;24198:103;;24248:8;24239:17;;;-1:-1:-1;24284:2:33;24274:12;24198:103;24327:8;24318:5;:17;24314:103;;24364:8;24355:17;;;-1:-1:-1;24400:2:33;24390:12;24314:103;24443:7;24434:5;:16;24430:100;;24479:7;24470:16;;;-1:-1:-1;24514:1:33;24504:11;24430:100;24556:7;24547:5;:16;24543:100;;24592:7;24583:16;;;-1:-1:-1;24627:1:33;24617:11;24543:100;24669:7;24660:5;:16;24656:100;;24705:7;24696:16;;;-1:-1:-1;24740:1:33;24730:11;24656:100;24782:7;24773:5;:16;24769:66;;24819:1;24809:11;24861:6;23958:916;-1:-1:-1;;23958:916:33:o;7084:141:1:-;8870:21;8560:40;;;;;;7146:73;;7191:17;;;;;;;;;;;;;;2387:219:2;6931:20:1;:18;:20::i;:::-;2076:21:2;;2555:15:::1;2565:5:::0;2076:21;2555:15:::1;:::i;:::-;-1:-1:-1::0;2580:9:2::1;::::0;::::1;:19;2592:7:::0;2580:9;:19:::1;:::i;7867:272::-:0;7970:4;8005:21;;;;;;;:127;;;8052:7;8043:16;;:5;:16;;;:52;;;-1:-1:-1;5388:27:2;;;;5310:4;5388:27;;;:20;:27;;;;;;;;:37;;;;;;;;;;;;8063:32;8043:88;;;-1:-1:-1;7442:7:2;7523:26;;;:17;:26;;;;;;8099:32;;;;7523:26;;8099:32;8043:88;7986:146;7867:272;-1:-1:-1;;;;7867:272:2:o;14:177:71:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;638:250::-;723:1;733:113;747:6;744:1;741:13;733:113;;;823:11;;;817:18;804:11;;;797:39;769:2;762:10;733:113;;;-1:-1:-1;;880:1:71;862:16;;855:27;638:250::o;893:330::-;935:3;973:5;967:12;1000:6;995:3;988:19;1016:76;1085:6;1078:4;1073:3;1069:14;1062:4;1055:5;1051:16;1016:76;:::i;:::-;1137:2;1125:15;1142:66;1121:88;1112:98;;;;1212:4;1108:109;;893:330;-1:-1:-1;;893:330:71:o;1228:220::-;1377:2;1366:9;1359:21;1340:4;1397:45;1438:2;1427:9;1423:18;1415:6;1397:45;:::i;1453:180::-;1512:6;1565:2;1553:9;1544:7;1540:23;1536:32;1533:52;;;1581:1;1578;1571:12;1533:52;-1:-1:-1;1604:23:71;;1453:180;-1:-1:-1;1453:180:71:o;1869:196::-;1937:20;;1997:42;1986:54;;1976:65;;1966:93;;2055:1;2052;2045:12;1966:93;1869:196;;;:::o;2070:254::-;2138:6;2146;2199:2;2187:9;2178:7;2174:23;2170:32;2167:52;;;2215:1;2212;2205:12;2167:52;2238:29;2257:9;2238:29;:::i;:::-;2228:39;2314:2;2299:18;;;;2286:32;;-1:-1:-1;;;2070:254:71:o;2329:328::-;2406:6;2414;2422;2475:2;2463:9;2454:7;2450:23;2446:32;2443:52;;;2491:1;2488;2481:12;2443:52;2514:29;2533:9;2514:29;:::i;:::-;2504:39;;2562:38;2596:2;2585:9;2581:18;2562:38;:::i;:::-;2552:48;;2647:2;2636:9;2632:18;2619:32;2609:42;;2329:328;;;;;:::o;3272:186::-;3331:6;3384:2;3372:9;3363:7;3359:23;3355:32;3352:52;;;3400:1;3397;3390:12;3352:52;3423:29;3442:9;3423:29;:::i;3463:322::-;3540:6;3548;3556;3609:2;3597:9;3588:7;3584:23;3580:32;3577:52;;;3625:1;3622;3615:12;3577:52;3648:29;3667:9;3648:29;:::i;:::-;3638:39;3724:2;3709:18;;3696:32;;-1:-1:-1;3775:2:71;3760:18;;;3747:32;;3463:322;-1:-1:-1;;;3463:322:71:o;3790:118::-;3876:5;3869:13;3862:21;3855:5;3852:32;3842:60;;3898:1;3895;3888:12;3913:315;3978:6;3986;4039:2;4027:9;4018:7;4014:23;4010:32;4007:52;;;4055:1;4052;4045:12;4007:52;4078:29;4097:9;4078:29;:::i;:::-;4068:39;;4157:2;4146:9;4142:18;4129:32;4170:28;4192:5;4170:28;:::i;:::-;4217:5;4207:15;;;3913:315;;;;;:::o;4233:184::-;4285:77;4282:1;4275:88;4382:4;4379:1;4372:15;4406:4;4403:1;4396:15;4422:1197;4517:6;4525;4533;4541;4594:3;4582:9;4573:7;4569:23;4565:33;4562:53;;;4611:1;4608;4601:12;4562:53;4634:29;4653:9;4634:29;:::i;:::-;4624:39;;4682:38;4716:2;4705:9;4701:18;4682:38;:::i;:::-;4672:48;;4767:2;4756:9;4752:18;4739:32;4729:42;;4822:2;4811:9;4807:18;4794:32;4845:18;4886:2;4878:6;4875:14;4872:34;;;4902:1;4899;4892:12;4872:34;4940:6;4929:9;4925:22;4915:32;;4985:7;4978:4;4974:2;4970:13;4966:27;4956:55;;5007:1;5004;4997:12;4956:55;5043:2;5030:16;5065:2;5061;5058:10;5055:36;;;5071:18;;:::i;:::-;5205:2;5199:9;5267:4;5259:13;;5110:66;5255:22;;;5279:2;5251:31;5247:40;5235:53;;;5303:18;;;5323:22;;;5300:46;5297:72;;;5349:18;;:::i;:::-;5389:10;5385:2;5378:22;5424:2;5416:6;5409:18;5464:7;5459:2;5454;5450;5446:11;5442:20;5439:33;5436:53;;;5485:1;5482;5475:12;5436:53;5541:2;5536;5532;5528:11;5523:2;5515:6;5511:15;5498:46;5586:1;5581:2;5576;5568:6;5564:15;5560:24;5553:35;5607:6;5597:16;;;;;;;4422:1197;;;;;;;:::o;5624:683::-;5719:6;5727;5735;5788:2;5776:9;5767:7;5763:23;5759:32;5756:52;;;5804:1;5801;5794:12;5756:52;5840:9;5827:23;5817:33;;5901:2;5890:9;5886:18;5873:32;5924:18;5965:2;5957:6;5954:14;5951:34;;;5981:1;5978;5971:12;5951:34;6019:6;6008:9;6004:22;5994:32;;6064:7;6057:4;6053:2;6049:13;6045:27;6035:55;;6086:1;6083;6076:12;6035:55;6126:2;6113:16;6152:2;6144:6;6141:14;6138:34;;;6168:1;6165;6158:12;6138:34;6221:7;6216:2;6206:6;6203:1;6199:14;6195:2;6191:23;6187:32;6184:45;6181:65;;;6242:1;6239;6232:12;6181:65;6273:2;6269;6265:11;6255:21;;6295:6;6285:16;;;;;5624:683;;;;;:::o;6312:348::-;6364:8;6374:6;6428:3;6421:4;6413:6;6409:17;6405:27;6395:55;;6446:1;6443;6436:12;6395:55;-1:-1:-1;6469:20:71;;6512:18;6501:30;;6498:50;;;6544:1;6541;6534:12;6498:50;6581:4;6573:6;6569:17;6557:29;;6633:3;6626:4;6617:6;6609;6605:19;6601:30;6598:39;6595:59;;;6650:1;6647;6640:12;6595:59;6312:348;;;;;:::o;6665:1014::-;6793:6;6801;6809;6817;6825;6833;6841;6849;6902:3;6890:9;6881:7;6877:23;6873:33;6870:53;;;6919:1;6916;6909:12;6870:53;6959:9;6946:23;6988:18;7029:2;7021:6;7018:14;7015:34;;;7045:1;7042;7035:12;7015:34;7084:59;7135:7;7126:6;7115:9;7111:22;7084:59;:::i;:::-;7162:8;;-1:-1:-1;7058:85:71;-1:-1:-1;7250:2:71;7235:18;;7222:32;;-1:-1:-1;7266:16:71;;;7263:36;;;7295:1;7292;7285:12;7263:36;;7334:61;7387:7;7376:8;7365:9;7361:24;7334:61;:::i;:::-;7414:8;;-1:-1:-1;7308:87:71;-1:-1:-1;7468:38:71;;-1:-1:-1;7502:2:71;7487:18;;7468:38;:::i;:::-;7458:48;;7525:38;7559:2;7548:9;7544:18;7525:38;:::i;:::-;7515:48;;7610:3;7599:9;7595:19;7582:33;7572:43;;7634:39;7668:3;7657:9;7653:19;7634:39;:::i;:::-;7624:49;;6665:1014;;;;;;;;;;;:::o;7684:260::-;7752:6;7760;7813:2;7801:9;7792:7;7788:23;7784:32;7781:52;;;7829:1;7826;7819:12;7781:52;7852:29;7871:9;7852:29;:::i;:::-;7842:39;;7900:38;7934:2;7923:9;7919:18;7900:38;:::i;:::-;7890:48;;7684:260;;;;;:::o;8201:437::-;8280:1;8276:12;;;;8323;;;8344:61;;8398:4;8390:6;8386:17;8376:27;;8344:61;8451:2;8443:6;8440:14;8420:18;8417:38;8414:218;;8488:77;8485:1;8478:88;8589:4;8586:1;8579:15;8617:4;8614:1;8607:15;8414:218;;8201:437;;;:::o;11454:184::-;11506:77;11503:1;11496:88;11603:4;11600:1;11593:15;11627:4;11624:1;11617:15;11643:125;11708:9;;;11729:10;;;11726:36;;;11742:18;;:::i;11773:195::-;11812:3;11843:66;11836:5;11833:77;11830:103;;11913:18;;:::i;:::-;-1:-1:-1;11960:1:71;11949:13;;11773:195::o;11973:184::-;12043:6;12096:2;12084:9;12075:7;12071:23;12067:32;12064:52;;;12112:1;12109;12102:12;12064:52;-1:-1:-1;12135:16:71;;11973:184;-1:-1:-1;11973:184:71:o;12162:168::-;12235:9;;;12266;;12283:15;;;12277:22;;12263:37;12253:71;;12304:18;;:::i;12524:274::-;12564:1;12590;12580:189;;12625:77;12622:1;12615:88;12726:4;12723:1;12716:15;12754:4;12751:1;12744:15;12580:189;-1:-1:-1;12783:9:71;;12524:274::o;13206:128::-;13273:9;;;13294:11;;;13291:37;;;13308:18;;:::i;13641:245::-;13708:6;13761:2;13749:9;13740:7;13736:23;13732:32;13729:52;;;13777:1;13774;13767:12;13729:52;13809:9;13803:16;13828:28;13850:5;13828:28;:::i;14645:496::-;14824:3;14862:6;14856:13;14878:66;14937:6;14932:3;14925:4;14917:6;14913:17;14878:66;:::i;:::-;15007:13;;14966:16;;;;15029:70;15007:13;14966:16;15076:4;15064:17;;15029:70;:::i;:::-;15115:20;;14645:496;-1:-1:-1;;;;14645:496:71:o;16373:184::-;16425:77;16422:1;16415:88;16522:4;16519:1;16512:15;16546:4;16543:1;16536:15;17409:490;17598:2;17587:9;17580:21;17637:6;17632:2;17621:9;17617:18;17610:34;17561:4;17667:66;17659:6;17656:78;17653:98;;;17747:1;17744;17737:12;17653:98;17781:6;17778:1;17774:14;17838:6;17830;17825:2;17814:9;17810:18;17797:48;17866:22;;;;17890:2;17862:31;;17409:490;-1:-1:-1;;;17409:490:71:o;18635:512::-;18829:4;18858:42;18939:2;18931:6;18927:15;18916:9;18909:34;18991:2;18983:6;18979:15;18974:2;18963:9;18959:18;18952:43;;19031:6;19026:2;19015:9;19011:18;19004:34;19074:3;19069:2;19058:9;19054:18;19047:31;19095:46;19136:3;19125:9;19121:19;19113:6;19095:46;:::i;:::-;19087:54;18635:512;-1:-1:-1;;;;;;18635:512:71:o;19152:249::-;19221:6;19274:2;19262:9;19253:7;19249:23;19245:32;19242:52;;;19290:1;19287;19280:12;19242:52;19322:9;19316:16;19341:30;19365:5;19341:30;:::i;19532:543::-;19634:2;19629:3;19626:11;19623:446;;;19670:1;19694:5;19691:1;19684:16;19738:4;19735:1;19725:18;19808:2;19796:10;19792:19;19789:1;19785:27;19779:4;19775:38;19844:4;19832:10;19829:20;19826:47;;;-1:-1:-1;19867:4:71;19826:47;19922:2;19917:3;19913:12;19910:1;19906:20;19900:4;19896:31;19886:41;;19977:82;19995:2;19988:5;19985:13;19977:82;;;20040:17;;;20021:1;20010:13;19977:82;;20311:1464;20437:3;20431:10;20464:18;20456:6;20453:30;20450:56;;;20486:18;;:::i;:::-;20515:97;20605:6;20565:38;20597:4;20591:11;20565:38;:::i;:::-;20559:4;20515:97;:::i;:::-;20667:4;;20724:2;20713:14;;20741:1;20736:782;;;;21562:1;21579:6;21576:89;;;-1:-1:-1;21631:19:71;;;21625:26;21576:89;20217:66;20208:1;20204:11;;;20200:84;20196:89;20186:100;20292:1;20288:11;;;20183:117;21678:81;;20706:1063;;20736:782;19479:1;19472:14;;;19516:4;19503:18;;20784:66;20772:79;;;20949:236;20963:7;20960:1;20957:14;20949:236;;;21052:19;;;21046:26;21031:42;;21144:27;;;;21112:1;21100:14;;;;20979:19;;20949:236;;;20953:3;21213:6;21204:7;21201:19;21198:261;;;21274:19;;;21268:26;21375:66;21357:1;21353:14;;;21369:3;21349:24;21345:97;21341:102;21326:118;21311:134;;21198:261;-1:-1:-1;;;;;21505:1:71;21489:14;;;21485:22;21472:36;;-1:-1:-1;20311:1464:71:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "DOMAIN_SEPARATOR()": "3644e515",
        "amountsLockedForRentals(address,uint256)": "f82b7777",
        "approve(address,uint256)": "095ea7b3",
        "availableDays(uint256)": "26b39476",
        "availableToRent()": "6a631c52",
        "balanceOf(address)": "70a08231",
        "blockEstate()": "f7e3e312",
        "endDates(uint256)": "f077dcf1",
        "getApproved(uint256)": "081812fc",
        "initialize(string,string,address,address,uint256,address)": "db0e4544",
        "isApprovedForAll(address,address)": "e985e9c5",
        "name()": "06fdde03",
        "owner()": "8da5cb5b",
        "ownerOf(uint256)": "6352211e",
        "paymentToken()": "3013ce29",
        "renounceOwnership()": "715018a6",
        "rentProperty(address,uint256,uint256)": "8f697cd6",
        "rentalPriceperDay()": "f7fb8763",
        "rentalStarted(uint256)": "cfda6d83",
        "rentalsCounter()": "688e6123",
        "retrieveAmountLocked(uint256)": "a3bbf53b",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setAvailableToRent()": "863a4689",
        "setPaymentToken(address)": "6a326ab1",
        "setPricePerDay(uint256)": "a9e22da4",
        "setUnavailableToRent()": "0b91edc5",
        "splitRental(uint256,uint256[])": "ceef12b6",
        "startDates(uint256)": "b266c661",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.23+commit.f704f362\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_startDate\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_endDate\",\"type\":\"uint256\"}],\"name\":\"RentalMinted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_intermediaryDates\",\"type\":\"uint256[]\"}],\"name\":\"RentalSplit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"amountsLockedForRentals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"availableDays\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"availableToRent\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"blockEstate\",\"outputs\":[{\"internalType\":\"contract BlockEstate\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"endDates\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_paymentToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"blockEstateAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_rentalPriceperDay\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_projectAccount\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paymentToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_startDate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_endDate\",\"type\":\"uint256\"}],\"name\":\"rentProperty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rentalPriceperDay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"rentalStarted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rentalsCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"retrieveAmountLocked\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setAvailableToRent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newPaymentToken\",\"type\":\"address\"}],\"name\":\"setPaymentToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newPrice\",\"type\":\"uint256\"}],\"name\":\"setPricePerDay\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setUnavailableToRent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"_intermediaryDates\",\"type\":\"uint256[]\"}],\"name\":\"splitRental\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"startDates\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Rentals.sol\":\"Rentals\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":@upgradeable/safeAccount/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5\",\"dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded\",\"dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40\",\"dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a\",\"dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC721Receiver.sol\":{\"keccak256\":\"0x12808acc0c2cbc0b9068755711fd79483b4f002e850d25e0e72e735765b6cd99\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8fd1ab9e3091d4c4fc4b34c25b54df5c092c849c8c09d722a34186bd051b0890\",\"dweb:/ipfs/QmUqykAZfKRHEkYVRmXKsFqvLwyUFPrukdWdAmXDkixJAL\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a\",\"dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88\",\"dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7\",\"dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827\",\"dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66\",\"dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0x01c061c84b49b81408a3baa6897e3fb9a2a70ff4356216c3398cbdb9d628ede9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://281503c4e1df1caf50a45ff4852f46da7e40881ebd07856548a90f13bf2dc53a\",\"dweb:/ipfs/QmW5VobCbTcvSXPE2nKKzUnhV6rofkvpc3acZ8rntMnMmW\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3\",\"dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7\",\"dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087\",\"dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x4e2a8ed224c9c4fe41add93de8fa53ef3f2f5ee7a9c613e667796602ceb87e12\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a8516f3683103d13108094b41604e64f50f0cceaabbddbf2221f5959cf869ab\",\"dweb:/ipfs/QmT2ophcTsuvDkv1EPyjuNG3B7NVPA5NtQqco2XWtWQHMe\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9\",\"dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e\",\"dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xc3a38f6236b9f11703164f1c52a5d423f02f01ee689d58d5a35d1a48ad5b9d88\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ee652cbb0266d2336107760205ea72fecf6f8127e32361d1a209016e0f8271d\",\"dweb:/ipfs/QmefTVVswMMF6r372icwDF6DqNfzkEX5mzgSpbxdpgaUKj\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047\",\"dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512\",\"dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ\"]},\"src/BlockEstate.sol\":{\"keccak256\":\"0x72fbbd8ac47b49922782950b08c1e108b8c9954edaa16204965e715f0c5e2d76\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5f9d55b1c7bcbba9eea5b124be6187faa5cc2550eeb81c40b8fd3ed829739793\",\"dweb:/ipfs/QmaUD3LKnAwPLkpBLhJpGnBubtPQSVtxwkhsYwooeX4v3f\"]},\"src/ProjectAccount.sol\":{\"keccak256\":\"0x59c2980184d78453ffeec735532d9c3ed913117a1c4fd0f5fdea48bcc17a7b02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b668bc18c118e82e06a1c7736a8fd0c0bbd29bbf2ad4355db294019d0b1e092f\",\"dweb:/ipfs/QmWK7gN8drk1Y2N7W9kGAjgGGpr6Cn5Wzr1juFdazVmpG9\"]},\"src/Rentals.sol\":{\"keccak256\":\"0x685d62e39a2569e58bfe07329b4e53d678ed9cc2d603026ac797e25947d2a08b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4662d72d2f196af6b8a8408061db56aa55cccbefcf018cbfd5803db8cf778c18\",\"dweb:/ipfs/QmRKaxG5RchHErwZbRjepknYQacC8qSjp7W1vYE6fyJ75u\"]},\"src/interface/IERC404.sol\":{\"keccak256\":\"0x77215588c5b2f9e8fbe7a8ed5c728589d214eedc5d9785cbf0fe89b88b19681d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ac604c75f36462032b35b87bb42c2ea90ad7ba56a8f20beface9fe3f83cbd8d\",\"dweb:/ipfs/QmZEUtvQq3P7RfCt2jhG6outMPZuLgA5LEpccuhjwgBv8C\"]},\"src/interface/IERC6551Account.sol\":{\"keccak256\":\"0x6ff8242276aa7dbd7dac0c9c0ff6324426fbafdf0139896587d56c45dc9b335d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://13d5bfdf03ead70f29b342dc631624f069594175864a6172c9e2b9f31d5682ac\",\"dweb:/ipfs/QmWwRVtkuCrWXQUurDUw1YvfRyv78nY1WuP4ov9oUFKJ6b\"]},\"src/interface/IERC6551Registry.sol\":{\"keccak256\":\"0x3a2b57b812a92ce80784bde6bfe7c21f7d73065b085f19e2a01a1ba1cb2b6f18\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://365ec9c2acc5cfa221e64b3f487be1354c85090f73e37847f4a0d0e685e4ba03\",\"dweb:/ipfs/QmTbNShxigfXKjQsqknHfpJuxFi7xNcQnG7zVuipQL1chL\"]},\"src/lib/DoubleEndedQueue.sol\":{\"keccak256\":\"0x40f29de66fbe8993183aeaed1aeb74167b7d34e1aacd1227a991b88fcd166f9b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://943610141992bb8d1b844bcf20cbc95b50ecf609bf19cd9e1d413bec78a9166e\",\"dweb:/ipfs/QmSkER4qaymDLs9ndor4NZ2UAfT3JDyTJWBprhz2nEEDJG\"]},\"src/lib/ERC404.sol\":{\"keccak256\":\"0xdce261679e2ce52d4c10a7b946028e86999358d52fa0e3f552b04440eddcdc8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4b5bba5963e22a91ea648f5e0186b6310c4a6bd2ce5491fb58ccaf6b97569b43\",\"dweb:/ipfs/QmWnwTFc8WLPqVE3XYPhYaHuUY8ynFVvJjrLPZj7Bpg8Rj\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.23+commit.f704f362"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721IncorrectOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InsufficientApproval"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "approver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidApprover"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidOperator"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidReceiver"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidSender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721NonexistentToken"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidInitialization"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NotInitializing"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "OwnableInvalidOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "OwnableUnauthorizedAccount"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "approved",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint64",
                            "name": "version",
                            "type": "uint64",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialized",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "OwnershipTransferred",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "_account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "_startDate",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "_endDate",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RentalMinted",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "_account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "_intermediaryDates",
                            "type": "uint256[]",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RentalSplit",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "amountsLockedForRentals",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "availableDays",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "availableToRent",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "blockEstate",
                    "outputs": [
                        {
                            "internalType": "contract BlockEstate",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "endDates",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getApproved",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_symbol",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "_paymentToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "blockEstateAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_rentalPriceperDay",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_projectAccount",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "initialize"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isApprovedForAll",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "paymentToken",
                    "outputs": [
                        {
                            "internalType": "contract IERC20",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "renounceOwnership"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_startDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_endDate",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "rentProperty",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "rentalPriceperDay",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "rentalStarted",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "rentalsCounter",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "retrieveAmountLocked"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "safeTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "safeTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setAvailableToRent"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_newPaymentToken",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPaymentToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_newPrice",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPricePerDay"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setUnavailableToRent"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "_intermediaryDates",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "splitRental"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "startDates",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "interfaceId",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "supportsInterface",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "tokenURI",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferOwnership"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "approve(address,uint256)": {
                        "details": "See {IERC721-approve}."
                    },
                    "balanceOf(address)": {
                        "details": "See {IERC721-balanceOf}."
                    },
                    "getApproved(uint256)": {
                        "details": "See {IERC721-getApproved}."
                    },
                    "isApprovedForAll(address,address)": {
                        "details": "See {IERC721-isApprovedForAll}."
                    },
                    "name()": {
                        "details": "See {IERC721Metadata-name}."
                    },
                    "owner()": {
                        "details": "Returns the address of the current owner."
                    },
                    "ownerOf(uint256)": {
                        "details": "See {IERC721-ownerOf}."
                    },
                    "renounceOwnership()": {
                        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
                    },
                    "safeTransferFrom(address,address,uint256)": {
                        "details": "See {IERC721-safeTransferFrom}."
                    },
                    "safeTransferFrom(address,address,uint256,bytes)": {
                        "details": "See {IERC721-safeTransferFrom}."
                    },
                    "setApprovalForAll(address,bool)": {
                        "details": "See {IERC721-setApprovalForAll}."
                    },
                    "supportsInterface(bytes4)": {
                        "details": "See {IERC165-supportsInterface}."
                    },
                    "symbol()": {
                        "details": "See {IERC721Metadata-symbol}."
                    },
                    "tokenURI(uint256)": {
                        "details": "See {IERC721Metadata-tokenURI}."
                    },
                    "transferFrom(address,address,uint256)": {
                        "details": "See {IERC721-transferFrom}."
                    },
                    "transferOwnership(address)": {
                        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/=lib/openzeppelin-contracts/",
                "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "@upgradeable/=lib/openzeppelin-contracts-upgradeable/",
                "@upgradeable/safeAccount/=lib/openzeppelin-contracts-upgradeable/",
                "ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/",
                "openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 20000
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "src/Rentals.sol": "Rentals"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol": {
                "keccak256": "0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a",
                "urls": [
                    "bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6",
                    "dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol": {
                "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
                "urls": [
                    "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
                    "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol": {
                "keccak256": "0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53",
                "urls": [
                    "bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5",
                    "dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol": {
                "keccak256": "0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397",
                "urls": [
                    "bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9",
                    "dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol": {
                "keccak256": "0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0",
                "urls": [
                    "bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded",
                    "dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
                "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
                "urls": [
                    "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
                    "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol": {
                "keccak256": "0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02",
                "urls": [
                    "bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40",
                    "dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol": {
                "keccak256": "0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724",
                "urls": [
                    "bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a",
                    "dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC721Receiver.sol": {
                "keccak256": "0x12808acc0c2cbc0b9068755711fd79483b4f002e850d25e0e72e735765b6cd99",
                "urls": [
                    "bzz-raw://8fd1ab9e3091d4c4fc4b34c25b54df5c092c849c8c09d722a34186bd051b0890",
                    "dweb:/ipfs/QmUqykAZfKRHEkYVRmXKsFqvLwyUFPrukdWdAmXDkixJAL"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229",
                "urls": [
                    "bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155",
                    "dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol": {
                "keccak256": "0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510",
                "urls": [
                    "bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a",
                    "dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/Proxy.sol": {
                "keccak256": "0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd",
                "urls": [
                    "bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac",
                    "dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol": {
                "keccak256": "0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285",
                "urls": [
                    "bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88",
                    "dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol": {
                "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
                "urls": [
                    "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
                    "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4",
                "urls": [
                    "bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009",
                    "dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
                "keccak256": "0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d",
                "urls": [
                    "bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7",
                    "dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
                "keccak256": "0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de",
                "urls": [
                    "bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827",
                    "dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
                "keccak256": "0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b",
                "urls": [
                    "bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66",
                    "dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
                "keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
                "urls": [
                    "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
                    "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol": {
                "keccak256": "0x01c061c84b49b81408a3baa6897e3fb9a2a70ff4356216c3398cbdb9d628ede9",
                "urls": [
                    "bzz-raw://281503c4e1df1caf50a45ff4852f46da7e40881ebd07856548a90f13bf2dc53a",
                    "dweb:/ipfs/QmW5VobCbTcvSXPE2nKKzUnhV6rofkvpc3acZ8rntMnMmW"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
                "keccak256": "0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a",
                "urls": [
                    "bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3",
                    "dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
                "keccak256": "0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe",
                "urls": [
                    "bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7",
                    "dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
                "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
                "urls": [
                    "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
                    "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol": {
                "keccak256": "0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb",
                "urls": [
                    "bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087",
                    "dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol": {
                "keccak256": "0x4e2a8ed224c9c4fe41add93de8fa53ef3f2f5ee7a9c613e667796602ceb87e12",
                "urls": [
                    "bzz-raw://6a8516f3683103d13108094b41604e64f50f0cceaabbddbf2221f5959cf869ab",
                    "dweb:/ipfs/QmT2ophcTsuvDkv1EPyjuNG3B7NVPA5NtQqco2XWtWQHMe"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
                "keccak256": "0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e",
                "urls": [
                    "bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9",
                    "dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
                "keccak256": "0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c",
                "urls": [
                    "bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e",
                    "dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
                "keccak256": "0xc3a38f6236b9f11703164f1c52a5d423f02f01ee689d58d5a35d1a48ad5b9d88",
                "urls": [
                    "bzz-raw://4ee652cbb0266d2336107760205ea72fecf6f8127e32361d1a209016e0f8271d",
                    "dweb:/ipfs/QmefTVVswMMF6r372icwDF6DqNfzkEX5mzgSpbxdpgaUKj"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol": {
                "keccak256": "0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e",
                "urls": [
                    "bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047",
                    "dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
                "keccak256": "0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f",
                "urls": [
                    "bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512",
                    "dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ"
                ],
                "license": "MIT"
            },
            "src/BlockEstate.sol": {
                "keccak256": "0x72fbbd8ac47b49922782950b08c1e108b8c9954edaa16204965e715f0c5e2d76",
                "urls": [
                    "bzz-raw://5f9d55b1c7bcbba9eea5b124be6187faa5cc2550eeb81c40b8fd3ed829739793",
                    "dweb:/ipfs/QmaUD3LKnAwPLkpBLhJpGnBubtPQSVtxwkhsYwooeX4v3f"
                ],
                "license": "MIT"
            },
            "src/ProjectAccount.sol": {
                "keccak256": "0x59c2980184d78453ffeec735532d9c3ed913117a1c4fd0f5fdea48bcc17a7b02",
                "urls": [
                    "bzz-raw://b668bc18c118e82e06a1c7736a8fd0c0bbd29bbf2ad4355db294019d0b1e092f",
                    "dweb:/ipfs/QmWK7gN8drk1Y2N7W9kGAjgGGpr6Cn5Wzr1juFdazVmpG9"
                ],
                "license": "MIT"
            },
            "src/Rentals.sol": {
                "keccak256": "0x685d62e39a2569e58bfe07329b4e53d678ed9cc2d603026ac797e25947d2a08b",
                "urls": [
                    "bzz-raw://4662d72d2f196af6b8a8408061db56aa55cccbefcf018cbfd5803db8cf778c18",
                    "dweb:/ipfs/QmRKaxG5RchHErwZbRjepknYQacC8qSjp7W1vYE6fyJ75u"
                ],
                "license": "MIT"
            },
            "src/interface/IERC404.sol": {
                "keccak256": "0x77215588c5b2f9e8fbe7a8ed5c728589d214eedc5d9785cbf0fe89b88b19681d",
                "urls": [
                    "bzz-raw://8ac604c75f36462032b35b87bb42c2ea90ad7ba56a8f20beface9fe3f83cbd8d",
                    "dweb:/ipfs/QmZEUtvQq3P7RfCt2jhG6outMPZuLgA5LEpccuhjwgBv8C"
                ],
                "license": "MIT"
            },
            "src/interface/IERC6551Account.sol": {
                "keccak256": "0x6ff8242276aa7dbd7dac0c9c0ff6324426fbafdf0139896587d56c45dc9b335d",
                "urls": [
                    "bzz-raw://13d5bfdf03ead70f29b342dc631624f069594175864a6172c9e2b9f31d5682ac",
                    "dweb:/ipfs/QmWwRVtkuCrWXQUurDUw1YvfRyv78nY1WuP4ov9oUFKJ6b"
                ],
                "license": "MIT"
            },
            "src/interface/IERC6551Registry.sol": {
                "keccak256": "0x3a2b57b812a92ce80784bde6bfe7c21f7d73065b085f19e2a01a1ba1cb2b6f18",
                "urls": [
                    "bzz-raw://365ec9c2acc5cfa221e64b3f487be1354c85090f73e37847f4a0d0e685e4ba03",
                    "dweb:/ipfs/QmTbNShxigfXKjQsqknHfpJuxFi7xNcQnG7zVuipQL1chL"
                ],
                "license": "MIT"
            },
            "src/lib/DoubleEndedQueue.sol": {
                "keccak256": "0x40f29de66fbe8993183aeaed1aeb74167b7d34e1aacd1227a991b88fcd166f9b",
                "urls": [
                    "bzz-raw://943610141992bb8d1b844bcf20cbc95b50ecf609bf19cd9e1d413bec78a9166e",
                    "dweb:/ipfs/QmSkER4qaymDLs9ndor4NZ2UAfT3JDyTJWBprhz2nEEDJG"
                ],
                "license": "MIT"
            },
            "src/lib/ERC404.sol": {
                "keccak256": "0xdce261679e2ce52d4c10a7b946028e86999358d52fa0e3f552b04440eddcdc8a",
                "urls": [
                    "bzz-raw://4b5bba5963e22a91ea648f5e0186b6310c4a6bd2ce5491fb58ccaf6b97569b43",
                    "dweb:/ipfs/QmWnwTFc8WLPqVE3XYPhYaHuUY8ynFVvJjrLPZj7Bpg8Rj"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "src/Rentals.sol",
        "id": 55783,
        "exportedSymbols": {
            "BeaconProxy": [
                2318
            ],
            "BlockEstate": [
                54403
            ],
            "Context": [
                4515
            ],
            "ContextUpgradeable": [
                1574
            ],
            "DoubleEndedQueue": [
                56485
            ],
            "ECDSA": [
                5383
            ],
            "ERC165": [
                5508
            ],
            "ERC165Upgradeable": [
                1614
            ],
            "ERC1967Utils": [
                2224
            ],
            "ERC20Events": [
                56512
            ],
            "ERC404": [
                58161
            ],
            "ERC721": [
                3992
            ],
            "ERC721Events": [
                56537
            ],
            "ERC721Upgradeable": [
                1528
            ],
            "ERC721Utils": [
                4232
            ],
            "IBeacon": [
                2328
            ],
            "IERC1271": [
                1776
            ],
            "IERC165": [
                5520
            ],
            "IERC20": [
                3009
            ],
            "IERC404": [
                56057
            ],
            "IERC6551Account": [
                56099
            ],
            "IERC6551Registry": [
                56151
            ],
            "IERC721": [
                4109
            ],
            "IERC721Errors": [
                1874
            ],
            "IERC721Metadata": [
                4155
            ],
            "IERC721Receiver": [
                4127
            ],
            "Initializable": [
                448
            ],
            "Math": [
                7072
            ],
            "Ownable": [
                1762
            ],
            "OwnableUpgradeable": [
                194
            ],
            "ProjectAccount": [
                55138
            ],
            "Proxy": [
                2260
            ],
            "Rentals": [
                55782
            ],
            "SignatureChecker": [
                5484
            ],
            "SignedMath": [
                8947
            ],
            "Strings": [
                5035
            ]
        },
        "nodeType": "SourceUnit",
        "src": "33:6888:64",
        "nodes": [
            {
                "id": 55140,
                "nodeType": "PragmaDirective",
                "src": "33:24:64",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".18"
                ]
            },
            {
                "id": 55141,
                "nodeType": "ImportDirective",
                "src": "61:57:64",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol",
                "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 55783,
                "sourceUnit": 3993,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 55142,
                "nodeType": "ImportDirective",
                "src": "120:56:64",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 55783,
                "sourceUnit": 3010,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 55143,
                "nodeType": "ImportDirective",
                "src": "180:67:64",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol",
                "file": "@upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 55783,
                "sourceUnit": 1529,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 55144,
                "nodeType": "ImportDirective",
                "src": "249:62:64",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol",
                "file": "@upgradeable/contracts/access/OwnableUpgradeable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 55783,
                "sourceUnit": 195,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 55145,
                "nodeType": "ImportDirective",
                "src": "315:27:64",
                "nodes": [],
                "absolutePath": "src/BlockEstate.sol",
                "file": "./BlockEstate.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 55783,
                "sourceUnit": 54404,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 55146,
                "nodeType": "ImportDirective",
                "src": "344:30:64",
                "nodes": [],
                "absolutePath": "src/ProjectAccount.sol",
                "file": "./ProjectAccount.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 55783,
                "sourceUnit": 55139,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 55782,
                "nodeType": "ContractDefinition",
                "src": "380:6541:64",
                "nodes": [
                    {
                        "id": 55152,
                        "nodeType": "VariableDeclaration",
                        "src": "447:33:64",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "INITIAL_CHAIN_ID",
                        "nameLocation": "464:16:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 55151,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "447:7:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 55154,
                        "nodeType": "VariableDeclaration",
                        "src": "487:41:64",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "INITIAL_DOMAIN_SEPARATOR",
                        "nameLocation": "504:24:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 55153,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "487:7:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 55157,
                        "nodeType": "VariableDeclaration",
                        "src": "537:26:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "3013ce29",
                        "mutability": "mutable",
                        "name": "paymentToken",
                        "nameLocation": "551:12:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$3009",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 55156,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 55155,
                                "name": "IERC20",
                                "nameLocations": [
                                    "537:6:64"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 3009,
                                "src": "537:6:64"
                            },
                            "referencedDeclaration": 3009,
                            "src": "537:6:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55160,
                        "nodeType": "VariableDeclaration",
                        "src": "570:30:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "f7e3e312",
                        "mutability": "mutable",
                        "name": "blockEstate",
                        "nameLocation": "589:11:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_BlockEstate_$54403",
                            "typeString": "contract BlockEstate"
                        },
                        "typeName": {
                            "id": 55159,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 55158,
                                "name": "BlockEstate",
                                "nameLocations": [
                                    "570:11:64"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 54403,
                                "src": "570:11:64"
                            },
                            "referencedDeclaration": 54403,
                            "src": "570:11:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_BlockEstate_$54403",
                                "typeString": "contract BlockEstate"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55163,
                        "nodeType": "VariableDeclaration",
                        "src": "607:29:64",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "projectAccount",
                        "nameLocation": "622:14:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                            "typeString": "contract ProjectAccount"
                        },
                        "typeName": {
                            "id": 55162,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 55161,
                                "name": "ProjectAccount",
                                "nameLocations": [
                                    "607:14:64"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 55138,
                                "src": "607:14:64"
                            },
                            "referencedDeclaration": 55138,
                            "src": "607:14:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                "typeString": "contract ProjectAccount"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 55165,
                        "nodeType": "VariableDeclaration",
                        "src": "645:29:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "688e6123",
                        "mutability": "mutable",
                        "name": "rentalsCounter",
                        "nameLocation": "660:14:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 55164,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "645:7:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55167,
                        "nodeType": "VariableDeclaration",
                        "src": "681:32:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "f7fb8763",
                        "mutability": "mutable",
                        "name": "rentalPriceperDay",
                        "nameLocation": "696:17:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 55166,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "681:7:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55169,
                        "nodeType": "VariableDeclaration",
                        "src": "722:27:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "6a631c52",
                        "mutability": "mutable",
                        "name": "availableToRent",
                        "nameLocation": "734:15:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 55168,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "722:4:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55173,
                        "nodeType": "VariableDeclaration",
                        "src": "779:45:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "b266c661",
                        "mutability": "mutable",
                        "name": "startDates",
                        "nameLocation": "814:10:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 55172,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 55170,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "787:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "779:27:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 55171,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "798:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55177,
                        "nodeType": "VariableDeclaration",
                        "src": "831:43:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "f077dcf1",
                        "mutability": "mutable",
                        "name": "endDates",
                        "nameLocation": "866:8:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                        },
                        "typeName": {
                            "id": 55176,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 55174,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "839:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "831:27:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 55175,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "850:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55181,
                        "nodeType": "VariableDeclaration",
                        "src": "881:45:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "cfda6d83",
                        "mutability": "mutable",
                        "name": "rentalStarted",
                        "nameLocation": "913:13:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                            "typeString": "mapping(uint256 => bool)"
                        },
                        "typeName": {
                            "id": 55180,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 55178,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "889:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "881:24:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 55179,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "900:4:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55187,
                        "nodeType": "VariableDeclaration",
                        "src": "935:78:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "f82b7777",
                        "mutability": "mutable",
                        "name": "amountsLockedForRentals",
                        "nameLocation": "990:23:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(uint256 => uint256))"
                        },
                        "typeName": {
                            "id": 55186,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 55182,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "943:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "935:47:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(uint256 => uint256))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 55185,
                                "keyName": "",
                                "keyNameLocation": "-1:-1:-1",
                                "keyType": {
                                    "id": 55183,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "962:7:64",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "954:27:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                    "typeString": "mapping(uint256 => uint256)"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 55184,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "973:7:64",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55191,
                        "nodeType": "VariableDeclaration",
                        "src": "1027:45:64",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "26b39476",
                        "mutability": "mutable",
                        "name": "availableDays",
                        "nameLocation": "1059:13:64",
                        "scope": 55782,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                            "typeString": "mapping(uint256 => bool)"
                        },
                        "typeName": {
                            "id": 55190,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 55188,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1035:7:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1027:24:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 55189,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1046:4:64",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 55201,
                        "nodeType": "EventDefinition",
                        "src": "1097:117:64",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "6d9ab4e363eed1a938981f32a743d9e44e840454754b3a4591ca77b4c28b22f7",
                        "name": "RentalMinted",
                        "nameLocation": "1103:12:64",
                        "parameters": {
                            "id": 55200,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55193,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1132:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55201,
                                    "src": "1116:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55192,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1116:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55195,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "1158:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55201,
                                    "src": "1142:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55194,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1142:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55197,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_startDate",
                                    "nameLocation": "1184:10:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55201,
                                    "src": "1168:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55196,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1168:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55199,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "_endDate",
                                    "nameLocation": "1204:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55201,
                                    "src": "1196:16:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55198,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1196:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1115:98:64"
                        }
                    },
                    {
                        "id": 55210,
                        "nodeType": "EventDefinition",
                        "src": "1220:100:64",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "6f7622caca84584bd87e67586dfe5baaa6982bf4473fda2591306764f014332b",
                        "name": "RentalSplit",
                        "nameLocation": "1226:11:64",
                        "parameters": {
                            "id": 55209,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55203,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1254:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55210,
                                    "src": "1238:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55202,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1238:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55205,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "1280:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55210,
                                    "src": "1264:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55204,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1264:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55208,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "_intermediaryDates",
                                    "nameLocation": "1300:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55210,
                                    "src": "1290:28:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 55206,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1290:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 55207,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1290:9:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1237:82:64"
                        }
                    },
                    {
                        "id": 55225,
                        "nodeType": "ModifierDefinition",
                        "src": "1351:141:64",
                        "nodes": [],
                        "body": {
                            "id": 55224,
                            "nodeType": "Block",
                            "src": "1374:118:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 55219,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 55213,
                                                        "name": "_msgSender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1556,
                                                        "src": "1393:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                            "typeString": "function () view returns (address)"
                                                        }
                                                    },
                                                    "id": 55214,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1393:12:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 55217,
                                                            "name": "blockEstate",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55160,
                                                            "src": "1417:11:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_BlockEstate_$54403",
                                                                "typeString": "contract BlockEstate"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_BlockEstate_$54403",
                                                                "typeString": "contract BlockEstate"
                                                            }
                                                        ],
                                                        "id": 55216,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1409:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 55215,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1409:7:64",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 55218,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1409:20:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "1393:36:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2063616c6c6572206973206e6f742074686520426c6f636b457374617465",
                                                "id": 55220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1431:40:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_877a288b28557acd037b1271b0379a3365a110acfd90d0f8702448950d0fe6d6",
                                                    "typeString": "literal_string \"Rentals: caller is not the BlockEstate\""
                                                },
                                                "value": "Rentals: caller is not the BlockEstate"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_877a288b28557acd037b1271b0379a3365a110acfd90d0f8702448950d0fe6d6",
                                                    "typeString": "literal_string \"Rentals: caller is not the BlockEstate\""
                                                }
                                            ],
                                            "id": 55212,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1385:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55221,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1385:87:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55222,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1385:87:64"
                                },
                                {
                                    "id": 55223,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "1483:1:64"
                                }
                            ]
                        },
                        "name": "onlyManager",
                        "nameLocation": "1360:11:64",
                        "parameters": {
                            "id": 55211,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1371:2:64"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 55240,
                        "nodeType": "ModifierDefinition",
                        "src": "1500:155:64",
                        "nodes": [],
                        "body": {
                            "id": 55239,
                            "nodeType": "Block",
                            "src": "1530:125:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 55234,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 55228,
                                                        "name": "_msgSender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1556,
                                                        "src": "1549:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                            "typeString": "function () view returns (address)"
                                                        }
                                                    },
                                                    "id": 55229,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1549:12:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 55232,
                                                            "name": "projectAccount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55163,
                                                            "src": "1573:14:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                                "typeString": "contract ProjectAccount"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                                "typeString": "contract ProjectAccount"
                                                            }
                                                        ],
                                                        "id": 55231,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1565:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 55230,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1565:7:64",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 55233,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1565:23:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "1549:39:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2063616c6c6572206973206e6f74207468652070726f6a656374206163636f756e74",
                                                "id": 55235,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1590:44:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9d930f4bd8c9accf4225253db3263ff48997d7f89fa986729cb3bd764d1b2530",
                                                    "typeString": "literal_string \"Rentals: caller is not the project account\""
                                                },
                                                "value": "Rentals: caller is not the project account"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9d930f4bd8c9accf4225253db3263ff48997d7f89fa986729cb3bd764d1b2530",
                                                    "typeString": "literal_string \"Rentals: caller is not the project account\""
                                                }
                                            ],
                                            "id": 55227,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1541:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1541:94:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55237,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1541:94:64"
                                },
                                {
                                    "id": 55238,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "1646:1:64"
                                }
                            ]
                        },
                        "name": "OnlyProjectAccount",
                        "nameLocation": "1509:18:64",
                        "parameters": {
                            "id": 55226,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1527:2:64"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 55247,
                        "nodeType": "FunctionDefinition",
                        "src": "1663:54:64",
                        "nodes": [],
                        "body": {
                            "id": 55246,
                            "nodeType": "Block",
                            "src": "1676:41:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 55243,
                                            "name": "_disableInitializers",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 416,
                                            "src": "1687:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 55244,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1687:22:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55245,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1687:22:64"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 55241,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1674:2:64"
                        },
                        "returnParameters": {
                            "id": 55242,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1676:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55305,
                        "nodeType": "FunctionDefinition",
                        "src": "1725:597:64",
                        "nodes": [],
                        "body": {
                            "id": 55304,
                            "nodeType": "Block",
                            "src": "1928:394:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 55268,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55264,
                                            "name": "paymentToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55157,
                                            "src": "1941:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 55266,
                                                    "name": "_paymentToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55253,
                                                    "src": "1963:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "id": 55265,
                                                "name": "IERC20",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3009,
                                                "src": "1956:6:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IERC20_$3009_$",
                                                    "typeString": "type(contract IERC20)"
                                                }
                                            },
                                            "id": 55267,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1956:21:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "1941:36:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$3009",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 55269,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1941:36:64"
                                },
                                {
                                    "expression": {
                                        "id": 55274,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55270,
                                            "name": "blockEstate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55160,
                                            "src": "1988:11:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_BlockEstate_$54403",
                                                "typeString": "contract BlockEstate"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 55272,
                                                    "name": "blockEstateAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55255,
                                                    "src": "2014:18:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "id": 55271,
                                                "name": "BlockEstate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54403,
                                                "src": "2002:11:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_BlockEstate_$54403_$",
                                                    "typeString": "type(contract BlockEstate)"
                                                }
                                            },
                                            "id": 55273,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2002:31:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_BlockEstate_$54403",
                                                "typeString": "contract BlockEstate"
                                            }
                                        },
                                        "src": "1988:45:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_BlockEstate_$54403",
                                            "typeString": "contract BlockEstate"
                                        }
                                    },
                                    "id": 55275,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1988:45:64"
                                },
                                {
                                    "expression": {
                                        "id": 55278,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55276,
                                            "name": "rentalPriceperDay",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55167,
                                            "src": "2044:17:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 55277,
                                            "name": "_rentalPriceperDay",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55257,
                                            "src": "2064:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2044:38:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55279,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2044:38:64"
                                },
                                {
                                    "expression": {
                                        "id": 55287,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55280,
                                            "name": "projectAccount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55163,
                                            "src": "2093:14:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                "typeString": "contract ProjectAccount"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 55284,
                                                            "name": "_projectAccount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55259,
                                                            "src": "2133:15:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "id": 55283,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2125:8:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                                            "typeString": "type(address payable)"
                                                        },
                                                        "typeName": {
                                                            "id": 55282,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2125:8:64",
                                                            "stateMutability": "payable",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 55285,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2125:24:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                ],
                                                "id": 55281,
                                                "name": "ProjectAccount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55138,
                                                "src": "2110:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_ProjectAccount_$55138_$",
                                                    "typeString": "type(contract ProjectAccount)"
                                                }
                                            },
                                            "id": 55286,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2110:40:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                "typeString": "contract ProjectAccount"
                                            }
                                        },
                                        "src": "2093:57:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                            "typeString": "contract ProjectAccount"
                                        }
                                    },
                                    "id": 55288,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2093:57:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 55290,
                                                "name": "_name",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55249,
                                                "src": "2185:5:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_calldata_ptr",
                                                    "typeString": "string calldata"
                                                }
                                            },
                                            {
                                                "id": 55291,
                                                "name": "_symbol",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55251,
                                                "src": "2191:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_calldata_ptr",
                                                    "typeString": "string calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_calldata_ptr",
                                                    "typeString": "string calldata"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_calldata_ptr",
                                                    "typeString": "string calldata"
                                                }
                                            ],
                                            "id": 55289,
                                            "name": "__ERC721_init",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 535,
                                            "src": "2171:13:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory)"
                                            }
                                        },
                                        "id": 55292,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2171:28:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55293,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2171:28:64"
                                },
                                {
                                    "expression": {
                                        "id": 55297,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55294,
                                            "name": "INITIAL_CHAIN_ID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55152,
                                            "src": "2220:16:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 55295,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "2239:5:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 55296,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2245:7:64",
                                            "memberName": "chainid",
                                            "nodeType": "MemberAccess",
                                            "src": "2239:13:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2220:32:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55298,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2220:32:64"
                                },
                                {
                                    "expression": {
                                        "id": 55302,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55299,
                                            "name": "INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55154,
                                            "src": "2263:24:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 55300,
                                                "name": "computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55781,
                                                "src": "2290:22:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 55301,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2290:24:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "2263:51:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 55303,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2263:51:64"
                                }
                            ]
                        },
                        "functionSelector": "db0e4544",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 55262,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 55261,
                                    "name": "initializer",
                                    "nameLocations": [
                                        "1909:11:64"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 302,
                                    "src": "1909:11:64"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1909:11:64"
                            }
                        ],
                        "name": "initialize",
                        "nameLocation": "1734:10:64",
                        "parameters": {
                            "id": 55260,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55249,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "1761:5:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55305,
                                    "src": "1745:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 55248,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1745:6:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55251,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "1784:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55305,
                                    "src": "1768:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 55250,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1768:6:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55253,
                                    "mutability": "mutable",
                                    "name": "_paymentToken",
                                    "nameLocation": "1808:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55305,
                                    "src": "1800:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55252,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1800:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55255,
                                    "mutability": "mutable",
                                    "name": "blockEstateAddress",
                                    "nameLocation": "1831:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55305,
                                    "src": "1823:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55254,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1823:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55257,
                                    "mutability": "mutable",
                                    "name": "_rentalPriceperDay",
                                    "nameLocation": "1859:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55305,
                                    "src": "1851:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55256,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1851:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55259,
                                    "mutability": "mutable",
                                    "name": "_projectAccount",
                                    "nameLocation": "1887:15:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55305,
                                    "src": "1879:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55258,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1879:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1744:159:64"
                        },
                        "returnParameters": {
                            "id": 55263,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1928:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55472,
                        "nodeType": "FunctionDefinition",
                        "src": "2334:1499:64",
                        "nodes": [],
                        "body": {
                            "id": 55471,
                            "nodeType": "Block",
                            "src": "2432:1401:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 55319,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 55317,
                                                    "name": "_startDate",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55309,
                                                    "src": "2451:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 55318,
                                                    "name": "_endDate",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55311,
                                                    "src": "2464:8:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2451:21:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2073746172742064617465206d757374206265206265666f726520656e642064617465",
                                                "id": 55320,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2474:45:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_3499ef02d8cf39d74221d55030ea563d84b710cbe8810c2da89fdbecc0c10783",
                                                    "typeString": "literal_string \"Rentals: start date must be before end date\""
                                                },
                                                "value": "Rentals: start date must be before end date"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_3499ef02d8cf39d74221d55030ea563d84b710cbe8810c2da89fdbecc0c10783",
                                                    "typeString": "literal_string \"Rentals: start date must be before end date\""
                                                }
                                            ],
                                            "id": 55316,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2443:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55321,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2443:77:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55322,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2443:77:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 55327,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 55324,
                                                    "name": "_startDate",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55309,
                                                    "src": "2539:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 55325,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "2552:5:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 55326,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2558:9:64",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2552:15:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2539:28:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2073746172742064617465206d75737420626520696e2074686520667574757265",
                                                "id": 55328,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2569:43:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_742d0a2590b1ba10f4413099419739f04261c5c69eb9cd6500cdd993ecb2a09f",
                                                    "typeString": "literal_string \"Rentals: start date must be in the future\""
                                                },
                                                "value": "Rentals: start date must be in the future"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_742d0a2590b1ba10f4413099419739f04261c5c69eb9cd6500cdd993ecb2a09f",
                                                    "typeString": "literal_string \"Rentals: start date must be in the future\""
                                                }
                                            ],
                                            "id": 55323,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2531:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55329,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2531:82:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55330,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2531:82:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 55332,
                                                "name": "availableToRent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55169,
                                                "src": "2632:15:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2070726f7065727479206973206e6f7420617661696c61626c6520746f2072656e74",
                                                "id": 55333,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2649:44:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_426d2c24042b885564fbf504899c18c31a79e2a8b3d3413191452775b0b02ebf",
                                                    "typeString": "literal_string \"Rentals: property is not available to rent\""
                                                },
                                                "value": "Rentals: property is not available to rent"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_426d2c24042b885564fbf504899c18c31a79e2a8b3d3413191452775b0b02ebf",
                                                    "typeString": "literal_string \"Rentals: property is not available to rent\""
                                                }
                                            ],
                                            "id": 55331,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2624:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55334,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2624:70:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55335,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2624:70:64"
                                },
                                {
                                    "body": {
                                        "id": 55363,
                                        "nodeType": "Block",
                                        "src": "2755:160:64",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "id": 55350,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "!",
                                                    "prefix": true,
                                                    "src": "2773:17:64",
                                                    "subExpression": {
                                                        "baseExpression": {
                                                            "id": 55347,
                                                            "name": "availableDays",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55191,
                                                            "src": "2774:13:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                                "typeString": "mapping(uint256 => bool)"
                                                            }
                                                        },
                                                        "id": 55349,
                                                        "indexExpression": {
                                                            "id": 55348,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55337,
                                                            "src": "2788:1:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "2774:16:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 55356,
                                                "nodeType": "IfStatement",
                                                "src": "2770:95:64",
                                                "trueBody": {
                                                    "id": 55355,
                                                    "nodeType": "Block",
                                                    "src": "2792:73:64",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "52656e74616c733a206461746520616c72656164792072656e746564",
                                                                        "id": 55352,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "2818:30:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_291139e2200f2f32462990253a14d1117f7046e7522e17f97b5f168b0fe1743f",
                                                                            "typeString": "literal_string \"Rentals: date already rented\""
                                                                        },
                                                                        "value": "Rentals: date already rented"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_291139e2200f2f32462990253a14d1117f7046e7522e17f97b5f168b0fe1743f",
                                                                            "typeString": "literal_string \"Rentals: date already rented\""
                                                                        }
                                                                    ],
                                                                    "id": 55351,
                                                                    "name": "revert",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [
                                                                        -19,
                                                                        -19
                                                                    ],
                                                                    "referencedDeclaration": -19,
                                                                    "src": "2811:6:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                                                        "typeString": "function (string memory) pure"
                                                                    }
                                                                },
                                                                "id": 55353,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2811:38:64",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 55354,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "2811:38:64"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 55361,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 55357,
                                                            "name": "availableDays",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55191,
                                                            "src": "2879:13:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                                "typeString": "mapping(uint256 => bool)"
                                                            }
                                                        },
                                                        "id": 55359,
                                                        "indexExpression": {
                                                            "id": 55358,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55337,
                                                            "src": "2893:1:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "2879:16:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "66616c7365",
                                                        "id": 55360,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2898:5:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "false"
                                                    },
                                                    "src": "2879:24:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 55362,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2879:24:64"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 55342,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 55340,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55337,
                                            "src": "2733:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "id": 55341,
                                            "name": "_endDate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55311,
                                            "src": "2738:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2733:13:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 55364,
                                    "initializationExpression": {
                                        "assignments": [
                                            55337
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 55337,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "2717:1:64",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 55364,
                                                "src": "2709:9:64",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 55336,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2709:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 55339,
                                        "initialValue": {
                                            "id": 55338,
                                            "name": "_startDate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55309,
                                            "src": "2721:10:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "2709:22:64"
                                    },
                                    "isSimpleCounterLoop": false,
                                    "loopExpression": {
                                        "expression": {
                                            "id": 55345,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "id": 55343,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55337,
                                                "src": "2748:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "+=",
                                            "rightHandSide": {
                                                "hexValue": "31",
                                                "id": 55344,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2753:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "2748:6:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 55346,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2748:6:64"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "2705:210:64"
                                },
                                {
                                    "assignments": [
                                        55366
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55366,
                                            "mutability": "mutable",
                                            "name": "tokenId",
                                            "nameLocation": "2935:7:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55471,
                                            "src": "2927:15:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55365,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2927:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55368,
                                    "initialValue": {
                                        "id": 55367,
                                        "name": "rentalsCounter",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 55165,
                                        "src": "2945:14:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2927:32:64"
                                },
                                {
                                    "expression": {
                                        "id": 55370,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "2970:16:64",
                                        "subExpression": {
                                            "id": 55369,
                                            "name": "rentalsCounter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55165,
                                            "src": "2970:14:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55371,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2970:16:64"
                                },
                                {
                                    "expression": {
                                        "id": 55376,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 55372,
                                                "name": "startDates",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55173,
                                                "src": "2999:10:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55374,
                                            "indexExpression": {
                                                "id": 55373,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55366,
                                                "src": "3010:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2999:19:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 55375,
                                            "name": "_startDate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55309,
                                            "src": "3021:10:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2999:32:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55377,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2999:32:64"
                                },
                                {
                                    "expression": {
                                        "id": 55382,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 55378,
                                                "name": "endDates",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55177,
                                                "src": "3042:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55380,
                                            "indexExpression": {
                                                "id": 55379,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55366,
                                                "src": "3051:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "3042:17:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 55381,
                                            "name": "_endDate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55311,
                                            "src": "3062:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3042:28:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55383,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3042:28:64"
                                },
                                {
                                    "assignments": [
                                        55385
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55385,
                                            "mutability": "mutable",
                                            "name": "amountToMakeDiscount",
                                            "nameLocation": "3091:20:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55471,
                                            "src": "3083:28:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55384,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3083:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55391,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 55388,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3145:3:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 55389,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3149:6:64",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3145:10:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 55386,
                                                "name": "projectAccount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55163,
                                                "src": "3114:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                    "typeString": "contract ProjectAccount"
                                                }
                                            },
                                            "id": 55387,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3129:15:64",
                                            "memberName": "erc721BalanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 56704,
                                            "src": "3114:30:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 55390,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3114:42:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3083:73:64"
                                },
                                {
                                    "assignments": [
                                        55393
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55393,
                                            "mutability": "mutable",
                                            "name": "discountInBps",
                                            "nameLocation": "3177:13:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55471,
                                            "src": "3169:21:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55392,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3169:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55401,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 55400,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 55396,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 55394,
                                                "name": "amountToMakeDiscount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55385,
                                                "src": "3193:20:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                                "hexValue": "3130303030",
                                                "id": 55395,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3216:5:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_10000_by_1",
                                                    "typeString": "int_const 10000"
                                                },
                                                "value": "10000"
                                            },
                                            "src": "3193:28:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "id": 55397,
                                                    "name": "projectAccount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55163,
                                                    "src": "3224:14:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                        "typeString": "contract ProjectAccount"
                                                    }
                                                },
                                                "id": 55398,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3239:11:64",
                                                "memberName": "totalSupply",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 56562,
                                                "src": "3224:26:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view external returns (uint256)"
                                                }
                                            },
                                            "id": 55399,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3224:28:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3193:59:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3169:83:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 55405,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3299:3:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 55406,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3303:6:64",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3299:10:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 55409,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3319:4:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Rentals_$55782",
                                                            "typeString": "contract Rentals"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Rentals_$55782",
                                                            "typeString": "contract Rentals"
                                                        }
                                                    ],
                                                    "id": 55408,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3311:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 55407,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3311:7:64",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 55410,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3311:13:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55411,
                                                "name": "amountToMakeDiscount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55385,
                                                "src": "3326:20:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 55402,
                                                "name": "projectAccount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55163,
                                                "src": "3265:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                    "typeString": "contract ProjectAccount"
                                                }
                                            },
                                            "id": 55404,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3280:18:64",
                                            "memberName": "erc721TransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 57074,
                                            "src": "3265:33:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256) external"
                                            }
                                        },
                                        "id": 55412,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3265:82:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55413,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3265:82:64"
                                },
                                {
                                    "expression": {
                                        "id": 55421,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 55414,
                                                    "name": "amountsLockedForRentals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55187,
                                                    "src": "3368:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                                        "typeString": "mapping(address => mapping(uint256 => uint256))"
                                                    }
                                                },
                                                "id": 55418,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 55415,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "3392:3:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 55416,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3396:6:64",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3392:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "3368:35:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55419,
                                            "indexExpression": {
                                                "id": 55417,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55366,
                                                "src": "3404:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "3368:44:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 55420,
                                            "name": "amountToMakeDiscount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55385,
                                            "src": "3415:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3368:67:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55422,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3368:67:64"
                                },
                                {
                                    "assignments": [
                                        55424
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55424,
                                            "mutability": "mutable",
                                            "name": "price",
                                            "nameLocation": "3456:5:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55471,
                                            "src": "3448:13:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55423,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3448:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55435,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 55434,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 55432,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 55430,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 55425,
                                                    "name": "rentalPriceperDay",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55167,
                                                    "src": "3464:17:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                    "components": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 55428,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 55426,
                                                                "name": "_endDate",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 55311,
                                                                "src": "3485:8:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 55427,
                                                                "name": "_startDate",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 55309,
                                                                "src": "3496:10:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "3485:21:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 55429,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "3484:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3464:43:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                                "id": 55431,
                                                "name": "discountInBps",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55393,
                                                "src": "3510:13:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3464:59:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                            "hexValue": "3130303030",
                                            "id": 55433,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3526:5:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_10000_by_1",
                                                "typeString": "int_const 10000"
                                            },
                                            "value": "10000"
                                        },
                                        "src": "3464:67:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3448:83:64"
                                },
                                {
                                    "assignments": [
                                        55437
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55437,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "3549:7:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55471,
                                            "src": "3544:12:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 55436,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3544:4:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55448,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 55444,
                                                        "name": "projectAccount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55163,
                                                        "src": "3597:14:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 55443,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3589:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 55442,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3589:7:64",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 55445,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3589:23:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55446,
                                                "name": "price",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55424,
                                                "src": "3614:5:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 55439,
                                                        "name": "paymentToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55157,
                                                        "src": "3566:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$3009",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$3009",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 55438,
                                                    "name": "IERC20",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3009,
                                                    "src": "3559:6:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IERC20_$3009_$",
                                                        "typeString": "type(contract IERC20)"
                                                    }
                                                },
                                                "id": 55440,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3559:20:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$3009",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 55441,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3580:8:64",
                                            "memberName": "transfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2976,
                                            "src": "3559:29:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 55447,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3559:61:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3544:76:64"
                                },
                                {
                                    "condition": {
                                        "id": 55450,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "3635:8:64",
                                        "subExpression": {
                                            "id": 55449,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55437,
                                            "src": "3636:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 55456,
                                    "nodeType": "IfStatement",
                                    "src": "3631:74:64",
                                    "trueBody": {
                                        "id": 55455,
                                        "nodeType": "Block",
                                        "src": "3645:60:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "hexValue": "52656e74616c733a207061796d656e74206661696c6564",
                                                            "id": 55452,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "string",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3667:25:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_stringliteral_bbce053245de6c7ba5ac6a85b3c584cf06c83a0c559718a8170ba0663ce4288a",
                                                                "typeString": "literal_string \"Rentals: payment failed\""
                                                            },
                                                            "value": "Rentals: payment failed"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_stringliteral_bbce053245de6c7ba5ac6a85b3c584cf06c83a0c559718a8170ba0663ce4288a",
                                                                "typeString": "literal_string \"Rentals: payment failed\""
                                                            }
                                                        ],
                                                        "id": 55451,
                                                        "name": "revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            -19,
                                                            -19
                                                        ],
                                                        "referencedDeclaration": -19,
                                                        "src": "3660:6:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                                            "typeString": "function (string memory) pure"
                                                        }
                                                    },
                                                    "id": 55453,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3660:33:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 55454,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3660:33:64"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 55458,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55307,
                                                "src": "3721:3:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55459,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55366,
                                                "src": "3726:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 55457,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1175,
                                            "src": "3715:5:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 55460,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3715:19:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55461,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3715:19:64"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 55463,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55366,
                                                "src": "3763:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 55464,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55307,
                                                "src": "3772:3:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55465,
                                                "name": "_startDate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55309,
                                                "src": "3777:10:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 55466,
                                                "name": "_endDate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55311,
                                                "src": "3789:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 55462,
                                            "name": "RentalMinted",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55201,
                                            "src": "3750:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256,uint256)"
                                            }
                                        },
                                        "id": 55467,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3750:48:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55468,
                                    "nodeType": "EmitStatement",
                                    "src": "3745:53:64"
                                },
                                {
                                    "expression": {
                                        "id": 55469,
                                        "name": "tokenId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 55366,
                                        "src": "3818:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 55315,
                                    "id": 55470,
                                    "nodeType": "Return",
                                    "src": "3811:14:64"
                                }
                            ]
                        },
                        "functionSelector": "8f697cd6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "rentProperty",
                        "nameLocation": "2343:12:64",
                        "parameters": {
                            "id": 55312,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55307,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2364:3:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55472,
                                    "src": "2356:11:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55306,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2356:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55309,
                                    "mutability": "mutable",
                                    "name": "_startDate",
                                    "nameLocation": "2377:10:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55472,
                                    "src": "2369:18:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55308,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2369:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55311,
                                    "mutability": "mutable",
                                    "name": "_endDate",
                                    "nameLocation": "2397:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55472,
                                    "src": "2389:16:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55310,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2389:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2355:51:64"
                        },
                        "returnParameters": {
                            "id": 55315,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55314,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55472,
                                    "src": "2423:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55313,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2423:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2422:9:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55518,
                        "nodeType": "FunctionDefinition",
                        "src": "3841:388:64",
                        "nodes": [],
                        "body": {
                            "id": 55517,
                            "nodeType": "Block",
                            "src": "3896:333:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 55483,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "baseExpression": {
                                                        "id": 55478,
                                                        "name": "endDates",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55177,
                                                        "src": "3915:8:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 55480,
                                                    "indexExpression": {
                                                        "id": 55479,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55474,
                                                        "src": "3924:8:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3915:18:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 55481,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "3936:5:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 55482,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3942:9:64",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3936:15:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3915:36:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2072656e74616c20686173206e6f7420656e64656420796574",
                                                "id": 55484,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3953:35:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_8409aefd281e1145d2367e633def15c9267d6bae67a76bec2254d1229fe1f98a",
                                                    "typeString": "literal_string \"Rentals: rental has not ended yet\""
                                                },
                                                "value": "Rentals: rental has not ended yet"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_8409aefd281e1145d2367e633def15c9267d6bae67a76bec2254d1229fe1f98a",
                                                    "typeString": "literal_string \"Rentals: rental has not ended yet\""
                                                }
                                            ],
                                            "id": 55477,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3907:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55485,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3907:82:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55486,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3907:82:64"
                                },
                                {
                                    "assignments": [
                                        55488
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55488,
                                            "mutability": "mutable",
                                            "name": "amount",
                                            "nameLocation": "4010:6:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55517,
                                            "src": "4002:14:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55487,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4002:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55495,
                                    "initialValue": {
                                        "baseExpression": {
                                            "baseExpression": {
                                                "id": 55489,
                                                "name": "amountsLockedForRentals",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55187,
                                                "src": "4019:23:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                                }
                                            },
                                            "id": 55492,
                                            "indexExpression": {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 55490,
                                                    "name": "_msgSender",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1556,
                                                    "src": "4043:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                        "typeString": "function () view returns (address)"
                                                    }
                                                },
                                                "id": 55491,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4043:12:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "4019:37:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 55494,
                                        "indexExpression": {
                                            "id": 55493,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55474,
                                            "src": "4057:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "4019:47:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4002:64:64"
                                },
                                {
                                    "expression": {
                                        "id": 55503,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 55496,
                                                    "name": "amountsLockedForRentals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55187,
                                                    "src": "4079:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                                        "typeString": "mapping(address => mapping(uint256 => uint256))"
                                                    }
                                                },
                                                "id": 55500,
                                                "indexExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 55497,
                                                        "name": "_msgSender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1556,
                                                        "src": "4103:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                            "typeString": "function () view returns (address)"
                                                        }
                                                    },
                                                    "id": 55498,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4103:12:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4079:37:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55501,
                                            "indexExpression": {
                                                "id": 55499,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55474,
                                                "src": "4117:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "4079:47:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "30",
                                            "id": 55502,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4129:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4079:51:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55504,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4079:51:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 55510,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "4183:4:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Rentals_$55782",
                                                            "typeString": "contract Rentals"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Rentals_$55782",
                                                            "typeString": "contract Rentals"
                                                        }
                                                    ],
                                                    "id": 55509,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4175:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 55508,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4175:7:64",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 55511,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4175:13:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 55512,
                                                    "name": "_msgSender",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1556,
                                                    "src": "4190:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                        "typeString": "function () view returns (address)"
                                                    }
                                                },
                                                "id": 55513,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4190:12:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55514,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55488,
                                                "src": "4204:6:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 55505,
                                                "name": "projectAccount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55163,
                                                "src": "4141:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                    "typeString": "contract ProjectAccount"
                                                }
                                            },
                                            "id": 55507,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4156:18:64",
                                            "memberName": "erc721TransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 57074,
                                            "src": "4141:33:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256) external"
                                            }
                                        },
                                        "id": 55515,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4141:70:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55516,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4141:70:64"
                                }
                            ]
                        },
                        "functionSelector": "a3bbf53b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "retrieveAmountLocked",
                        "nameLocation": "3850:20:64",
                        "parameters": {
                            "id": 55475,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55474,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "3879:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55518,
                                    "src": "3871:16:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55473,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3871:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3870:18:64"
                        },
                        "returnParameters": {
                            "id": 55476,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3896:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55530,
                        "nodeType": "FunctionDefinition",
                        "src": "4237:119:64",
                        "nodes": [],
                        "body": {
                            "id": 55529,
                            "nodeType": "Block",
                            "src": "4308:48:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 55527,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55525,
                                            "name": "rentalPriceperDay",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55167,
                                            "src": "4319:17:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 55526,
                                            "name": "_newPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55520,
                                            "src": "4339:9:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4319:29:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55528,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4319:29:64"
                                }
                            ]
                        },
                        "functionSelector": "a9e22da4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 55523,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 55522,
                                    "name": "OnlyProjectAccount",
                                    "nameLocations": [
                                        "4287:18:64"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 55240,
                                    "src": "4287:18:64"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4287:20:64"
                            }
                        ],
                        "name": "setPricePerDay",
                        "nameLocation": "4246:14:64",
                        "parameters": {
                            "id": 55521,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55520,
                                    "mutability": "mutable",
                                    "name": "_newPrice",
                                    "nameLocation": "4269:9:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55530,
                                    "src": "4261:17:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55519,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4261:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4260:19:64"
                        },
                        "returnParameters": {
                            "id": 55524,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4308:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55544,
                        "nodeType": "FunctionDefinition",
                        "src": "4364:137:64",
                        "nodes": [],
                        "body": {
                            "id": 55543,
                            "nodeType": "Block",
                            "src": "4443:58:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 55541,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55537,
                                            "name": "paymentToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55157,
                                            "src": "4454:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 55539,
                                                    "name": "_newPaymentToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55532,
                                                    "src": "4476:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "id": 55538,
                                                "name": "IERC20",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3009,
                                                "src": "4469:6:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IERC20_$3009_$",
                                                    "typeString": "type(contract IERC20)"
                                                }
                                            },
                                            "id": 55540,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4469:24:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "4454:39:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$3009",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 55542,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4454:39:64"
                                }
                            ]
                        },
                        "functionSelector": "6a326ab1",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 55535,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 55534,
                                    "name": "OnlyProjectAccount",
                                    "nameLocations": [
                                        "4422:18:64"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 55240,
                                    "src": "4422:18:64"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4422:20:64"
                            }
                        ],
                        "name": "setPaymentToken",
                        "nameLocation": "4373:15:64",
                        "parameters": {
                            "id": 55533,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55532,
                                    "mutability": "mutable",
                                    "name": "_newPaymentToken",
                                    "nameLocation": "4397:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55544,
                                    "src": "4389:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 55531,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4389:7:64",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4388:26:64"
                        },
                        "returnParameters": {
                            "id": 55536,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4443:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55715,
                        "nodeType": "FunctionDefinition",
                        "src": "4509:1536:64",
                        "nodes": [],
                        "body": {
                            "id": 55714,
                            "nodeType": "Block",
                            "src": "4594:1451:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 55558,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [
                                                        {
                                                            "id": 55554,
                                                            "name": "_tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55546,
                                                            "src": "4621:8:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 55553,
                                                        "name": "ownerOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 642,
                                                        "src": "4613:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                                            "typeString": "function (uint256) view returns (address)"
                                                        }
                                                    },
                                                    "id": 55555,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4613:17:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 55556,
                                                        "name": "_msgSender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1556,
                                                        "src": "4634:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                            "typeString": "function () view returns (address)"
                                                        }
                                                    },
                                                    "id": 55557,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4634:12:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "4613:33:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2063616c6c6572206973206e6f7420746865206f776e6572206f66207468652072656e74616c",
                                                "id": 55559,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4648:48:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c9c78cdffcd6ffbb8f260f8cbcfa0f1e075526b7f13d7bf7e3fd48f59ffde3db",
                                                    "typeString": "literal_string \"Rentals: caller is not the owner of the rental\""
                                                },
                                                "value": "Rentals: caller is not the owner of the rental"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_c9c78cdffcd6ffbb8f260f8cbcfa0f1e075526b7f13d7bf7e3fd48f59ffde3db",
                                                    "typeString": "literal_string \"Rentals: caller is not the owner of the rental\""
                                                }
                                            ],
                                            "id": 55552,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4605:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55560,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4605:92:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55561,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4605:92:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 55568,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "baseExpression": {
                                                        "id": 55563,
                                                        "name": "startDates",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55173,
                                                        "src": "4716:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 55565,
                                                    "indexExpression": {
                                                        "id": 55564,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55546,
                                                        "src": "4727:8:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "4716:20:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 55566,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "4739:5:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 55567,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4745:9:64",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4739:15:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "4716:38:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2072656e74616c2068617320616c72656164792073746172746564",
                                                "id": 55569,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4756:37:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_5411e7d8945717d751b843089c2b33a577d35462a66df4bb31190a20080b52b6",
                                                    "typeString": "literal_string \"Rentals: rental has already started\""
                                                },
                                                "value": "Rentals: rental has already started"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_5411e7d8945717d751b843089c2b33a577d35462a66df4bb31190a20080b52b6",
                                                    "typeString": "literal_string \"Rentals: rental has already started\""
                                                }
                                            ],
                                            "id": 55562,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4708:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55570,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4708:86:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55571,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4708:86:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 55576,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 55573,
                                                        "name": "_intermediaryDates",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55549,
                                                        "src": "4813:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                            "typeString": "uint256[] calldata"
                                                        }
                                                    },
                                                    "id": 55574,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4832:6:64",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4813:25:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 55575,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4841:1:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4813:29:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a206e6f20696e7465726d6564696172792064617465732070726f7669646564",
                                                "id": 55577,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4844:41:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_255e21808ef887e2cff44def013d5db22911cef08e81369c4ccc56a14111670d",
                                                    "typeString": "literal_string \"Rentals: no intermediary dates provided\""
                                                },
                                                "value": "Rentals: no intermediary dates provided"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_255e21808ef887e2cff44def013d5db22911cef08e81369c4ccc56a14111670d",
                                                    "typeString": "literal_string \"Rentals: no intermediary dates provided\""
                                                }
                                            ],
                                            "id": 55572,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4805:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55578,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4805:81:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55579,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4805:81:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 55584,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "4905:24:64",
                                                "subExpression": {
                                                    "baseExpression": {
                                                        "id": 55581,
                                                        "name": "rentalStarted",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55181,
                                                        "src": "4906:13:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                            "typeString": "mapping(uint256 => bool)"
                                                        }
                                                    },
                                                    "id": 55583,
                                                    "indexExpression": {
                                                        "id": 55582,
                                                        "name": "_tokenId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55546,
                                                        "src": "4920:8:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "4906:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52656e74616c733a2072656e74616c2068617320616c72656164792073746172746564",
                                                "id": 55585,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4931:37:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_5411e7d8945717d751b843089c2b33a577d35462a66df4bb31190a20080b52b6",
                                                    "typeString": "literal_string \"Rentals: rental has already started\""
                                                },
                                                "value": "Rentals: rental has already started"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_5411e7d8945717d751b843089c2b33a577d35462a66df4bb31190a20080b52b6",
                                                    "typeString": "literal_string \"Rentals: rental has already started\""
                                                }
                                            ],
                                            "id": 55580,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4897:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 55586,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4897:72:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55587,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4897:72:64"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 55589,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55546,
                                                "src": "4988:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 55588,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1253,
                                            "src": "4982:5:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256)"
                                            }
                                        },
                                        "id": 55590,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4982:15:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55591,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4982:15:64"
                                },
                                {
                                    "body": {
                                        "id": 55613,
                                        "nodeType": "Block",
                                        "src": "5079:50:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 55611,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 55607,
                                                            "name": "availableDays",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55191,
                                                            "src": "5094:13:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                                                "typeString": "mapping(uint256 => bool)"
                                                            }
                                                        },
                                                        "id": 55609,
                                                        "indexExpression": {
                                                            "id": 55608,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55593,
                                                            "src": "5108:1:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "IndexAccess",
                                                        "src": "5094:16:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "74727565",
                                                        "id": 55610,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5113:4:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "src": "5094:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 55612,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5094:23:64"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 55602,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 55598,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55593,
                                            "src": "5048:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "baseExpression": {
                                                "id": 55599,
                                                "name": "endDates",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55177,
                                                "src": "5052:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55601,
                                            "indexExpression": {
                                                "id": 55600,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55546,
                                                "src": "5061:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "5052:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5048:22:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 55614,
                                    "initializationExpression": {
                                        "assignments": [
                                            55593
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 55593,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "5022:1:64",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 55614,
                                                "src": "5014:9:64",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 55592,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5014:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 55597,
                                        "initialValue": {
                                            "baseExpression": {
                                                "id": 55594,
                                                "name": "startDates",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55173,
                                                "src": "5026:10:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55596,
                                            "indexExpression": {
                                                "id": 55595,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55546,
                                                "src": "5037:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "5026:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5014:32:64"
                                    },
                                    "isSimpleCounterLoop": false,
                                    "loopExpression": {
                                        "expression": {
                                            "id": 55605,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "id": 55603,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55593,
                                                "src": "5072:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "+=",
                                            "rightHandSide": {
                                                "hexValue": "31",
                                                "id": 55604,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5077:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "5072:6:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 55606,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5072:6:64"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "5010:119:64"
                                },
                                {
                                    "assignments": [
                                        55616
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55616,
                                            "mutability": "mutable",
                                            "name": "previousDate",
                                            "nameLocation": "5149:12:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55714,
                                            "src": "5141:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55615,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5141:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55620,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 55617,
                                            "name": "startDates",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55173,
                                            "src": "5164:10:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 55619,
                                        "indexExpression": {
                                            "id": 55618,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55546,
                                            "src": "5175:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "5164:20:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5141:43:64"
                                },
                                {
                                    "body": {
                                        "id": 55667,
                                        "nodeType": "Block",
                                        "src": "5249:384:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 55637,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "baseExpression": {
                                                                    "id": 55633,
                                                                    "name": "_intermediaryDates",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55549,
                                                                    "src": "5272:18:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                                        "typeString": "uint256[] calldata"
                                                                    }
                                                                },
                                                                "id": 55635,
                                                                "indexExpression": {
                                                                    "id": 55634,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55622,
                                                                    "src": "5291:1:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "5272:21:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": ">",
                                                            "rightExpression": {
                                                                "id": 55636,
                                                                "name": "previousDate",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 55616,
                                                                "src": "5296:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "5272:36:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "52656e74616c733a20696e7465726d656469617279206461746573206d75737420626520696e20617363656e64696e67206f72646572",
                                                            "id": 55638,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "string",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5310:56:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_stringliteral_aa64730e17f5149ace0bcda28f6f82bfeabf57962439c30fa7dbe2fb89a752db",
                                                                "typeString": "literal_string \"Rentals: intermediary dates must be in ascending order\""
                                                            },
                                                            "value": "Rentals: intermediary dates must be in ascending order"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_stringliteral_aa64730e17f5149ace0bcda28f6f82bfeabf57962439c30fa7dbe2fb89a752db",
                                                                "typeString": "literal_string \"Rentals: intermediary dates must be in ascending order\""
                                                            }
                                                        ],
                                                        "id": 55632,
                                                        "name": "require",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            -18,
                                                            -18
                                                        ],
                                                        "referencedDeclaration": -18,
                                                        "src": "5264:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                            "typeString": "function (bool,string memory) pure"
                                                        }
                                                    },
                                                    "id": 55639,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5264:103:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 55640,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5264:103:64"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 55648,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "baseExpression": {
                                                                    "id": 55642,
                                                                    "name": "_intermediaryDates",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55549,
                                                                    "src": "5390:18:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                                        "typeString": "uint256[] calldata"
                                                                    }
                                                                },
                                                                "id": 55644,
                                                                "indexExpression": {
                                                                    "id": 55643,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55622,
                                                                    "src": "5409:1:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "5390:21:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "<",
                                                            "rightExpression": {
                                                                "baseExpression": {
                                                                    "id": 55645,
                                                                    "name": "endDates",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55177,
                                                                    "src": "5414:8:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                                        "typeString": "mapping(uint256 => uint256)"
                                                                    }
                                                                },
                                                                "id": 55647,
                                                                "indexExpression": {
                                                                    "id": 55646,
                                                                    "name": "_tokenId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55546,
                                                                    "src": "5423:8:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "5414:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "5390:42:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "52656e74616c733a20696e7465726d656469617279206461746573206d757374206265206265666f72652074686520656e642064617465",
                                                            "id": 55649,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "string",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5434:57:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_stringliteral_8ff0cd7d18c8d5d10d7b7eb9a02efff28f336ec0e7a8ab37b120bc66e4eeeffd",
                                                                "typeString": "literal_string \"Rentals: intermediary dates must be before the end date\""
                                                            },
                                                            "value": "Rentals: intermediary dates must be before the end date"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_stringliteral_8ff0cd7d18c8d5d10d7b7eb9a02efff28f336ec0e7a8ab37b120bc66e4eeeffd",
                                                                "typeString": "literal_string \"Rentals: intermediary dates must be before the end date\""
                                                            }
                                                        ],
                                                        "id": 55641,
                                                        "name": "require",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            -18,
                                                            -18
                                                        ],
                                                        "referencedDeclaration": -18,
                                                        "src": "5382:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                            "typeString": "function (bool,string memory) pure"
                                                        }
                                                    },
                                                    "id": 55650,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5382:110:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 55651,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5382:110:64"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "id": 55653,
                                                                "name": "_msgSender",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 1556,
                                                                "src": "5520:10:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                                    "typeString": "function () view returns (address)"
                                                                }
                                                            },
                                                            "id": 55654,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5520:12:64",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "id": 55655,
                                                            "name": "previousDate",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55616,
                                                            "src": "5534:12:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "baseExpression": {
                                                                "id": 55656,
                                                                "name": "_intermediaryDates",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 55549,
                                                                "src": "5548:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                                    "typeString": "uint256[] calldata"
                                                                }
                                                            },
                                                            "id": 55658,
                                                            "indexExpression": {
                                                                "id": 55657,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 55622,
                                                                "src": "5567:1:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "5548:21:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 55652,
                                                        "name": "rentProperty",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55472,
                                                        "src": "5507:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (address,uint256,uint256) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 55659,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5507:63:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 55660,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5507:63:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 55665,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 55661,
                                                        "name": "previousDate",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 55616,
                                                        "src": "5585:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "baseExpression": {
                                                            "id": 55662,
                                                            "name": "_intermediaryDates",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55549,
                                                            "src": "5600:18:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                                "typeString": "uint256[] calldata"
                                                            }
                                                        },
                                                        "id": 55664,
                                                        "indexExpression": {
                                                            "id": 55663,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 55622,
                                                            "src": "5619:1:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "5600:21:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "5585:36:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 55666,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5585:36:64"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 55628,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 55625,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55622,
                                            "src": "5214:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 55626,
                                                "name": "_intermediaryDates",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55549,
                                                "src": "5218:18:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            },
                                            "id": 55627,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5237:6:64",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "5218:25:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5214:29:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 55668,
                                    "initializationExpression": {
                                        "assignments": [
                                            55622
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 55622,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "5207:1:64",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 55668,
                                                "src": "5199:9:64",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 55621,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5199:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 55624,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 55623,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5211:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5199:13:64"
                                    },
                                    "isSimpleCounterLoop": true,
                                    "loopExpression": {
                                        "expression": {
                                            "id": 55630,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "5245:3:64",
                                            "subExpression": {
                                                "id": 55629,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55622,
                                                "src": "5245:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 55631,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5245:3:64"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "5195:438:64"
                                },
                                {
                                    "assignments": [
                                        55670
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55670,
                                            "mutability": "mutable",
                                            "name": "amountLocked",
                                            "nameLocation": "5651:12:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55714,
                                            "src": "5643:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55669,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5643:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55677,
                                    "initialValue": {
                                        "baseExpression": {
                                            "baseExpression": {
                                                "id": 55671,
                                                "name": "amountsLockedForRentals",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55187,
                                                "src": "5666:23:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                                }
                                            },
                                            "id": 55674,
                                            "indexExpression": {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 55672,
                                                    "name": "_msgSender",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1556,
                                                    "src": "5690:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                        "typeString": "function () view returns (address)"
                                                    }
                                                },
                                                "id": 55673,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5690:12:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "5666:37:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 55676,
                                        "indexExpression": {
                                            "id": 55675,
                                            "name": "_tokenId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55546,
                                            "src": "5704:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "5666:47:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5643:70:64"
                                },
                                {
                                    "expression": {
                                        "id": 55685,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 55678,
                                                    "name": "amountsLockedForRentals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55187,
                                                    "src": "5724:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                                        "typeString": "mapping(address => mapping(uint256 => uint256))"
                                                    }
                                                },
                                                "id": 55682,
                                                "indexExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 55679,
                                                        "name": "_msgSender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1556,
                                                        "src": "5748:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                            "typeString": "function () view returns (address)"
                                                        }
                                                    },
                                                    "id": 55680,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5748:12:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "5724:37:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55683,
                                            "indexExpression": {
                                                "id": 55681,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55546,
                                                "src": "5762:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5724:47:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "30",
                                            "id": 55684,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5774:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "5724:51:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55686,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5724:51:64"
                                },
                                {
                                    "assignments": [
                                        55688
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 55688,
                                            "mutability": "mutable",
                                            "name": "lastTokenId",
                                            "nameLocation": "5796:11:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 55714,
                                            "src": "5788:19:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 55687,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5788:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 55697,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 55690,
                                                    "name": "_msgSender",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1556,
                                                    "src": "5823:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                        "typeString": "function () view returns (address)"
                                                    }
                                                },
                                                "id": 55691,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5823:12:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55692,
                                                "name": "previousDate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55616,
                                                "src": "5837:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "baseExpression": {
                                                    "id": 55693,
                                                    "name": "endDates",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55177,
                                                    "src": "5851:8:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 55695,
                                                "indexExpression": {
                                                    "id": 55694,
                                                    "name": "_tokenId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55546,
                                                    "src": "5860:8:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "5851:18:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 55689,
                                            "name": "rentProperty",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55472,
                                            "src": "5810:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (address,uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 55696,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5810:60:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5788:82:64"
                                },
                                {
                                    "expression": {
                                        "id": 55705,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 55698,
                                                    "name": "amountsLockedForRentals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55187,
                                                    "src": "5881:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                                        "typeString": "mapping(address => mapping(uint256 => uint256))"
                                                    }
                                                },
                                                "id": 55702,
                                                "indexExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 55699,
                                                        "name": "_msgSender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1556,
                                                        "src": "5905:10:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                            "typeString": "function () view returns (address)"
                                                        }
                                                    },
                                                    "id": 55700,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5905:12:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "5881:37:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 55703,
                                            "indexExpression": {
                                                "id": 55701,
                                                "name": "lastTokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55688,
                                                "src": "5919:11:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5881:50:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 55704,
                                            "name": "amountLocked",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55670,
                                            "src": "5934:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5881:65:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 55706,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5881:65:64"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 55708,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55546,
                                                "src": "5984:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 55709,
                                                    "name": "_msgSender",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1556,
                                                    "src": "5994:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                        "typeString": "function () view returns (address)"
                                                    }
                                                },
                                                "id": 55710,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5994:12:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 55711,
                                                "name": "_intermediaryDates",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55549,
                                                "src": "6008:18:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                                    "typeString": "uint256[] calldata"
                                                }
                                            ],
                                            "id": 55707,
                                            "name": "RentalSplit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55210,
                                            "src": "5972:11:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$__$",
                                                "typeString": "function (uint256,address,uint256[] memory)"
                                            }
                                        },
                                        "id": 55712,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5972:55:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 55713,
                                    "nodeType": "EmitStatement",
                                    "src": "5967:60:64"
                                }
                            ]
                        },
                        "functionSelector": "ceef12b6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "splitRental",
                        "nameLocation": "4518:11:64",
                        "parameters": {
                            "id": 55550,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55546,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "4538:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55715,
                                    "src": "4530:16:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 55545,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4530:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 55549,
                                    "mutability": "mutable",
                                    "name": "_intermediaryDates",
                                    "nameLocation": "4567:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55715,
                                    "src": "4548:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 55547,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4548:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 55548,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4548:9:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4529:57:64"
                        },
                        "returnParameters": {
                            "id": 55551,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4594:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55725,
                        "nodeType": "FunctionDefinition",
                        "src": "6053:92:64",
                        "nodes": [],
                        "body": {
                            "id": 55724,
                            "nodeType": "Block",
                            "src": "6104:41:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 55722,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55720,
                                            "name": "availableToRent",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55169,
                                            "src": "6115:15:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 55721,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6133:4:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "6115:22:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 55723,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6115:22:64"
                                }
                            ]
                        },
                        "functionSelector": "863a4689",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 55718,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 55717,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "6090:11:64"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 55225,
                                    "src": "6090:11:64"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6090:13:64"
                            }
                        ],
                        "name": "setAvailableToRent",
                        "nameLocation": "6062:18:64",
                        "parameters": {
                            "id": 55716,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6080:2:64"
                        },
                        "returnParameters": {
                            "id": 55719,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6104:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55735,
                        "nodeType": "FunctionDefinition",
                        "src": "6153:95:64",
                        "nodes": [],
                        "body": {
                            "id": 55734,
                            "nodeType": "Block",
                            "src": "6206:42:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 55732,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 55730,
                                            "name": "availableToRent",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55169,
                                            "src": "6217:15:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "66616c7365",
                                            "id": 55731,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6235:5:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "6217:23:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 55733,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6217:23:64"
                                }
                            ]
                        },
                        "functionSelector": "0b91edc5",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 55728,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 55727,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "6192:11:64"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 55225,
                                    "src": "6192:11:64"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6192:13:64"
                            }
                        ],
                        "name": "setUnavailableToRent",
                        "nameLocation": "6162:20:64",
                        "parameters": {
                            "id": 55726,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6182:2:64"
                        },
                        "returnParameters": {
                            "id": 55729,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6206:0:64"
                        },
                        "scope": 55782,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 55750,
                        "nodeType": "FunctionDefinition",
                        "src": "6272:179:64",
                        "nodes": [],
                        "body": {
                            "id": 55749,
                            "nodeType": "Block",
                            "src": "6338:113:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 55743,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 55740,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "6356:5:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 55741,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6362:7:64",
                                                "memberName": "chainid",
                                                "nodeType": "MemberAccess",
                                                "src": "6356:13:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 55742,
                                                "name": "INITIAL_CHAIN_ID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55152,
                                                "src": "6373:16:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "6356:33:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 55745,
                                                "name": "computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 55781,
                                                "src": "6419:22:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 55746,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6419:24:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 55747,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "6356:87:64",
                                        "trueExpression": {
                                            "id": 55744,
                                            "name": "INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 55154,
                                            "src": "6392:24:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 55739,
                                    "id": 55748,
                                    "nodeType": "Return",
                                    "src": "6349:94:64"
                                }
                            ]
                        },
                        "functionSelector": "3644e515",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "DOMAIN_SEPARATOR",
                        "nameLocation": "6281:16:64",
                        "parameters": {
                            "id": 55736,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6297:2:64"
                        },
                        "returnParameters": {
                            "id": 55739,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55738,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55750,
                                    "src": "6329:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 55737,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6329:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6328:9:64"
                        },
                        "scope": 55782,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 55781,
                        "nodeType": "FunctionDefinition",
                        "src": "6459:459:64",
                        "nodes": [],
                        "body": {
                            "id": 55780,
                            "nodeType": "Block",
                            "src": "6533:385:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                                                                "id": 55759,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "6635:84:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                                                                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                                                                },
                                                                "value": "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                                                                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                                                                }
                                                            ],
                                                            "id": 55758,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "6625:9:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 55760,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6625:95:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [],
                                                                        "expression": {
                                                                            "argumentTypes": [],
                                                                            "id": 55764,
                                                                            "name": "name",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 658,
                                                                            "src": "6759:4:64",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                                                                                "typeString": "function () view returns (string memory)"
                                                                            }
                                                                        },
                                                                        "id": 55765,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "6759:6:64",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    ],
                                                                    "id": 55763,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "6753:5:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 55762,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6753:5:64",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 55766,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6753:13:64",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 55761,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "6743:9:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 55767,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6743:24:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "31",
                                                                "id": 55769,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "6800:3:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                    "typeString": "literal_string \"1\""
                                                                },
                                                                "value": "1"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                    "typeString": "literal_string \"1\""
                                                                }
                                                            ],
                                                            "id": 55768,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "6790:9:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 55770,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6790:14:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 55771,
                                                            "name": "block",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -4,
                                                            "src": "6827:5:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_block",
                                                                "typeString": "block"
                                                            }
                                                        },
                                                        "id": 55772,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6833:7:64",
                                                        "memberName": "chainid",
                                                        "nodeType": "MemberAccess",
                                                        "src": "6827:13:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 55775,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "6871:4:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Rentals_$55782",
                                                                    "typeString": "contract Rentals"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_Rentals_$55782",
                                                                    "typeString": "contract Rentals"
                                                                }
                                                            ],
                                                            "id": 55774,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "6863:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 55773,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "6863:7:64",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 55776,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6863:13:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 55756,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "6592:3:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 55757,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "6596:6:64",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "6592:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 55777,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6592:303:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 55755,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -8,
                                            "src": "6564:9:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 55778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6564:346:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 55754,
                                    "id": 55779,
                                    "nodeType": "Return",
                                    "src": "6544:366:64"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "computeDomainSeparator",
                        "nameLocation": "6468:22:64",
                        "parameters": {
                            "id": 55751,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6490:2:64"
                        },
                        "returnParameters": {
                            "id": 55754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 55753,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 55781,
                                    "src": "6524:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 55752,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6524:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6523:9:64"
                        },
                        "scope": 55782,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 55147,
                            "name": "ERC721Upgradeable",
                            "nameLocations": [
                                "400:17:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 1528,
                            "src": "400:17:64"
                        },
                        "id": 55148,
                        "nodeType": "InheritanceSpecifier",
                        "src": "400:17:64"
                    },
                    {
                        "baseName": {
                            "id": 55149,
                            "name": "OwnableUpgradeable",
                            "nameLocations": [
                                "419:18:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 194,
                            "src": "419:18:64"
                        },
                        "id": 55150,
                        "nodeType": "InheritanceSpecifier",
                        "src": "419:18:64"
                    }
                ],
                "canonicalName": "Rentals",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    55782,
                    194,
                    1528,
                    1874,
                    4155,
                    4109,
                    1614,
                    5520,
                    1574,
                    448
                ],
                "name": "Rentals",
                "nameLocation": "389:7:64",
                "scope": 55783,
                "usedErrors": [
                    30,
                    35,
                    211,
                    214,
                    1832,
                    1837,
                    1846,
                    1851,
                    1856,
                    1863,
                    1868,
                    1873
                ],
                "usedEvents": [
                    41,
                    219,
                    4008,
                    4017,
                    4026,
                    55201,
                    55210
                ]
            }
        ],
        "license": "MIT"
    },
    "id": 64
}


export const RentalsABI = RentalsContract["abi"];