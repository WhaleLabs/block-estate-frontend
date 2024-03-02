const BlockEstateContract = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_erc6551Registry",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_erc6551Implementation",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_paymentToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_proxyImplementation",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
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
            "name": "erc6551Implementation",
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
            "name": "erc6551Registry",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC6551Registry"
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
            "name": "mintProject",
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
                    "name": "_rentalPriceperDay",
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
            "name": "projectsAccounts",
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
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "projectsCounter",
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
            "name": "projectsRentalsCollections",
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
                    "type": "address",
                    "internalType": "address"
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
            "name": "setRentalAvailable",
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
            "name": "setRentalUnavailable",
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
            "name": "ProjectMinted",
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
                    "name": "_rentalsCollection",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
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
        "object": "0x60806040523480156200001157600080fd5b5060405162002a1938038062002a19833981016040819052620000349162000199565b336040518060400160405280600b81526020016a426c6f636b45737461746560a81b81525060405180604001604052806006815260200165084989e8696b60d31b81525081600090816200008991906200029d565b5060016200009882826200029d565b5050506001600160a01b038116620000ca57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000d5816200012a565b50600980546001600160a01b039586166001600160a01b0319918216179091556008805494861694821694909417909355600a805492851692841692909217909155600b805491909316911617905562000369565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200019457600080fd5b919050565b60008060008060808587031215620001b057600080fd5b620001bb856200017c565b9350620001cb602086016200017c565b9250620001db604086016200017c565b9150620001eb606086016200017c565b905092959194509250565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200022157607f821691505b6020821081036200024257634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000298576000816000526020600020601f850160051c81016020861015620002735750805b601f850160051c820191505b8181101562000294578281556001016200027f565b5050505b505050565b81516001600160401b03811115620002b957620002b9620001f6565b620002d181620002ca84546200020c565b8462000248565b602080601f831160018114620003095760008415620002f05750858301515b600019600386901b1c1916600185901b17855562000294565b600085815260208120601f198616915b828110156200033a5788860151825594840194600190910190840162000319565b5085821015620003595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6126a080620003796000396000f3fe60806040523480156200001157600080fd5b5060043610620001b95760003560e01c806395d89b4111620000f5578063c87b56dd1162000097578063f2fde38b116200006e578063f2fde38b146200046a578063fa24e2f51462000481578063fe360ea5146200049857600080fd5b8063c87b56dd14620003f0578063e253f0391462000407578063e985e9c5146200041e57600080fd5b8063b3dd12a211620000cc578063b3dd12a214620003a1578063b88d4fde14620003c2578063bd1a790a14620003d957600080fd5b806395d89b4114620003475780639a11a0d71462000351578063a22cb465146200038a57600080fd5b806342842e0e116200015f57806370a08231116200013657806370a0823114620002f8578063715018a6146200031e5780638da5cb5b146200032857600080fd5b806342842e0e14620002915780636352211e14620002a85780636f4d776b14620002bf57600080fd5b8063081812fc1162000194578063081812fc146200024a578063095ea7b3146200026157806323b872dd146200027a57600080fd5b806301ffc9a714620001be578063056d5afe14620001ea57806306fdde031462000231575b600080fd5b620001d5620001cf366004620019a0565b620004a2565b60405190151581526020015b60405180910390f35b6009546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620001e1565b6200023b62000589565b604051620001e1919062001a32565b6200020b6200025b36600462001a47565b62000623565b620002786200027236600462001a84565b6200065c565b005b620002786200028b36600462001ab3565b6200066d565b62000278620002a236600462001ab3565b62000768565b6200020b620002b936600462001a47565b6200078a565b6200020b620002d036600462001a47565b600c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6200030f6200030936600462001af9565b62000797565b604051908152602001620001e1565b6200027862000814565b60065473ffffffffffffffffffffffffffffffffffffffff166200020b565b6200023b6200082c565b6200020b6200036236600462001a47565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002786200039b36600462001b19565b6200083d565b6008546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b62000278620003d336600462001b8a565b6200084a565b62000278620003ea36600462001a47565b62000866565b6200023b6200040136600462001a47565b620008ff565b6200030f6200041836600462001ce2565b6200097d565b620001d56200042f36600462001d5d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b620002786200047b36600462001af9565b62000cff565b620002786200049236600462001a47565b62000d69565b6200030f60075481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806200053657507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806200058357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600080546200059a9062001d90565b80601f0160208091040260200160405190810160405280929190818152602001828054620005c89062001d90565b8015620006195780601f10620005ed5761010080835404028352916020019162000619565b820191906000526020600020905b815481529060010190602001808311620005fb57829003601f168201915b5050505050905090565b6000620006308262000de6565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1662000583565b6200066982823362000e47565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216620006c3576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b6000620006d283833362000e56565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000762576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401620006ba565b50505050565b62000785838383604051806020016040528060008152506200084a565b505050565b6000620005838262000de6565b600073ffffffffffffffffffffffffffffffffffffffff8216620007eb576040517f89c62b6400000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6200081e62000fda565b6200082a60006200102f565b565b6060600180546200059a9062001d90565b62000669338383620010a6565b620008578484846200066d565b620007623385858585620011a5565b6200087062000fda565b6000818152600d60205260408082205481517f0b91edc5000000000000000000000000000000000000000000000000000000008152915173ffffffffffffffffffffffffffffffffffffffff90911692630b91edc5926004808201939182900301818387803b158015620008e357600080fd5b505af1158015620008f8573d6000803e3d6000fd5b5050505050565b60606200090c8262000de6565b5060006200092560408051602081019091526000815290565b9050600081511162000947576040518060200160405280600081525062000976565b806200095384620013aa565b6040516020016200096692919062001de5565b6040516020818303038152906040525b9392505050565b60006200098962000fda565b6007805490819060006200099d8362001e18565b9190505550620009ae30826200146f565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da7323b3600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1646308660006363110c4660e01b8f8f8f8f601260405160240162000a3a95949392919062001ec1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e089901b909216825262000ad196959493929160040162001f02565b6020604051808303816000875af115801562000af1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b17919062001f5b565b6000838152600c602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691909117909155600b54600a5492519495509293928116927fdb0e4544000000000000000000000000000000000000000000000000000000009262000bbb928e928e928e928e9291169030908e908c9060240162001f7b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905162000c459062001963565b62000c5292919062001fe9565b604051809103906000f08015801562000c6f573d6000803e3d6000fd5b506000848152600d602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff858116918217909255915193945090929085169186917f9850c01544aa89bb27d98e03fbe924a7d62b85f90dfb82ad4cdff781c9a0fd769190a45090979650505050505050565b62000d0962000fda565b73ffffffffffffffffffffffffffffffffffffffff811662000d5b576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b62000d66816200102f565b50565b62000d7362000fda565b6000818152600d60205260408082205481517f863a4689000000000000000000000000000000000000000000000000000000008152915173ffffffffffffffffffffffffffffffffffffffff9091169263863a4689926004808201939182900301818387803b158015620008e357600080fd5b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff168062000583576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101849052602401620006ba565b62000785838383600162001526565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562000e935762000e93818486620016fa565b73ffffffffffffffffffffffffffffffffffffffff81161562000f0c5762000ec060008560008062001526565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff85161562000f565773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60065473ffffffffffffffffffffffffffffffffffffffff1633146200082a576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401620006ba565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff82166200110d576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401620006ba565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15620008f8576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a02906200121d9088908890879087906004016200201a565b6020604051808303816000875af192505050801562001279575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620012769181019062002065565b60015b6200130d573d808015620012aa576040519150601f19603f3d011682016040523d82523d6000602084013e620012af565b606091505b50805160000362001305576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006ba565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014620013a2576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006ba565b505050505050565b60606000620013b983620017b0565b600101905060008167ffffffffffffffff811115620013dc57620013dc62001b5b565b6040519080825280601f01601f19166020018201604052801562001407576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200141157509392505050565b73ffffffffffffffffffffffffffffffffffffffff8216620014c1576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b6000620014d18383600062000e56565b905073ffffffffffffffffffffffffffffffffffffffff81161562000785576040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b808062001548575073ffffffffffffffffffffffffffffffffffffffff821615155b15620016a55760006200155b8462000de6565b905073ffffffffffffffffffffffffffffffffffffffff831615801590620015af57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015620015ef575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b1562001640576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602401620006ba565b8115620016a357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6200170783838362001899565b620007855773ffffffffffffffffffffffffffffffffffffffff83166200175e576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101829052602401620006ba565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260248101829052604401620006ba565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310620017fa577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062001827576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106200184657662386f26fc10000830492506010015b6305f5e10083106200185f576305f5e100830492506008015b61271083106200187457612710830492506004015b6064831062001887576064830492506002015b600a8310620005835760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff8316158015906200195b57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062001929575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b806200195b575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e5806200208683390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462000d6657600080fd5b600060208284031215620019b357600080fd5b8135620009768162001971565b60005b83811015620019dd578181015183820152602001620019c3565b50506000910152565b6000815180845262001a00816020860160208601620019c0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000620009766020830184620019e6565b60006020828403121562001a5a57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811462000d6657600080fd5b6000806040838503121562001a9857600080fd5b823562001aa58162001a61565b946020939093013593505050565b60008060006060848603121562001ac957600080fd5b833562001ad68162001a61565b9250602084013562001ae88162001a61565b929592945050506040919091013590565b60006020828403121562001b0c57600080fd5b8135620009768162001a61565b6000806040838503121562001b2d57600080fd5b823562001b3a8162001a61565b91506020830135801515811462001b5057600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121562001ba157600080fd5b843562001bae8162001a61565b9350602085013562001bc08162001a61565b925060408501359150606085013567ffffffffffffffff8082111562001be557600080fd5b818701915087601f83011262001bfa57600080fd5b81358181111562001c0f5762001c0f62001b5b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171562001c585762001c5862001b5b565b816040528281528a602084870101111562001c7257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008083601f84011262001ca957600080fd5b50813567ffffffffffffffff81111562001cc257600080fd5b60208301915083602082850101111562001cdb57600080fd5b9250929050565b60008060008060006060868803121562001cfb57600080fd5b853567ffffffffffffffff8082111562001d1457600080fd5b62001d2289838a0162001c96565b9097509550602088013591508082111562001d3c57600080fd5b5062001d4b8882890162001c96565b96999598509660400135949350505050565b6000806040838503121562001d7157600080fd5b823562001d7e8162001a61565b9150602083013562001b508162001a61565b600181811c9082168062001da557607f821691505b60208210810362001ddf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000835162001df9818460208801620019c0565b83519083019062001e0f818360208801620019c0565b01949350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362001e71577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60608152600062001ed760608301878962001e78565b828103602084015262001eec81868862001e78565b91505060ff831660408301529695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015283608083015260c060a083015262001f4f60c0830184620019e6565b98975050505050505050565b60006020828403121562001f6e57600080fd5b8151620009768162001a61565b60c08152600062001f9160c083018a8c62001e78565b828103602084015262001fa681898b62001e78565b73ffffffffffffffffffffffffffffffffffffffff978816604085015295871660608401525050608081019290925290921660a090920191909152949350505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006200195b6040830184620019e6565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200205b6080830184620019e6565b9695505050505050565b6000602082840312156200207857600080fd5b815162000976816200197156fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea2646970667358221220eda9285a15ab1794c7c841309fd0880e86b270ecc6a991e031826bddbf23732264736f6c63430008170033a2646970667358221220fc7de3ac184ebd20d6176f1d2436cec40112a4541fb3c0cdd7bbe76c3cdfb84864736f6c63430008170033",
        "sourceMap": "403:2424:60:-:0;;;952:441;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;735:10:24;1380:113:18;;;;;;;;;;;;;-1:-1:-1;;;1380:113:18;;;;;;;;;;;;;;;;-1:-1:-1;;;1380:113:18;;;1454:5;1446;:13;;;;;;:::i;:::-;-1:-1:-1;1469:7:18;:17;1479:7;1469;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:5;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:5;;1350:1;1322:31;;;3523:51:71;3496:18;;1322:31:5;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;1173:15:60::2;:53:::0;;-1:-1:-1;;;;;1173:53:60;;::::2;-1:-1:-1::0;;;;;;1173:53:60;;::::2;;::::0;;;1237:21:::2;:46:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;;1294:12:::2;:36:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;;1341:19:::2;:42:::0;;;;;::::2;::::0;::::2;;::::0;;403:2424;;2912:187:5;3004:6;;;-1:-1:-1;;;;;3020:17:5;;;-1:-1:-1;;;;;;3020:17:5;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:177:71:-;93:13;;-1:-1:-1;;;;;135:31:71;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:464::-;293:6;301;309;317;370:3;358:9;349:7;345:23;341:33;338:53;;;387:1;384;377:12;338:53;410:40;440:9;410:40;:::i;:::-;400:50;;469:49;514:2;503:9;499:18;469:49;:::i;:::-;459:59;;537:49;582:2;571:9;567:18;537:49;:::i;:::-;527:59;;605:49;650:2;639:9;635:18;605:49;:::i;:::-;595:59;;196:464;;;;;;;:::o;665:127::-;726:10;721:3;717:20;714:1;707:31;757:4;754:1;747:15;781:4;778:1;771:15;797:380;876:1;872:12;;;;919;;;940:61;;994:4;986:6;982:17;972:27;;940:61;1047:2;1039:6;1036:14;1016:18;1013:38;1010:161;;1093:10;1088:3;1084:20;1081:1;1074:31;1128:4;1125:1;1118:15;1156:4;1153:1;1146:15;1010:161;;797:380;;;:::o;1308:543::-;1410:2;1405:3;1402:11;1399:446;;;1446:1;1470:5;1467:1;1460:16;1514:4;1511:1;1501:18;1584:2;1572:10;1568:19;1565:1;1561:27;1555:4;1551:38;1620:4;1608:10;1605:20;1602:47;;;-1:-1:-1;1643:4:71;1602:47;1698:2;1693:3;1689:12;1686:1;1682:20;1676:4;1672:31;1662:41;;1753:82;1771:2;1764:5;1761:13;1753:82;;;1816:17;;;1797:1;1786:13;1753:82;;;1757:3;;;1399:446;1308:543;;;:::o;2027:1345::-;2147:10;;-1:-1:-1;;;;;2169:30:71;;2166:56;;;2202:18;;:::i;:::-;2231:97;2321:6;2281:38;2313:4;2307:11;2281:38;:::i;:::-;2275:4;2231:97;:::i;:::-;2383:4;;2440:2;2429:14;;2457:1;2452:663;;;;3159:1;3176:6;3173:89;;;-1:-1:-1;3228:19:71;;;3222:26;3173:89;-1:-1:-1;;1984:1:71;1980:11;;;1976:24;1972:29;1962:40;2008:1;2004:11;;;1959:57;3275:81;;2422:944;;2452:663;1255:1;1248:14;;;1292:4;1279:18;;-1:-1:-1;;2488:20:71;;;2606:236;2620:7;2617:1;2614:14;2606:236;;;2709:19;;;2703:26;2688:42;;2801:27;;;;2769:1;2757:14;;;;2636:19;;2606:236;;;2610:3;2870:6;2861:7;2858:19;2855:201;;;2931:19;;;2925:26;-1:-1:-1;;3014:1:71;3010:14;;;3026:3;3006:24;3002:37;2998:42;2983:58;2968:74;;2855:201;-1:-1:-1;;;;;3102:1:71;3086:14;;;3082:22;3069:36;;-1:-1:-1;2027:1345:71:o;3377:203::-;403:2424:60;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x60806040523480156200001157600080fd5b5060043610620001b95760003560e01c806395d89b4111620000f5578063c87b56dd1162000097578063f2fde38b116200006e578063f2fde38b146200046a578063fa24e2f51462000481578063fe360ea5146200049857600080fd5b8063c87b56dd14620003f0578063e253f0391462000407578063e985e9c5146200041e57600080fd5b8063b3dd12a211620000cc578063b3dd12a214620003a1578063b88d4fde14620003c2578063bd1a790a14620003d957600080fd5b806395d89b4114620003475780639a11a0d71462000351578063a22cb465146200038a57600080fd5b806342842e0e116200015f57806370a08231116200013657806370a0823114620002f8578063715018a6146200031e5780638da5cb5b146200032857600080fd5b806342842e0e14620002915780636352211e14620002a85780636f4d776b14620002bf57600080fd5b8063081812fc1162000194578063081812fc146200024a578063095ea7b3146200026157806323b872dd146200027a57600080fd5b806301ffc9a714620001be578063056d5afe14620001ea57806306fdde031462000231575b600080fd5b620001d5620001cf366004620019a0565b620004a2565b60405190151581526020015b60405180910390f35b6009546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620001e1565b6200023b62000589565b604051620001e1919062001a32565b6200020b6200025b36600462001a47565b62000623565b620002786200027236600462001a84565b6200065c565b005b620002786200028b36600462001ab3565b6200066d565b62000278620002a236600462001ab3565b62000768565b6200020b620002b936600462001a47565b6200078a565b6200020b620002d036600462001a47565b600c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6200030f6200030936600462001af9565b62000797565b604051908152602001620001e1565b6200027862000814565b60065473ffffffffffffffffffffffffffffffffffffffff166200020b565b6200023b6200082c565b6200020b6200036236600462001a47565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b620002786200039b36600462001b19565b6200083d565b6008546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b62000278620003d336600462001b8a565b6200084a565b62000278620003ea36600462001a47565b62000866565b6200023b6200040136600462001a47565b620008ff565b6200030f6200041836600462001ce2565b6200097d565b620001d56200042f36600462001d5d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b620002786200047b36600462001af9565b62000cff565b620002786200049236600462001a47565b62000d69565b6200030f60075481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806200053657507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806200058357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600080546200059a9062001d90565b80601f0160208091040260200160405190810160405280929190818152602001828054620005c89062001d90565b8015620006195780601f10620005ed5761010080835404028352916020019162000619565b820191906000526020600020905b815481529060010190602001808311620005fb57829003601f168201915b5050505050905090565b6000620006308262000de6565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1662000583565b6200066982823362000e47565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216620006c3576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b6000620006d283833362000e56565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000762576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401620006ba565b50505050565b62000785838383604051806020016040528060008152506200084a565b505050565b6000620005838262000de6565b600073ffffffffffffffffffffffffffffffffffffffff8216620007eb576040517f89c62b6400000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6200081e62000fda565b6200082a60006200102f565b565b6060600180546200059a9062001d90565b62000669338383620010a6565b620008578484846200066d565b620007623385858585620011a5565b6200087062000fda565b6000818152600d60205260408082205481517f0b91edc5000000000000000000000000000000000000000000000000000000008152915173ffffffffffffffffffffffffffffffffffffffff90911692630b91edc5926004808201939182900301818387803b158015620008e357600080fd5b505af1158015620008f8573d6000803e3d6000fd5b5050505050565b60606200090c8262000de6565b5060006200092560408051602081019091526000815290565b9050600081511162000947576040518060200160405280600081525062000976565b806200095384620013aa565b6040516020016200096692919062001de5565b6040516020818303038152906040525b9392505050565b60006200098962000fda565b6007805490819060006200099d8362001e18565b9190505550620009ae30826200146f565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da7323b3600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1646308660006363110c4660e01b8f8f8f8f601260405160240162000a3a95949392919062001ec1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e089901b909216825262000ad196959493929160040162001f02565b6020604051808303816000875af115801562000af1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000b17919062001f5b565b6000838152600c602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85811691909117909155600b54600a5492519495509293928116927fdb0e4544000000000000000000000000000000000000000000000000000000009262000bbb928e928e928e928e9291169030908e908c9060240162001f7b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905162000c459062001963565b62000c5292919062001fe9565b604051809103906000f08015801562000c6f573d6000803e3d6000fd5b506000848152600d602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff858116918217909255915193945090929085169186917f9850c01544aa89bb27d98e03fbe924a7d62b85f90dfb82ad4cdff781c9a0fd769190a45090979650505050505050565b62000d0962000fda565b73ffffffffffffffffffffffffffffffffffffffff811662000d5b576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b62000d66816200102f565b50565b62000d7362000fda565b6000818152600d60205260408082205481517f863a4689000000000000000000000000000000000000000000000000000000008152915173ffffffffffffffffffffffffffffffffffffffff9091169263863a4689926004808201939182900301818387803b158015620008e357600080fd5b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff168062000583576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101849052602401620006ba565b62000785838383600162001526565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562000e935762000e93818486620016fa565b73ffffffffffffffffffffffffffffffffffffffff81161562000f0c5762000ec060008560008062001526565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff85161562000f565773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60065473ffffffffffffffffffffffffffffffffffffffff1633146200082a576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401620006ba565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff82166200110d576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401620006ba565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15620008f8576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a02906200121d9088908890879087906004016200201a565b6020604051808303816000875af192505050801562001279575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620012769181019062002065565b60015b6200130d573d808015620012aa576040519150601f19603f3d011682016040523d82523d6000602084013e620012af565b606091505b50805160000362001305576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006ba565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014620013a2576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006ba565b505050505050565b60606000620013b983620017b0565b600101905060008167ffffffffffffffff811115620013dc57620013dc62001b5b565b6040519080825280601f01601f19166020018201604052801562001407576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200141157509392505050565b73ffffffffffffffffffffffffffffffffffffffff8216620014c1576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b6000620014d18383600062000e56565b905073ffffffffffffffffffffffffffffffffffffffff81161562000785576040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260006004820152602401620006ba565b808062001548575073ffffffffffffffffffffffffffffffffffffffff821615155b15620016a55760006200155b8462000de6565b905073ffffffffffffffffffffffffffffffffffffffff831615801590620015af57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015620015ef575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b1562001640576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602401620006ba565b8115620016a357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6200170783838362001899565b620007855773ffffffffffffffffffffffffffffffffffffffff83166200175e576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101829052602401620006ba565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260248101829052604401620006ba565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310620017fa577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062001827576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106200184657662386f26fc10000830492506010015b6305f5e10083106200185f576305f5e100830492506008015b61271083106200187457612710830492506004015b6064831062001887576064830492506002015b600a8310620005835760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff8316158015906200195b57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062001929575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b806200195b575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e5806200208683390190565b7fffffffff000000000000000000000000000000000000000000000000000000008116811462000d6657600080fd5b600060208284031215620019b357600080fd5b8135620009768162001971565b60005b83811015620019dd578181015183820152602001620019c3565b50506000910152565b6000815180845262001a00816020860160208601620019c0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000620009766020830184620019e6565b60006020828403121562001a5a57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811462000d6657600080fd5b6000806040838503121562001a9857600080fd5b823562001aa58162001a61565b946020939093013593505050565b60008060006060848603121562001ac957600080fd5b833562001ad68162001a61565b9250602084013562001ae88162001a61565b929592945050506040919091013590565b60006020828403121562001b0c57600080fd5b8135620009768162001a61565b6000806040838503121562001b2d57600080fd5b823562001b3a8162001a61565b91506020830135801515811462001b5057600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121562001ba157600080fd5b843562001bae8162001a61565b9350602085013562001bc08162001a61565b925060408501359150606085013567ffffffffffffffff8082111562001be557600080fd5b818701915087601f83011262001bfa57600080fd5b81358181111562001c0f5762001c0f62001b5b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171562001c585762001c5862001b5b565b816040528281528a602084870101111562001c7257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008083601f84011262001ca957600080fd5b50813567ffffffffffffffff81111562001cc257600080fd5b60208301915083602082850101111562001cdb57600080fd5b9250929050565b60008060008060006060868803121562001cfb57600080fd5b853567ffffffffffffffff8082111562001d1457600080fd5b62001d2289838a0162001c96565b9097509550602088013591508082111562001d3c57600080fd5b5062001d4b8882890162001c96565b96999598509660400135949350505050565b6000806040838503121562001d7157600080fd5b823562001d7e8162001a61565b9150602083013562001b508162001a61565b600181811c9082168062001da557607f821691505b60208210810362001ddf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000835162001df9818460208801620019c0565b83519083019062001e0f818360208801620019c0565b01949350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362001e71577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60608152600062001ed760608301878962001e78565b828103602084015262001eec81868862001e78565b91505060ff831660408301529695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015283608083015260c060a083015262001f4f60c0830184620019e6565b98975050505050505050565b60006020828403121562001f6e57600080fd5b8151620009768162001a61565b60c08152600062001f9160c083018a8c62001e78565b828103602084015262001fa681898b62001e78565b73ffffffffffffffffffffffffffffffffffffffff978816604085015295871660608401525050608081019290925290921660a090920191909152949350505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006200195b6040830184620019e6565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526200205b6080830184620019e6565b9695505050505050565b6000602082840312156200207857600080fd5b815162000976816200197156fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea2646970667358221220eda9285a15ab1794c7c841309fd0880e86b270ecc6a991e031826bddbf23732264736f6c63430008170033a2646970667358221220fc7de3ac184ebd20d6176f1d2436cec40112a4541fb3c0cdd7bbe76c3cdfb84864736f6c63430008170033",
        "sourceMap": "403:2424:60:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1560:300:18;;;;;;:::i;:::-;;:::i;:::-;;;611:14:71;;604:22;586:41;;574:2;559:18;1560:300:18;;;;;;;;556:39:60;;;;;;;;;;;;840:42:71;828:55;;;810:74;;798:2;783:18;556:39:60;638:252:71;2364:89:18;;;:::i;:::-;;;;;;;:::i;3496:154::-;;;;;;:::i;:::-;;:::i;3322:113::-;;;;;;:::i;:::-;;:::i;:::-;;4142:578;;;;;;:::i;:::-;;:::i;4786:132::-;;;;;;:::i;:::-;;:::i;2184:118::-;;;;;;:::i;:::-;;:::i;822:51:60:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1919:208:18;;;;;;:::i;:::-;;:::i;:::-;;;3464:25:71;;;3452:2;3437:18;1919:208:18;3318:177:71;2293:101:5;;;:::i;1638:85::-;1710:6;;;;1638:85;;2517:93:18;;;:::i;880:61:60:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3717:144:18;;;;;;:::i;:::-;;:::i;513:36:60:-;;;;;;;;;4984:233:18;;;;;;:::i;:::-;;:::i;2668:154:60:-;;;;;;:::i;:::-;;:::i;2676:255:18:-;;;;;;:::i;:::-;;:::i;1401:1101:60:-;;;;;;:::i;:::-;;:::i;3927:153:18:-;;;;;;:::i;:::-;4038:25;;;;4015:4;4038:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;3927:153;2543:215:5;;;;;;:::i;:::-;;:::i;2510:150:60:-;;;;;;:::i;:::-;;:::i;476:30::-;;;;;;1560:300:18;1662:4;1697:40;;;1712:25;1697:40;;:104;;-1:-1:-1;1753:48:18;;;1768:33;1753:48;1697:104;:156;;;-1:-1:-1;877:25:31;862:40;;;;1817:36:18;1678:175;1560:300;-1:-1:-1;;1560:300:18:o;2364:89::-;2409:13;2441:5;2434:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:89;:::o;3496:154::-;3563:7;3582:22;3596:7;3582:13;:22::i;:::-;-1:-1:-1;6033:7:18;6059:24;;;:15;:24;;;;;;;;3622:21;5963:127;3322:113;3393:35;3402:2;3406:7;735:10:24;3393:8:18;:35::i;:::-;3322:113;;:::o;4142:578::-;4236:16;;;4232:87;;4275:33;;;;;4305:1;4275:33;;;810:74:71;783:18;;4275:33:18;;;;;;;;4232:87;4537:21;4561:34;4569:2;4573:7;735:10:24;4561:7:18;:34::i;:::-;4537:58;;4626:4;4609:21;;:13;:21;;;4605:109;;4653:50;;;;;7634:42:71;7703:15;;;4653:50:18;;;7685:34:71;7735:18;;;7728:34;;;7798:15;;7778:18;;;7771:43;7597:18;;4653:50:18;7422:398:71;4605:109:18;4222:498;4142:578;;;:::o;4786:132::-;4872:39;4889:4;4895:2;4899:7;4872:39;;;;;;;;;;;;:16;:39::i;:::-;4786:132;;;:::o;2184:118::-;2247:7;2273:22;2287:7;2273:13;:22::i;1919:208::-;1982:7;2005:19;;;2001:87;;2047:30;;;;;2074:1;2047:30;;;810:74:71;783:18;;2047:30:18;638:252:71;2001:87:18;-1:-1:-1;2104:16:18;;;;;;:9;:16;;;;;;;1919:208::o;2293:101:5:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;2517:93:18:-;2564:13;2596:7;2589:14;;;;;:::i;3717:144::-;3802:52;735:10:24;3835:8:18;3845;3802:18;:52::i;4984:233::-;5097:31;5110:4;5116:2;5120:7;5097:12;:31::i;:::-;5138:72;735:10:24;5186:4:18;5192:2;5196:7;5205:4;5138:33;:72::i;2668:154:60:-;1531:13:5;:11;:13::i;:::-;2754:36:60::1;::::0;;;:26:::1;:36;::::0;;;;;;2746:68;;;;;;;2754:36:::1;::::0;;::::1;::::0;2746:66:::1;::::0;:68:::1;::::0;;::::1;::::0;;;;;;;2754:36;;2746:68;::::1;;::::0;::::1;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;2668:154:::0;:::o;2676:255:18:-;2740:13;2765:22;2779:7;2765:13;:22::i;:::-;;2798:21;2822:10;3249:9;;;;;;;;;-1:-1:-1;3249:9:18;;;3173:92;2822:10;2798:34;;2873:1;2855:7;2849:21;:25;:75;;;;;;;;;;;;;;;;;2891:7;2900:18;:7;:16;:18::i;:::-;2877:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2849:75;2842:82;2676:255;-1:-1:-1;;;2676:255:18:o;1401:1101:60:-;1526:7;1531:13:5;:11;:13::i;:::-;1563:15:60::1;::::0;;;;;1545::::1;1591:17;1563:15:::0;1591:17:::1;:::i;:::-;;;;;;1621:29;1635:4;1642:7;1621:5;:29::i;:::-;1663:22;1688:15;;;;;;;;;;;:29;;;1740:21;;;;;;;;;;;1777:13;1813:4;1833:7;1855:1;1894:46;;;1955:5;;1962:7;;1971:2;1871:103;;;;;;;;;;;;:::i;:::-;;::::0;;;;;::::1;::::0;;;;;;::::1;::::0;::::1;::::0;;::::1;;::::0;;;::::1;;::::0;;1688:297;::::1;::::0;;;;;;;;::::1;::::0;;;;;;::::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1996:25;::::0;;;:16:::1;:25;::::0;;;;;:42;;;::::1;;::::0;;::::1;::::0;;;::::1;::::0;;;2098:19:::1;::::0;2234:12:::1;::::0;2132:167;;1996:42;;-1:-1:-1;1996:25:60;;2098:19;;::::1;::::0;2155:39;;2132:167:::1;::::0;2210:5;;;;2217:7;;;;2234:12;::::1;::::0;2257:4:::1;::::0;2264:18;;1996:42;;2132:167:::1;;;:::i;:::-;;::::0;;;;;::::1;::::0;;;;;;::::1;::::0;::::1;::::0;;::::1;;::::0;;;::::1;::::0;;;::::1;::::0;;;2082:228;;::::1;::::0;::::1;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;2323:35:60::1;::::0;;;:26:::1;:35;::::0;;;;;:63;;;::::1;;::::0;;::::1;::::0;;::::1;::::0;;;2404:65;;2323:63;;-1:-1:-1;2323:63:60;;2404:65;;::::1;::::0;2323:35;;2404:65:::1;::::0;2323:35;2404:65:::1;-1:-1:-1::0;2487:7:60;;1401:1101;-1:-1:-1;;;;;;;1401:1101:60:o;2543:215:5:-;1531:13;:11;:13::i;:::-;2627:22:::1;::::0;::::1;2623:91;;2672:31;::::0;::::1;::::0;;2700:1:::1;2672:31;::::0;::::1;810:74:71::0;783:18;;2672:31:5::1;638:252:71::0;2623:91:5::1;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;2510:150:60:-;1531:13:5;:11;:13::i;:::-;2594:36:60::1;::::0;;;:26:::1;:36;::::0;;;;;;2586:66;;;;;;;2594:36:::1;::::0;;::::1;::::0;2586:64:::1;::::0;:66:::1;::::0;;::::1;::::0;;;;;;;2594:36;;2586:66;::::1;;::::0;::::1;;;;::::0;::::1;16214:241:18::0;16277:7;5824:16;;;:7;:16;;;;;;;;;16339:88;;16385:31;;;;;;;;3464:25:71;;;3437:18;;16385:31:18;3318:177:71;14494:120:18;14574:33;14583:2;14587:7;14596:4;14602;14574:8;:33::i;8863:795::-;8949:7;5824:16;;;:7;:16;;;;;;;;;;;9060:18;;;9056:86;;9094:37;9111:4;9117;9123:7;9094:16;:37::i;:::-;9186:18;;;;9182:256;;9302:48;9319:1;9323:7;9340:1;9344:5;9302:8;:48::i;:::-;9393:15;;;;;;;:9;:15;;;;;:20;;;;;;9182:256;9452:16;;;;9448:107;;9512:13;;;;;;;:9;:13;;;;;:18;;9529:1;9512:18;;;9448:107;9565:16;;;;:7;:16;;;;;;:21;;;;;;;;;;;;;;9602:27;;9565:16;;9602:27;;;;;;;9647:4;8863:795;-1:-1:-1;;;;8863:795:18:o;1796:162:5:-;1710:6;;1855:23;1710:6;735:10:24;1855:23:5;1851:101;;1901:40;;;;;735:10:24;1901:40:5;;;810:74:71;783:18;;1901:40:5;638:252:71;2912:187:5;3004:6;;;;3020:17;;;;;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;15667:312:18:-;15774:22;;;15770:91;;15819:31;;;;;840:42:71;828:55;;15819:31:18;;;810:74:71;783:18;;15819:31:18;638:252:71;15770:91:18;15870:25;;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;;;;;;;;;;;;15931:41;;586::71;;;15931::18;;559:18:71;15931:41:18;;;;;;;15667:312;;;:::o;873:963:22:-;1053:14;;;;:18;1049:781;;1091:67;;;;;:36;;;;;;:67;;1128:8;;1138:4;;1144:7;;1153:4;;1091:67;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1091:67:22;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1087:733;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1448:6;:13;1465:1;1448:18;1444:362;;1552:39;;;;;840:42:71;828:55;;1552:39:22;;;810:74:71;783:18;;1552:39:22;638:252:71;1444:362:22;1758:6;1752:13;1743:6;1739:2;1735:15;1728:38;1087:733;1205:51;;;1215:41;1205:51;1201:182;;1325:39;;;;;840:42:71;828:55;;1325:39:22;;;810:74:71;783:18;;1325:39:22;638:252:71;1201:182:22;1159:238;873:963;;;;;:::o;637:698:28:-;693:13;742:14;759:17;770:5;759:10;:17::i;:::-;779:1;759:21;742:38;;794:20;828:6;817:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;817:18:28;-1:-1:-1;794:41:28;-1:-1:-1;955:28:28;;;971:2;955:28;1010:282;1041:5;;1180:10;1175:2;1164:14;;1159:32;1041:5;1146:46;1236:2;1227:11;;;-1:-1:-1;1256:21:28;1010:282;1256:21;-1:-1:-1;1312:6:28;637:698;-1:-1:-1;;;637:698:28:o;9980:327:18:-;10047:16;;;10043:87;;10086:33;;;;;10116:1;10086:33;;;810:74:71;783:18;;10086:33:18;638:252:71;10043:87:18;10139:21;10163:32;10171:2;10175:7;10192:1;10163:7;:32::i;:::-;10139:56;-1:-1:-1;10209:27:18;;;;10205:96;;10259:31;;;;;10287:1;10259:31;;;810:74:71;783:18;;10259:31:18;638:252:71;14796:662:18;14956:9;:31;;;-1:-1:-1;14969:18:18;;;;;14956:31;14952:460;;;15003:13;15019:22;15033:7;15019:13;:22::i;:::-;15003:38;-1:-1:-1;15169:18:18;;;;;;;:35;;;15200:4;15191:13;;:5;:13;;;;15169:35;:69;;;;-1:-1:-1;4038:25:18;;;;4015:4;4038:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;15208:30;15169:69;15165:142;;;15265:27;;;;;840:42:71;828:55;;15265:27:18;;;810:74:71;783:18;;15265:27:18;638:252:71;15165:142:18;15325:9;15321:81;;;15379:7;15375:2;15359:28;;15368:5;15359:28;;;;;;;;;;;;15321:81;14989:423;14952:460;-1:-1:-1;;15422:24:18;;;;:15;:24;;;;;:29;;;;;;;;;;;;;;;14796:662::o;7107:368::-;7219:38;7233:5;7240:7;7249;7219:13;:38::i;:::-;7214:255;;7277:19;;;7273:186;;7323:31;;;;;;;;3464:25:71;;;3437:18;;7323:31:18;3318:177:71;7273:186:18;7400:44;;;;;12792:42:71;12780:55;;7400:44:18;;;12762:74:71;12852:18;;;12845:34;;;12735:18;;7400:44:18;12588:297:71;23958:916:33;24011:7;;24095:8;24086:17;;24082:103;;24132:8;24123:17;;;-1:-1:-1;24168:2:33;24158:12;24082:103;24211:8;24202:5;:17;24198:103;;24248:8;24239:17;;;-1:-1:-1;24284:2:33;24274:12;24198:103;24327:8;24318:5;:17;24314:103;;24364:8;24355:17;;;-1:-1:-1;24400:2:33;24390:12;24314:103;24443:7;24434:5;:16;24430:100;;24479:7;24470:16;;;-1:-1:-1;24514:1:33;24504:11;24430:100;24556:7;24547:5;:16;24543:100;;24592:7;24583:16;;;-1:-1:-1;24627:1:33;24617:11;24543:100;24669:7;24660:5;:16;24656:100;;24705:7;24696:16;;;-1:-1:-1;24740:1:33;24730:11;24656:100;24782:7;24773:5;:16;24769:66;;24819:1;24809:11;24861:6;23958:916;-1:-1:-1;;23958:916:33:o;6401:272:18:-;6504:4;6539:21;;;;;;;:127;;;6586:7;6577:16;;:5;:16;;;:52;;;-1:-1:-1;4038:25:18;;;;4015:4;4038:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;6597:32;6577:88;;;-1:-1:-1;6033:7:18;6059:24;;;:15;:24;;;;;;6633:32;;;;6059:24;;6633:32;6577:88;6520:146;6401:272;-1:-1:-1;;;;6401:272:18:o;-1:-1:-1:-;;;;;;;;:::o;14:177:71:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;895:250::-;980:1;990:113;1004:6;1001:1;998:13;990:113;;;1080:11;;;1074:18;1061:11;;;1054:39;1026:2;1019:10;990:113;;;-1:-1:-1;;1137:1:71;1119:16;;1112:27;895:250::o;1150:330::-;1192:3;1230:5;1224:12;1257:6;1252:3;1245:19;1273:76;1342:6;1335:4;1330:3;1326:14;1319:4;1312:5;1308:16;1273:76;:::i;:::-;1394:2;1382:15;1399:66;1378:88;1369:98;;;;1469:4;1365:109;;1150:330;-1:-1:-1;;1150:330:71:o;1485:220::-;1634:2;1623:9;1616:21;1597:4;1654:45;1695:2;1684:9;1680:18;1672:6;1654:45;:::i;1710:180::-;1769:6;1822:2;1810:9;1801:7;1797:23;1793:32;1790:52;;;1838:1;1835;1828:12;1790:52;-1:-1:-1;1861:23:71;;1710:180;-1:-1:-1;1710:180:71:o;2126:154::-;2212:42;2205:5;2201:54;2194:5;2191:65;2181:93;;2270:1;2267;2260:12;2285:315;2353:6;2361;2414:2;2402:9;2393:7;2389:23;2385:32;2382:52;;;2430:1;2427;2420:12;2382:52;2469:9;2456:23;2488:31;2513:5;2488:31;:::i;:::-;2538:5;2590:2;2575:18;;;;2562:32;;-1:-1:-1;;;2285:315:71:o;2605:456::-;2682:6;2690;2698;2751:2;2739:9;2730:7;2726:23;2722:32;2719:52;;;2767:1;2764;2757:12;2719:52;2806:9;2793:23;2825:31;2850:5;2825:31;:::i;:::-;2875:5;-1:-1:-1;2932:2:71;2917:18;;2904:32;2945:33;2904:32;2945:33;:::i;:::-;2605:456;;2997:7;;-1:-1:-1;;;3051:2:71;3036:18;;;;3023:32;;2605:456::o;3066:247::-;3125:6;3178:2;3166:9;3157:7;3153:23;3149:32;3146:52;;;3194:1;3191;3184:12;3146:52;3233:9;3220:23;3252:31;3277:5;3252:31;:::i;3500:416::-;3565:6;3573;3626:2;3614:9;3605:7;3601:23;3597:32;3594:52;;;3642:1;3639;3632:12;3594:52;3681:9;3668:23;3700:31;3725:5;3700:31;:::i;:::-;3750:5;-1:-1:-1;3807:2:71;3792:18;;3779:32;3849:15;;3842:23;3830:36;;3820:64;;3880:1;3877;3870:12;3820:64;3903:7;3893:17;;;3500:416;;;;;:::o;3921:184::-;3973:77;3970:1;3963:88;4070:4;4067:1;4060:15;4094:4;4091:1;4084:15;4110:1325;4205:6;4213;4221;4229;4282:3;4270:9;4261:7;4257:23;4253:33;4250:53;;;4299:1;4296;4289:12;4250:53;4338:9;4325:23;4357:31;4382:5;4357:31;:::i;:::-;4407:5;-1:-1:-1;4464:2:71;4449:18;;4436:32;4477:33;4436:32;4477:33;:::i;:::-;4529:7;-1:-1:-1;4583:2:71;4568:18;;4555:32;;-1:-1:-1;4638:2:71;4623:18;;4610:32;4661:18;4691:14;;;4688:34;;;4718:1;4715;4708:12;4688:34;4756:6;4745:9;4741:22;4731:32;;4801:7;4794:4;4790:2;4786:13;4782:27;4772:55;;4823:1;4820;4813:12;4772:55;4859:2;4846:16;4881:2;4877;4874:10;4871:36;;;4887:18;;:::i;:::-;5021:2;5015:9;5083:4;5075:13;;4926:66;5071:22;;;5095:2;5067:31;5063:40;5051:53;;;5119:18;;;5139:22;;;5116:46;5113:72;;;5165:18;;:::i;:::-;5205:10;5201:2;5194:22;5240:2;5232:6;5225:18;5280:7;5275:2;5270;5266;5262:11;5258:20;5255:33;5252:53;;;5301:1;5298;5291:12;5252:53;5357:2;5352;5348;5344:11;5339:2;5331:6;5327:15;5314:46;5402:1;5397:2;5392;5384:6;5380:15;5376:24;5369:35;5423:6;5413:16;;;;;;;4110:1325;;;;;;;:::o;5440:348::-;5492:8;5502:6;5556:3;5549:4;5541:6;5537:17;5533:27;5523:55;;5574:1;5571;5564:12;5523:55;-1:-1:-1;5597:20:71;;5640:18;5629:30;;5626:50;;;5672:1;5669;5662:12;5626:50;5709:4;5701:6;5697:17;5685:29;;5761:3;5754:4;5745:6;5737;5733:19;5729:30;5726:39;5723:59;;;5778:1;5775;5768:12;5723:59;5440:348;;;;;:::o;5793:789::-;5894:6;5902;5910;5918;5926;5979:2;5967:9;5958:7;5954:23;5950:32;5947:52;;;5995:1;5992;5985:12;5947:52;6035:9;6022:23;6064:18;6105:2;6097:6;6094:14;6091:34;;;6121:1;6118;6111:12;6091:34;6160:59;6211:7;6202:6;6191:9;6187:22;6160:59;:::i;:::-;6238:8;;-1:-1:-1;6134:85:71;-1:-1:-1;6326:2:71;6311:18;;6298:32;;-1:-1:-1;6342:16:71;;;6339:36;;;6371:1;6368;6361:12;6339:36;;6410:61;6463:7;6452:8;6441:9;6437:24;6410:61;:::i;:::-;5793:789;;;;-1:-1:-1;6490:8:71;6572:2;6557:18;6544:32;;5793:789;-1:-1:-1;;;;5793:789:71:o;6587:388::-;6655:6;6663;6716:2;6704:9;6695:7;6691:23;6687:32;6684:52;;;6732:1;6729;6722:12;6684:52;6771:9;6758:23;6790:31;6815:5;6790:31;:::i;:::-;6840:5;-1:-1:-1;6897:2:71;6882:18;;6869:32;6910:33;6869:32;6910:33;:::i;6980:437::-;7059:1;7055:12;;;;7102;;;7123:61;;7177:4;7169:6;7165:17;7155:27;;7123:61;7230:2;7222:6;7219:14;7199:18;7196:38;7193:218;;7267:77;7264:1;7257:88;7368:4;7365:1;7358:15;7396:4;7393:1;7386:15;7193:218;;6980:437;;;:::o;7825:496::-;8004:3;8042:6;8036:13;8058:66;8117:6;8112:3;8105:4;8097:6;8093:17;8058:66;:::i;:::-;8187:13;;8146:16;;;;8209:70;8187:13;8146:16;8256:4;8244:17;;8209:70;:::i;:::-;8295:20;;7825:496;-1:-1:-1;;;;7825:496:71:o;8326:349::-;8365:3;8396:66;8389:5;8386:77;8383:257;;8496:77;8493:1;8486:88;8597:4;8594:1;8587:15;8625:4;8622:1;8615:15;8383:257;-1:-1:-1;8667:1:71;8656:13;;8326:349::o;8680:326::-;8769:6;8764:3;8757:19;8821:6;8814:5;8807:4;8802:3;8798:14;8785:43;;8873:1;8866:4;8857:6;8852:3;8848:16;8844:27;8837:38;8739:3;8995:4;8925:66;8920:2;8912:6;8908:15;8904:88;8899:3;8895:98;8891:109;8884:116;;8680:326;;;;:::o;9011:526::-;9263:2;9252:9;9245:21;9226:4;9289:62;9347:2;9336:9;9332:18;9324:6;9316;9289:62;:::i;:::-;9399:9;9391:6;9387:22;9382:2;9371:9;9367:18;9360:50;9427;9470:6;9462;9454;9427:50;:::i;:::-;9419:58;;;9525:4;9517:6;9513:17;9508:2;9497:9;9493:18;9486:45;9011:526;;;;;;;;:::o;9542:664::-;9800:4;9829:42;9910:2;9902:6;9898:15;9887:9;9880:34;9950:6;9945:2;9934:9;9930:18;9923:34;10005:2;9997:6;9993:15;9988:2;9977:9;9973:18;9966:43;;10045:6;10040:2;10029:9;10025:18;10018:34;10089:6;10083:3;10072:9;10068:19;10061:35;10133:3;10127;10116:9;10112:19;10105:32;10154:46;10195:3;10184:9;10180:19;10172:6;10154:46;:::i;:::-;10146:54;9542:664;-1:-1:-1;;;;;;;;9542:664:71:o;10211:251::-;10281:6;10334:2;10322:9;10313:7;10309:23;10305:32;10302:52;;;10350:1;10347;10340:12;10302:52;10382:9;10376:16;10401:31;10426:5;10401:31;:::i;10467:813::-;10796:3;10785:9;10778:22;10759:4;10823:63;10881:3;10870:9;10866:19;10858:6;10850;10823:63;:::i;:::-;10934:9;10926:6;10922:22;10917:2;10906:9;10902:18;10895:50;10962;11005:6;10997;10989;10962:50;:::i;:::-;11031:42;11109:15;;;11104:2;11089:18;;11082:43;11161:15;;;11156:2;11141:18;;11134:43;-1:-1:-1;;11208:3:71;11193:19;;11186:35;;;;11258:15;;;11252:3;11237:19;;;11230:44;;;;10954:58;10467:813;-1:-1:-1;;;;10467:813:71:o;11285:338::-;11472:42;11464:6;11460:55;11449:9;11442:74;11552:2;11547;11536:9;11532:18;11525:30;11423:4;11572:45;11613:2;11602:9;11598:18;11590:6;11572:45;:::i;11628:512::-;11822:4;11851:42;11932:2;11924:6;11920:15;11909:9;11902:34;11984:2;11976:6;11972:15;11967:2;11956:9;11952:18;11945:43;;12024:6;12019:2;12008:9;12004:18;11997:34;12067:3;12062:2;12051:9;12047:18;12040:31;12088:46;12129:3;12118:9;12114:19;12106:6;12088:46;:::i;:::-;12080:54;11628:512;-1:-1:-1;;;;;;11628:512:71:o;12145:249::-;12214:6;12267:2;12255:9;12246:7;12242:23;12238:32;12235:52;;;12283:1;12280;12273:12;12235:52;12315:9;12309:16;12334:30;12358:5;12334:30;:::i",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "erc6551Implementation()": "b3dd12a2",
        "erc6551Registry()": "056d5afe",
        "getApproved(uint256)": "081812fc",
        "isApprovedForAll(address,address)": "e985e9c5",
        "mintProject(string,string,uint256)": "e253f039",
        "name()": "06fdde03",
        "owner()": "8da5cb5b",
        "ownerOf(uint256)": "6352211e",
        "projectsAccounts(uint256)": "6f4d776b",
        "projectsCounter()": "fe360ea5",
        "projectsRentalsCollections(uint256)": "9a11a0d7",
        "renounceOwnership()": "715018a6",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setRentalAvailable(uint256)": "fa24e2f5",
        "setRentalUnavailable(uint256)": "bd1a790a",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.23+commit.f704f362\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_erc6551Registry\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc6551Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_paymentToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_proxyImplementation\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_rentalsCollection\",\"type\":\"address\"}],\"name\":\"ProjectMinted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Registry\",\"outputs\":[{\"internalType\":\"contract IERC6551Registry\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_rentalPriceperDay\",\"type\":\"uint256\"}],\"name\":\"mintProject\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"projectsAccounts\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projectsCounter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"projectsRentalsCollections\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"setRentalAvailable\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"setRentalUnavailable\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/BlockEstate.sol\":\"BlockEstate\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":@upgradeable/safeAccount/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5\",\"dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded\",\"dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40\",\"dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a\",\"dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC721Receiver.sol\":{\"keccak256\":\"0x12808acc0c2cbc0b9068755711fd79483b4f002e850d25e0e72e735765b6cd99\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8fd1ab9e3091d4c4fc4b34c25b54df5c092c849c8c09d722a34186bd051b0890\",\"dweb:/ipfs/QmUqykAZfKRHEkYVRmXKsFqvLwyUFPrukdWdAmXDkixJAL\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a\",\"dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88\",\"dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7\",\"dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827\",\"dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66\",\"dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0x01c061c84b49b81408a3baa6897e3fb9a2a70ff4356216c3398cbdb9d628ede9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://281503c4e1df1caf50a45ff4852f46da7e40881ebd07856548a90f13bf2dc53a\",\"dweb:/ipfs/QmW5VobCbTcvSXPE2nKKzUnhV6rofkvpc3acZ8rntMnMmW\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3\",\"dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7\",\"dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087\",\"dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x4e2a8ed224c9c4fe41add93de8fa53ef3f2f5ee7a9c613e667796602ceb87e12\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a8516f3683103d13108094b41604e64f50f0cceaabbddbf2221f5959cf869ab\",\"dweb:/ipfs/QmT2ophcTsuvDkv1EPyjuNG3B7NVPA5NtQqco2XWtWQHMe\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9\",\"dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e\",\"dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xc3a38f6236b9f11703164f1c52a5d423f02f01ee689d58d5a35d1a48ad5b9d88\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ee652cbb0266d2336107760205ea72fecf6f8127e32361d1a209016e0f8271d\",\"dweb:/ipfs/QmefTVVswMMF6r372icwDF6DqNfzkEX5mzgSpbxdpgaUKj\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047\",\"dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512\",\"dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ\"]},\"src/BlockEstate.sol\":{\"keccak256\":\"0x72fbbd8ac47b49922782950b08c1e108b8c9954edaa16204965e715f0c5e2d76\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5f9d55b1c7bcbba9eea5b124be6187faa5cc2550eeb81c40b8fd3ed829739793\",\"dweb:/ipfs/QmaUD3LKnAwPLkpBLhJpGnBubtPQSVtxwkhsYwooeX4v3f\"]},\"src/ProjectAccount.sol\":{\"keccak256\":\"0x59c2980184d78453ffeec735532d9c3ed913117a1c4fd0f5fdea48bcc17a7b02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b668bc18c118e82e06a1c7736a8fd0c0bbd29bbf2ad4355db294019d0b1e092f\",\"dweb:/ipfs/QmWK7gN8drk1Y2N7W9kGAjgGGpr6Cn5Wzr1juFdazVmpG9\"]},\"src/Rentals.sol\":{\"keccak256\":\"0x685d62e39a2569e58bfe07329b4e53d678ed9cc2d603026ac797e25947d2a08b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4662d72d2f196af6b8a8408061db56aa55cccbefcf018cbfd5803db8cf778c18\",\"dweb:/ipfs/QmRKaxG5RchHErwZbRjepknYQacC8qSjp7W1vYE6fyJ75u\"]},\"src/interface/IERC404.sol\":{\"keccak256\":\"0x77215588c5b2f9e8fbe7a8ed5c728589d214eedc5d9785cbf0fe89b88b19681d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ac604c75f36462032b35b87bb42c2ea90ad7ba56a8f20beface9fe3f83cbd8d\",\"dweb:/ipfs/QmZEUtvQq3P7RfCt2jhG6outMPZuLgA5LEpccuhjwgBv8C\"]},\"src/interface/IERC6551Account.sol\":{\"keccak256\":\"0x6ff8242276aa7dbd7dac0c9c0ff6324426fbafdf0139896587d56c45dc9b335d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://13d5bfdf03ead70f29b342dc631624f069594175864a6172c9e2b9f31d5682ac\",\"dweb:/ipfs/QmWwRVtkuCrWXQUurDUw1YvfRyv78nY1WuP4ov9oUFKJ6b\"]},\"src/interface/IERC6551Registry.sol\":{\"keccak256\":\"0x3a2b57b812a92ce80784bde6bfe7c21f7d73065b085f19e2a01a1ba1cb2b6f18\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://365ec9c2acc5cfa221e64b3f487be1354c85090f73e37847f4a0d0e685e4ba03\",\"dweb:/ipfs/QmTbNShxigfXKjQsqknHfpJuxFi7xNcQnG7zVuipQL1chL\"]},\"src/lib/DoubleEndedQueue.sol\":{\"keccak256\":\"0x40f29de66fbe8993183aeaed1aeb74167b7d34e1aacd1227a991b88fcd166f9b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://943610141992bb8d1b844bcf20cbc95b50ecf609bf19cd9e1d413bec78a9166e\",\"dweb:/ipfs/QmSkER4qaymDLs9ndor4NZ2UAfT3JDyTJWBprhz2nEEDJG\"]},\"src/lib/ERC404.sol\":{\"keccak256\":\"0xdce261679e2ce52d4c10a7b946028e86999358d52fa0e3f552b04440eddcdc8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4b5bba5963e22a91ea648f5e0186b6310c4a6bd2ce5491fb58ccaf6b97569b43\",\"dweb:/ipfs/QmWnwTFc8WLPqVE3XYPhYaHuUY8ynFVvJjrLPZj7Bpg8Rj\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.23+commit.f704f362"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_erc6551Registry",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_erc6551Implementation",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_paymentToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_proxyImplementation",
                            "type": "address"
                        }
                    ],
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
                            "internalType": "address",
                            "name": "_rentalsCollection",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "ProjectMinted",
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
                    "name": "erc6551Implementation",
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
                    "name": "erc6551Registry",
                    "outputs": [
                        {
                            "internalType": "contract IERC6551Registry",
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
                            "internalType": "uint256",
                            "name": "_rentalPriceperDay",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mintProject",
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
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "projectsAccounts",
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
                    "name": "projectsCounter",
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
                    "name": "projectsRentalsCollections",
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
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "renounceOwnership"
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
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setRentalAvailable"
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
                    "name": "setRentalUnavailable"
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
                "src/BlockEstate.sol": "BlockEstate"
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
        "absolutePath": "src/BlockEstate.sol",
        "id": 54404,
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
            "DoubleEndedQueue": [
                56485
            ],
            "ECDSA": [
                5383
            ],
            "ERC165": [
                5508
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
        "src": "33:2794:60",
        "nodes": [
            {
                "id": 54172,
                "nodeType": "PragmaDirective",
                "src": "33:24:60",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".18"
                ]
            },
            {
                "id": 54173,
                "nodeType": "ImportDirective",
                "src": "61:57:60",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol",
                "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 3993,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54174,
                "nodeType": "ImportDirective",
                "src": "120:52:60",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
                "file": "@openzeppelin/contracts/access/Ownable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 1763,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54175,
                "nodeType": "ImportDirective",
                "src": "174:56:60",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 3010,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54176,
                "nodeType": "ImportDirective",
                "src": "232:62:60",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol",
                "file": "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 2319,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54177,
                "nodeType": "ImportDirective",
                "src": "298:42:60",
                "nodes": [],
                "absolutePath": "src/interface/IERC6551Registry.sol",
                "file": "./interface/IERC6551Registry.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 56152,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54178,
                "nodeType": "ImportDirective",
                "src": "342:23:60",
                "nodes": [],
                "absolutePath": "src/Rentals.sol",
                "file": "./Rentals.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 55783,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54179,
                "nodeType": "ImportDirective",
                "src": "367:30:60",
                "nodes": [],
                "absolutePath": "src/ProjectAccount.sol",
                "file": "./ProjectAccount.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 54404,
                "sourceUnit": 55139,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 54403,
                "nodeType": "ContractDefinition",
                "src": "403:2424:60",
                "nodes": [
                    {
                        "id": 54185,
                        "nodeType": "VariableDeclaration",
                        "src": "476:30:60",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "fe360ea5",
                        "mutability": "mutable",
                        "name": "projectsCounter",
                        "nameLocation": "491:15:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 54184,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "476:7:60",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 54187,
                        "nodeType": "VariableDeclaration",
                        "src": "513:36:60",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "b3dd12a2",
                        "mutability": "mutable",
                        "name": "erc6551Implementation",
                        "nameLocation": "528:21:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 54186,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "513:7:60",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 54190,
                        "nodeType": "VariableDeclaration",
                        "src": "556:39:60",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "056d5afe",
                        "mutability": "mutable",
                        "name": "erc6551Registry",
                        "nameLocation": "580:15:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC6551Registry_$56151",
                            "typeString": "contract IERC6551Registry"
                        },
                        "typeName": {
                            "id": 54189,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 54188,
                                "name": "IERC6551Registry",
                                "nameLocations": [
                                    "556:16:60"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 56151,
                                "src": "556:16:60"
                            },
                            "referencedDeclaration": 56151,
                            "src": "556:16:60",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC6551Registry_$56151",
                                "typeString": "contract IERC6551Registry"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 54193,
                        "nodeType": "VariableDeclaration",
                        "src": "602:19:60",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "paymentToken",
                        "nameLocation": "609:12:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$3009",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 54192,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 54191,
                                "name": "IERC20",
                                "nameLocations": [
                                    "602:6:60"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 3009,
                                "src": "602:6:60"
                            },
                            "referencedDeclaration": 3009,
                            "src": "602:6:60",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 54195,
                        "nodeType": "VariableDeclaration",
                        "src": "628:27:60",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "proxyImplementation",
                        "nameLocation": "636:19:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 54194,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "628:7:60",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 54203,
                        "nodeType": "EventDefinition",
                        "src": "680:108:60",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "9850c01544aa89bb27d98e03fbe924a7d62b85f90dfb82ad4cdff781c9a0fd76",
                        "name": "ProjectMinted",
                        "nameLocation": "686:13:60",
                        "parameters": {
                            "id": 54202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 54197,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "716:8:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54203,
                                    "src": "700:24:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 54196,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "700:7:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 54199,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "742:8:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54203,
                                    "src": "726:24:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 54198,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "726:7:60",
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
                                    "id": 54201,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "_rentalsCollection",
                                    "nameLocation": "768:18:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54203,
                                    "src": "752:34:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 54200,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "752:7:60",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "699:88:60"
                        }
                    },
                    {
                        "id": 54207,
                        "nodeType": "VariableDeclaration",
                        "src": "822:51:60",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "6f4d776b",
                        "mutability": "mutable",
                        "name": "projectsAccounts",
                        "nameLocation": "857:16:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                        },
                        "typeName": {
                            "id": 54206,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 54204,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "830:7:60",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "822:27:60",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 54205,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "841:7:60",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 54211,
                        "nodeType": "VariableDeclaration",
                        "src": "880:61:60",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "9a11a0d7",
                        "mutability": "mutable",
                        "name": "projectsRentalsCollections",
                        "nameLocation": "915:26:60",
                        "scope": 54403,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                        },
                        "typeName": {
                            "id": 54210,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 54208,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "888:7:60",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "880:27:60",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 54209,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "899:7:60",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 54251,
                        "nodeType": "FunctionDefinition",
                        "src": "952:441:60",
                        "nodes": [],
                        "body": {
                            "id": 54250,
                            "nodeType": "Block",
                            "src": "1160:233:60",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 54234,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 54230,
                                            "name": "erc6551Registry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54190,
                                            "src": "1173:15:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC6551Registry_$56151",
                                                "typeString": "contract IERC6551Registry"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 54232,
                                                    "name": "_erc6551Registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54213,
                                                    "src": "1209:16:60",
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
                                                "id": 54231,
                                                "name": "IERC6551Registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 56151,
                                                "src": "1192:16:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IERC6551Registry_$56151_$",
                                                    "typeString": "type(contract IERC6551Registry)"
                                                }
                                            },
                                            "id": 54233,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1192:34:60",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC6551Registry_$56151",
                                                "typeString": "contract IERC6551Registry"
                                            }
                                        },
                                        "src": "1173:53:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC6551Registry_$56151",
                                            "typeString": "contract IERC6551Registry"
                                        }
                                    },
                                    "id": 54235,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1173:53:60"
                                },
                                {
                                    "expression": {
                                        "id": 54238,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 54236,
                                            "name": "erc6551Implementation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54187,
                                            "src": "1237:21:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 54237,
                                            "name": "_erc6551Implementation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54215,
                                            "src": "1261:22:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1237:46:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 54239,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1237:46:60"
                                },
                                {
                                    "expression": {
                                        "id": 54244,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 54240,
                                            "name": "paymentToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54193,
                                            "src": "1294:12:60",
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
                                                    "id": 54242,
                                                    "name": "_paymentToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54217,
                                                    "src": "1316:13:60",
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
                                                "id": 54241,
                                                "name": "IERC20",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3009,
                                                "src": "1309:6:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IERC20_$3009_$",
                                                    "typeString": "type(contract IERC20)"
                                                }
                                            },
                                            "id": 54243,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1309:21:60",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$3009",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "1294:36:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$3009",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 54245,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1294:36:60"
                                },
                                {
                                    "expression": {
                                        "id": 54248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 54246,
                                            "name": "proxyImplementation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54195,
                                            "src": "1341:19:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 54247,
                                            "name": "_proxyImplementation",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54219,
                                            "src": "1363:20:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1341:42:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 54249,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1341:42:60"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 54222,
                                            "name": "_msgSender",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4497,
                                            "src": "1115:10:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                "typeString": "function () view returns (address)"
                                            }
                                        },
                                        "id": 54223,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1115:12:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 54224,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 54221,
                                    "name": "Ownable",
                                    "nameLocations": [
                                        "1107:7:60"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 1762,
                                    "src": "1107:7:60"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1107:21:60"
                            },
                            {
                                "arguments": [
                                    {
                                        "hexValue": "426c6f636b457374617465",
                                        "id": 54226,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1136:13:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_a7e1dfd0c0597dcee737eedc45228fd24dae9e2f3bb4c7767d10a219b22ceaf6",
                                            "typeString": "literal_string \"BlockEstate\""
                                        },
                                        "value": "BlockEstate"
                                    },
                                    {
                                        "hexValue": "424c4f434b58",
                                        "id": 54227,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1151:8:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_654b73e943e309fd7dfbe03141b7488b64d9e5336a3f1b3a52c8a2b47a3fafc5",
                                            "typeString": "literal_string \"BLOCKX\""
                                        },
                                        "value": "BLOCKX"
                                    }
                                ],
                                "id": 54228,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 54225,
                                    "name": "ERC721",
                                    "nameLocations": [
                                        "1129:6:60"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 3992,
                                    "src": "1129:6:60"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1129:31:60"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 54220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 54213,
                                    "mutability": "mutable",
                                    "name": "_erc6551Registry",
                                    "nameLocation": "972:16:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54251,
                                    "src": "964:24:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 54212,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "964:7:60",
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
                                    "id": 54215,
                                    "mutability": "mutable",
                                    "name": "_erc6551Implementation",
                                    "nameLocation": "998:22:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54251,
                                    "src": "990:30:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 54214,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "990:7:60",
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
                                    "id": 54217,
                                    "mutability": "mutable",
                                    "name": "_paymentToken",
                                    "nameLocation": "1052:13:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54251,
                                    "src": "1044:21:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 54216,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1044:7:60",
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
                                    "id": 54219,
                                    "mutability": "mutable",
                                    "name": "_proxyImplementation",
                                    "nameLocation": "1075:20:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54251,
                                    "src": "1067:28:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 54218,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1067:7:60",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "963:133:60"
                        },
                        "returnParameters": {
                            "id": 54229,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1160:0:60"
                        },
                        "scope": 54403,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 54370,
                        "nodeType": "FunctionDefinition",
                        "src": "1401:1101:60",
                        "nodes": [],
                        "body": {
                            "id": 54369,
                            "nodeType": "Block",
                            "src": "1534:968:60",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        54265
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 54265,
                                            "mutability": "mutable",
                                            "name": "tokenId",
                                            "nameLocation": "1553:7:60",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 54369,
                                            "src": "1545:15:60",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 54264,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1545:7:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 54267,
                                    "initialValue": {
                                        "id": 54266,
                                        "name": "projectsCounter",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 54185,
                                        "src": "1563:15:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1545:33:60"
                                },
                                {
                                    "expression": {
                                        "id": 54269,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "1591:17:60",
                                        "subExpression": {
                                            "id": 54268,
                                            "name": "projectsCounter",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54185,
                                            "src": "1591:15:60",
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
                                    "id": 54270,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1591:17:60"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 54274,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1635:4:60",
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
                                                    "id": 54273,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1627:7:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 54272,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1627:7:60",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 54275,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1627:13:60",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 54276,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54265,
                                                "src": "1642:7:60",
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
                                            "id": 54271,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3655,
                                            "src": "1621:5:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 54277,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1621:29:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 54278,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1621:29:60"
                                },
                                {
                                    "assignments": [
                                        54280
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 54280,
                                            "mutability": "mutable",
                                            "name": "projectAccount",
                                            "nameLocation": "1671:14:60",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 54369,
                                            "src": "1663:22:60",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 54279,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1663:7:60",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 54310,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 54285,
                                                        "name": "erc6551Implementation",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54187,
                                                        "src": "1740:21:60",
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
                                                    "id": 54284,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1732:7:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 54283,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1732:7:60",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 54286,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1732:30:60",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 54287,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "1777:5:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 54288,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1783:7:60",
                                                "memberName": "chainid",
                                                "nodeType": "MemberAccess",
                                                "src": "1777:13:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 54291,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1813:4:60",
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
                                                    "id": 54290,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1805:7:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 54289,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1805:7:60",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 54292,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1805:13:60",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 54293,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54265,
                                                "src": "1833:7:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 54294,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1855:1:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "hexValue": "30",
                                                                                "id": 54300,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "1917:1:60",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "id": 54299,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "1909:8:60",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_payable_$",
                                                                                "typeString": "type(address payable)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 54298,
                                                                                "name": "address",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "1909:8:60",
                                                                                "stateMutability": "payable",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 54301,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "1909:10:60",
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
                                                                    "id": 54297,
                                                                    "name": "ProjectAccount",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55138,
                                                                    "src": "1894:14:60",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_ProjectAccount_$55138_$",
                                                                        "typeString": "type(contract ProjectAccount)"
                                                                    }
                                                                },
                                                                "id": 54302,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1894:26:60",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ProjectAccount_$55138",
                                                                    "typeString": "contract ProjectAccount"
                                                                }
                                                            },
                                                            "id": 54303,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1921:10:60",
                                                            "memberName": "initialize",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 54749,
                                                            "src": "1894:37:60",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint8_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (string memory,string memory,uint8,uint256,uint256,address,uint256) external"
                                                            }
                                                        },
                                                        "id": 54304,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1932:8:60",
                                                        "memberName": "selector",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1894:46:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    },
                                                    {
                                                        "id": 54305,
                                                        "name": "_name",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54253,
                                                        "src": "1955:5:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        }
                                                    },
                                                    {
                                                        "id": 54306,
                                                        "name": "_symbol",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54255,
                                                        "src": "1962:7:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "3138",
                                                        "id": 54307,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1971:2:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_18_by_1",
                                                            "typeString": "int_const 18"
                                                        },
                                                        "value": "18"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_18_by_1",
                                                            "typeString": "int_const 18"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 54295,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "1871:3:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 54296,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1875:18:60",
                                                    "memberName": "encodeWithSelector",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1871:22:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function (bytes4) pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 54308,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1871:103:60",
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
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
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 54281,
                                                "name": "erc6551Registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54190,
                                                "src": "1688:15:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC6551Registry_$56151",
                                                    "typeString": "contract IERC6551Registry"
                                                }
                                            },
                                            "id": 54282,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1704:13:60",
                                            "memberName": "createAccount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 56134,
                                            "src": "1688:29:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_address_$",
                                                "typeString": "function (address,uint256,address,uint256,uint256,bytes memory) external returns (address)"
                                            }
                                        },
                                        "id": 54309,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1688:297:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1663:322:60"
                                },
                                {
                                    "expression": {
                                        "id": 54315,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 54311,
                                                "name": "projectsAccounts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54207,
                                                "src": "1996:16:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                                    "typeString": "mapping(uint256 => address)"
                                                }
                                            },
                                            "id": 54313,
                                            "indexExpression": {
                                                "id": 54312,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54265,
                                                "src": "2013:7:60",
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
                                            "src": "1996:25:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 54314,
                                            "name": "projectAccount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54280,
                                            "src": "2024:14:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1996:42:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 54316,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1996:42:60"
                                },
                                {
                                    "assignments": [
                                        54319
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 54319,
                                            "mutability": "mutable",
                                            "name": "rentalCollection",
                                            "nameLocation": "2063:16:60",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 54369,
                                            "src": "2051:28:60",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                "typeString": "contract BeaconProxy"
                                            },
                                            "typeName": {
                                                "id": 54318,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 54317,
                                                    "name": "BeaconProxy",
                                                    "nameLocations": [
                                                        "2051:11:60"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 2318,
                                                    "src": "2051:11:60"
                                                },
                                                "referencedDeclaration": 2318,
                                                "src": "2051:11:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                    "typeString": "contract BeaconProxy"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 54348,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 54323,
                                                "name": "proxyImplementation",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54195,
                                                "src": "2098:19:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "hexValue": "30",
                                                                                "id": 54329,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "2171:1:60",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "id": 54328,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "2163:7:60",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                                "typeString": "type(address)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 54327,
                                                                                "name": "address",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "2163:7:60",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 54330,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "2163:10:60",
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
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "id": 54326,
                                                                    "name": "Rentals",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 55782,
                                                                    "src": "2155:7:60",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_Rentals_$55782_$",
                                                                        "typeString": "type(contract Rentals)"
                                                                    }
                                                                },
                                                                "id": 54331,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2155:19:60",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Rentals_$55782",
                                                                    "typeString": "contract Rentals"
                                                                }
                                                            },
                                                            "id": 54332,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2175:10:60",
                                                            "memberName": "initialize",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 55305,
                                                            "src": "2155:30:60",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                                                                "typeString": "function (string memory,string memory,address,address,uint256,address) external"
                                                            }
                                                        },
                                                        "id": 54333,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2186:8:60",
                                                        "memberName": "selector",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2155:39:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    },
                                                    {
                                                        "id": 54334,
                                                        "name": "_name",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54253,
                                                        "src": "2210:5:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        }
                                                    },
                                                    {
                                                        "id": 54335,
                                                        "name": "_symbol",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54255,
                                                        "src": "2217:7:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 54338,
                                                                "name": "paymentToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 54193,
                                                                "src": "2234:12:60",
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
                                                            "id": 54337,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2226:7:60",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 54336,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2226:7:60",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 54339,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2226:21:60",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 54342,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "2257:4:60",
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
                                                            "id": 54341,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2249:7:60",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 54340,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2249:7:60",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 54343,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2249:13:60",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "id": 54344,
                                                        "name": "_rentalPriceperDay",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54257,
                                                        "src": "2264:18:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 54345,
                                                        "name": "projectAccount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54280,
                                                        "src": "2284:14:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_calldata_ptr",
                                                            "typeString": "string calldata"
                                                        },
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
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 54324,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "2132:3:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 54325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2136:18:60",
                                                    "memberName": "encodeWithSelector",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2132:22:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function (bytes4) pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 54346,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2132:167:60",
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 54322,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "2082:15:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_creation_payable$_t_address_$_t_bytes_memory_ptr_$returns$_t_contract$_BeaconProxy_$2318_$",
                                                "typeString": "function (address,bytes memory) payable returns (contract BeaconProxy)"
                                            },
                                            "typeName": {
                                                "id": 54321,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 54320,
                                                    "name": "BeaconProxy",
                                                    "nameLocations": [
                                                        "2086:11:60"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 2318,
                                                    "src": "2086:11:60"
                                                },
                                                "referencedDeclaration": 2318,
                                                "src": "2086:11:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                    "typeString": "contract BeaconProxy"
                                                }
                                            }
                                        },
                                        "id": 54347,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2082:228:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                            "typeString": "contract BeaconProxy"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2051:259:60"
                                },
                                {
                                    "expression": {
                                        "id": 54356,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 54349,
                                                "name": "projectsRentalsCollections",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54211,
                                                "src": "2323:26:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                                    "typeString": "mapping(uint256 => address)"
                                                }
                                            },
                                            "id": 54351,
                                            "indexExpression": {
                                                "id": 54350,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54265,
                                                "src": "2350:7:60",
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
                                            "src": "2323:35:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 54354,
                                                    "name": "rentalCollection",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 54319,
                                                    "src": "2369:16:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                        "typeString": "contract BeaconProxy"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                        "typeString": "contract BeaconProxy"
                                                    }
                                                ],
                                                "id": 54353,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2361:7:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 54352,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2361:7:60",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 54355,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2361:25:60",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2323:63:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 54357,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2323:63:60"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 54359,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54265,
                                                "src": "2418:7:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 54360,
                                                "name": "projectAccount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 54280,
                                                "src": "2427:14:60",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 54363,
                                                        "name": "rentalCollection",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 54319,
                                                        "src": "2451:16:60",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                            "typeString": "contract BeaconProxy"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_BeaconProxy_$2318",
                                                            "typeString": "contract BeaconProxy"
                                                        }
                                                    ],
                                                    "id": 54362,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2443:7:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 54361,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2443:7:60",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 54364,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2443:25:60",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 54358,
                                            "name": "ProjectMinted",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 54203,
                                            "src": "2404:13:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address,address)"
                                            }
                                        },
                                        "id": 54365,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2404:65:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 54366,
                                    "nodeType": "EmitStatement",
                                    "src": "2399:70:60"
                                },
                                {
                                    "expression": {
                                        "id": 54367,
                                        "name": "tokenId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 54265,
                                        "src": "2487:7:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 54263,
                                    "id": 54368,
                                    "nodeType": "Return",
                                    "src": "2480:14:60"
                                }
                            ]
                        },
                        "functionSelector": "e253f039",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 54260,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 54259,
                                    "name": "onlyOwner",
                                    "nameLocations": [
                                        "1505:9:60"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 1673,
                                    "src": "1505:9:60"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1505:11:60"
                            }
                        ],
                        "name": "mintProject",
                        "nameLocation": "1410:11:60",
                        "parameters": {
                            "id": 54258,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 54253,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "1438:5:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54370,
                                    "src": "1422:21:60",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 54252,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1422:6:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 54255,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "1461:7:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54370,
                                    "src": "1445:23:60",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_calldata_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 54254,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1445:6:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 54257,
                                    "mutability": "mutable",
                                    "name": "_rentalPriceperDay",
                                    "nameLocation": "1478:18:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54370,
                                    "src": "1470:26:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 54256,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1470:7:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1421:76:60"
                        },
                        "returnParameters": {
                            "id": 54263,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 54262,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54370,
                                    "src": "1526:7:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 54261,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1526:7:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1525:9:60"
                        },
                        "scope": 54403,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 54386,
                        "nodeType": "FunctionDefinition",
                        "src": "2510:150:60",
                        "nodes": [],
                        "body": {
                            "id": 54385,
                            "nodeType": "Block",
                            "src": "2575:85:60",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 54378,
                                                            "name": "projectsRentalsCollections",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 54211,
                                                            "src": "2594:26:60",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                                                "typeString": "mapping(uint256 => address)"
                                                            }
                                                        },
                                                        "id": 54380,
                                                        "indexExpression": {
                                                            "id": 54379,
                                                            "name": "_tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 54372,
                                                            "src": "2621:8:60",
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
                                                        "src": "2594:36:60",
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
                                                    "id": 54377,
                                                    "name": "Rentals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55782,
                                                    "src": "2586:7:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_Rentals_$55782_$",
                                                        "typeString": "type(contract Rentals)"
                                                    }
                                                },
                                                "id": 54381,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2586:45:60",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Rentals_$55782",
                                                    "typeString": "contract Rentals"
                                                }
                                            },
                                            "id": 54382,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2632:18:60",
                                            "memberName": "setAvailableToRent",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 55725,
                                            "src": "2586:64:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                                                "typeString": "function () external"
                                            }
                                        },
                                        "id": 54383,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2586:66:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 54384,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2586:66:60"
                                }
                            ]
                        },
                        "functionSelector": "fa24e2f5",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 54375,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 54374,
                                    "name": "onlyOwner",
                                    "nameLocations": [
                                        "2563:9:60"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 1673,
                                    "src": "2563:9:60"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2563:11:60"
                            }
                        ],
                        "name": "setRentalAvailable",
                        "nameLocation": "2519:18:60",
                        "parameters": {
                            "id": 54373,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 54372,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "2546:8:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54386,
                                    "src": "2538:16:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 54371,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2538:7:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2537:18:60"
                        },
                        "returnParameters": {
                            "id": 54376,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2575:0:60"
                        },
                        "scope": 54403,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 54402,
                        "nodeType": "FunctionDefinition",
                        "src": "2668:154:60",
                        "nodes": [],
                        "body": {
                            "id": 54401,
                            "nodeType": "Block",
                            "src": "2735:87:60",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "baseExpression": {
                                                            "id": 54394,
                                                            "name": "projectsRentalsCollections",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 54211,
                                                            "src": "2754:26:60",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                                                "typeString": "mapping(uint256 => address)"
                                                            }
                                                        },
                                                        "id": 54396,
                                                        "indexExpression": {
                                                            "id": 54395,
                                                            "name": "_tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 54388,
                                                            "src": "2781:8:60",
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
                                                        "src": "2754:36:60",
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
                                                    "id": 54393,
                                                    "name": "Rentals",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 55782,
                                                    "src": "2746:7:60",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_Rentals_$55782_$",
                                                        "typeString": "type(contract Rentals)"
                                                    }
                                                },
                                                "id": 54397,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2746:45:60",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Rentals_$55782",
                                                    "typeString": "contract Rentals"
                                                }
                                            },
                                            "id": 54398,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2792:20:60",
                                            "memberName": "setUnavailableToRent",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 55735,
                                            "src": "2746:66:60",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                                                "typeString": "function () external"
                                            }
                                        },
                                        "id": 54399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2746:68:60",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 54400,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2746:68:60"
                                }
                            ]
                        },
                        "functionSelector": "bd1a790a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 54391,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 54390,
                                    "name": "onlyOwner",
                                    "nameLocations": [
                                        "2723:9:60"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 1673,
                                    "src": "2723:9:60"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2723:11:60"
                            }
                        ],
                        "name": "setRentalUnavailable",
                        "nameLocation": "2677:20:60",
                        "parameters": {
                            "id": 54389,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 54388,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "2706:8:60",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 54402,
                                    "src": "2698:16:60",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 54387,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2698:7:60",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2697:18:60"
                        },
                        "returnParameters": {
                            "id": 54392,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2735:0:60"
                        },
                        "scope": 54403,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 54180,
                            "name": "ERC721",
                            "nameLocations": [
                                "427:6:60"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 3992,
                            "src": "427:6:60"
                        },
                        "id": 54181,
                        "nodeType": "InheritanceSpecifier",
                        "src": "427:6:60"
                    },
                    {
                        "baseName": {
                            "id": 54182,
                            "name": "Ownable",
                            "nameLocations": [
                                "435:7:60"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 1762,
                            "src": "435:7:60"
                        },
                        "id": 54183,
                        "nodeType": "InheritanceSpecifier",
                        "src": "435:7:60"
                    }
                ],
                "canonicalName": "BlockEstate",
                "contractDependencies": [
                    2318
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    54403,
                    1762,
                    3992,
                    1874,
                    4155,
                    4109,
                    5508,
                    5520,
                    4515
                ],
                "name": "BlockEstate",
                "nameLocation": "412:11:60",
                "scope": 54404,
                "usedErrors": [
                    1628,
                    1633,
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
                    1639,
                    4008,
                    4017,
                    4026,
                    54203
                ]
            }
        ],
        "license": "MIT"
    },
    "id": 60
}


export const BlockEstateABI = BlockEstateContract["abi"];