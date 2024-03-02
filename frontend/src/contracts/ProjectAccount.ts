const ProjectAccountContract = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "receive",
            "stateMutability": "payable"
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
            "name": "ID_ENCODING_PREFIX",
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
            "name": "allowance",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
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
            "name": "approve",
            "inputs": [
                {
                    "name": "spender_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "valueOrId_",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "",
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
            "name": "deadline",
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
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "engage",
            "inputs": [
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "erc20Approve",
            "inputs": [
                {
                    "name": "spender_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value_",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "erc20BalanceOf",
            "inputs": [
                {
                    "name": "owner_",
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
            "name": "erc20TotalSupply",
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
            "name": "erc20TransferFrom",
            "inputs": [
                {
                    "name": "from_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value_",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "erc721Approve",
            "inputs": [
                {
                    "name": "spender_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "id_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "erc721BalanceOf",
            "inputs": [
                {
                    "name": "owner_",
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
            "name": "erc721TotalSupply",
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
            "name": "erc721TransferExempt",
            "inputs": [
                {
                    "name": "target_",
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
            "name": "erc721TransferFrom",
            "inputs": [
                {
                    "name": "from_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "id_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "executeCall",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "getApproved",
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
            "name": "getERC721QueueLength",
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
            "name": "getERC721TokensInQueue",
            "inputs": [
                {
                    "name": "start_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "count_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "name_",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "symbol_",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "decimals_",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "_totalSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_totalAmountToRaise",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_paymentToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_deadline",
                    "type": "uint256",
                    "internalType": "uint256"
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
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
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
            "name": "isValidSignature",
            "inputs": [
                {
                    "name": "hash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "magicValue",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "manager",
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
            "name": "managerWithdraw",
            "inputs": [
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "minted",
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
            "name": "nonce",
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
            "name": "nonces",
            "inputs": [
                {
                    "name": "",
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
            "name": "owned",
            "inputs": [
                {
                    "name": "owner_",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
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
                    "name": "id_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "erc721Owner",
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
            "name": "permit",
            "inputs": [
                {
                    "name": "owner_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v_",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r_",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s_",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "raisingFunds",
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
            "name": "retriveTokensAfterFailedSale",
            "inputs": [
                {
                    "name": "_amount",
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
                    "name": "from_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "id_",
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
                    "name": "from_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "id_",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data_",
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
                    "name": "operator_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved_",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setFailedSale",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSelfERC721TransferExempt",
            "inputs": [
                {
                    "name": "state_",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSuccessfulSale",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startRaisingFunds",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "stopRaisingFunds",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "successfulSale",
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
            "name": "token",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
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
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "tokenURI",
            "inputs": [
                {
                    "name": "_tokenId",
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
            "name": "totalAmountToRaise",
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
            "name": "totalSupply",
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
            "name": "transfer",
            "inputs": [
                {
                    "name": "to_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value_",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "valueOrId_",
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
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "units",
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
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
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
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "id",
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
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
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
                    "name": "id",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "AlreadyExists",
            "inputs": []
        },
        {
            "type": "error",
            "name": "DecimalsTooLow",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientAllowance",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidApproval",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidExemption",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidInitialization",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidOperator",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidRecipient",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSender",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSigner",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidSpender",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidTokenId",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MintLimitReached",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotFound",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotInitializing",
            "inputs": []
        },
        {
            "type": "error",
            "name": "OwnedIndexOverflow",
            "inputs": []
        },
        {
            "type": "error",
            "name": "PermitDeadlineExpired",
            "inputs": []
        },
        {
            "type": "error",
            "name": "QueueEmpty",
            "inputs": []
        },
        {
            "type": "error",
            "name": "QueueFull",
            "inputs": []
        },
        {
            "type": "error",
            "name": "QueueOutOfBounds",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RecipientIsERC721TransferExempt",
            "inputs": []
        },
        {
            "type": "error",
            "name": "Unauthorized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeRecipient",
            "inputs": []
        }
    ],
    "bytecode": {
        "object": "0x60806040526016805461ffff19166101001790553480156200002057600080fd5b506200002b62000031565b620000e5565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000825760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620000e25780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b61461f80620000f56000396000f3fe6080604052600436106103645760003560e01c806370a08231116101c6578063b3f9ea34116100f7578063d96ca0b911610095578063dfabc0331161006f578063dfabc03314610aa4578063e985e9c514610ac4578063f780bc1a14610aff578063fc0c546a14610b1f57600080fd5b8063d96ca0b914610a2c578063dd62ed3e14610a4c578063dd63769914610a8457600080fd5b8063c5ab3ba6116100d1578063c5ab3ba6146109c2578063c87b56dd146109d7578063d30be6f0146109f7578063d505accf14610a0c57600080fd5b8063b3f9ea341461094a578063b88d4fde1461098d578063bf2adf90146109ad57600080fd5b8063976a843511610164578063a22cb4651161013e578063a22cb465146108c9578063a9059cbb146108e9578063affed0e014610909578063b1ab93171461091d57600080fd5b8063976a8435146108855780639e5d4c491461089b5780639ebe2d0a146108b357600080fd5b806389fb4c66116101a057806389fb4c66146108265780638a696e501461083b5780638da5cb5b1461085b57806395d89b411461087057600080fd5b806370a08231146107ac5780637ecebe00146107d957806389529c041461080657600080fd5b80632df96c7b116102a05780634d9660721161023e5780635da4af75116102185780635da4af751461072357806363110c46146107385780636352211e146107585780636e8f624b1461077857600080fd5b80634d966072146106d35780634f02c420146106f3578063561650011461070957600080fd5b80633644e5151161027a5780633644e5151461065157806342842e0e146106665780634570992d14610686578063481c6a75146106a657600080fd5b80632df96c7b146105e35780633013ce29146105f8578063313ce5671461062557600080fd5b806309f0ef651161030d5780631d08697b116102e75780631d08697b1461056c57806323b872dd1461058b578063279093a5146105ab57806329dcb0cf146105cd57600080fd5b806309f0ef65146104e55780631626ba7e1461050557806318160ddd1461055657600080fd5b8063081812fc1161033e578063081812fc14610418578063095ea7b31461048057806309674eb0146104a057600080fd5b806301ffc9a71461037057806302519da3146103a557806306fdde03146103f657600080fd5b3661036b57005b600080fd5b34801561037c57600080fd5b5061039061038b366004613a42565b610b64565b60405190151581526020015b60405180910390f35b3480156103b157600080fd5b506103e86103c0366004613a81565b73ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b60405190815260200161039c565b34801561040257600080fd5b5061040b610bfd565b60405161039c9190613b0c565b34801561042457600080fd5b5061045b610433366004613b1f565b600c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161039c565b34801561048c57600080fd5b5061039061049b366004613b38565b610c8b565b3480156104ac57600080fd5b506000546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000909204811691909103166103e8565b3480156104f157600080fd5b50610390610500366004613a81565b610cc9565b34801561051157600080fd5b50610525610520366004613c3e565b610d15565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161039c565b34801561056257600080fd5b506103e860065481565b34801561057857600080fd5b5060165461039090610100900460ff1681565b34801561059757600080fd5b506103906105a6366004613c85565b610d65565b3480156105b757600080fd5b506105cb6105c6366004613b38565b610da2565b005b3480156105d957600080fd5b506103e860155481565b3480156105ef57600080fd5b506105cb610fa8565b34801561060457600080fd5b5060125461045b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561063157600080fd5b5060045461063f9060ff1681565b60405160ff909116815260200161039c565b34801561065d57600080fd5b506103e8611053565b34801561067257600080fd5b506105cb610681366004613c85565b61106d565b34801561069257600080fd5b506105cb6106a1366004613b38565b611088565b3480156106b257600080fd5b5060135461045b9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156106df57600080fd5b506103906106ee366004613b38565b61130e565b3480156106ff57600080fd5b506103e860075481565b34801561071557600080fd5b506016546103909060ff1681565b34801561072f57600080fd5b506105cb6113ce565b34801561074457600080fd5b506105cb610753366004613cd7565b61147d565b34801561076457600080fd5b5061045b610773366004613b1f565b611701565b34801561078457600080fd5b506103e87f800000000000000000000000000000000000000000000000000000000000000081565b3480156107b857600080fd5b506103e86107c7366004613a81565b600a6020526000908152604090205481565b3480156107e557600080fd5b506103e86107f4366004613a81565b60116020526000908152604090205481565b34801561081257600080fd5b506105cb610821366004613b1f565b6117b7565b34801561083257600080fd5b506006546103e8565b34801561084757600080fd5b506105cb610856366004613d8b565b611a06565b34801561086757600080fd5b5061045b611a13565b34801561087c57600080fd5b5061040b611acf565b34801561089157600080fd5b506103e860055481565b61040b6108a9366004613da8565b6060949350505050565b3480156108bf57600080fd5b506103e860145481565b3480156108d557600080fd5b506105cb6108e4366004613e31565b611adc565b3480156108f557600080fd5b50610390610904366004613b38565b611bc0565b34801561091557600080fd5b5060006103e8565b34801561092957600080fd5b5061093d610938366004613a81565b611c1a565b60405161039c9190613e6a565b34801561095657600080fd5b506103e8610965366004613a81565b73ffffffffffffffffffffffffffffffffffffffff166000908152600f602052604090205490565b34801561099957600080fd5b506105cb6109a8366004613eae565b611c93565b3480156109b957600080fd5b506105cb611df8565b3480156109ce57600080fd5b506007546103e8565b3480156109e357600080fd5b5061040b6109f2366004613b1f565b611ea6565b348015610a0357600080fd5b506105cb611ecd565b348015610a1857600080fd5b506105cb610a27366004613f1a565b611f78565b348015610a3857600080fd5b50610390610a47366004613c85565b6122c4565b348015610a5857600080fd5b506103e8610a67366004613f88565b600b60209081526000928352604080842090915290825290205481565b348015610a9057600080fd5b506105cb610a9f366004613c85565b612408565b348015610ab057600080fd5b506105cb610abf366004613b38565b612618565b348015610ad057600080fd5b50610390610adf366004613f88565b600d60209081526000928352604080842090915290825290205460ff1681565b348015610b0b57600080fd5b5061093d610b1a366004613fb6565b612736565b348015610b2b57600080fd5b50610b346127d3565b6040805193845273ffffffffffffffffffffffffffffffffffffffff90921660208401529082015260600161039c565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fcaf91ff5000000000000000000000000000000000000000000000000000000001480610bf757507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b60028054610c0a90613fd8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3690613fd8565b8015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b505050505081565b6000610c9682612826565b15610caa57610ca58383612618565b610cbb565b610cb4838361130e565b9050610bf7565b50600192915050565b905090565b600073ffffffffffffffffffffffffffffffffffffffff82161580610bf757505073ffffffffffffffffffffffffffffffffffffffff1660009081526010602052604090205460ff1690565b600080610d2a610d23611a13565b8585612879565b90508015610d5b57507f1626ba7e000000000000000000000000000000000000000000000000000000009050610bf7565b5060009392505050565b6000610d7082612826565b15610d8557610d80848484612408565b610d97565b610d908484846122c4565b9050610d9b565b5060015b9392505050565b60135473ffffffffffffffffffffffffffffffffffffffff163314610e28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e6167657200000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6015544211610e93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f446561646c696e65206e6f7420726561636865640000000000000000000000006044820152606401610e1f565b60165460ff16610eff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f53616c6520776173206e6f74207375636365737366756c0000000000000000006044820152606401610e1f565b6012546040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052909116906323b872dd906064015b6020604051808303816000875af1158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa3919061402b565b505050565b60135473ffffffffffffffffffffffffffffffffffffffff163314611029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055565b6000600854461461106657610cc46128f5565b5060095490565b610fa383838360405180602001604052806000815250611c93565b6014548111156110f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f7420656e6f7567682066756e6473000000000000000000000000000000006044820152606401610e1f565b601554421061115f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f446561646c696e652072656163686564000000000000000000000000000000006044820152606401610e1f565b601654610100900460ff166111d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f52616973696e672066756e6473206973206e6f742061637469766500000000006044820152606401610e1f565b6000601454600654836111e39190614077565b6111ed91906140b2565b6012546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925060009173ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af1158015611270573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611294919061402b565b9050806112fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610e1f565b61130830858561298f565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff831661135d576040517f5461585f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152600b6020908152604080832073ffffffffffffffffffffffffffffffffffffffff881680855290835292819020869055518581529192917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350600192915050565b60135473ffffffffffffffffffffffffffffffffffffffff16331461144f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156114c85750825b905060008267ffffffffffffffff1660011480156114e55750303b155b9050811580156114f3575080155b1561152a576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166001178555831561158b5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b60026115978d82614119565b5060036115a48c82614119565b5060128a60ff1610156115e3576040517f98790fd500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff8c1690811790915561161e90600a614353565b6005554660085561162d6128f5565b6009556012805473ffffffffffffffffffffffffffffffffffffffff89167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155601489905560158790556013805490911633179055611692308a612a72565b83156116f35784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050505050565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff1661172f82612826565b611765576040517f3f6cc76800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166117b2576040517fc5723b5100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6015544211611822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f446561646c696e65206e6f7420726561636865640000000000000000000000006044820152606401610e1f565b60165460ff161561188f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f53616c6520776173207375636365737366756c000000000000000000000000006044820152606401610e1f565b601654610100900460ff1615611901576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52616973696e672066756e6473206973206163746976650000000000000000006044820152606401610e1f565b306000908152600a602052604090205481111561197a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f7420656e6f7567682066756e6473000000000000000000000000000000006044820152606401610e1f565b61198533308361298f565b6000601454600654836119989190614077565b6119a291906140b2565b6012546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523060048201523360248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd90606401610f60565b611a103382612b32565b50565b600080600080611a216127d3565b925092509250468314611a38576000935050505090565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff831690636352211e90602401602060405180830381865afa158015611aa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac79190614362565b935050505090565b60038054610c0a90613fd8565b73ffffffffffffffffffffffffffffffffffffffff8216611b29576040517fccea9e6f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff8316611c0f576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d9b338484612bf2565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f6020908152604091829020805483518184028101840190945280845260609392830182828015611c8757602002820191906000526020600020905b815481526020019060010190808311611c73575b50505050509050919050565b611c9c82612826565b611cd2576040517f3f6cc76800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cdd848484610d65565b5073ffffffffffffffffffffffffffffffffffffffff83163b15801590611dc157506040517f150b7a02000000000000000000000000000000000000000000000000000000008082529073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290611d5990339089908890889060040161437f565b6020604051808303816000875af1158015611d78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9c91906143be565b7fffffffff000000000000000000000000000000000000000000000000000000001614155b15611308576040517f3da6393100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60135473ffffffffffffffffffffffffffffffffffffffff163314611e79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051602081019091526000815260609060405180602001604052806000815250610d9b565b60135473ffffffffffffffffffffffffffffffffffffffff163314611f4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b42841015611fb2576040517f05787bdf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611fbb85612826565b15611ff2576040517f1f3e0de800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861661203f576040517f5461585f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600161204b611053565b73ffffffffffffffffffffffffffffffffffffffff8a811660008181526011602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561219d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116158061221757508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b1561224e576040517f815e1d6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600b602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416612313576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316612360576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166000908152600b602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146123f4576123c283826143db565b73ffffffffffffffffffffffffffffffffffffffff86166000908152600b602090815260408083203384529091529020555b6123ff858585612bf2565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316612455576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166124a2576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff848116911614612502576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff841614801590612559575073ffffffffffffffffffffffffffffffffffffffff83166000908152600d6020908152604080832033845290915290205460ff16155b801561258957506000818152600c602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b156125c0576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6125c982610cc9565b15612600576040517f5ce7539700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61260d838360055461298f565b610fa3838383612f15565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff1633811480159061267e575073ffffffffffffffffffffffffffffffffffffffff81166000908152600d6020908152604080832033845290915290205460ff16155b156126b5576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000828152600c602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b606060008267ffffffffffffffff81111561275357612753613b64565b60405190808252806020026020018201604052801561277c578160200160208202803683370190505b509050835b61278b84866143ee565b8110156127cb5761279d600082613185565b826127a887846143db565b815181106127b8576127b8614401565b6020908102919091010152600101612781565b509392505050565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c8080602001905181019061281a9190614430565b93509350935050909192565b60007f800000000000000000000000000000000000000000000000000000000000000082118015610bf75750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff141590565b60008060006128888585613228565b50909250905060008160038111156128a2576128a2614469565b1480156128da57508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b806128eb57506128eb868686613275565b9695505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60026040516129279190614498565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b73ffffffffffffffffffffffffffffffffffffffff83166129c75780600660008282546129bc91906143ee565b90915550612a029050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600a6020526040812080548392906129fc9084906143db565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8083166000818152600a6020526040908190208054850190555190918516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90612a659085815260200190565b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8216612abf576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f800000000000000000000000000000000000000000000000000000000000000081600654612aee91906143ee565b1115612b26576040517f303b682f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa360008383612bf2565b73ffffffffffffffffffffffffffffffffffffffff8216612b7f576040517fa41e3d3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015612b9357612b8e826133c2565b612b9c565b612b9c82613403565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260106020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600a6020526040808220549285168252812054909190612c3086868661298f565b6000612c3b87610cc9565b90506000612c4887610cc9565b9050818015612c545750805b612eaa578115612cd057600060055484612c6e9190614077565b60055473ffffffffffffffffffffffffffffffffffffffff8a166000908152600a6020526040902054612ca19190614077565b612cab91906143db565b905060005b81811015612cc957612cc189613495565b600101612cb0565b5050612eaa565b8015612d3f5760055473ffffffffffffffffffffffffffffffffffffffff89166000908152600a60205260408120549091612d0a91614077565b600554612d179087614077565b612d2191906143db565b905060005b81811015612cc957612d378a61360d565b600101612d26565b600060055487612d4f9190614077565b905060005b81811015612dec5773ffffffffffffffffffffffffffffffffffffffff8a166000908152600f6020526040812054612d8e906001906143db565b73ffffffffffffffffffffffffffffffffffffffff8c166000908152600f602052604081208054929350909183908110612dca57612dca614401565b90600052602060002001549050612de28c8c83612f15565b5050600101612d54565b5080600554612e1d8b73ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b612e279190614077565b600554612e349088614077565b612e3e91906143db565b1115612e4d57612e4d8961360d565b8060055485612e5c9190614077565b60055473ffffffffffffffffffffffffffffffffffffffff8b166000908152600a6020526040902054612e8f9190614077565b612e9991906143db565b1115612ea857612ea888613495565b505b506001979650505050505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084612eb857509392505050565b73ffffffffffffffffffffffffffffffffffffffff83161561306c576000818152600c6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016905573ffffffffffffffffffffffffffffffffffffffff86168352600f90915281208054612f96906001906143db565b81548110612fa657612fa6614401565b90600052602060002001549050818114613020576000828152600e602052604081205460a01c73ffffffffffffffffffffffffffffffffffffffff86166000908152600f60205260409020805491925083918390811061300857613008614401565b60009182526020909120015561301e82826136c5565b505b73ffffffffffffffffffffffffffffffffffffffff84166000908152600f602052604090208054806130545761305461452c565b60019003818190600052602060002001600090559055505b73ffffffffffffffffffffffffffffffffffffffff821615613115576000818152600e6020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8716908101909155808452600f8352908320805460018181018355828652938520018590559252905461311091839161310b91906143db565b6136c5565b613125565b6000818152600e60205260408120555b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006131bf83546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009092048116919091031690565b82106131f7576040517f580821e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5081546fffffffffffffffffffffffffffffffff908116820116600090815260018301602052604090205492915050565b600080600083516041036132625760208401516040850151606086015160001a6132548882858561376f565b95509550955050505061326e565b50508151600091506002905b9250925092565b60008060008573ffffffffffffffffffffffffffffffffffffffff1685856040516024016132a492919061455b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1626ba7e0000000000000000000000000000000000000000000000000000000017905251613325919061457c565b600060405180830381855afa9150503d8060008114613360576040519150601f19603f3d011682016040523d82523d6000602084013e613365565b606091505b509150915081801561337957506020815110155b80156128eb575080517f1626ba7e00000000000000000000000000000000000000000000000000000000906133b79083016020908101908401614598565b149695505050505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f6020526040812054905b81811015610fa3576133fb8361360d565b6001016133ea565b60006005546134348373ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b61343e9190614077565b9050600061346e8373ffffffffffffffffffffffffffffffffffffffff166000908152600f602052604090205490565b905060005b61347d82846143db565b8110156113085761348d84613495565b600101613473565b73ffffffffffffffffffffffffffffffffffffffff81166134e2576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546fffffffffffffffffffffffffffffffff80821670010000000000000000000000000000000090920416146135265761351f6000613869565b90506135a5565b600760008154613535906145b1565b90915550600754600101613575576040517f303b682f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6007546135a2907f80000000000000000000000000000000000000000000000000000000000000006143ee565b90505b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff168015613602576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa3818484612f15565b73ffffffffffffffffffffffffffffffffffffffff811661365a576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f60205260408120805461368d906001906143db565b8154811061369d5761369d614401565b906000526020600020015490506136b682600083612f15565b6136c160008261393c565b5050565b6000828152600e60205260409020546bffffffffffffffffffffffff82111561371a576040517ffcb3438c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000928352600e602052604090922073ffffffffffffffffffffffffffffffffffffffff9290921660a09190911b7fffffffffffffffffffffffff000000000000000000000000000000000000000016019055565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156137aa575060009150600390508261385f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156137fe573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166138555750600092506001915082905061385f565b9250600091508190505b9450945094915050565b80546000906fffffffffffffffffffffffffffffffff70010000000000000000000000000000000082048116911681036138cf576040517f75e52f4f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016fffffffffffffffffffffffffffffffff9081166000818152600185016020526040812080549190558454909216700100000000000000000000000000000000909102179092555090565b81546fffffffffffffffffffffffffffffffff8082167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019170010000000000000000000000000000000090048116908216036139c5576040517f8acb5f2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff16600081815260018401602052604090209190915581547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016179055565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611a1057600080fd5b600060208284031215613a5457600080fd5b8135610d9b81613a14565b73ffffffffffffffffffffffffffffffffffffffff81168114611a1057600080fd5b600060208284031215613a9357600080fd5b8135610d9b81613a5f565b60005b83811015613ab9578181015183820152602001613aa1565b50506000910152565b60008151808452613ada816020860160208601613a9e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610d9b6020830184613ac2565b600060208284031215613b3157600080fd5b5035919050565b60008060408385031215613b4b57600080fd5b8235613b5681613a5f565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112613ba457600080fd5b813567ffffffffffffffff80821115613bbf57613bbf613b64565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715613c0557613c05613b64565b81604052838152866020858801011115613c1e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215613c5157600080fd5b82359150602083013567ffffffffffffffff811115613c6f57600080fd5b613c7b85828601613b93565b9150509250929050565b600080600060608486031215613c9a57600080fd5b8335613ca581613a5f565b92506020840135613cb581613a5f565b929592945050506040919091013590565b803560ff811681146117b257600080fd5b600080600080600080600060e0888a031215613cf257600080fd5b873567ffffffffffffffff80821115613d0a57600080fd5b613d168b838c01613b93565b985060208a0135915080821115613d2c57600080fd5b50613d398a828b01613b93565b965050613d4860408901613cc6565b9450606088013593506080880135925060a0880135613d6681613a5f565b8092505060c0880135905092959891949750929550565b8015158114611a1057600080fd5b600060208284031215613d9d57600080fd5b8135610d9b81613d7d565b60008060008060608587031215613dbe57600080fd5b8435613dc981613a5f565b935060208501359250604085013567ffffffffffffffff80821115613ded57600080fd5b818701915087601f830112613e0157600080fd5b813581811115613e1057600080fd5b886020828501011115613e2257600080fd5b95989497505060200194505050565b60008060408385031215613e4457600080fd5b8235613e4f81613a5f565b91506020830135613e5f81613d7d565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015613ea257835183529284019291840191600101613e86565b50909695505050505050565b60008060008060808587031215613ec457600080fd5b8435613ecf81613a5f565b93506020850135613edf81613a5f565b925060408501359150606085013567ffffffffffffffff811115613f0257600080fd5b613f0e87828801613b93565b91505092959194509250565b600080600080600080600060e0888a031215613f3557600080fd5b8735613f4081613a5f565b96506020880135613f5081613a5f565b95506040880135945060608801359350613f6c60808901613cc6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215613f9b57600080fd5b8235613fa681613a5f565b91506020830135613e5f81613a5f565b60008060408385031215613fc957600080fd5b50508035926020909101359150565b600181811c90821680613fec57607f821691505b602082108103614025577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561403d57600080fd5b8151610d9b81613d7d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000826140ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082028115828204841417610bf757610bf7614048565b601f821115610fa3576000816000526020600020601f850160051c810160208610156140f25750805b601f850160051c820191505b81811015614111578281556001016140fe565b505050505050565b815167ffffffffffffffff81111561413357614133613b64565b614147816141418454613fd8565b846140c9565b602080601f83116001811461419a57600084156141645750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555614111565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156141e7578886015182559484019460019091019084016141c8565b508582101561422357878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600181815b8085111561428c57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561427257614272614048565b8085161561427f57918102915b93841c9390800290614238565b509250929050565b6000826142a357506001610bf7565b816142b057506000610bf7565b81600181146142c657600281146142d0576142ec565b6001915050610bf7565b60ff8411156142e1576142e1614048565b50506001821b610bf7565b5060208310610133831016604e8410600b841016171561430f575081810a610bf7565b6143198383614233565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561434b5761434b614048565b029392505050565b6000610d9b60ff841683614294565b60006020828403121561437457600080fd5b8151610d9b81613a5f565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526128eb6080830184613ac2565b6000602082840312156143d057600080fd5b8151610d9b81613a14565b81810381811115610bf757610bf7614048565b80820180821115610bf757610bf7614048565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008060006060848603121561444557600080fd5b83519250602084015161445781613a5f565b80925050604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008083546144a681613fd8565b600182811680156144be57600181146144f157614520565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450614520565b8760005260208060002060005b858110156145175781548a8201529084019082016144fe565b50505082870194505b50929695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b8281526040602082015260006145746040830184613ac2565b949350505050565b6000825161458e818460208701613a9e565b9190910192915050565b6000602082840312156145aa57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036145e2576145e2614048565b506001019056fea2646970667358221220a02edd005e04e8e137262c5fb947bd3c0fba6d01076d5fdf34a0bc77dd125c9764736f6c63430008170033",
        "sourceMap": "578:5021:33:-:0;;;1021:34;;;-1:-1:-1;;1062:31:33;1021:34;1062:31;;;1209:55;;;;;;;;;-1:-1:-1;1234:22:33;:20;:22::i;:::-;578:5021;;7711:422:1;8870:21;7900:15;;;;;;;7896:76;;;7938:23;;-1:-1:-1;;;7938:23:1;;;;;;;;;;;7896:76;7985:14;;-1:-1:-1;;;;;7985:14:1;;;:34;7981:146;;8035:33;;-1:-1:-1;;;;;;8035:33:1;-1:-1:-1;;;;;8035:33:1;;;;;8087:29;;158:50:40;;;8087:29:1;;146:2:40;131:18;8087:29:1;;;;;;;7981:146;7760:373;7711:422::o;14:200:40:-;578:5021:33;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106103645760003560e01c806370a08231116101c6578063b3f9ea34116100f7578063d96ca0b911610095578063dfabc0331161006f578063dfabc03314610aa4578063e985e9c514610ac4578063f780bc1a14610aff578063fc0c546a14610b1f57600080fd5b8063d96ca0b914610a2c578063dd62ed3e14610a4c578063dd63769914610a8457600080fd5b8063c5ab3ba6116100d1578063c5ab3ba6146109c2578063c87b56dd146109d7578063d30be6f0146109f7578063d505accf14610a0c57600080fd5b8063b3f9ea341461094a578063b88d4fde1461098d578063bf2adf90146109ad57600080fd5b8063976a843511610164578063a22cb4651161013e578063a22cb465146108c9578063a9059cbb146108e9578063affed0e014610909578063b1ab93171461091d57600080fd5b8063976a8435146108855780639e5d4c491461089b5780639ebe2d0a146108b357600080fd5b806389fb4c66116101a057806389fb4c66146108265780638a696e501461083b5780638da5cb5b1461085b57806395d89b411461087057600080fd5b806370a08231146107ac5780637ecebe00146107d957806389529c041461080657600080fd5b80632df96c7b116102a05780634d9660721161023e5780635da4af75116102185780635da4af751461072357806363110c46146107385780636352211e146107585780636e8f624b1461077857600080fd5b80634d966072146106d35780634f02c420146106f3578063561650011461070957600080fd5b80633644e5151161027a5780633644e5151461065157806342842e0e146106665780634570992d14610686578063481c6a75146106a657600080fd5b80632df96c7b146105e35780633013ce29146105f8578063313ce5671461062557600080fd5b806309f0ef651161030d5780631d08697b116102e75780631d08697b1461056c57806323b872dd1461058b578063279093a5146105ab57806329dcb0cf146105cd57600080fd5b806309f0ef65146104e55780631626ba7e1461050557806318160ddd1461055657600080fd5b8063081812fc1161033e578063081812fc14610418578063095ea7b31461048057806309674eb0146104a057600080fd5b806301ffc9a71461037057806302519da3146103a557806306fdde03146103f657600080fd5b3661036b57005b600080fd5b34801561037c57600080fd5b5061039061038b366004613a42565b610b64565b60405190151581526020015b60405180910390f35b3480156103b157600080fd5b506103e86103c0366004613a81565b73ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b60405190815260200161039c565b34801561040257600080fd5b5061040b610bfd565b60405161039c9190613b0c565b34801561042457600080fd5b5061045b610433366004613b1f565b600c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161039c565b34801561048c57600080fd5b5061039061049b366004613b38565b610c8b565b3480156104ac57600080fd5b506000546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000909204811691909103166103e8565b3480156104f157600080fd5b50610390610500366004613a81565b610cc9565b34801561051157600080fd5b50610525610520366004613c3e565b610d15565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161039c565b34801561056257600080fd5b506103e860065481565b34801561057857600080fd5b5060165461039090610100900460ff1681565b34801561059757600080fd5b506103906105a6366004613c85565b610d65565b3480156105b757600080fd5b506105cb6105c6366004613b38565b610da2565b005b3480156105d957600080fd5b506103e860155481565b3480156105ef57600080fd5b506105cb610fa8565b34801561060457600080fd5b5060125461045b9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561063157600080fd5b5060045461063f9060ff1681565b60405160ff909116815260200161039c565b34801561065d57600080fd5b506103e8611053565b34801561067257600080fd5b506105cb610681366004613c85565b61106d565b34801561069257600080fd5b506105cb6106a1366004613b38565b611088565b3480156106b257600080fd5b5060135461045b9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156106df57600080fd5b506103906106ee366004613b38565b61130e565b3480156106ff57600080fd5b506103e860075481565b34801561071557600080fd5b506016546103909060ff1681565b34801561072f57600080fd5b506105cb6113ce565b34801561074457600080fd5b506105cb610753366004613cd7565b61147d565b34801561076457600080fd5b5061045b610773366004613b1f565b611701565b34801561078457600080fd5b506103e87f800000000000000000000000000000000000000000000000000000000000000081565b3480156107b857600080fd5b506103e86107c7366004613a81565b600a6020526000908152604090205481565b3480156107e557600080fd5b506103e86107f4366004613a81565b60116020526000908152604090205481565b34801561081257600080fd5b506105cb610821366004613b1f565b6117b7565b34801561083257600080fd5b506006546103e8565b34801561084757600080fd5b506105cb610856366004613d8b565b611a06565b34801561086757600080fd5b5061045b611a13565b34801561087c57600080fd5b5061040b611acf565b34801561089157600080fd5b506103e860055481565b61040b6108a9366004613da8565b6060949350505050565b3480156108bf57600080fd5b506103e860145481565b3480156108d557600080fd5b506105cb6108e4366004613e31565b611adc565b3480156108f557600080fd5b50610390610904366004613b38565b611bc0565b34801561091557600080fd5b5060006103e8565b34801561092957600080fd5b5061093d610938366004613a81565b611c1a565b60405161039c9190613e6a565b34801561095657600080fd5b506103e8610965366004613a81565b73ffffffffffffffffffffffffffffffffffffffff166000908152600f602052604090205490565b34801561099957600080fd5b506105cb6109a8366004613eae565b611c93565b3480156109b957600080fd5b506105cb611df8565b3480156109ce57600080fd5b506007546103e8565b3480156109e357600080fd5b5061040b6109f2366004613b1f565b611ea6565b348015610a0357600080fd5b506105cb611ecd565b348015610a1857600080fd5b506105cb610a27366004613f1a565b611f78565b348015610a3857600080fd5b50610390610a47366004613c85565b6122c4565b348015610a5857600080fd5b506103e8610a67366004613f88565b600b60209081526000928352604080842090915290825290205481565b348015610a9057600080fd5b506105cb610a9f366004613c85565b612408565b348015610ab057600080fd5b506105cb610abf366004613b38565b612618565b348015610ad057600080fd5b50610390610adf366004613f88565b600d60209081526000928352604080842090915290825290205460ff1681565b348015610b0b57600080fd5b5061093d610b1a366004613fb6565b612736565b348015610b2b57600080fd5b50610b346127d3565b6040805193845273ffffffffffffffffffffffffffffffffffffffff90921660208401529082015260600161039c565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fcaf91ff5000000000000000000000000000000000000000000000000000000001480610bf757507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b60028054610c0a90613fd8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3690613fd8565b8015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b505050505081565b6000610c9682612826565b15610caa57610ca58383612618565b610cbb565b610cb4838361130e565b9050610bf7565b50600192915050565b905090565b600073ffffffffffffffffffffffffffffffffffffffff82161580610bf757505073ffffffffffffffffffffffffffffffffffffffff1660009081526010602052604090205460ff1690565b600080610d2a610d23611a13565b8585612879565b90508015610d5b57507f1626ba7e000000000000000000000000000000000000000000000000000000009050610bf7565b5060009392505050565b6000610d7082612826565b15610d8557610d80848484612408565b610d97565b610d908484846122c4565b9050610d9b565b5060015b9392505050565b60135473ffffffffffffffffffffffffffffffffffffffff163314610e28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e6167657200000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6015544211610e93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f446561646c696e65206e6f7420726561636865640000000000000000000000006044820152606401610e1f565b60165460ff16610eff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f53616c6520776173206e6f74207375636365737366756c0000000000000000006044820152606401610e1f565b6012546040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015260448201849052909116906323b872dd906064015b6020604051808303816000875af1158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa3919061402b565b505050565b60135473ffffffffffffffffffffffffffffffffffffffff163314611029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055565b6000600854461461106657610cc46128f5565b5060095490565b610fa383838360405180602001604052806000815250611c93565b6014548111156110f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f7420656e6f7567682066756e6473000000000000000000000000000000006044820152606401610e1f565b601554421061115f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f446561646c696e652072656163686564000000000000000000000000000000006044820152606401610e1f565b601654610100900460ff166111d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f52616973696e672066756e6473206973206e6f742061637469766500000000006044820152606401610e1f565b6000601454600654836111e39190614077565b6111ed91906140b2565b6012546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925060009173ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af1158015611270573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611294919061402b565b9050806112fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610e1f565b61130830858561298f565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff831661135d576040517f5461585f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152600b6020908152604080832073ffffffffffffffffffffffffffffffffffffffff881680855290835292819020869055518581529192917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350600192915050565b60135473ffffffffffffffffffffffffffffffffffffffff16331461144f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156114c85750825b905060008267ffffffffffffffff1660011480156114e55750303b155b9050811580156114f3575080155b1561152a576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166001178555831561158b5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b60026115978d82614119565b5060036115a48c82614119565b5060128a60ff1610156115e3576040517f98790fd500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff8c1690811790915561161e90600a614353565b6005554660085561162d6128f5565b6009556012805473ffffffffffffffffffffffffffffffffffffffff89167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155601489905560158790556013805490911633179055611692308a612a72565b83156116f35784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050505050565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff1661172f82612826565b611765576040517f3f6cc76800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166117b2576040517fc5723b5100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6015544211611822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f446561646c696e65206e6f7420726561636865640000000000000000000000006044820152606401610e1f565b60165460ff161561188f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f53616c6520776173207375636365737366756c000000000000000000000000006044820152606401610e1f565b601654610100900460ff1615611901576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f52616973696e672066756e6473206973206163746976650000000000000000006044820152606401610e1f565b306000908152600a602052604090205481111561197a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f7420656e6f7567682066756e6473000000000000000000000000000000006044820152606401610e1f565b61198533308361298f565b6000601454600654836119989190614077565b6119a291906140b2565b6012546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523060048201523360248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd90606401610f60565b611a103382612b32565b50565b600080600080611a216127d3565b925092509250468314611a38576000935050505090565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff831690636352211e90602401602060405180830381865afa158015611aa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac79190614362565b935050505090565b60038054610c0a90613fd8565b73ffffffffffffffffffffffffffffffffffffffff8216611b29576040517fccea9e6f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336000818152600d6020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff8316611c0f576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d9b338484612bf2565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f6020908152604091829020805483518184028101840190945280845260609392830182828015611c8757602002820191906000526020600020905b815481526020019060010190808311611c73575b50505050509050919050565b611c9c82612826565b611cd2576040517f3f6cc76800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cdd848484610d65565b5073ffffffffffffffffffffffffffffffffffffffff83163b15801590611dc157506040517f150b7a02000000000000000000000000000000000000000000000000000000008082529073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290611d5990339089908890889060040161437f565b6020604051808303816000875af1158015611d78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9c91906143be565b7fffffffff000000000000000000000000000000000000000000000000000000001614155b15611308576040517f3da6393100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60135473ffffffffffffffffffffffffffffffffffffffff163314611e79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051602081019091526000815260609060405180602001604052806000815250610d9b565b60135473ffffffffffffffffffffffffffffffffffffffff163314611f4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f74206d616e616765720000000000000000000000000000000000000000006044820152606401610e1f565b601680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b42841015611fb2576040517f05787bdf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611fbb85612826565b15611ff2576040517f1f3e0de800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff861661203f576040517f5461585f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600161204b611053565b73ffffffffffffffffffffffffffffffffffffffff8a811660008181526011602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561219d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116158061221757508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b1561224e576040517f815e1d6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600b602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416612313576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316612360576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166000908152600b602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146123f4576123c283826143db565b73ffffffffffffffffffffffffffffffffffffffff86166000908152600b602090815260408083203384529091529020555b6123ff858585612bf2565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316612455576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166124a2576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff848116911614612502576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff841614801590612559575073ffffffffffffffffffffffffffffffffffffffff83166000908152600d6020908152604080832033845290915290205460ff16155b801561258957506000818152600c602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b156125c0576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6125c982610cc9565b15612600576040517f5ce7539700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61260d838360055461298f565b610fa3838383612f15565b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff1633811480159061267e575073ffffffffffffffffffffffffffffffffffffffff81166000908152600d6020908152604080832033845290915290205460ff16155b156126b5576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000828152600c602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b606060008267ffffffffffffffff81111561275357612753613b64565b60405190808252806020026020018201604052801561277c578160200160208202803683370190505b509050835b61278b84866143ee565b8110156127cb5761279d600082613185565b826127a887846143db565b815181106127b8576127b8614401565b6020908102919091010152600101612781565b509392505050565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c8080602001905181019061281a9190614430565b93509350935050909192565b60007f800000000000000000000000000000000000000000000000000000000000000082118015610bf75750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff141590565b60008060006128888585613228565b50909250905060008160038111156128a2576128a2614469565b1480156128da57508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b806128eb57506128eb868686613275565b9695505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60026040516129279190614498565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b73ffffffffffffffffffffffffffffffffffffffff83166129c75780600660008282546129bc91906143ee565b90915550612a029050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600a6020526040812080548392906129fc9084906143db565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8083166000818152600a6020526040908190208054850190555190918516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90612a659085815260200190565b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8216612abf576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f800000000000000000000000000000000000000000000000000000000000000081600654612aee91906143ee565b1115612b26576040517f303b682f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa360008383612bf2565b73ffffffffffffffffffffffffffffffffffffffff8216612b7f576040517fa41e3d3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015612b9357612b8e826133c2565b612b9c565b612b9c82613403565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260106020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600a6020526040808220549285168252812054909190612c3086868661298f565b6000612c3b87610cc9565b90506000612c4887610cc9565b9050818015612c545750805b612eaa578115612cd057600060055484612c6e9190614077565b60055473ffffffffffffffffffffffffffffffffffffffff8a166000908152600a6020526040902054612ca19190614077565b612cab91906143db565b905060005b81811015612cc957612cc189613495565b600101612cb0565b5050612eaa565b8015612d3f5760055473ffffffffffffffffffffffffffffffffffffffff89166000908152600a60205260408120549091612d0a91614077565b600554612d179087614077565b612d2191906143db565b905060005b81811015612cc957612d378a61360d565b600101612d26565b600060055487612d4f9190614077565b905060005b81811015612dec5773ffffffffffffffffffffffffffffffffffffffff8a166000908152600f6020526040812054612d8e906001906143db565b73ffffffffffffffffffffffffffffffffffffffff8c166000908152600f602052604081208054929350909183908110612dca57612dca614401565b90600052602060002001549050612de28c8c83612f15565b5050600101612d54565b5080600554612e1d8b73ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b612e279190614077565b600554612e349088614077565b612e3e91906143db565b1115612e4d57612e4d8961360d565b8060055485612e5c9190614077565b60055473ffffffffffffffffffffffffffffffffffffffff8b166000908152600a6020526040902054612e8f9190614077565b612e9991906143db565b1115612ea857612ea888613495565b505b506001979650505050505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084612eb857509392505050565b73ffffffffffffffffffffffffffffffffffffffff83161561306c576000818152600c6020908152604080832080547fffffffffffffffffffffffff000000000000000000000000000000000000000016905573ffffffffffffffffffffffffffffffffffffffff86168352600f90915281208054612f96906001906143db565b81548110612fa657612fa6614401565b90600052602060002001549050818114613020576000828152600e602052604081205460a01c73ffffffffffffffffffffffffffffffffffffffff86166000908152600f60205260409020805491925083918390811061300857613008614401565b60009182526020909120015561301e82826136c5565b505b73ffffffffffffffffffffffffffffffffffffffff84166000908152600f602052604090208054806130545761305461452c565b60019003818190600052602060002001600090559055505b73ffffffffffffffffffffffffffffffffffffffff821615613115576000818152600e6020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8716908101909155808452600f8352908320805460018181018355828652938520018590559252905461311091839161310b91906143db565b6136c5565b613125565b6000818152600e60205260408120555b808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006131bf83546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009092048116919091031690565b82106131f7576040517f580821e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5081546fffffffffffffffffffffffffffffffff908116820116600090815260018301602052604090205492915050565b600080600083516041036132625760208401516040850151606086015160001a6132548882858561376f565b95509550955050505061326e565b50508151600091506002905b9250925092565b60008060008573ffffffffffffffffffffffffffffffffffffffff1685856040516024016132a492919061455b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1626ba7e0000000000000000000000000000000000000000000000000000000017905251613325919061457c565b600060405180830381855afa9150503d8060008114613360576040519150601f19603f3d011682016040523d82523d6000602084013e613365565b606091505b509150915081801561337957506020815110155b80156128eb575080517f1626ba7e00000000000000000000000000000000000000000000000000000000906133b79083016020908101908401614598565b149695505050505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f6020526040812054905b81811015610fa3576133fb8361360d565b6001016133ea565b60006005546134348373ffffffffffffffffffffffffffffffffffffffff166000908152600a602052604090205490565b61343e9190614077565b9050600061346e8373ffffffffffffffffffffffffffffffffffffffff166000908152600f602052604090205490565b905060005b61347d82846143db565b8110156113085761348d84613495565b600101613473565b73ffffffffffffffffffffffffffffffffffffffff81166134e2576040517f9c8d2cd200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546fffffffffffffffffffffffffffffffff80821670010000000000000000000000000000000090920416146135265761351f6000613869565b90506135a5565b600760008154613535906145b1565b90915550600754600101613575576040517f303b682f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6007546135a2907f80000000000000000000000000000000000000000000000000000000000000006143ee565b90505b6000818152600e602052604090205473ffffffffffffffffffffffffffffffffffffffff168015613602576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa3818484612f15565b73ffffffffffffffffffffffffffffffffffffffff811661365a576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f60205260408120805461368d906001906143db565b8154811061369d5761369d614401565b906000526020600020015490506136b682600083612f15565b6136c160008261393c565b5050565b6000828152600e60205260409020546bffffffffffffffffffffffff82111561371a576040517ffcb3438c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000928352600e602052604090922073ffffffffffffffffffffffffffffffffffffffff9290921660a09190911b7fffffffffffffffffffffffff000000000000000000000000000000000000000016019055565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156137aa575060009150600390508261385f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156137fe573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166138555750600092506001915082905061385f565b9250600091508190505b9450945094915050565b80546000906fffffffffffffffffffffffffffffffff70010000000000000000000000000000000082048116911681036138cf576040517f75e52f4f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016fffffffffffffffffffffffffffffffff9081166000818152600185016020526040812080549190558454909216700100000000000000000000000000000000909102179092555090565b81546fffffffffffffffffffffffffffffffff8082167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019170010000000000000000000000000000000090048116908216036139c5576040517f8acb5f2700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6fffffffffffffffffffffffffffffffff16600081815260018401602052604090209190915581547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016179055565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611a1057600080fd5b600060208284031215613a5457600080fd5b8135610d9b81613a14565b73ffffffffffffffffffffffffffffffffffffffff81168114611a1057600080fd5b600060208284031215613a9357600080fd5b8135610d9b81613a5f565b60005b83811015613ab9578181015183820152602001613aa1565b50506000910152565b60008151808452613ada816020860160208601613a9e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610d9b6020830184613ac2565b600060208284031215613b3157600080fd5b5035919050565b60008060408385031215613b4b57600080fd5b8235613b5681613a5f565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112613ba457600080fd5b813567ffffffffffffffff80821115613bbf57613bbf613b64565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715613c0557613c05613b64565b81604052838152866020858801011115613c1e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215613c5157600080fd5b82359150602083013567ffffffffffffffff811115613c6f57600080fd5b613c7b85828601613b93565b9150509250929050565b600080600060608486031215613c9a57600080fd5b8335613ca581613a5f565b92506020840135613cb581613a5f565b929592945050506040919091013590565b803560ff811681146117b257600080fd5b600080600080600080600060e0888a031215613cf257600080fd5b873567ffffffffffffffff80821115613d0a57600080fd5b613d168b838c01613b93565b985060208a0135915080821115613d2c57600080fd5b50613d398a828b01613b93565b965050613d4860408901613cc6565b9450606088013593506080880135925060a0880135613d6681613a5f565b8092505060c0880135905092959891949750929550565b8015158114611a1057600080fd5b600060208284031215613d9d57600080fd5b8135610d9b81613d7d565b60008060008060608587031215613dbe57600080fd5b8435613dc981613a5f565b935060208501359250604085013567ffffffffffffffff80821115613ded57600080fd5b818701915087601f830112613e0157600080fd5b813581811115613e1057600080fd5b886020828501011115613e2257600080fd5b95989497505060200194505050565b60008060408385031215613e4457600080fd5b8235613e4f81613a5f565b91506020830135613e5f81613d7d565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015613ea257835183529284019291840191600101613e86565b50909695505050505050565b60008060008060808587031215613ec457600080fd5b8435613ecf81613a5f565b93506020850135613edf81613a5f565b925060408501359150606085013567ffffffffffffffff811115613f0257600080fd5b613f0e87828801613b93565b91505092959194509250565b600080600080600080600060e0888a031215613f3557600080fd5b8735613f4081613a5f565b96506020880135613f5081613a5f565b95506040880135945060608801359350613f6c60808901613cc6565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215613f9b57600080fd5b8235613fa681613a5f565b91506020830135613e5f81613a5f565b60008060408385031215613fc957600080fd5b50508035926020909101359150565b600181811c90821680613fec57607f821691505b602082108103614025577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561403d57600080fd5b8151610d9b81613d7d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000826140ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082028115828204841417610bf757610bf7614048565b601f821115610fa3576000816000526020600020601f850160051c810160208610156140f25750805b601f850160051c820191505b81811015614111578281556001016140fe565b505050505050565b815167ffffffffffffffff81111561413357614133613b64565b614147816141418454613fd8565b846140c9565b602080601f83116001811461419a57600084156141645750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555614111565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156141e7578886015182559484019460019091019084016141c8565b508582101561422357878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600181815b8085111561428c57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561427257614272614048565b8085161561427f57918102915b93841c9390800290614238565b509250929050565b6000826142a357506001610bf7565b816142b057506000610bf7565b81600181146142c657600281146142d0576142ec565b6001915050610bf7565b60ff8411156142e1576142e1614048565b50506001821b610bf7565b5060208310610133831016604e8410600b841016171561430f575081810a610bf7565b6143198383614233565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561434b5761434b614048565b029392505050565b6000610d9b60ff841683614294565b60006020828403121561437457600080fd5b8151610d9b81613a5f565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526128eb6080830184613ac2565b6000602082840312156143d057600080fd5b8151610d9b81613a14565b81810381811115610bf757610bf7614048565b80820180821115610bf757610bf7614048565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008060006060848603121561444557600080fd5b83519250602084015161445781613a5f565b80925050604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008083546144a681613fd8565b600182811680156144be57600181146144f157614520565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450614520565b8760005260208060002060005b858110156145175781548a8201529084019082016144fe565b50505082870194505b50929695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b8281526040602082015260006145746040830184613ac2565b949350505050565b6000825161458e818460208701613a9e565b9190910192915050565b6000602082840312156145aa57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036145e2576145e2614048565b506001019056fea2646970667358221220a02edd005e04e8e137262c5fb947bd3c0fba6d01076d5fdf34a0bc77dd125c9764736f6c63430008170033",
        "sourceMap": "578:5021:33:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5154:210;;;;;;;;;;-1:-1:-1;5154:210:33;;;;;:::i;:::-;;:::i;:::-;;;611:14:40;;604:22;586:41;;574:2;559:18;5154:210:33;;;;;;;;4100:125:39;;;;;;;;;;-1:-1:-1;4100:125:39;;;;;:::i;:::-;4202:17;;4179:7;4202:17;;;:9;:17;;;;;;;4100:125;;;;1195:25:40;;;1183:2;1168:18;4100:125:39;1049:177:40;1099:18:39;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;2051:46::-;;;;;;;;;;-1:-1:-1;2051:46:39;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2407:42:40;2395:55;;;2377:74;;2365:2;2350:18;2051:46:39;2231:226:40;5401:281:39;;;;;;;;;;-1:-1:-1;5401:281:39;;;;;:::i;:::-;;:::i;4433:115::-;;;;;;;;;;-1:-1:-1;4494:7:39;5467:12:38;;;;;5454:10;;;;;;:25;;;;5446:34;4433:115:39;;13779:167;;;;;;;;;;-1:-1:-1;13779:167:39;;;;;:::i;:::-;;:::i;4080:392:33:-;;;;;;;;;;-1:-1:-1;4080:392:33;;;;;:::i;:::-;;:::i;:::-;;;4320:66:40;4308:79;;;4290:98;;4278:2;4263:18;4080:392:33;4146:248:40;1372:26:39;;;;;;;;;;;;;;;;1062:31:33;;;;;;;;;;-1:-1:-1;1062:31:33;;;;;;;;;;;7230:375:39;;;;;;;;;;-1:-1:-1;7230:375:39;;;;;:::i;:::-;;:::i;2607:280:33:-;;;;;;;;;;-1:-1:-1;2607:280:33;;;;;:::i;:::-;;:::i;:::-;;989:23;;;;;;;;;;;;;;;;3636:86;;;;;;;;;;;;;:::i;887:26::-;;;;;;;;;;-1:-1:-1;887:26:33;;;;;;;;1223:21:39;;;;;;;;;;-1:-1:-1;1223:21:39;;;;;;;;;;;5278:4:40;5266:17;;;5248:36;;5236:2;5221:18;1223:21:39;5106:184:40;13332:201:39;;;;;;;;;;;;;:::i;10732:152::-;;;;;;;;;;-1:-1:-1;10732:152:39;;;;;:::i;:::-;;:::i;2055:544:33:-;;;;;;;;;;-1:-1:-1;2055:544:33;;;;;:::i;:::-;;:::i;920:22::-;;;;;;;;;;-1:-1:-1;920:22:33;;;;;;;;6249:364:39;;;;;;;;;;-1:-1:-1;6249:364:39;;;;;:::i;:::-;;:::i;1549:21::-;;;;;;;;;;;;;;;;1021:34:33;;;;;;;;;;-1:-1:-1;1021:34:33;;;;;;;;3730:86;;;;;;;;;;;;;:::i;1278:769::-;;;;;;;;;;-1:-1:-1;1278:769:33;;;;;:::i;:::-;;:::i;3549:281:39:-;;;;;;;;;;-1:-1:-1;3549:281:39;;;;;:::i;:::-;;:::i;3004:53::-;;;;;;;;;;;;3049:8;3004:53;;1828:44;;;;;;;;;;-1:-1:-1;1828:44:39;;;;;:::i;:::-;;;;;;;;;;;;;;2659:41;;;;;;;;;;-1:-1:-1;2659:41:39;;;;;:::i;:::-;;;;;;;;;;;;;;3084:544:33;;;;;;;;;;-1:-1:-1;3084:544:33;;;;;:::i;:::-;;:::i;4231:97:39:-;;;;;;;;;;-1:-1:-1;4311:11:39;;4231:97;;13588:122;;;;;;;;;;-1:-1:-1;13588:122:39;;;;;:::i;:::-;;:::i;4776:250:33:-;;;;;;;;;;;;;:::i;1149:20:39:-;;;;;;;;;;;;;:::i;1295:::-;;;;;;;;;;;;;;;;5372:154:33;;;;;;:::i;:::-;5510:12;5372:154;;;;;;;949:33;;;;;;;;;;;;;;;;6665:324:39;;;;;;;;;;-1:-1:-1;6665:324:39;;;;;:::i;:::-;;:::i;10131:391::-;;;;;;;;;;-1:-1:-1;10131:391:39;;;;;:::i;:::-;;:::i;5534:60:33:-;;;;;;;;;;-1:-1:-1;5583:7:33;5534:60;;3836:122:39;;;;;;;;;;-1:-1:-1;3836:122:39;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;3964:130::-;;;;;;;;;;-1:-1:-1;3964:130:39;;;;;:::i;:::-;4067:14;;4044:7;4067:14;;;:6;:14;;;;;:21;;3964:130;11112:464;;;;;;;;;;-1:-1:-1;11112:464:39;;;;;:::i;:::-;;:::i;2988:88:33:-;;;;;;;;;;;;;:::i;4334:93:39:-;;;;;;;;;;-1:-1:-1;4415:6:39;;4334:93;;3826:244:33;;;;;;;;;;-1:-1:-1;3826:244:33;;;;;:::i;:::-;;:::i;2895:85::-;;;;;;;;;;;;;:::i;11784:1427:39:-;;;;;;;;;;-1:-1:-1;11784:1427:39;;;;;:::i;:::-;;:::i;9082:762::-;;;;;;;;;;-1:-1:-1;9082:762:39;;;;;:::i;:::-;;:::i;1934:64::-;;;;;;;;;;-1:-1:-1;1934:64:39;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;7726:1238;;;;;;;;;;-1:-1:-1;7726:1238:39;;;;;:::i;:::-;;:::i;5688:411::-;;;;;;;;;;-1:-1:-1;5688:411:39;;;;;:::i;:::-;;:::i;2159:68::-;;;;;;;;;;-1:-1:-1;2159:68:39;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;4554:389;;;;;;;;;;-1:-1:-1;4554:389:39;;;;;:::i;:::-;;:::i;4480:288:33:-;;;;;;;;;;;;;:::i;:::-;;;;11269:25:40;;;11342:42;11330:55;;;11325:2;11310:18;;11303:83;11402:18;;;11395:34;11257:2;11242:18;4480:288:33;11067:368:40;5154:210:33;5240:4;5267:40;;;5282:25;5267:40;;:91;;-1:-1:-1;5318:40:33;;;5333:25;5318:40;5267:91;5253:105;5154:210;-1:-1:-1;;5154:210:33:o;1099:18:39:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5401:281::-;5495:4;5512:27;5528:10;5512:15;:27::i;:::-;5508:149;;;5550:35;5564:8;5574:10;5550:13;:35::i;:::-;5508:149;;;5615:34;5628:8;5638:10;5615:12;:34::i;:::-;5608:41;;;;5508:149;-1:-1:-1;5672:4:39;5401:281;;;;:::o;4517:25::-;4510:32;;4433:115;:::o;13779:167::-;13865:4;13885:21;;;;;:55;;-1:-1:-1;;13910:30:39;;;;;;:21;:30;;;;;;;;;13779:167::o;4080:392:33:-;4192:17;4222:12;4237:112;4288:7;:5;:7::i;:::-;4310:4;4329:9;4237:36;:112::i;:::-;4222:127;;4366:7;4362:81;;;-1:-1:-1;4397:34:33;;-1:-1:-1;4390:41:33;;4362:81;-1:-1:-1;4455:9:33;;4080:392;-1:-1:-1;;;4080:392:33:o;7230:375:39:-;7344:4;7361:27;7377:10;7361:15;:27::i;:::-;7357:223;;;7399:42;7418:5;7425:3;7430:10;7399:18;:42::i;:::-;7357:223;;;7531:41;7549:5;7556:3;7561:10;7531:17;:41::i;:::-;7524:48;;;;7357:223;-1:-1:-1;7595:4:39;7230:375;;;;;;:::o;2607:280:33:-;1158:7;;;;1144:10;:21;1136:45;;;;;;;12084:2:40;1136:45:33;;;12066:21:40;12123:2;12103:18;;;12096:30;12162:13;12142:18;;;12135:41;12193:18;;1136:45:33;;;;;;;;;2718:8:::1;;2700:15;:26;2692:59;;;::::0;::::1;::::0;;12424:2:40;2692:59:33::1;::::0;::::1;12406:21:40::0;12463:2;12443:18;;;12436:30;12502:22;12482:18;;;12475:50;12542:18;;2692:59:33::1;12222:344:40::0;2692:59:33::1;2770:14;::::0;::::1;;2762:50;;;::::0;::::1;::::0;;12773:2:40;2762:50:33::1;::::0;::::1;12755:21:40::0;12812:2;12792:18;;;12785:30;12851:25;12831:18;;;12824:53;12894:18;;2762:50:33::1;12571:347:40::0;2762:50:33::1;2825:12;::::0;:54:::1;::::0;;;;2859:4:::1;2825:54;::::0;::::1;13186:34:40::0;2825:12:33::1;13256:15:40::0;;;13236:18;;;13229:43;13288:18;;;13281:34;;;2825:12:33;;::::1;::::0;:25:::1;::::0;13098:18:40;;2825:54:33::1;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2607:280:::0;;:::o;3636:86::-;1158:7;;;;1144:10;:21;1136:45;;;;;;;12084:2:40;1136:45:33;;;12066:21:40;12123:2;12103:18;;;12096:30;12162:13;12142:18;;;12135:41;12193:18;;1136:45:33;11882:335:40;1136:45:33;3694:12:::1;:20:::0;;;::::1;::::0;;3636:86::o;13332:201:39:-;13389:7;13436:17;;13419:13;:34;:108;;13502:25;:23;:25::i;13419:108::-;-1:-1:-1;13465:25:39;;;13332:201::o;10732:152::-;10841:37;10858:5;10865:3;10870;10841:37;;;;;;;;;;;;:16;:37::i;2055:544:33:-;2138:18;;2127:7;:29;;2119:58;;;;;;;13778:2:40;2119:58:33;;;13760:21:40;13817:2;13797:18;;;13790:30;13856:18;13836;;;13829:46;13892:18;;2119:58:33;13576:340:40;2119:58:33;2214:8;;2196:15;:26;2188:55;;;;;;;14123:2:40;2188:55:33;;;14105:21:40;14162:2;14142:18;;;14135:30;14201:18;14181;;;14174:46;14237:18;;2188:55:33;13921:340:40;2188:55:33;2262:12;;;;;;;2254:52;;;;;;;14468:2:40;2254:52:33;;;14450:21:40;14507:2;14487:18;;;14480:30;14546:29;14526:18;;;14519:57;14593:18;;2254:52:33;14266:351:40;2254:52:33;2319:13;2359:18;;2344:11;;2336:7;:19;;;;:::i;:::-;2335:42;;;;:::i;:::-;2403:12;;:59;;;;;2429:10;2403:59;;;13186:34:40;2449:4:33;13236:18:40;;;13229:43;13288:18;;;13281:34;;;2319:58:33;;-1:-1:-1;2388:12:33;;2403;;;;;:25;;13098:18:40;;2403:59:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2388:74;;2477:7;2473:65;;2501:25;;;;;15654:2:40;2501:25:33;;;15636:21:40;15693:2;15673:18;;;15666:30;15732:17;15712:18;;;15705:45;15767:18;;2501:25:33;15452:339:40;2473:65:33;2548:43;2571:4;2578:3;2583:7;2548:14;:43::i;:::-;2108:491;;2055:544;;:::o;6249:364:39:-;6344:4;6411:22;;;6407:68;;6451:16;;;;;;;;;;;;;;6407:68;6493:10;6483:21;;;;:9;:21;;;;;;;;;:31;;;;;;;;;;;;:40;;;6537:50;1195:25:40;;;6483:31:39;;6493:10;6537:50;;1168:18:40;6537:50:39;;;;;;;-1:-1:-1;6603:4:39;6249:364;;;;:::o;3730:86:33:-;1158:7;;;;1144:10;:21;1136:45;;;;;;;12084:2:40;1136:45:33;;;12066:21:40;12123:2;12103:18;;;12096:30;12162:13;12142:18;;;12135:41;12193:18;;1136:45:33;11882:335:40;1136:45:33;3789:12:::1;:19:::0;;;::::1;;;::::0;;3730:86::o;1278:769::-;8870:21:1;4302:15;;;;;;;4301:16;;4348:14;;4158:30;4726:16;;:34;;;;;4746:14;4726:34;4706:54;;4770:17;4790:11;:16;;4805:1;4790:16;:50;;;;-1:-1:-1;4818:4:1;4810:25;:30;4790:50;4770:70;;4856:12;4855:13;:30;;;;;4873:12;4872:13;4855:30;4851:91;;;4908:23;;;;;;;;;;;;;;4851:91;4951:18;;;;4968:1;4951:18;;;4979:67;;;;5013:22;;;;;;;;4979:67;1496:4:33::1;:12;1503:5:::0;1496:4;:12:::1;:::i;:::-;-1:-1:-1::0;1519:6:33::1;:16;1528:7:::0;1519:6;:16:::1;:::i;:::-;;1564:2;1552:9;:14;;;1548:66;;;1586:16;;;;;;;;;;;;;;1548:66;1626:8;:20:::0;;;::::1;;::::0;::::1;::::0;;::::1;::::0;;;1665:14:::1;::::0;:2:::1;:14;:::i;:::-;1657:5;:22:::0;1748:13:::1;1728:17;:33:::0;1800:25:::1;:23;:25::i;:::-;1772;:53:::0;1838:12:::1;:36:::0;;::::1;::::0;::::1;::::0;;;::::1;;::::0;;;1885:18:::1;:40:::0;;;1936:8:::1;:20:::0;;;1967:7:::1;:20:::0;;;;::::1;1977:10;1967:20;::::0;;2000:39:::1;2019:4;2026:12:::0;2000:10:::1;:39::i;:::-;5070:14:1::0;5066:101;;;5100:23;;;;;;5142:14;;-1:-1:-1;19820:50:40;;5142:14:1;;19808:2:40;19793:18;5142:14:1;;;;;;;5066:101;4092:1081;;;;;1278:769:33;;;;;;;:::o;3549:281:39:-;3618:19;27164:15;;;:10;:15;;;;;;27228:16;27218:27;3690:20;27164:15;3690;:20::i;:::-;3685:67;;3728:16;;;;;;;;;;;;;;3685:67;3764:25;;;3760:65;;3807:10;;;;;;;;;;;;;;3760:65;3549:281;;;:::o;3084:544:33:-;3183:8;;3165:15;:26;3157:59;;;;;;;12424:2:40;3157:59:33;;;12406:21:40;12463:2;12443:18;;;12436:30;12502:22;12482:18;;;12475:50;12542:18;;3157:59:33;12222:344:40;3157:59:33;3236:14;;;;3235:15;3227:47;;;;;;;20083:2:40;3227:47:33;;;20065:21:40;20122:2;20102:18;;;20095:30;20161:21;20141:18;;;20134:49;20200:18;;3227:47:33;19881:343:40;3227:47:33;3294:12;;;;;;;3293:13;3285:49;;;;;;;20431:2:40;3285:49:33;;;20413:21:40;20470:2;20450:18;;;20443:30;20509:25;20489:18;;;20482:53;20552:18;;3285:49:33;20229:347:40;3285:49:33;3376:4;4179:7:39;4202:17;;;:9;:17;;;;;;3386:7:33;-1:-1:-1;3353:40:33;3345:69;;;;;;;13778:2:40;3345:69:33;;;13760:21:40;13817:2;13797:18;;;13790:30;13856:18;13836;;;13829:46;13892:18;;3345:69:33;13576:340:40;3345:69:33;3427:50;3442:10;3462:4;3469:7;3427:14;:50::i;:::-;3490:13;3530:18;;3515:11;;3507:7;:19;;;;:::i;:::-;3506:42;;;;:::i;:::-;3559:12;;:59;;;;;3593:4;3559:59;;;13186:34:40;3600:10:33;13236:18:40;;;13229:43;13288:18;;;13281:34;;;3490:58:33;;-1:-1:-1;3559:12:33;;;:25;;13098:18:40;;3559:59:33;12923:398:40;13588:122:39;13660:44;13685:10;13697:6;13660:24;:44::i;:::-;13588:122;:::o;4776:250:33:-;4814:7;4835:15;4852:21;4875:15;4894:7;:5;:7::i;:::-;4834:67;;;;;;4927:13;4916:7;:24;4912:47;;4957:1;4942:17;;;;;4776:250;:::o;4912:47::-;4979:39;;;;;;;;1195:25:40;;;4979:30:33;;;;;;1168:18:40;;4979:39:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4972:46;;;;;4776:250;:::o;1149:20:39:-;;;;;;;:::i;6665:324::-;6787:23;;;6783:70;;6828:17;;;;;;;;;;;;;;6783:70;6876:10;6859:28;;;;:16;:28;;;;;;;;;:39;;;;;;;;;;;;:51;;;;;;;;;;;;;6922:61;;586:41:40;;;6859:39:39;;6876:10;6922:61;;559:18:40;6922:61:39;;;;;;;6665:324;;:::o;10131:391::-;10202:4;10258:17;;;10254:65;;10293:18;;;;;;;;;;;;;;10254:65;10467:49;10492:10;10504:3;10509:6;10467:24;:49::i;3836:122::-;3938:14;;;;;;;:6;:14;;;;;;;;;3931:21;;;;;;;;;;;;;;;;;3906:16;;3931:21;;;3938:14;3931:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3836:122;;;:::o;11112:464::-;11251:20;11267:3;11251:15;:20::i;:::-;11246:67;;11289:16;;;;;;;;;;;;;;11246:67;11321:29;11334:5;11341:3;11346;11321:12;:29::i;:::-;-1:-1:-1;11371:15:39;;;;:20;;;;:151;;-1:-1:-1;11402:68:39;;11481:41;11402:68;;;11481:41;11402:37;;;;11481:41;;11402:68;;11440:10;;11452:5;;11459:3;;11464:5;;11402:68;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:120;;;;11371:151;11359:212;;;11546:17;;;;;;;;;;;;;;2988:88:33;1158:7;;;;1144:10;:21;1136:45;;;;;;;12084:2:40;1136:45:33;;;12066:21:40;12123:2;12103:18;;;12096:30;12162:13;12142:18;;;12135:41;12193:18;;1136:45:33;11882:335:40;1136:45:33;3047:14:::1;:21:::0;;;::::1;3064:4;3047:21;::::0;;2988:88::o;3826:244::-;3935:26;;;;;;;;;:21;:26;;3900:13;;3979:83;;;;;;;;;;;;;;2895:85;1158:7;;;;1144:10;:21;1136:45;;;;;;;12084:2:40;1136:45:33;;;12066:21:40;12123:2;12103:18;;;12096:30;12162:13;12142:18;;;12135:41;12193:18;;1136:45:33;11882:335:40;1136:45:33;2950:14:::1;:22:::0;;;::::1;::::0;;2895:85::o;11784:1427:39:-;11981:15;11969:9;:27;11965:80;;;12014:23;;;;;;;;;;;;;;11965:80;12203:23;12219:6;12203:15;:23::i;:::-;12199:70;;;12244:17;;;;;;;;;;;;;;12199:70;12281:22;;;12277:68;;12321:16;;;;;;;;;;;;;;12277:68;12372:24;12399:563;12497:18;:16;:18::i;:::-;12814:14;;;;;;;;:6;:14;;;;;;;;;:16;;;;;;;;12556:319;;12585:133;12556:319;;;22396:25:40;22498:18;;;22491:43;;;;22570:15;;;22550:18;;;22543:43;22602:18;;;22595:34;;;22645:19;;;22638:35;;;;22689:19;;;;22682:35;;;12556:319:39;;;;;;;;;;22368:19:40;;;12556:319:39;;;12530:360;;;;;;;;22998:66:40;12441:462:39;;;22986:79:40;23081:11;;;23074:27;;;;23117:12;;;23110:28;;;;23154:12;;12441:462:39;;;;;;;;;;;;;12419:495;;12441:462;12419:495;;;;12399:563;;;;;;;;;23404:25:40;23477:4;23465:17;;23445:18;;;23438:45;23499:18;;;23492:34;;;23542:18;;;23535:34;;;23376:19;;12399:563:39;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12399:563:39;;;;;;-1:-1:-1;;12977:30:39;;;;;:60;;;13031:6;13011:26;;:16;:26;;;;12977:60;12973:109;;;13057:15;;;;;;;;;;;;;;12973:109;13092:27;;;;;;;;:9;:27;;;;;;;;:37;;;;;;;;;;;;;:46;;;13159;1195:25:40;;;13092:37:39;;13159:46;;;;;1168:18:40;13159:46:39;;;;;;;11784:1427;;;;;;;:::o;9082:762::-;9197:4;9255:19;;;9251:64;;9292:15;;;;;;;;;;;;;;9251:64;9366:17;;;9362:65;;9401:18;;;;;;;;;;;;;;9362:65;9453:16;;;9435:15;9453:16;;;:9;:16;;;;;;;;9470:10;9453:28;;;;;;;;9563:17;9552:28;;9548:98;;9622:16;9632:6;9622:7;:16;:::i;:::-;9591;;;;;;;:9;:16;;;;;;;;9608:10;9591:28;;;;;;;:47;9548:98;9794:44;9819:5;9826:3;9831:6;9794:24;:44::i;:::-;9787:51;9082:762;-1:-1:-1;;;;;9082:762:39:o;7726:1238::-;7882:19;;;7878:64;;7919:15;;;;;;;;;;;;;;7878:64;7993:17;;;7989:65;;8028:18;;;;;;;;;;;;;;7989:65;27124:16;27164:15;;;:10;:15;;;;;;27228:16;8066:25;;;27218:27;;8066:25;8062:69;;8109:14;;;;;;;;;;;;;;8062:69;8234:10;:19;;;;;;;:66;;-1:-1:-1;8265:23:39;;;;;;;:16;:23;;;;;;;;8289:10;8265:35;;;;;;;;;;8264:36;8234:66;:107;;;;-1:-1:-1;8325:16:39;;;;:11;:16;;;;;;;;8311:10;:30;;8234:107;8222:165;;;8365:14;;;;;;;;;;;;;;8222:165;8630:25;8651:3;8630:20;:25::i;:::-;8626:88;;;8673:33;;;;;;;;;;;;;;8626:88;8886:33;8901:5;8908:3;8913:5;;8886:14;:33::i;:::-;8926:32;8942:5;8949:3;8954;8926:15;:32::i;5688:411::-;5819:19;27164:15;;;:10;:15;;;;;;27228:16;27218:27;5878:10;:25;;;;;:71;;-1:-1:-1;5908:29:39;;;;;;;:16;:29;;;;;;;;5938:10;5908:41;;;;;;;;;;5907:42;5878:71;5866:129;;;5973:14;;;;;;;;;;;;;;5866:129;6003:16;;;;:11;:16;;;;;;:27;;;;;;;;;;;;;;6044:49;;6003:16;;6044:49;;;;;;;5757:342;5688:411;;:::o;4554:389::-;4662:16;4687:30;4734:6;4720:21;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4720:21:39;-1:-1:-1;4687:54:39;-1:-1:-1;4767:6:39;4750:159;4779:15;4788:6;4779;:15;:::i;:::-;4775:1;:19;4750:159;;;4835:22;:16;4855:1;4835:19;:22::i;:::-;4807:13;4821:10;4825:6;4821:1;:10;:::i;:::-;4807:25;;;;;;;;:::i;:::-;;;;;;;;;;:50;4889:3;;4750:159;;;-1:-1:-1;4924:13:39;4554:389;-1:-1:-1;;;4554:389:39:o;4480:288:33:-;4578:15;;;4588:4;4578:15;;;;;;;;;4518:7;;;;;;;;4578:15;;;;;;;;;;;-1:-1:-1;4578:15:33;4556:37;;4678:4;4672;4665;4657:6;4653:17;4642:9;4630:53;4724:6;4713:47;;;;;;;;;;;;:::i;:::-;4706:54;;;;;;;4480:288;;;:::o;14151:139:39:-;14212:4;3049:8;14232:3;:24;:52;;;;-1:-1:-1;;14267:17:39;14260:24;;;14151:139::o;1041:368:26:-;1147:4;1164:17;1183:24;1213:33;1230:4;1236:9;1213:16;:33::i;:::-;-1:-1:-1;1163:83:26;;-1:-1:-1;1163:83:26;-1:-1:-1;1285:26:26;1276:5;:35;;;;;;;;:::i;:::-;;:58;;;;;1328:6;1315:19;;:9;:19;;;1276:58;1275:127;;;;1351:51;1378:6;1386:4;1392:9;1351:26;:51::i;:::-;1256:146;1041:368;-1:-1:-1;;;;;;1041:368:26:o;14378:400:39:-;14444:7;14517:121;14667:4;14651:22;;;;;;:::i;:::-;;;;;;;;;;14494:269;;;25774:25:40;;;;25815:18;;25808:34;;;;14686:14:39;25858:18:40;;;25851:34;14713:13:39;25901:18:40;;;25894:34;14747:4:39;25944:19:40;;;25937:84;25746:19;;14494:269:39;;;;;;;;;;;;14474:298;;;;;;14460:312;;14378:400;:::o;15004:690::-;15260:19;;;15256:158;;15305:6;15290:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;15256:158:39;;-1:-1:-1;15256:158:39;;15380:16;;;;;;;:9;:16;;;;;:26;;15400:6;;15380:16;:26;;15400:6;;15380:26;:::i;:::-;;;;-1:-1:-1;;15256:158:39;15603:14;;;;;;;;:9;:14;;;;;;;:24;;;;;;15648:40;15603:14;;15648:40;;;;;;;15621:6;1195:25:40;;1183:2;1168:18;;1049:177;15648:40:39;;;;;;;;15004:690;;;:::o;22941:403::-;23123:17;;;23119:65;;23158:18;;;;;;;;;;;;;;23119:65;3049:8;23210:6;23196:11;;:20;;;;:::i;:::-;:41;23192:89;;;23255:18;;;;;;;;;;;;;;23192:89;23289:49;23322:1;23326:3;23331:6;23289:24;:49::i;25651:547::-;25758:21;;;25754:69;;25797:18;;;;;;;;;;;;;;25754:69;26037:6;26033:112;;;26054:28;26074:7;26054:19;:28::i;:::-;26033:112;;;26105:32;26129:7;26105:23;:32::i;:::-;26153:30;;;;;;;;;:21;:30;;;;;:39;;;;;;;;;;;;;25651:547::o;17442:5199::-;4202:17;;;;17566:4;4202:17;;;:9;:17;;;;;;;;;;;;;;;17566:4;;4202:17;17711:34;17726:5;17733:3;17738:6;17711:14;:34::i;:::-;17798:31;17832:27;17853:5;17832:20;:27::i;:::-;17798:61;;17866:29;17898:25;17919:3;17898:20;:25::i;:::-;17866:57;;18179:26;:54;;;;;18209:24;18179:54;18175:4441;;18378:26;18374:4242;;;18763:30;18864:5;;18833:28;:36;;;;:::i;:::-;18814:5;;18797:14;;;;;;;:9;:14;;;;;;:22;;18814:5;18797:22;:::i;:::-;18796:74;;;;:::i;:::-;18763:107;;18884:9;18879:145;18903:22;18899:1;:26;18879:145;;;18940:26;18962:3;18940:21;:26::i;:::-;19000:3;;18879:145;;;;18406:625;18374:4242;;;19041:24;19037:3579;;;19490:5;;19471:16;;;19387:32;19471:16;;;:9;:16;;;;;;19387:32;;19471:24;;;:::i;:::-;19452:5;;19423:34;;:26;:34;:::i;:::-;19422:74;;;;:::i;:::-;19387:109;;19510:9;19505:151;19529:24;19525:1;:28;19505:151;;;19568:30;19592:5;19568:23;:30::i;:::-;19632:3;;19505:151;;19037:3579;20458:22;20492:5;;20483:6;:14;;;;:::i;:::-;20458:39;;20511:9;20506:338;20530:14;20526:1;:18;20506:338;;;20655:13;;;20628:24;20655:13;;;:6;:13;;;;;:20;:24;;20678:1;;20655:24;:::i;:::-;20708:13;;;20690:15;20708:13;;;:6;:13;;;;;:31;;20628:51;;-1:-1:-1;20690:15:39;;20628:51;;20708:31;;;;;;:::i;:::-;;;;;;;;;20690:49;;20750:36;20766:5;20773:3;20778:7;20750:15;:36::i;:::-;-1:-1:-1;;20820:3:39;;20506:338;;;;21770:14;21753:5;;21729:21;21744:5;4202:17;;4179:7;4202:17;;;:9;:17;;;;;;;4100:125;21729:21;:29;;;;:::i;:::-;21721:5;;21692:34;;:26;:34;:::i;:::-;:66;;;;:::i;:::-;:92;21678:167;;;21805:30;21829:5;21805:23;:30::i;:::-;22538:14;22521:5;;22490:28;:36;;;;:::i;:::-;22482:5;;4202:17;;;4179:7;4202:17;;;:9;:17;;;;;;22460:27;;;;:::i;:::-;:66;;;;:::i;:::-;:92;22446:163;;;22573:26;22595:3;22573:21;:26::i;:::-;19669:2947;19037:3579;-1:-1:-1;22631:4:39;;17442:5199;-1:-1:-1;;;;;;;17442:5199:39:o;1010:282:24:-;1041:5;;1180:10;1175:2;1164:14;;1159:32;1041:5;1146:46;1236:2;1227:11;;;-1:-1:-1;1256:21:24;1010:282;1256:21;-1:-1:-1;1312:6:24;637:698;-1:-1:-1;;;637:698:24:o;15965:1325:39:-;16166:19;;;;16162:516;;16268:16;;;;:11;:16;;;;;;;;16261:23;;;;;;;16315:13;;;;:6;:13;;;;;16329:20;;:24;;16261:23;;16329:24;:::i;:::-;16315:39;;;;;;;;:::i;:::-;;;;;;;;;16295:59;;16380:3;16367:9;:16;16363:264;;16396:20;27666:15;;;:10;:15;;;;;;27727:3;27723:14;16486:13;;;;;;;:6;:13;;;;;:27;;16396:42;;-1:-1:-1;16516:9:39;;16396:42;;16486:27;;;;;;:::i;:::-;;;;;;;;;;:39;16578;16593:9;16604:12;16578:14;:39::i;:::-;16385:242;16363:264;16651:13;;;;;;;:6;:13;;;;;:19;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;16187:491;16162:516;16723:17;;;;16719:514;;27337:12;27352:15;;;:10;:15;;;;;;;;;;27426:20;27416:31;27470:16;27458:29;;27402:94;;;27511:22;;;16957:11;;;:6;:11;;;;;:21;;-1:-1:-1;16957:21:39;;;;;;;;;;;;;;;17053:11;;:18;;17033:43;;27352:15;;17053:22;;-1:-1:-1;17053:22:39;:::i;:::-;17033:14;:43::i;:::-;16719:514;;;17210:15;;;;:10;:15;;;;;17203:22;16719:514;17280:3;17275;17246:38;;17268:5;17246:38;;;;;;;;;;;;15965:1325;;;:::o;4557:374:38:-;4650:13;4685;4692:5;5467:12;;;;;5454:10;;;;;;:25;;;;5446:34;;5337:156;4685:13;4676:5;:22;4672:53;;4707:18;;;;;;;;;;;;;;4672:53;-1:-1:-1;4888:12:38;;;;;;:29;;4876:42;;;;;:11;;;:42;;;;;;4557:374;;;;:::o;2129:766:25:-;2210:7;2219:12;2233:7;2256:9;:16;2276:2;2256:22;2252:637;;2592:4;2577:20;;2571:27;2641:4;2626:20;;2620:27;2698:4;2683:20;;2677:27;2294:9;2669:36;2739:25;2750:4;2669:36;2571:27;2620;2739:10;:25::i;:::-;2732:32;;;;;;;;;;;2252:637;-1:-1:-1;;2860:16:25;;2811:1;;-1:-1:-1;2815:35:25;;2252:637;2129:766;;;;;:::o;1816:458:26:-;1959:4;1976:12;1990:19;2013:6;:17;;2087:4;2093:9;2044:60;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2013:101;;;2044:60;2013:101;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1975:139;;;;2132:7;:42;;;;;2172:2;2155:6;:13;:19;;2132:42;:134;;;;-1:-1:-1;2190:29:26;;2231:34;;2190:29;;;;;;;;;;;;:::i;:::-;:76;;1816:458;-1:-1:-1;;;;;;1816:458:26:o;26750:293:39:-;4067:14;;;26811:21;4067:14;;;:6;:14;;;;;:21;;26868:170;26892:13;26888:1;:17;26868:170;;;26956:32;26980:7;26956:23;:32::i;:::-;27018:3;;26868:170;;26270:410;26335:29;26393:5;;26367:23;26382:7;4202:17;;4179:7;4202:17;;;:9;:17;;;;;;;4100:125;26367:23;:31;;;;:::i;:::-;26335:63;;26405:27;26435:24;26451:7;4067:14;;4044:7;4067:14;;;:6;:14;;;;;:21;;3964:130;26435:24;26405:54;;26473:9;26468:207;26492:43;26516:19;26492:21;:43;:::i;:::-;26488:1;:47;26468:207;;;26595:30;26617:7;26595:21;:30::i;:::-;26655:3;;26468:207;;23676:1129;23748:17;;;23744:65;;23783:18;;;;;;;;;;;;;;23744:65;23817:10;5660:12:38;;;;;;5646:10;;;;;:26;23836:495:39;;23992:26;:16;:24;:26::i;:::-;23987:31;;23836:495;;;24141:6;;24139:8;;;;;:::i;:::-;;;;-1:-1:-1;24206:6:39;;:27;;24202:79;;24253:18;;;;;;;;;;;;;;24202:79;24317:6;;24296:27;;3049:8;24296:27;:::i;:::-;24291:32;;23836:495;24339:19;27164:15;;;:10;:15;;;;;;27228:16;27218:27;24542:25;;24538:70;;24585:15;;;;;;;;;;;;;;24538:70;24762:37;24778:11;24791:3;24796:2;24762:15;:37::i;25047:481::-;25123:19;;;25119:64;;25160:15;;;;;;;;;;;;;;25119:64;25273:13;;;25260:10;25273:13;;;:6;:13;;;;;25287:20;;:24;;25310:1;;25287:24;:::i;:::-;25273:39;;;;;;;;:::i;:::-;;;;;;;;;25260:52;;25390:38;25406:5;25421:1;25425:2;25390:15;:38::i;:::-;25492:30;:16;25519:2;25492:26;:30::i;:::-;25112:416;25047:481;:::o;27755:383::-;27832:12;27847:15;;;:10;:15;;;;;;27884:27;27875:36;;27871:86;;;27929:20;;;;;;;;;;;;;;27871:86;28110:15;;;;:10;:15;;;;;;28015:16;28005:27;;;;28051:3;28047:16;;;;28065:20;28043:43;27991:104;28110:22;;27755:383::o;5140:1530:25:-;5266:7;;;6199:66;6186:79;;6182:164;;;-1:-1:-1;6297:1:25;;-1:-1:-1;6301:30:25;;-1:-1:-1;6333:1:25;6281:54;;6182:164;6457:24;;;6440:14;6457:24;;;;;;;;;23404:25:40;;;23477:4;23465:17;;23445:18;;;23438:45;;;;23499:18;;;23492:34;;;23542:18;;;23535:34;;;6457:24:25;;23376:19:40;;6457:24:25;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6457:24:25;;;;;;-1:-1:-1;;6495:20:25;;;6491:113;;-1:-1:-1;6547:1:25;;-1:-1:-1;6551:29:25;;-1:-1:-1;6547:1:25;;-1:-1:-1;6531:62:25;;6491:113;6622:6;-1:-1:-1;6630:20:25;;-1:-1:-1;6630:20:25;;-1:-1:-1;5140:1530:25;;;;;;;;;:::o;2410:344:38:-;2544:10;;2483:13;;2544:10;;;;;;;2580:12;2567:25;;2563:50;;2601:12;;;;;;;;;;;;;;2563:50;2622:11;;2650:22;;;;;;;;2622:11;2650;;:22;;;;;;;2681:29;;;2719:22;;;;;;;;;;;;;-1:-1:-1;2650:22:38;2410:344::o;2891:278::-;3009:12;;;;;;:16;;;3052:10;;;;;3038:24;;;;3034:48;;3071:11;;;;;;;;;;;;;;3034:48;3091:23;;;;;;:11;;;:23;;;;;:31;;;;3131:25;;;;;;;2891:278::o;14:177:40:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;638:154::-;724:42;717:5;713:54;706:5;703:65;693:93;;782:1;779;772:12;797:247;856:6;909:2;897:9;888:7;884:23;880:32;877:52;;;925:1;922;915:12;877:52;964:9;951:23;983:31;1008:5;983:31;:::i;1231:250::-;1316:1;1326:113;1340:6;1337:1;1334:13;1326:113;;;1416:11;;;1410:18;1397:11;;;1390:39;1362:2;1355:10;1326:113;;;-1:-1:-1;;1473:1:40;1455:16;;1448:27;1231:250::o;1486:330::-;1528:3;1566:5;1560:12;1593:6;1588:3;1581:19;1609:76;1678:6;1671:4;1666:3;1662:14;1655:4;1648:5;1644:16;1609:76;:::i;:::-;1730:2;1718:15;1735:66;1714:88;1705:98;;;;1805:4;1701:109;;1486:330;-1:-1:-1;;1486:330:40:o;1821:220::-;1970:2;1959:9;1952:21;1933:4;1990:45;2031:2;2020:9;2016:18;2008:6;1990:45;:::i;2046:180::-;2105:6;2158:2;2146:9;2137:7;2133:23;2129:32;2126:52;;;2174:1;2171;2164:12;2126:52;-1:-1:-1;2197:23:40;;2046:180;-1:-1:-1;2046:180:40:o;2462:315::-;2530:6;2538;2591:2;2579:9;2570:7;2566:23;2562:32;2559:52;;;2607:1;2604;2597:12;2559:52;2646:9;2633:23;2665:31;2690:5;2665:31;:::i;:::-;2715:5;2767:2;2752:18;;;;2739:32;;-1:-1:-1;;;2462:315:40:o;2782:184::-;2834:77;2831:1;2824:88;2931:4;2928:1;2921:15;2955:4;2952:1;2945:15;2971:777;3013:5;3066:3;3059:4;3051:6;3047:17;3043:27;3033:55;;3084:1;3081;3074:12;3033:55;3120:6;3107:20;3146:18;3183:2;3179;3176:10;3173:36;;;3189:18;;:::i;:::-;3323:2;3317:9;3385:4;3377:13;;3228:66;3373:22;;;3397:2;3369:31;3365:40;3353:53;;;3421:18;;;3441:22;;;3418:46;3415:72;;;3467:18;;:::i;:::-;3507:10;3503:2;3496:22;3542:2;3534:6;3527:18;3588:3;3581:4;3576:2;3568:6;3564:15;3560:26;3557:35;3554:55;;;3605:1;3602;3595:12;3554:55;3669:2;3662:4;3654:6;3650:17;3643:4;3635:6;3631:17;3618:54;3716:1;3709:4;3704:2;3696:6;3692:15;3688:26;3681:37;3736:6;3727:15;;;;;;2971:777;;;;:::o;3753:388::-;3830:6;3838;3891:2;3879:9;3870:7;3866:23;3862:32;3859:52;;;3907:1;3904;3897:12;3859:52;3943:9;3930:23;3920:33;;4004:2;3993:9;3989:18;3976:32;4031:18;4023:6;4020:30;4017:50;;;4063:1;4060;4053:12;4017:50;4086:49;4127:7;4118:6;4107:9;4103:22;4086:49;:::i;:::-;4076:59;;;3753:388;;;;;:::o;4399:456::-;4476:6;4484;4492;4545:2;4533:9;4524:7;4520:23;4516:32;4513:52;;;4561:1;4558;4551:12;4513:52;4600:9;4587:23;4619:31;4644:5;4619:31;:::i;:::-;4669:5;-1:-1:-1;4726:2:40;4711:18;;4698:32;4739:33;4698:32;4739:33;:::i;:::-;4399:456;;4791:7;;-1:-1:-1;;;4845:2:40;4830:18;;;;4817:32;;4399:456::o;5477:156::-;5543:20;;5603:4;5592:16;;5582:27;;5572:55;;5623:1;5620;5613:12;5638:954;5769:6;5777;5785;5793;5801;5809;5817;5870:3;5858:9;5849:7;5845:23;5841:33;5838:53;;;5887:1;5884;5877:12;5838:53;5927:9;5914:23;5956:18;5997:2;5989:6;5986:14;5983:34;;;6013:1;6010;6003:12;5983:34;6036:49;6077:7;6068:6;6057:9;6053:22;6036:49;:::i;:::-;6026:59;;6138:2;6127:9;6123:18;6110:32;6094:48;;6167:2;6157:8;6154:16;6151:36;;;6183:1;6180;6173:12;6151:36;;6206:51;6249:7;6238:8;6227:9;6223:24;6206:51;:::i;:::-;6196:61;;;6276:36;6308:2;6297:9;6293:18;6276:36;:::i;:::-;6266:46;;6359:2;6348:9;6344:18;6331:32;6321:42;;6410:3;6399:9;6395:19;6382:33;6372:43;;6465:3;6454:9;6450:19;6437:33;6479:31;6504:5;6479:31;:::i;:::-;6529:5;6519:15;;;6581:3;6570:9;6566:19;6553:33;6543:43;;5638:954;;;;;;;;;;:::o;6597:118::-;6683:5;6676:13;6669:21;6662:5;6659:32;6649:60;;6705:1;6702;6695:12;6720:241;6776:6;6829:2;6817:9;6808:7;6804:23;6800:32;6797:52;;;6845:1;6842;6835:12;6797:52;6884:9;6871:23;6903:28;6925:5;6903:28;:::i;6966:794::-;7054:6;7062;7070;7078;7131:2;7119:9;7110:7;7106:23;7102:32;7099:52;;;7147:1;7144;7137:12;7099:52;7186:9;7173:23;7205:31;7230:5;7205:31;:::i;:::-;7255:5;-1:-1:-1;7307:2:40;7292:18;;7279:32;;-1:-1:-1;7362:2:40;7347:18;;7334:32;7385:18;7415:14;;;7412:34;;;7442:1;7439;7432:12;7412:34;7480:6;7469:9;7465:22;7455:32;;7525:7;7518:4;7514:2;7510:13;7506:27;7496:55;;7547:1;7544;7537:12;7496:55;7587:2;7574:16;7613:2;7605:6;7602:14;7599:34;;;7629:1;7626;7619:12;7599:34;7674:7;7669:2;7660:6;7656:2;7652:15;7648:24;7645:37;7642:57;;;7695:1;7692;7685:12;7642:57;6966:794;;;;-1:-1:-1;;7726:2:40;7718:11;;-1:-1:-1;;;6966:794:40:o;7988:382::-;8053:6;8061;8114:2;8102:9;8093:7;8089:23;8085:32;8082:52;;;8130:1;8127;8120:12;8082:52;8169:9;8156:23;8188:31;8213:5;8188:31;:::i;:::-;8238:5;-1:-1:-1;8295:2:40;8280:18;;8267:32;8308:30;8267:32;8308:30;:::i;:::-;8357:7;8347:17;;;7988:382;;;;;:::o;8375:632::-;8546:2;8598:21;;;8668:13;;8571:18;;;8690:22;;;8517:4;;8546:2;8769:15;;;;8743:2;8728:18;;;8517:4;8812:169;8826:6;8823:1;8820:13;8812:169;;;8887:13;;8875:26;;8956:15;;;;8921:12;;;;8848:1;8841:9;8812:169;;;-1:-1:-1;8998:3:40;;8375:632;-1:-1:-1;;;;;;8375:632:40:o;9012:665::-;9107:6;9115;9123;9131;9184:3;9172:9;9163:7;9159:23;9155:33;9152:53;;;9201:1;9198;9191:12;9152:53;9240:9;9227:23;9259:31;9284:5;9259:31;:::i;:::-;9309:5;-1:-1:-1;9366:2:40;9351:18;;9338:32;9379:33;9338:32;9379:33;:::i;:::-;9431:7;-1:-1:-1;9485:2:40;9470:18;;9457:32;;-1:-1:-1;9540:2:40;9525:18;;9512:32;9567:18;9556:30;;9553:50;;;9599:1;9596;9589:12;9553:50;9622:49;9663:7;9654:6;9643:9;9639:22;9622:49;:::i;:::-;9612:59;;;9012:665;;;;;;;:::o;9682:734::-;9793:6;9801;9809;9817;9825;9833;9841;9894:3;9882:9;9873:7;9869:23;9865:33;9862:53;;;9911:1;9908;9901:12;9862:53;9950:9;9937:23;9969:31;9994:5;9969:31;:::i;:::-;10019:5;-1:-1:-1;10076:2:40;10061:18;;10048:32;10089:33;10048:32;10089:33;:::i;:::-;10141:7;-1:-1:-1;10195:2:40;10180:18;;10167:32;;-1:-1:-1;10246:2:40;10231:18;;10218:32;;-1:-1:-1;10269:37:40;10301:3;10286:19;;10269:37;:::i;:::-;10259:47;;10353:3;10342:9;10338:19;10325:33;10315:43;;10405:3;10394:9;10390:19;10377:33;10367:43;;9682:734;;;;;;;;;;:::o;10421:388::-;10489:6;10497;10550:2;10538:9;10529:7;10525:23;10521:32;10518:52;;;10566:1;10563;10556:12;10518:52;10605:9;10592:23;10624:31;10649:5;10624:31;:::i;:::-;10674:5;-1:-1:-1;10731:2:40;10716:18;;10703:32;10744:33;10703:32;10744:33;:::i;10814:248::-;10882:6;10890;10943:2;10931:9;10922:7;10918:23;10914:32;10911:52;;;10959:1;10956;10949:12;10911:52;-1:-1:-1;;10982:23:40;;;11052:2;11037:18;;;11024:32;;-1:-1:-1;10814:248:40:o;11440:437::-;11519:1;11515:12;;;;11562;;;11583:61;;11637:4;11629:6;11625:17;11615:27;;11583:61;11690:2;11682:6;11679:14;11659:18;11656:38;11653:218;;11727:77;11724:1;11717:88;11828:4;11825:1;11818:15;11856:4;11853:1;11846:15;11653:218;;11440:437;;;:::o;13326:245::-;13393:6;13446:2;13434:9;13425:7;13421:23;13417:32;13414:52;;;13462:1;13459;13452:12;13414:52;13494:9;13488:16;13513:28;13535:5;13513:28;:::i;14811:184::-;14863:77;14860:1;14853:88;14960:4;14957:1;14950:15;14984:4;14981:1;14974:15;15000:274;15040:1;15066;15056:189;;15101:77;15098:1;15091:88;15202:4;15199:1;15192:15;15230:4;15227:1;15220:15;15056:189;-1:-1:-1;15259:9:40;;15000:274::o;15279:168::-;15352:9;;;15383;;15400:15;;;15394:22;;15380:37;15370:71;;15421:18;;:::i;15922:543::-;16024:2;16019:3;16016:11;16013:446;;;16060:1;16084:5;16081:1;16074:16;16128:4;16125:1;16115:18;16198:2;16186:10;16182:19;16179:1;16175:27;16169:4;16165:38;16234:4;16222:10;16219:20;16216:47;;;-1:-1:-1;16257:4:40;16216:47;16312:2;16307:3;16303:12;16300:1;16296:20;16290:4;16286:31;16276:41;;16367:82;16385:2;16378:5;16375:13;16367:82;;;16430:17;;;16411:1;16400:13;16367:82;;;16371:3;;;15922:543;;;:::o;16701:1464::-;16827:3;16821:10;16854:18;16846:6;16843:30;16840:56;;;16876:18;;:::i;:::-;16905:97;16995:6;16955:38;16987:4;16981:11;16955:38;:::i;:::-;16949:4;16905:97;:::i;:::-;17057:4;;17114:2;17103:14;;17131:1;17126:782;;;;17952:1;17969:6;17966:89;;;-1:-1:-1;18021:19:40;;;18015:26;17966:89;16607:66;16598:1;16594:11;;;16590:84;16586:89;16576:100;16682:1;16678:11;;;16573:117;18068:81;;17096:1063;;17126:782;15869:1;15862:14;;;15906:4;15893:18;;17174:66;17162:79;;;17339:236;17353:7;17350:1;17347:14;17339:236;;;17442:19;;;17436:26;17421:42;;17534:27;;;;17502:1;17490:14;;;;17369:19;;17339:236;;;17343:3;17603:6;17594:7;17591:19;17588:261;;;17664:19;;;17658:26;17765:66;17747:1;17743:14;;;17759:3;17739:24;17735:97;17731:102;17716:118;17701:134;;17588:261;-1:-1:-1;;;;;17895:1:40;17879:14;;;17875:22;17862:36;;-1:-1:-1;16701:1464:40:o;18170:476::-;18259:1;18296:5;18259:1;18310:330;18331:7;18321:8;18318:21;18310:330;;;18450:4;18382:66;18378:77;18372:4;18369:87;18366:113;;;18459:18;;:::i;:::-;18509:7;18499:8;18495:22;18492:55;;;18529:16;;;;18492:55;18608:22;;;;18568:15;;;;18310:330;;;18314:3;18170:476;;;;;:::o;18651:866::-;18700:5;18730:8;18720:80;;-1:-1:-1;18771:1:40;18785:5;;18720:80;18819:4;18809:76;;-1:-1:-1;18856:1:40;18870:5;;18809:76;18901:4;18919:1;18914:59;;;;18987:1;18982:130;;;;18894:218;;18914:59;18944:1;18935:10;;18958:5;;;18982:130;19019:3;19009:8;19006:17;19003:43;;;19026:18;;:::i;:::-;-1:-1:-1;;19082:1:40;19068:16;;19097:5;;18894:218;;19196:2;19186:8;19183:16;19177:3;19171:4;19168:13;19164:36;19158:2;19148:8;19145:16;19140:2;19134:4;19131:12;19127:35;19124:77;19121:159;;;-1:-1:-1;19233:19:40;;;19265:5;;19121:159;19312:34;19337:8;19331:4;19312:34;:::i;:::-;19442:6;19374:66;19370:79;19361:7;19358:92;19355:118;;;19453:18;;:::i;:::-;19491:20;;18651:866;-1:-1:-1;;;18651:866:40:o;19522:140::-;19580:5;19609:47;19650:4;19640:8;19636:19;19630:4;19609:47;:::i;20581:251::-;20651:6;20704:2;20692:9;20683:7;20679:23;20675:32;20672:52;;;20720:1;20717;20710:12;20672:52;20752:9;20746:16;20771:31;20796:5;20771:31;:::i;20837:512::-;21031:4;21060:42;21141:2;21133:6;21129:15;21118:9;21111:34;21193:2;21185:6;21181:15;21176:2;21165:9;21161:18;21154:43;;21233:6;21228:2;21217:9;21213:18;21206:34;21276:3;21271:2;21260:9;21256:18;21249:31;21297:46;21338:3;21327:9;21323:19;21315:6;21297:46;:::i;21354:249::-;21423:6;21476:2;21464:9;21455:7;21451:23;21447:32;21444:52;;;21492:1;21489;21482:12;21444:52;21524:9;21518:16;21543:30;21567:5;21543:30;:::i;23580:128::-;23647:9;;;23668:11;;;23665:37;;;23682:18;;:::i;23713:125::-;23778:9;;;23799:10;;;23796:36;;;23812:18;;:::i;23843:184::-;23895:77;23892:1;23885:88;23992:4;23989:1;23982:15;24016:4;24013:1;24006:15;24032:381;24128:6;24136;24144;24197:2;24185:9;24176:7;24172:23;24168:32;24165:52;;;24213:1;24210;24203:12;24165:52;24242:9;24236:16;24226:26;;24295:2;24284:9;24280:18;24274:25;24308:31;24333:5;24308:31;:::i;:::-;24358:5;24348:15;;;24403:2;24392:9;24388:18;24382:25;24372:35;;24032:381;;;;;:::o;24418:184::-;24470:77;24467:1;24460:88;24567:4;24564:1;24557:15;24591:4;24588:1;24581:15;24607:903;24737:3;24766:1;24799:6;24793:13;24829:36;24855:9;24829:36;:::i;:::-;24884:1;24901:17;;;24927:191;;;;25132:1;25127:358;;;;24894:591;;24927:191;24975:66;24964:9;24960:82;24955:3;24948:95;25098:6;25091:14;25084:22;25076:6;25072:35;25067:3;25063:45;25056:52;;24927:191;;25127:358;25158:6;25155:1;25148:17;25188:4;25233;25230:1;25220:18;25260:1;25274:165;25288:6;25285:1;25282:13;25274:165;;;25366:14;;25353:11;;;25346:35;25409:16;;;;25303:10;;25274:165;;;25278:3;;;25468:6;25463:3;25459:16;25452:23;;24894:591;-1:-1:-1;25501:3:40;;24607:903;-1:-1:-1;;;;;;24607:903:40:o;26032:184::-;26084:77;26081:1;26074:88;26181:4;26178:1;26171:15;26205:4;26202:1;26195:15;26221:289;26396:6;26385:9;26378:25;26439:2;26434;26423:9;26419:18;26412:30;26359:4;26459:45;26500:2;26489:9;26485:18;26477:6;26459:45;:::i;:::-;26451:53;26221:289;-1:-1:-1;;;;26221:289:40:o;26515:287::-;26644:3;26682:6;26676:13;26698:66;26757:6;26752:3;26745:4;26737:6;26733:17;26698:66;:::i;:::-;26780:16;;;;;26515:287;-1:-1:-1;;26515:287:40:o;26807:184::-;26877:6;26930:2;26918:9;26909:7;26905:23;26901:32;26898:52;;;26946:1;26943;26936:12;26898:52;-1:-1:-1;26969:16:40;;26807:184;-1:-1:-1;26807:184:40:o;26996:195::-;27035:3;27066:66;27059:5;27056:77;27053:103;;27136:18;;:::i;:::-;-1:-1:-1;27183:1:40;27172:13;;26996:195::o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "DOMAIN_SEPARATOR()": "3644e515",
        "ID_ENCODING_PREFIX()": "6e8f624b",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "deadline()": "29dcb0cf",
        "decimals()": "313ce567",
        "engage(address,uint256)": "4570992d",
        "erc20Approve(address,uint256)": "4d966072",
        "erc20BalanceOf(address)": "02519da3",
        "erc20TotalSupply()": "89fb4c66",
        "erc20TransferFrom(address,address,uint256)": "d96ca0b9",
        "erc721Approve(address,uint256)": "dfabc033",
        "erc721BalanceOf(address)": "b3f9ea34",
        "erc721TotalSupply()": "c5ab3ba6",
        "erc721TransferExempt(address)": "09f0ef65",
        "erc721TransferFrom(address,address,uint256)": "dd637699",
        "executeCall(address,uint256,bytes)": "9e5d4c49",
        "getApproved(uint256)": "081812fc",
        "getERC721QueueLength()": "09674eb0",
        "getERC721TokensInQueue(uint256,uint256)": "f780bc1a",
        "initialize(string,string,uint8,uint256,uint256,address,uint256)": "63110c46",
        "isApprovedForAll(address,address)": "e985e9c5",
        "isValidSignature(bytes32,bytes)": "1626ba7e",
        "manager()": "481c6a75",
        "managerWithdraw(address,uint256)": "279093a5",
        "minted()": "4f02c420",
        "name()": "06fdde03",
        "nonce()": "affed0e0",
        "nonces(address)": "7ecebe00",
        "owned(address)": "b1ab9317",
        "owner()": "8da5cb5b",
        "ownerOf(uint256)": "6352211e",
        "paymentToken()": "3013ce29",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "raisingFunds()": "1d08697b",
        "retriveTokensAfterFailedSale(uint256)": "89529c04",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setFailedSale()": "d30be6f0",
        "setSelfERC721TransferExempt(bool)": "8a696e50",
        "setSuccessfulSale()": "bf2adf90",
        "startRaisingFunds()": "5da4af75",
        "stopRaisingFunds()": "2df96c7b",
        "successfulSale()": "56165001",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "token()": "fc0c546a",
        "tokenURI(uint256)": "c87b56dd",
        "totalAmountToRaise()": "9ebe2d0a",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "units()": "976a8435"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.23+commit.f704f362\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyExists\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"DecimalsTooLow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApproval\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidExemption\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidOperator\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidRecipient\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSender\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSigner\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSpender\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTokenId\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintLimitReached\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotFound\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OwnedIndexOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PermitDeadlineExpired\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"QueueEmpty\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"QueueFull\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"QueueOutOfBounds\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RecipientIsERC721TransferExempt\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeRecipient\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ID_ENCODING_PREFIX\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"valueOrId_\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deadline\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"engage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value_\",\"type\":\"uint256\"}],\"name\":\"erc20Approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner_\",\"type\":\"address\"}],\"name\":\"erc20BalanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc20TotalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value_\",\"type\":\"uint256\"}],\"name\":\"erc20TransferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id_\",\"type\":\"uint256\"}],\"name\":\"erc721Approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner_\",\"type\":\"address\"}],\"name\":\"erc721BalanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc721TotalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target_\",\"type\":\"address\"}],\"name\":\"erc721TransferExempt\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id_\",\"type\":\"uint256\"}],\"name\":\"erc721TransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"executeCall\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getERC721QueueLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"start_\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"count_\",\"type\":\"uint256\"}],\"name\":\"getERC721TokensInQueue\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name_\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol_\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"decimals_\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_totalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalAmountToRaise\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_deadline\",\"type\":\"uint256\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"isValidSignature\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"magicValue\",\"type\":\"bytes4\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"managerWithdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minted\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner_\",\"type\":\"address\"}],\"name\":\"owned\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id_\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"erc721Owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paymentToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value_\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline_\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v_\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r_\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s_\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"raisingFunds\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"retriveTokensAfterFailedSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id_\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id_\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data_\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator_\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved_\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setFailedSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"state_\",\"type\":\"bool\"}],\"name\":\"setSelfERC721TransferExempt\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setSuccessfulSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startRaisingFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopRaisingFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"successfulSale\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAmountToRaise\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value_\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from_\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"valueOrId_\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"units\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"QueueEmpty()\":[{\"details\":\"An operation (e.g. {front}) couldn't be completed due to the queue being empty.\"}],\"QueueFull()\":[{\"details\":\"A push operation couldn't be completed due to the queue being full.\"}],\"QueueOutOfBounds()\":[{\"details\":\"An operation (e.g. {at}) couldn't be completed due to an index being out of bounds.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"This function assumes the operator is attempting to approve      an ERC-721 if valueOrId_ is a possibly valid ERC-721 token id.      Unlike setApprovalForAll, spender_ must be allowed to be 0x0 so      that approval can be revoked.\"},\"erc20Approve(address,uint256)\":{\"details\":\"Providing type(uint256).max for approval value results in an      unlimited approval that is not deducted from on transfers.\"},\"erc20TransferFrom(address,address,uint256)\":{\"details\":\"This function is recommended for ERC20 transfers\"},\"erc721TransferFrom(address,address,uint256)\":{\"details\":\"This function is recommended for ERC721 transfers.\"},\"executeCall(address,uint256,bytes)\":{\"details\":\"Executes `call` on address `to`, with value `value` and calldata `data`. MUST revert and bubble up errors if call fails. By default, token bound accounts MUST allow the owner of the ERC-721 token which owns the account to execute arbitrary calls using `executeCall`. Token bound accounts MAY implement additional authorization mechanisms which limit the ability of the ERC-721 token holder to execute calls. Token bound accounts MAY implement additional execution functions which grant execution permissions to other non-owner accounts.\",\"returns\":{\"_0\":\"The result of the call\"}},\"isValidSignature(bytes32,bytes)\":{\"details\":\"Should return whether the signature provided is valid for the provided data\",\"params\":{\"hash\":\"Hash of the data to be signed\",\"signature\":\"Signature byte array associated with _data\"}},\"nonce()\":{\"details\":\"Returns a nonce value that is updated on every successful transaction\",\"returns\":{\"_0\":\"The current account nonce\"}},\"owner()\":{\"details\":\"Returns the owner of the ERC-721 token which controls the account if the token exists. This is value is obtained by calling `ownerOf` on the ERC-721 contract.\",\"returns\":{\"_0\":\"Address of the owner of the ERC-721 token which owns the account\"}},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Providing type(uint256).max for permit value results in an      unlimited approval that is not deducted from on transfers.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"token()\":{\"details\":\"Returns identifier of the ERC-721 token which owns the account The return value of this function MUST be constant - it MUST NOT change over time.\",\"returns\":{\"_0\":\"The EIP-155 ID of the chain the ERC-721 token exists on\",\"_1\":\"The contract address of the ERC-721 token\",\"_2\":\"The ID of the ERC-721 token\"}},\"transfer(address,uint256)\":{\"details\":\"This function assumes the operator is attempting to transfer as ERC-20      given this function is only supported on the ERC-20 interface.      Treats even large amounts that are valid ERC-721 ids as ERC-20s.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"This function assumes the operator is attempting to transfer an ERC-721      if valueOrId is a possible valid token id.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"Returns domain initial domain separator, or recomputes if chain id is not equal to initial chain id\"},\"approve(address,uint256)\":{\"notice\":\"Function for token approvals\"},\"erc20TransferFrom(address,address,uint256)\":{\"notice\":\"Function for ERC-20 transfers from.\"},\"erc721TransferExempt(address)\":{\"notice\":\"Function to check if address is transfer exempt\"},\"erc721TransferFrom(address,address,uint256)\":{\"notice\":\"Function for ERC-721 transfers from.\"},\"ownerOf(uint256)\":{\"notice\":\"Function to find owner of a given ERC-721 token\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Function for EIP-2612 permits (ERC-20 only).\"},\"safeTransferFrom(address,address,uint256)\":{\"notice\":\"Function for ERC-721 transfers with contract support. This function only supports moving valid ERC-721 ids, as it does not exist on the ERC-20 spec and will revert otherwise.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"notice\":\"Function for ERC-721 transfers with contract support and callback data. This function only supports moving valid ERC-721 ids, as it does not exist on the ERC-20 spec and will revert otherwise.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Function for ERC-721 approvals\"},\"setSelfERC721TransferExempt(bool)\":{\"notice\":\"Function for self-exemption\"},\"transfer(address,uint256)\":{\"notice\":\"Function for ERC-20 transfers.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Function for mixed transfers from an operator that may be different than 'from'.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/ProjectAccount.sol\":\"ProjectAccount\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":@upgradeable/safeAccount/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40\",\"dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a\",\"dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC721Receiver.sol\":{\"keccak256\":\"0x12808acc0c2cbc0b9068755711fd79483b4f002e850d25e0e72e735765b6cd99\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8fd1ab9e3091d4c4fc4b34c25b54df5c092c849c8c09d722a34186bd051b0890\",\"dweb:/ipfs/QmUqykAZfKRHEkYVRmXKsFqvLwyUFPrukdWdAmXDkixJAL\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827\",\"dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66\",\"dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3\",\"dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087\",\"dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x4e2a8ed224c9c4fe41add93de8fa53ef3f2f5ee7a9c613e667796602ceb87e12\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a8516f3683103d13108094b41604e64f50f0cceaabbddbf2221f5959cf869ab\",\"dweb:/ipfs/QmT2ophcTsuvDkv1EPyjuNG3B7NVPA5NtQqco2XWtWQHMe\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e\",\"dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xc3a38f6236b9f11703164f1c52a5d423f02f01ee689d58d5a35d1a48ad5b9d88\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ee652cbb0266d2336107760205ea72fecf6f8127e32361d1a209016e0f8271d\",\"dweb:/ipfs/QmefTVVswMMF6r372icwDF6DqNfzkEX5mzgSpbxdpgaUKj\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047\",\"dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512\",\"dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ\"]},\"src/ProjectAccount.sol\":{\"keccak256\":\"0x59c2980184d78453ffeec735532d9c3ed913117a1c4fd0f5fdea48bcc17a7b02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b668bc18c118e82e06a1c7736a8fd0c0bbd29bbf2ad4355db294019d0b1e092f\",\"dweb:/ipfs/QmWK7gN8drk1Y2N7W9kGAjgGGpr6Cn5Wzr1juFdazVmpG9\"]},\"src/interface/IERC404.sol\":{\"keccak256\":\"0x77215588c5b2f9e8fbe7a8ed5c728589d214eedc5d9785cbf0fe89b88b19681d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ac604c75f36462032b35b87bb42c2ea90ad7ba56a8f20beface9fe3f83cbd8d\",\"dweb:/ipfs/QmZEUtvQq3P7RfCt2jhG6outMPZuLgA5LEpccuhjwgBv8C\"]},\"src/interface/IERC6551Account.sol\":{\"keccak256\":\"0x6ff8242276aa7dbd7dac0c9c0ff6324426fbafdf0139896587d56c45dc9b335d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://13d5bfdf03ead70f29b342dc631624f069594175864a6172c9e2b9f31d5682ac\",\"dweb:/ipfs/QmWwRVtkuCrWXQUurDUw1YvfRyv78nY1WuP4ov9oUFKJ6b\"]},\"src/lib/DoubleEndedQueue.sol\":{\"keccak256\":\"0x40f29de66fbe8993183aeaed1aeb74167b7d34e1aacd1227a991b88fcd166f9b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://943610141992bb8d1b844bcf20cbc95b50ecf609bf19cd9e1d413bec78a9166e\",\"dweb:/ipfs/QmSkER4qaymDLs9ndor4NZ2UAfT3JDyTJWBprhz2nEEDJG\"]},\"src/lib/ERC404.sol\":{\"keccak256\":\"0xdce261679e2ce52d4c10a7b946028e86999358d52fa0e3f552b04440eddcdc8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4b5bba5963e22a91ea648f5e0186b6310c4a6bd2ce5491fb58ccaf6b97569b43\",\"dweb:/ipfs/QmWnwTFc8WLPqVE3XYPhYaHuUY8ynFVvJjrLPZj7Bpg8Rj\"]}},\"version\":1}",
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
                    "inputs": [],
                    "type": "error",
                    "name": "AlreadyExists"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "DecimalsTooLow"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InsufficientAllowance"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidApproval"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidExemption"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidInitialization"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidOperator"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidRecipient"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidSender"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidSigner"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidSpender"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidTokenId"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MintLimitReached"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NotFound"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NotInitializing"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "OwnedIndexOverflow"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "PermitDeadlineExpired"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "QueueEmpty"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "QueueFull"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "QueueOutOfBounds"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "RecipientIsERC721TransferExempt"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "UnsafeRecipient"
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
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
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
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "id",
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
                            "name": "amount",
                            "type": "uint256",
                            "indexed": false
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
                            "name": "id",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "ID_ENCODING_PREFIX",
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
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "allowance",
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
                            "name": "spender_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "valueOrId_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve",
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
                            "name": "",
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
                    "name": "deadline",
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
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
                        }
                    ]
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
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "engage"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "erc20Approve",
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
                            "name": "owner_",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "erc20BalanceOf",
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
                    "name": "erc20TotalSupply",
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
                            "name": "from_",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "erc20TransferFrom",
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
                            "name": "spender_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "erc721Approve"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner_",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "erc721BalanceOf",
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
                    "name": "erc721TotalSupply",
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
                            "name": "target_",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "erc721TransferExempt",
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
                            "name": "from_",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "erc721TransferFrom"
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
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "executeCall",
                    "outputs": [
                        {
                            "internalType": "bytes",
                            "name": "",
                            "type": "bytes"
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getERC721QueueLength",
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
                            "name": "start_",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "count_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getERC721TokensInQueue",
                    "outputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "name_",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "symbol_",
                            "type": "string"
                        },
                        {
                            "internalType": "uint8",
                            "name": "decimals_",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_totalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_totalAmountToRaise",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_paymentToken",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_deadline",
                            "type": "uint256"
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
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
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
                            "internalType": "bytes32",
                            "name": "hash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes",
                            "name": "signature",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isValidSignature",
                    "outputs": [
                        {
                            "internalType": "bytes4",
                            "name": "magicValue",
                            "type": "bytes4"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "manager",
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
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "managerWithdraw"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "minted",
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
                    "name": "nonce",
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
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "nonces",
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
                            "name": "owner_",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "owned",
                    "outputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
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
                            "name": "id_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "erc721Owner",
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
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner_",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value_",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline_",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v_",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r_",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s_",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permit"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "raisingFunds",
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
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "retriveTokensAfterFailedSale"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from_",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id_",
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
                            "name": "from_",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "id_",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data_",
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
                            "name": "operator_",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved_",
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
                    "name": "setFailedSale"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "state_",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setSelfERC721TransferExempt"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setSuccessfulSale"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "startRaisingFunds"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "stopRaisingFunds"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "successfulSale",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "token",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalAmountToRaise",
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
                    "name": "totalSupply",
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
                            "name": "to_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transfer",
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
                            "name": "from_",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "valueOrId_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom",
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
                    "name": "units",
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
                    "stateMutability": "payable",
                    "type": "receive"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "approve(address,uint256)": {
                        "details": "This function assumes the operator is attempting to approve      an ERC-721 if valueOrId_ is a possibly valid ERC-721 token id.      Unlike setApprovalForAll, spender_ must be allowed to be 0x0 so      that approval can be revoked."
                    },
                    "erc20Approve(address,uint256)": {
                        "details": "Providing type(uint256).max for approval value results in an      unlimited approval that is not deducted from on transfers."
                    },
                    "erc20TransferFrom(address,address,uint256)": {
                        "details": "This function is recommended for ERC20 transfers"
                    },
                    "erc721TransferFrom(address,address,uint256)": {
                        "details": "This function is recommended for ERC721 transfers."
                    },
                    "executeCall(address,uint256,bytes)": {
                        "details": "Executes `call` on address `to`, with value `value` and calldata `data`. MUST revert and bubble up errors if call fails. By default, token bound accounts MUST allow the owner of the ERC-721 token which owns the account to execute arbitrary calls using `executeCall`. Token bound accounts MAY implement additional authorization mechanisms which limit the ability of the ERC-721 token holder to execute calls. Token bound accounts MAY implement additional execution functions which grant execution permissions to other non-owner accounts.",
                        "returns": {
                            "_0": "The result of the call"
                        }
                    },
                    "isValidSignature(bytes32,bytes)": {
                        "details": "Should return whether the signature provided is valid for the provided data",
                        "params": {
                            "hash": "Hash of the data to be signed",
                            "signature": "Signature byte array associated with _data"
                        }
                    },
                    "nonce()": {
                        "details": "Returns a nonce value that is updated on every successful transaction",
                        "returns": {
                            "_0": "The current account nonce"
                        }
                    },
                    "owner()": {
                        "details": "Returns the owner of the ERC-721 token which controls the account if the token exists. This is value is obtained by calling `ownerOf` on the ERC-721 contract.",
                        "returns": {
                            "_0": "Address of the owner of the ERC-721 token which owns the account"
                        }
                    },
                    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
                        "details": "Providing type(uint256).max for permit value results in an      unlimited approval that is not deducted from on transfers."
                    },
                    "supportsInterface(bytes4)": {
                        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
                    },
                    "token()": {
                        "details": "Returns identifier of the ERC-721 token which owns the account The return value of this function MUST be constant - it MUST NOT change over time.",
                        "returns": {
                            "_0": "The EIP-155 ID of the chain the ERC-721 token exists on",
                            "_1": "The contract address of the ERC-721 token",
                            "_2": "The ID of the ERC-721 token"
                        }
                    },
                    "transfer(address,uint256)": {
                        "details": "This function assumes the operator is attempting to transfer as ERC-20      given this function is only supported on the ERC-20 interface.      Treats even large amounts that are valid ERC-721 ids as ERC-20s."
                    },
                    "transferFrom(address,address,uint256)": {
                        "details": "This function assumes the operator is attempting to transfer an ERC-721      if valueOrId is a possible valid token id."
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "DOMAIN_SEPARATOR()": {
                        "notice": "Returns domain initial domain separator, or recomputes if chain id is not equal to initial chain id"
                    },
                    "approve(address,uint256)": {
                        "notice": "Function for token approvals"
                    },
                    "erc20TransferFrom(address,address,uint256)": {
                        "notice": "Function for ERC-20 transfers from."
                    },
                    "erc721TransferExempt(address)": {
                        "notice": "Function to check if address is transfer exempt"
                    },
                    "erc721TransferFrom(address,address,uint256)": {
                        "notice": "Function for ERC-721 transfers from."
                    },
                    "ownerOf(uint256)": {
                        "notice": "Function to find owner of a given ERC-721 token"
                    },
                    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
                        "notice": "Function for EIP-2612 permits (ERC-20 only)."
                    },
                    "safeTransferFrom(address,address,uint256)": {
                        "notice": "Function for ERC-721 transfers with contract support. This function only supports moving valid ERC-721 ids, as it does not exist on the ERC-20 spec and will revert otherwise."
                    },
                    "safeTransferFrom(address,address,uint256,bytes)": {
                        "notice": "Function for ERC-721 transfers with contract support and callback data. This function only supports moving valid ERC-721 ids, as it does not exist on the ERC-20 spec and will revert otherwise."
                    },
                    "setApprovalForAll(address,bool)": {
                        "notice": "Function for ERC-721 approvals"
                    },
                    "setSelfERC721TransferExempt(bool)": {
                        "notice": "Function for self-exemption"
                    },
                    "transfer(address,uint256)": {
                        "notice": "Function for ERC-20 transfers."
                    },
                    "transferFrom(address,address,uint256)": {
                        "notice": "Function for mixed transfers from an operator that may be different than 'from'."
                    }
                },
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
                "src/ProjectAccount.sol": "ProjectAccount"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol": {
                "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
                "urls": [
                    "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
                    "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
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
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4",
                "urls": [
                    "bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009",
                    "dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN"
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
            "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
                "keccak256": "0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a",
                "urls": [
                    "bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3",
                    "dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn"
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
            "src/ProjectAccount.sol": {
                "keccak256": "0x59c2980184d78453ffeec735532d9c3ed913117a1c4fd0f5fdea48bcc17a7b02",
                "urls": [
                    "bzz-raw://b668bc18c118e82e06a1c7736a8fd0c0bbd29bbf2ad4355db294019d0b1e092f",
                    "dweb:/ipfs/QmWK7gN8drk1Y2N7W9kGAjgGGpr6Cn5Wzr1juFdazVmpG9"
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
        "absolutePath": "src/ProjectAccount.sol",
        "id": 8948,
        "exportedSymbols": {
            "DoubleEndedQueue": [
                10299
            ],
            "ECDSA": [
                4651
            ],
            "ERC20Events": [
                10326
            ],
            "ERC404": [
                11975
            ],
            "ERC721Events": [
                10351
            ],
            "IERC1271": [
                1776
            ],
            "IERC165": [
                4788
            ],
            "IERC20": [
                2406
            ],
            "IERC404": [
                9871
            ],
            "IERC6551Account": [
                9913
            ],
            "IERC721": [
                3480
            ],
            "IERC721Receiver": [
                3498
            ],
            "Initializable": [
                448
            ],
            "Math": [
                6340
            ],
            "ProjectAccount": [
                8947
            ],
            "SignatureChecker": [
                4752
            ],
            "SignedMath": [
                8215
            ],
            "Strings": [
                4303
            ]
        },
        "nodeType": "SourceUnit",
        "src": "33:5566:33",
        "nodes": [
            {
                "id": 8418,
                "nodeType": "PragmaDirective",
                "src": "33:24:33",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".13"
                ]
            },
            {
                "id": 8419,
                "nodeType": "ImportDirective",
                "src": "61:65:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol",
                "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 4789,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8420,
                "nodeType": "ImportDirective",
                "src": "128:58:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol",
                "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 3481,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8421,
                "nodeType": "ImportDirective",
                "src": "188:57:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol",
                "file": "@openzeppelin/contracts/interfaces/IERC1271.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 1777,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8422,
                "nodeType": "ImportDirective",
                "src": "247:73:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol",
                "file": "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 4753,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8423,
                "nodeType": "ImportDirective",
                "src": "322:51:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Strings.sol",
                "file": "@openzeppelin/contracts/utils/Strings.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 4304,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8424,
                "nodeType": "ImportDirective",
                "src": "375:56:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol",
                "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 2407,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8425,
                "nodeType": "ImportDirective",
                "src": "435:62:33",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol",
                "file": "@upgradeable/contracts/proxy/utils/Initializable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 449,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8426,
                "nodeType": "ImportDirective",
                "src": "501:26:33",
                "nodes": [],
                "absolutePath": "src/lib/ERC404.sol",
                "file": "./lib/ERC404.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 11976,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8427,
                "nodeType": "ImportDirective",
                "src": "529:41:33",
                "nodes": [],
                "absolutePath": "src/interface/IERC6551Account.sol",
                "file": "./interface/IERC6551Account.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8948,
                "sourceUnit": 9914,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 8947,
                "nodeType": "ContractDefinition",
                "src": "578:5021:33",
                "nodes": [
                    {
                        "id": 8441,
                        "nodeType": "FunctionDefinition",
                        "src": "850:29:33",
                        "nodes": [],
                        "body": {
                            "id": 8440,
                            "nodeType": "Block",
                            "src": "877:2:33",
                            "nodes": [],
                            "statements": []
                        },
                        "baseFunctions": [
                            9878
                        ],
                        "implemented": true,
                        "kind": "receive",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 8438,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "857:2:33"
                        },
                        "returnParameters": {
                            "id": 8439,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "877:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8444,
                        "nodeType": "VariableDeclaration",
                        "src": "887:26:33",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "3013ce29",
                        "mutability": "mutable",
                        "name": "paymentToken",
                        "nameLocation": "901:12:33",
                        "scope": 8947,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$2406",
                            "typeString": "contract IERC20"
                        },
                        "typeName": {
                            "id": 8443,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 8442,
                                "name": "IERC20",
                                "nameLocations": [
                                    "887:6:33"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 2406,
                                "src": "887:6:33"
                            },
                            "referencedDeclaration": 2406,
                            "src": "887:6:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$2406",
                                "typeString": "contract IERC20"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 8446,
                        "nodeType": "VariableDeclaration",
                        "src": "920:22:33",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "481c6a75",
                        "mutability": "mutable",
                        "name": "manager",
                        "nameLocation": "935:7:33",
                        "scope": 8947,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 8445,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "920:7:33",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 8448,
                        "nodeType": "VariableDeclaration",
                        "src": "949:33:33",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "9ebe2d0a",
                        "mutability": "mutable",
                        "name": "totalAmountToRaise",
                        "nameLocation": "964:18:33",
                        "scope": 8947,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 8447,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "949:7:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 8450,
                        "nodeType": "VariableDeclaration",
                        "src": "989:23:33",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "29dcb0cf",
                        "mutability": "mutable",
                        "name": "deadline",
                        "nameLocation": "1004:8:33",
                        "scope": 8947,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 8449,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "989:7:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 8453,
                        "nodeType": "VariableDeclaration",
                        "src": "1021:34:33",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "56165001",
                        "mutability": "mutable",
                        "name": "successfulSale",
                        "nameLocation": "1033:14:33",
                        "scope": 8947,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 8451,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "1021:4:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "value": {
                            "hexValue": "66616c7365",
                            "id": 8452,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1050:5:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "value": "false"
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 8456,
                        "nodeType": "VariableDeclaration",
                        "src": "1062:31:33",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "1d08697b",
                        "mutability": "mutable",
                        "name": "raisingFunds",
                        "nameLocation": "1074:12:33",
                        "scope": 8947,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 8454,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "1062:4:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "value": {
                            "hexValue": "74727565",
                            "id": 8455,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1089:4:33",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "value": "true"
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 8468,
                        "nodeType": "ModifierDefinition",
                        "src": "1102:99:33",
                        "nodes": [],
                        "body": {
                            "id": 8467,
                            "nodeType": "Block",
                            "src": "1125:76:33",
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
                                                "id": 8462,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 8459,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1144:3:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 8460,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "1148:6:33",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1144:10:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "id": 8461,
                                                    "name": "manager",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8446,
                                                    "src": "1158:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "1144:21:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4e6f74206d616e61676572",
                                                "id": 8463,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1167:13:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_0ed1e89bbe3f18661feb13d9a28e0df18595e07a0e8cbb04726931530d6d9e98",
                                                    "typeString": "literal_string \"Not manager\""
                                                },
                                                "value": "Not manager"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_0ed1e89bbe3f18661feb13d9a28e0df18595e07a0e8cbb04726931530d6d9e98",
                                                    "typeString": "literal_string \"Not manager\""
                                                }
                                            ],
                                            "id": 8458,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1136:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1136:45:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8465,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1136:45:33"
                                },
                                {
                                    "id": 8466,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "1192:1:33"
                                }
                            ]
                        },
                        "name": "onlyManager",
                        "nameLocation": "1111:11:33",
                        "parameters": {
                            "id": 8457,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1122:2:33"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 8475,
                        "nodeType": "FunctionDefinition",
                        "src": "1209:55:33",
                        "nodes": [],
                        "body": {
                            "id": 8474,
                            "nodeType": "Block",
                            "src": "1223:41:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 8471,
                                            "name": "_disableInitializers",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 416,
                                            "src": "1234:20:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 8472,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1234:22:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8473,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1234:22:33"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 8469,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1220:2:33"
                        },
                        "returnParameters": {
                            "id": 8470,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1223:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8558,
                        "nodeType": "FunctionDefinition",
                        "src": "1278:769:33",
                        "nodes": [],
                        "body": {
                            "id": 8557,
                            "nodeType": "Block",
                            "src": "1485:562:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 8496,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8494,
                                            "name": "name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10364,
                                            "src": "1496:4:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 8495,
                                            "name": "name_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8477,
                                            "src": "1503:5:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "1496:12:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 8497,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1496:12:33"
                                },
                                {
                                    "expression": {
                                        "id": 8500,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8498,
                                            "name": "symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10367,
                                            "src": "1519:6:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 8499,
                                            "name": "symbol_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8479,
                                            "src": "1528:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "1519:16:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 8501,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1519:16:33"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        },
                                        "id": 8504,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 8502,
                                            "name": "decimals_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8481,
                                            "src": "1552:9:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "hexValue": "3138",
                                            "id": 8503,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1564:2:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_18_by_1",
                                                "typeString": "int_const 18"
                                            },
                                            "value": "18"
                                        },
                                        "src": "1552:14:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8509,
                                    "nodeType": "IfStatement",
                                    "src": "1548:66:33",
                                    "trueBody": {
                                        "id": 8508,
                                        "nodeType": "Block",
                                        "src": "1568:46:33",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 8505,
                                                        "name": "DecimalsTooLow",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9626,
                                                        "src": "1586:14:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 8506,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1586:16:33",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 8507,
                                                "nodeType": "RevertStatement",
                                                "src": "1579:23:33"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 8512,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8510,
                                            "name": "decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10370,
                                            "src": "1626:8:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 8511,
                                            "name": "decimals_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8481,
                                            "src": "1637:9:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "src": "1626:20:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "id": 8513,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1626:20:33"
                                },
                                {
                                    "expression": {
                                        "id": 8518,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8514,
                                            "name": "units",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10373,
                                            "src": "1657:5:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 8517,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "hexValue": "3130",
                                                "id": 8515,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1665:2:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_10_by_1",
                                                    "typeString": "int_const 10"
                                                },
                                                "value": "10"
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "**",
                                            "rightExpression": {
                                                "id": 8516,
                                                "name": "decimals",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10370,
                                                "src": "1671:8:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                }
                                            },
                                            "src": "1665:14:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1657:22:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 8519,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1657:22:33"
                                },
                                {
                                    "expression": {
                                        "id": 8523,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8520,
                                            "name": "_INITIAL_CHAIN_ID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10382,
                                            "src": "1728:17:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 8521,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "1748:5:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 8522,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1754:7:33",
                                            "memberName": "chainid",
                                            "nodeType": "MemberAccess",
                                            "src": "1748:13:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1728:33:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 8524,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1728:33:33"
                                },
                                {
                                    "expression": {
                                        "id": 8528,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8525,
                                            "name": "_INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10385,
                                            "src": "1772:25:33",
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
                                                "id": 8526,
                                                "name": "_computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11270,
                                                "src": "1800:23:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 8527,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1800:25:33",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "1772:53:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 8529,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1772:53:33"
                                },
                                {
                                    "expression": {
                                        "id": 8534,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8530,
                                            "name": "paymentToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8444,
                                            "src": "1838:12:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$2406",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 8532,
                                                    "name": "_paymentToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8487,
                                                    "src": "1860:13:33",
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
                                                "id": 8531,
                                                "name": "IERC20",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2406,
                                                "src": "1853:6:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IERC20_$2406_$",
                                                    "typeString": "type(contract IERC20)"
                                                }
                                            },
                                            "id": 8533,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1853:21:33",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$2406",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "src": "1838:36:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$2406",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "id": 8535,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1838:36:33"
                                },
                                {
                                    "expression": {
                                        "id": 8538,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8536,
                                            "name": "totalAmountToRaise",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8448,
                                            "src": "1885:18:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 8537,
                                            "name": "_totalAmountToRaise",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8485,
                                            "src": "1906:19:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1885:40:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 8539,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1885:40:33"
                                },
                                {
                                    "expression": {
                                        "id": 8542,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8540,
                                            "name": "deadline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8450,
                                            "src": "1936:8:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 8541,
                                            "name": "_deadline",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8489,
                                            "src": "1947:9:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1936:20:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 8543,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1936:20:33"
                                },
                                {
                                    "expression": {
                                        "id": 8547,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8544,
                                            "name": "manager",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8446,
                                            "src": "1967:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 8545,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "1977:3:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 8546,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1981:6:33",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "1977:10:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "1967:20:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 8548,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1967:20:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8552,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2019:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 8551,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2011:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 8550,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2011:7:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8553,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2011:13:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8554,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8483,
                                                "src": "2026:12:33",
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
                                            "id": 8549,
                                            "name": "_mintERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11660,
                                            "src": "2000:10:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 8555,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2000:39:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8556,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2000:39:33"
                                }
                            ]
                        },
                        "functionSelector": "63110c46",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 8492,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 8491,
                                    "name": "initializer",
                                    "nameLocations": [
                                        "1466:11:33"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 302,
                                    "src": "1466:11:33"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1466:11:33"
                            }
                        ],
                        "name": "initialize",
                        "nameLocation": "1287:10:33",
                        "parameters": {
                            "id": 8490,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8477,
                                    "mutability": "mutable",
                                    "name": "name_",
                                    "nameLocation": "1312:5:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1298:19:33",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 8476,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1298:6:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8479,
                                    "mutability": "mutable",
                                    "name": "symbol_",
                                    "nameLocation": "1333:7:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1319:21:33",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 8478,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1319:6:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8481,
                                    "mutability": "mutable",
                                    "name": "decimals_",
                                    "nameLocation": "1348:9:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1342:15:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 8480,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1342:5:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8483,
                                    "mutability": "mutable",
                                    "name": "_totalSupply",
                                    "nameLocation": "1381:12:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1373:20:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8482,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1373:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8485,
                                    "mutability": "mutable",
                                    "name": "_totalAmountToRaise",
                                    "nameLocation": "1403:19:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1395:27:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8484,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1395:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8487,
                                    "mutability": "mutable",
                                    "name": "_paymentToken",
                                    "nameLocation": "1432:13:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1424:21:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8486,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1424:7:33",
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
                                    "id": 8489,
                                    "mutability": "mutable",
                                    "name": "_deadline",
                                    "nameLocation": "1455:9:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8558,
                                    "src": "1447:17:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8488,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1447:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1297:168:33"
                        },
                        "returnParameters": {
                            "id": 8493,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1485:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8625,
                        "nodeType": "FunctionDefinition",
                        "src": "2055:544:33",
                        "nodes": [],
                        "body": {
                            "id": 8624,
                            "nodeType": "Block",
                            "src": "2108:491:33",
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
                                                "id": 8568,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 8566,
                                                    "name": "_amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8562,
                                                    "src": "2127:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 8567,
                                                    "name": "totalAmountToRaise",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8448,
                                                    "src": "2138:18:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2127:29:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4e6f7420656e6f7567682066756e6473",
                                                "id": 8569,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2158:18:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_38fc6ba06c924208472ab053d62249a6a0165c760c073089bf019af8c267f725",
                                                    "typeString": "literal_string \"Not enough funds\""
                                                },
                                                "value": "Not enough funds"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_38fc6ba06c924208472ab053d62249a6a0165c760c073089bf019af8c267f725",
                                                    "typeString": "literal_string \"Not enough funds\""
                                                }
                                            ],
                                            "id": 8565,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2119:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8570,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2119:58:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8571,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2119:58:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 8576,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 8573,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "2196:5:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 8574,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2202:9:33",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2196:15:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 8575,
                                                    "name": "deadline",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8450,
                                                    "src": "2214:8:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2196:26:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "446561646c696e652072656163686564",
                                                "id": 8577,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2224:18:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_4a83ef5d29928232e1efe1555ece8a8a3e40670e7eb5a4b1971f2bc490a19a70",
                                                    "typeString": "literal_string \"Deadline reached\""
                                                },
                                                "value": "Deadline reached"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_4a83ef5d29928232e1efe1555ece8a8a3e40670e7eb5a4b1971f2bc490a19a70",
                                                    "typeString": "literal_string \"Deadline reached\""
                                                }
                                            ],
                                            "id": 8572,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2188:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8578,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2188:55:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8579,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2188:55:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 8581,
                                                "name": "raisingFunds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8456,
                                                "src": "2262:12:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "52616973696e672066756e6473206973206e6f7420616374697665",
                                                "id": 8582,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2276:29:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_7449c8ddd467ef0d25754c3e4c19e9ca07e773ed3bd60315a88becec916920b2",
                                                    "typeString": "literal_string \"Raising funds is not active\""
                                                },
                                                "value": "Raising funds is not active"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_7449c8ddd467ef0d25754c3e4c19e9ca07e773ed3bd60315a88becec916920b2",
                                                    "typeString": "literal_string \"Raising funds is not active\""
                                                }
                                            ],
                                            "id": 8580,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2254:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8583,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2254:52:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8584,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2254:52:33"
                                },
                                {
                                    "assignments": [
                                        8586
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8586,
                                            "mutability": "mutable",
                                            "name": "price",
                                            "nameLocation": "2327:5:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8624,
                                            "src": "2319:13:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 8585,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2319:7:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8593,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 8592,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 8589,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 8587,
                                                        "name": "_amount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 8562,
                                                        "src": "2336:7:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "/",
                                                    "rightExpression": {
                                                        "id": 8588,
                                                        "name": "totalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10376,
                                                        "src": "2344:11:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2336:19:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 8590,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "2335:21:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                            "id": 8591,
                                            "name": "totalAmountToRaise",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8448,
                                            "src": "2359:18:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2335:42:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2319:58:33"
                                },
                                {
                                    "assignments": [
                                        8595
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8595,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "2393:7:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8624,
                                            "src": "2388:12:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 8594,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2388:4:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8606,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 8598,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2429:3:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 8599,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2433:6:33",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2429:10:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8602,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2449:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 8601,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2441:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 8600,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2441:7:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8603,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2441:13:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8604,
                                                "name": "price",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8586,
                                                "src": "2456:5:33",
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
                                                "id": 8596,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8444,
                                                "src": "2403:12:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$2406",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 8597,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2416:12:33",
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2405,
                                            "src": "2403:25:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 8605,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2403:59:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2388:74:33"
                                },
                                {
                                    "condition": {
                                        "id": 8608,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "2476:8:33",
                                        "subExpression": {
                                            "id": 8607,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8595,
                                            "src": "2477:7:33",
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
                                    "id": 8614,
                                    "nodeType": "IfStatement",
                                    "src": "2473:65:33",
                                    "trueBody": {
                                        "id": 8613,
                                        "nodeType": "Block",
                                        "src": "2486:52:33",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "hexValue": "5472616e73666572206661696c6564",
                                                            "id": 8610,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "string",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2508:17:33",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_stringliteral_25adaa6d082ce15f901e0d8a3d393e7462ef9edf2e6bc8321fa14d1615b6fc51",
                                                                "typeString": "literal_string \"Transfer failed\""
                                                            },
                                                            "value": "Transfer failed"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_stringliteral_25adaa6d082ce15f901e0d8a3d393e7462ef9edf2e6bc8321fa14d1615b6fc51",
                                                                "typeString": "literal_string \"Transfer failed\""
                                                            }
                                                        ],
                                                        "id": 8609,
                                                        "name": "revert",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            -19,
                                                            -19
                                                        ],
                                                        "referencedDeclaration": -19,
                                                        "src": "2501:6:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                                            "typeString": "function (string memory) pure"
                                                        }
                                                    },
                                                    "id": 8611,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2501:25:33",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 8612,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2501:25:33"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8618,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2571:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 8617,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2563:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 8616,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2563:7:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8619,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2563:13:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8620,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8560,
                                                "src": "2578:3:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8621,
                                                "name": "_amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8562,
                                                "src": "2583:7:33",
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
                                            "id": 8615,
                                            "name": "_transferERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11315,
                                            "src": "2548:14:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 8622,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2548:43:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8623,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2548:43:33"
                                }
                            ]
                        },
                        "functionSelector": "4570992d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "engage",
                        "nameLocation": "2064:6:33",
                        "parameters": {
                            "id": 8563,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8560,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2079:3:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8625,
                                    "src": "2071:11:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8559,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2071:7:33",
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
                                    "id": 8562,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "2092:7:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8625,
                                    "src": "2084:15:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8561,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2084:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2070:30:33"
                        },
                        "returnParameters": {
                            "id": 8564,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2108:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8659,
                        "nodeType": "FunctionDefinition",
                        "src": "2607:280:33",
                        "nodes": [],
                        "body": {
                            "id": 8658,
                            "nodeType": "Block",
                            "src": "2681:206:33",
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
                                                "id": 8638,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 8635,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "2700:5:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 8636,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2706:9:33",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2700:15:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 8637,
                                                    "name": "deadline",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8450,
                                                    "src": "2718:8:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2700:26:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "446561646c696e65206e6f742072656163686564",
                                                "id": 8639,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2728:22:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_53e292b015226176e474a9791766536fc304b6afdefdc8e17ad1e85a84510013",
                                                    "typeString": "literal_string \"Deadline not reached\""
                                                },
                                                "value": "Deadline not reached"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_53e292b015226176e474a9791766536fc304b6afdefdc8e17ad1e85a84510013",
                                                    "typeString": "literal_string \"Deadline not reached\""
                                                }
                                            ],
                                            "id": 8634,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2692:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8640,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2692:59:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8641,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2692:59:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 8643,
                                                "name": "successfulSale",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8453,
                                                "src": "2770:14:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "53616c6520776173206e6f74207375636365737366756c",
                                                "id": 8644,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2786:25:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_206004654ed3b125c979b54a2b4869f3c3301367e9b1a72d07a9ffd092593cea",
                                                    "typeString": "literal_string \"Sale was not successful\""
                                                },
                                                "value": "Sale was not successful"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_206004654ed3b125c979b54a2b4869f3c3301367e9b1a72d07a9ffd092593cea",
                                                    "typeString": "literal_string \"Sale was not successful\""
                                                }
                                            ],
                                            "id": 8642,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "2762:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8645,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2762:50:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8646,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2762:50:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8652,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2859:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 8651,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2851:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 8650,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2851:7:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8653,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2851:13:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8654,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8627,
                                                "src": "2866:3:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8655,
                                                "name": "_amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8629,
                                                "src": "2871:7:33",
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
                                                "id": 8647,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8444,
                                                "src": "2825:12:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$2406",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 8649,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2838:12:33",
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2405,
                                            "src": "2825:25:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 8656,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2825:54:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8657,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2825:54:33"
                                }
                            ]
                        },
                        "functionSelector": "279093a5",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 8632,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 8631,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "2669:11:33"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 8468,
                                    "src": "2669:11:33"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2669:11:33"
                            }
                        ],
                        "name": "managerWithdraw",
                        "nameLocation": "2616:15:33",
                        "parameters": {
                            "id": 8630,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8627,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2640:3:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8659,
                                    "src": "2632:11:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8626,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2632:7:33",
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
                                    "id": 8629,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "2653:7:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8659,
                                    "src": "2645:15:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8628,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2645:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2631:30:33"
                        },
                        "returnParameters": {
                            "id": 8633,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2681:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8669,
                        "nodeType": "FunctionDefinition",
                        "src": "2895:85:33",
                        "nodes": [],
                        "body": {
                            "id": 8668,
                            "nodeType": "Block",
                            "src": "2939:41:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 8666,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8664,
                                            "name": "successfulSale",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8453,
                                            "src": "2950:14:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "66616c7365",
                                            "id": 8665,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2967:5:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "2950:22:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8667,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2950:22:33"
                                }
                            ]
                        },
                        "functionSelector": "d30be6f0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 8662,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 8661,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "2927:11:33"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 8468,
                                    "src": "2927:11:33"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2927:11:33"
                            }
                        ],
                        "name": "setFailedSale",
                        "nameLocation": "2904:13:33",
                        "parameters": {
                            "id": 8660,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2917:2:33"
                        },
                        "returnParameters": {
                            "id": 8663,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2939:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8679,
                        "nodeType": "FunctionDefinition",
                        "src": "2988:88:33",
                        "nodes": [],
                        "body": {
                            "id": 8678,
                            "nodeType": "Block",
                            "src": "3036:40:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 8676,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8674,
                                            "name": "successfulSale",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8453,
                                            "src": "3047:14:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 8675,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3064:4:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "3047:21:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8677,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3047:21:33"
                                }
                            ]
                        },
                        "functionSelector": "bf2adf90",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 8672,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 8671,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "3024:11:33"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 8468,
                                    "src": "3024:11:33"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3024:11:33"
                            }
                        ],
                        "name": "setSuccessfulSale",
                        "nameLocation": "2997:17:33",
                        "parameters": {
                            "id": 8670,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3014:2:33"
                        },
                        "returnParameters": {
                            "id": 8673,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3036:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8748,
                        "nodeType": "FunctionDefinition",
                        "src": "3084:544:33",
                        "nodes": [],
                        "body": {
                            "id": 8747,
                            "nodeType": "Block",
                            "src": "3146:482:33",
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
                                                "id": 8688,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 8685,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "3165:5:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 8686,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3171:9:33",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3165:15:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 8687,
                                                    "name": "deadline",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8450,
                                                    "src": "3183:8:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3165:26:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "446561646c696e65206e6f742072656163686564",
                                                "id": 8689,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3193:22:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_53e292b015226176e474a9791766536fc304b6afdefdc8e17ad1e85a84510013",
                                                    "typeString": "literal_string \"Deadline not reached\""
                                                },
                                                "value": "Deadline not reached"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_53e292b015226176e474a9791766536fc304b6afdefdc8e17ad1e85a84510013",
                                                    "typeString": "literal_string \"Deadline not reached\""
                                                }
                                            ],
                                            "id": 8684,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3157:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8690,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3157:59:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8691,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3157:59:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 8694,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "3235:15:33",
                                                "subExpression": {
                                                    "id": 8693,
                                                    "name": "successfulSale",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8453,
                                                    "src": "3236:14:33",
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
                                                "hexValue": "53616c6520776173207375636365737366756c",
                                                "id": 8695,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3252:21:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_4b7c052cad07ef7b5e993fda22b8fca320dad31cac7b8c913560810c7eb09cae",
                                                    "typeString": "literal_string \"Sale was successful\""
                                                },
                                                "value": "Sale was successful"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_4b7c052cad07ef7b5e993fda22b8fca320dad31cac7b8c913560810c7eb09cae",
                                                    "typeString": "literal_string \"Sale was successful\""
                                                }
                                            ],
                                            "id": 8692,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3227:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8696,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3227:47:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8697,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3227:47:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 8700,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "3293:13:33",
                                                "subExpression": {
                                                    "id": 8699,
                                                    "name": "raisingFunds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8456,
                                                    "src": "3294:12:33",
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
                                                "hexValue": "52616973696e672066756e647320697320616374697665",
                                                "id": 8701,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3308:25:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_f2170c9ade88477a4279178808edb246e52c3b1dfd429395341786e323e0eddf",
                                                    "typeString": "literal_string \"Raising funds is active\""
                                                },
                                                "value": "Raising funds is active"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_f2170c9ade88477a4279178808edb246e52c3b1dfd429395341786e323e0eddf",
                                                    "typeString": "literal_string \"Raising funds is active\""
                                                }
                                            ],
                                            "id": 8698,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3285:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8702,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3285:49:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8703,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3285:49:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 8712,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 8708,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "3376:4:33",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                                        "typeString": "contract ProjectAccount"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                                        "typeString": "contract ProjectAccount"
                                                                    }
                                                                ],
                                                                "id": 8707,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "3368:7:33",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 8706,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "3368:7:33",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 8709,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3368:13:33",
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
                                                        "id": 8705,
                                                        "name": "erc20BalanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10530,
                                                        "src": "3353:14:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 8710,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3353:29:33",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "id": 8711,
                                                    "name": "_amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8681,
                                                    "src": "3386:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3353:40:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4e6f7420656e6f7567682066756e6473",
                                                "id": 8713,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3395:18:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_38fc6ba06c924208472ab053d62249a6a0165c760c073089bf019af8c267f725",
                                                    "typeString": "literal_string \"Not enough funds\""
                                                },
                                                "value": "Not enough funds"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_38fc6ba06c924208472ab053d62249a6a0165c760c073089bf019af8c267f725",
                                                    "typeString": "literal_string \"Not enough funds\""
                                                }
                                            ],
                                            "id": 8704,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3345:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 8714,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3345:69:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8715,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3345:69:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 8717,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3442:3:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 8718,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3446:6:33",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3442:10:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8721,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3462:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 8720,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3454:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 8719,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3454:7:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8722,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3454:13:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8723,
                                                "name": "_amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8681,
                                                "src": "3469:7:33",
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
                                            "id": 8716,
                                            "name": "_transferERC20",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11315,
                                            "src": "3427:14:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 8724,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3427:50:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 8725,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3427:50:33"
                                },
                                {
                                    "assignments": [
                                        8727
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8727,
                                            "mutability": "mutable",
                                            "name": "price",
                                            "nameLocation": "3498:5:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8747,
                                            "src": "3490:13:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 8726,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3490:7:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8734,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 8733,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 8730,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 8728,
                                                        "name": "_amount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 8681,
                                                        "src": "3507:7:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "/",
                                                    "rightExpression": {
                                                        "id": 8729,
                                                        "name": "totalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10376,
                                                        "src": "3515:11:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3507:19:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 8731,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3506:21:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                            "id": 8732,
                                            "name": "totalAmountToRaise",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8448,
                                            "src": "3530:18:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3506:42:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3490:58:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 8740,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "3593:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ProjectAccount_$8947",
                                                            "typeString": "contract ProjectAccount"
                                                        }
                                                    ],
                                                    "id": 8739,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3585:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 8738,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3585:7:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8741,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3585:13:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 8742,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3600:3:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 8743,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3604:6:33",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3600:10:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8744,
                                                "name": "price",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8727,
                                                "src": "3612:5:33",
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
                                                "id": 8735,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8444,
                                                "src": "3559:12:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$2406",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 8737,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3572:12:33",
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2405,
                                            "src": "3559:25:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 8745,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3559:59:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8746,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3559:59:33"
                                }
                            ]
                        },
                        "functionSelector": "89529c04",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "retriveTokensAfterFailedSale",
                        "nameLocation": "3093:28:33",
                        "parameters": {
                            "id": 8682,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8681,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "3130:7:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8748,
                                    "src": "3122:15:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8680,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3122:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3121:17:33"
                        },
                        "returnParameters": {
                            "id": 8683,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3146:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8758,
                        "nodeType": "FunctionDefinition",
                        "src": "3636:86:33",
                        "nodes": [],
                        "body": {
                            "id": 8757,
                            "nodeType": "Block",
                            "src": "3683:39:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 8755,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8753,
                                            "name": "raisingFunds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8456,
                                            "src": "3694:12:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "66616c7365",
                                            "id": 8754,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3709:5:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "3694:20:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8756,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3694:20:33"
                                }
                            ]
                        },
                        "functionSelector": "2df96c7b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 8751,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 8750,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "3671:11:33"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 8468,
                                    "src": "3671:11:33"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3671:11:33"
                            }
                        ],
                        "name": "stopRaisingFunds",
                        "nameLocation": "3645:16:33",
                        "parameters": {
                            "id": 8749,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3661:2:33"
                        },
                        "returnParameters": {
                            "id": 8752,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3683:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8768,
                        "nodeType": "FunctionDefinition",
                        "src": "3730:86:33",
                        "nodes": [],
                        "body": {
                            "id": 8767,
                            "nodeType": "Block",
                            "src": "3778:38:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 8765,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8763,
                                            "name": "raisingFunds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8456,
                                            "src": "3789:12:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 8764,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3804:4:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "3789:19:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8766,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3789:19:33"
                                }
                            ]
                        },
                        "functionSelector": "5da4af75",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 8761,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 8760,
                                    "name": "onlyManager",
                                    "nameLocations": [
                                        "3766:11:33"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 8468,
                                    "src": "3766:11:33"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3766:11:33"
                            }
                        ],
                        "name": "startRaisingFunds",
                        "nameLocation": "3739:17:33",
                        "parameters": {
                            "id": 8759,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3756:2:33"
                        },
                        "returnParameters": {
                            "id": 8762,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3778:0:33"
                        },
                        "scope": 8947,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8800,
                        "nodeType": "FunctionDefinition",
                        "src": "3826:244:33",
                        "nodes": [],
                        "body": {
                            "id": 8799,
                            "nodeType": "Block",
                            "src": "3915:155:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        8777
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8777,
                                            "mutability": "mutable",
                                            "name": "baseURI",
                                            "nameLocation": "3949:7:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8799,
                                            "src": "3935:21:33",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 8776,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3935:6:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8779,
                                    "initialValue": {
                                        "hexValue": "",
                                        "id": 8778,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3959:2:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                            "typeString": "literal_string \"\""
                                        },
                                        "value": ""
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3935:26:33"
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 8786,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 8782,
                                                            "name": "baseURI",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 8777,
                                                            "src": "3985:7:33",
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
                                                        "id": 8781,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3979:5:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                            "typeString": "type(bytes storage pointer)"
                                                        },
                                                        "typeName": {
                                                            "id": 8780,
                                                            "name": "bytes",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3979:5:33",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 8783,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3979:14:33",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 8784,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3994:6:33",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "3979:21:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 8785,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4003:1:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3979:25:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "hexValue": "",
                                            "id": 8796,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4060:2:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                "typeString": "literal_string \"\""
                                            },
                                            "value": ""
                                        },
                                        "id": 8797,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "3979:83:33",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 8790,
                                                    "name": "baseURI",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8777,
                                                    "src": "4021:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "id": 8793,
                                                            "name": "_tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 8770,
                                                            "src": "4047:8:33",
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
                                                        "expression": {
                                                            "id": 8791,
                                                            "name": "Strings",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4303,
                                                            "src": "4030:7:33",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Strings_$4303_$",
                                                                "typeString": "type(library Strings)"
                                                            }
                                                        },
                                                        "id": 8792,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4038:8:33",
                                                        "memberName": "toString",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 4116,
                                                        "src": "4030:16:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                            "typeString": "function (uint256) pure returns (string memory)"
                                                        }
                                                    },
                                                    "id": 8794,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4030:26:33",
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
                                                    },
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 8788,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4007:6:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 8787,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4007:6:33",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 8789,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4014:6:33",
                                                "memberName": "concat",
                                                "nodeType": "MemberAccess",
                                                "src": "4007:13:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                                                    "typeString": "function () pure returns (string memory)"
                                                }
                                            },
                                            "id": 8795,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4007:50:33",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 8775,
                                    "id": 8798,
                                    "nodeType": "Return",
                                    "src": "3972:90:33"
                                }
                            ]
                        },
                        "baseFunctions": [
                            10614
                        ],
                        "functionSelector": "c87b56dd",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tokenURI",
                        "nameLocation": "3835:8:33",
                        "overrides": {
                            "id": 8772,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3882:8:33"
                        },
                        "parameters": {
                            "id": 8771,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8770,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "3852:8:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8800,
                                    "src": "3844:16:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8769,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3844:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3843:18:33"
                        },
                        "returnParameters": {
                            "id": 8775,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8774,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8800,
                                    "src": "3900:13:33",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 8773,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3900:6:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3899:15:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 8829,
                        "nodeType": "FunctionDefinition",
                        "src": "4080:392:33",
                        "nodes": [],
                        "body": {
                            "id": 8828,
                            "nodeType": "Block",
                            "src": "4211:261:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        8810
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8810,
                                            "mutability": "mutable",
                                            "name": "isValid",
                                            "nameLocation": "4227:7:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8828,
                                            "src": "4222:12:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 8809,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4222:4:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8818,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 8813,
                                                    "name": "owner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 8891,
                                                    "src": "4288:5:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                        "typeString": "function () view returns (address)"
                                                    }
                                                },
                                                "id": 8814,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4288:7:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 8815,
                                                "name": "hash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8802,
                                                "src": "4310:4:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 8816,
                                                "name": "signature",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8804,
                                                "src": "4329:9:33",
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
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 8811,
                                                "name": "SignatureChecker",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4752,
                                                "src": "4237:16:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_SignatureChecker_$4752_$",
                                                    "typeString": "type(library SignatureChecker)"
                                                }
                                            },
                                            "id": 8812,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4254:19:33",
                                            "memberName": "isValidSignatureNow",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 4699,
                                            "src": "4237:36:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                                                "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                                            }
                                        },
                                        "id": 8817,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4237:112:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4222:127:33"
                                },
                                {
                                    "condition": {
                                        "id": 8819,
                                        "name": "isValid",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8810,
                                        "src": "4366:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8825,
                                    "nodeType": "IfStatement",
                                    "src": "4362:81:33",
                                    "trueBody": {
                                        "id": 8824,
                                        "nodeType": "Block",
                                        "src": "4375:68:33",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "expression": {
                                                            "id": 8820,
                                                            "name": "IERC1271",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1776,
                                                            "src": "4397:8:33",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IERC1271_$1776_$",
                                                                "typeString": "type(contract IERC1271)"
                                                            }
                                                        },
                                                        "id": 8821,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4406:16:33",
                                                        "memberName": "isValidSignature",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 1775,
                                                        "src": "4397:25:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                                            "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                                                        }
                                                    },
                                                    "id": 8822,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4423:8:33",
                                                    "memberName": "selector",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4397:34:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes4",
                                                        "typeString": "bytes4"
                                                    }
                                                },
                                                "functionReturnParameters": 8808,
                                                "id": 8823,
                                                "nodeType": "Return",
                                                "src": "4390:41:33"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "hexValue": "",
                                        "id": 8826,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4462:2:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                            "typeString": "literal_string \"\""
                                        },
                                        "value": ""
                                    },
                                    "functionReturnParameters": 8808,
                                    "id": 8827,
                                    "nodeType": "Return",
                                    "src": "4455:9:33"
                                }
                            ]
                        },
                        "baseFunctions": [
                            1775
                        ],
                        "functionSelector": "1626ba7e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isValidSignature",
                        "nameLocation": "4089:16:33",
                        "parameters": {
                            "id": 8805,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8802,
                                    "mutability": "mutable",
                                    "name": "hash",
                                    "nameLocation": "4124:4:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8829,
                                    "src": "4116:12:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 8801,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4116:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8804,
                                    "mutability": "mutable",
                                    "name": "signature",
                                    "nameLocation": "4152:9:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8829,
                                    "src": "4139:22:33",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 8803,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4139:5:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4105:63:33"
                        },
                        "returnParameters": {
                            "id": 8808,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8807,
                                    "mutability": "mutable",
                                    "name": "magicValue",
                                    "nameLocation": "4199:10:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8829,
                                    "src": "4192:17:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 8806,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4192:6:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4191:19:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8859,
                        "nodeType": "FunctionDefinition",
                        "src": "4480:288:33",
                        "nodes": [],
                        "body": {
                            "id": 8858,
                            "nodeType": "Block",
                            "src": "4545:223:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        8839
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8839,
                                            "mutability": "mutable",
                                            "name": "footer",
                                            "nameLocation": "4569:6:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8858,
                                            "src": "4556:19:33",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 8838,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4556:5:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8844,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "hexValue": "30783630",
                                                "id": 8842,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4588:4:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_96_by_1",
                                                    "typeString": "int_const 96"
                                                },
                                                "value": "0x60"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_rational_96_by_1",
                                                    "typeString": "int_const 96"
                                                }
                                            ],
                                            "id": 8841,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "4578:9:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 8840,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4582:5:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 8843,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4578:15:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4556:37:33"
                                },
                                {
                                    "AST": {
                                        "nativeSrc": "4615:79:33",
                                        "nodeType": "YulBlock",
                                        "src": "4615:79:33",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [],
                                                            "functionName": {
                                                                "name": "address",
                                                                "nativeSrc": "4642:7:33",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4642:7:33"
                                                            },
                                                            "nativeSrc": "4642:9:33",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4642:9:33"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "footer",
                                                                    "nativeSrc": "4657:6:33",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4657:6:33"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nativeSrc": "4665:4:33",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "4665:4:33",
                                                                    "type": "",
                                                                    "value": "0x20"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nativeSrc": "4653:3:33",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4653:3:33"
                                                            },
                                                            "nativeSrc": "4653:17:33",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4653:17:33"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "4672:4:33",
                                                            "nodeType": "YulLiteral",
                                                            "src": "4672:4:33",
                                                            "type": "",
                                                            "value": "0x4d"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "4678:4:33",
                                                            "nodeType": "YulLiteral",
                                                            "src": "4678:4:33",
                                                            "type": "",
                                                            "value": "0x60"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "extcodecopy",
                                                        "nativeSrc": "4630:11:33",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4630:11:33"
                                                    },
                                                    "nativeSrc": "4630:53:33",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4630:53:33"
                                                },
                                                "nativeSrc": "4630:53:33",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "4630:53:33"
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 8839,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "4657:6:33",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 8845,
                                    "nodeType": "InlineAssembly",
                                    "src": "4606:88:33"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 8848,
                                                "name": "footer",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8839,
                                                "src": "4724:6:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "components": [
                                                    {
                                                        "id": 8850,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4733:7:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 8849,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4733:7:33",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    {
                                                        "id": 8852,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4742:7:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 8851,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4742:7:33",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    {
                                                        "id": 8854,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4751:7:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 8853,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4751:7:33",
                                                            "typeDescriptions": {}
                                                        }
                                                    }
                                                ],
                                                "id": 8855,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "4732:27:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$_t_type$_t_uint256_$_$_t_type$_t_address_$_$_t_type$_t_uint256_$_$",
                                                    "typeString": "tuple(type(uint256),type(address),type(uint256))"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_tuple$_t_type$_t_uint256_$_$_t_type$_t_address_$_$_t_type$_t_uint256_$_$",
                                                    "typeString": "tuple(type(uint256),type(address),type(uint256))"
                                                }
                                            ],
                                            "expression": {
                                                "id": 8846,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "4713:3:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 8847,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "4717:6:33",
                                            "memberName": "decode",
                                            "nodeType": "MemberAccess",
                                            "src": "4713:10:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                "typeString": "function () pure"
                                            }
                                        },
                                        "id": 8856,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4713:47:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_address_payable_$_t_uint256_$",
                                            "typeString": "tuple(uint256,address payable,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 8837,
                                    "id": 8857,
                                    "nodeType": "Return",
                                    "src": "4706:54:33"
                                }
                            ]
                        },
                        "baseFunctions": [
                            9900
                        ],
                        "functionSelector": "fc0c546a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "token",
                        "nameLocation": "4489:5:33",
                        "parameters": {
                            "id": 8830,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4494:2:33"
                        },
                        "returnParameters": {
                            "id": 8837,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8832,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8859,
                                    "src": "4518:7:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8831,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4518:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8834,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8859,
                                    "src": "4527:7:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8833,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4527:7:33",
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
                                    "id": 8836,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8859,
                                    "src": "4536:7:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8835,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4536:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4517:27:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8891,
                        "nodeType": "FunctionDefinition",
                        "src": "4776:250:33",
                        "nodes": [],
                        "body": {
                            "id": 8890,
                            "nodeType": "Block",
                            "src": "4823:203:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        8865,
                                        8867,
                                        8869
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 8865,
                                            "mutability": "mutable",
                                            "name": "chainId",
                                            "nameLocation": "4843:7:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8890,
                                            "src": "4835:15:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 8864,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4835:7:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 8867,
                                            "mutability": "mutable",
                                            "name": "tokenContract",
                                            "nameLocation": "4860:13:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8890,
                                            "src": "4852:21:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 8866,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4852:7:33",
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
                                            "id": 8869,
                                            "mutability": "mutable",
                                            "name": "tokenId",
                                            "nameLocation": "4883:7:33",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 8890,
                                            "src": "4875:15:33",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 8868,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4875:7:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 8872,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 8870,
                                            "name": "token",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8859,
                                            "src": "4894:5:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$_t_address_$_t_uint256_$",
                                                "typeString": "function () view returns (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 8871,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4894:7:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_address_$_t_uint256_$",
                                            "typeString": "tuple(uint256,address,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4834:67:33"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 8876,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 8873,
                                            "name": "chainId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8865,
                                            "src": "4916:7:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 8874,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "4927:5:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 8875,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4933:7:33",
                                            "memberName": "chainid",
                                            "nodeType": "MemberAccess",
                                            "src": "4927:13:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4916:24:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8882,
                                    "nodeType": "IfStatement",
                                    "src": "4912:47:33",
                                    "trueBody": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "hexValue": "30",
                                                    "id": 8879,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4957:1:33",
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
                                                "id": 8878,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4949:7:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 8877,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4949:7:33",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 8880,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4949:10:33",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "functionReturnParameters": 8863,
                                        "id": 8881,
                                        "nodeType": "Return",
                                        "src": "4942:17:33"
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 8887,
                                                "name": "tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8869,
                                                "src": "5010:7:33",
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
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 8884,
                                                        "name": "tokenContract",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 8867,
                                                        "src": "4987:13:33",
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
                                                    "id": 8883,
                                                    "name": "IERC721",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3480,
                                                    "src": "4979:7:33",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_IERC721_$3480_$",
                                                        "typeString": "type(contract IERC721)"
                                                    }
                                                },
                                                "id": 8885,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4979:22:33",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC721_$3480",
                                                    "typeString": "contract IERC721"
                                                }
                                            },
                                            "id": 8886,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5002:7:33",
                                            "memberName": "ownerOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 3413,
                                            "src": "4979:30:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                                                "typeString": "function (uint256) view external returns (address)"
                                            }
                                        },
                                        "id": 8888,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4979:39:33",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 8863,
                                    "id": 8889,
                                    "nodeType": "Return",
                                    "src": "4972:46:33"
                                }
                            ]
                        },
                        "baseFunctions": [
                            9906
                        ],
                        "functionSelector": "8da5cb5b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "owner",
                        "nameLocation": "4785:5:33",
                        "parameters": {
                            "id": 8860,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4790:2:33"
                        },
                        "returnParameters": {
                            "id": 8863,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8862,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8891,
                                    "src": "4814:7:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8861,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4814:7:33",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4813:9:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 8904,
                        "nodeType": "FunctionDefinition",
                        "src": "5034:112:33",
                        "nodes": [],
                        "body": {
                            "id": 8903,
                            "nodeType": "Block",
                            "src": "5103:43:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 8901,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 8898,
                                            "name": "signer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8893,
                                            "src": "5121:6:33",
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
                                                "id": 8899,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8891,
                                                "src": "5131:5:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                                    "typeString": "function () view returns (address)"
                                                }
                                            },
                                            "id": 8900,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5131:7:33",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5121:17:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 8897,
                                    "id": 8902,
                                    "nodeType": "Return",
                                    "src": "5114:24:33"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_isValidSigner",
                        "nameLocation": "5043:14:33",
                        "parameters": {
                            "id": 8894,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8893,
                                    "mutability": "mutable",
                                    "name": "signer",
                                    "nameLocation": "5066:6:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8904,
                                    "src": "5058:14:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8892,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5058:7:33",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5057:16:33"
                        },
                        "returnParameters": {
                            "id": 8897,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8896,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8904,
                                    "src": "5097:4:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 8895,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5097:4:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5096:6:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 8926,
                        "nodeType": "FunctionDefinition",
                        "src": "5154:210:33",
                        "nodes": [],
                        "body": {
                            "id": 8925,
                            "nodeType": "Block",
                            "src": "5246:118:33",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 8923,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            },
                                            "id": 8916,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 8911,
                                                "name": "interfaceId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8906,
                                                "src": "5267:11:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 8913,
                                                            "name": "IERC404",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9871,
                                                            "src": "5287:7:33",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IERC404_$9871_$",
                                                                "typeString": "type(contract IERC404)"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_type$_t_contract$_IERC404_$9871_$",
                                                                "typeString": "type(contract IERC404)"
                                                            }
                                                        ],
                                                        "id": 8912,
                                                        "name": "type",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -27,
                                                        "src": "5282:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 8914,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5282:13:33",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_meta_type_t_contract$_IERC404_$9871",
                                                        "typeString": "type(contract IERC404)"
                                                    }
                                                },
                                                "id": 8915,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "5296:11:33",
                                                "memberName": "interfaceId",
                                                "nodeType": "MemberAccess",
                                                "src": "5282:25:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            "src": "5267:40:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            },
                                            "id": 8922,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 8917,
                                                "name": "interfaceId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8906,
                                                "src": "5318:11:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 8919,
                                                            "name": "IERC165",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4788,
                                                            "src": "5338:7:33",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IERC165_$4788_$",
                                                                "typeString": "type(contract IERC165)"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_type$_t_contract$_IERC165_$4788_$",
                                                                "typeString": "type(contract IERC165)"
                                                            }
                                                        ],
                                                        "id": 8918,
                                                        "name": "type",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -27,
                                                        "src": "5333:4:33",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 8920,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5333:13:33",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_meta_type_t_contract$_IERC165_$4788",
                                                        "typeString": "type(contract IERC165)"
                                                    }
                                                },
                                                "id": 8921,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "5347:11:33",
                                                "memberName": "interfaceId",
                                                "nodeType": "MemberAccess",
                                                "src": "5333:25:33",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes4",
                                                    "typeString": "bytes4"
                                                }
                                            },
                                            "src": "5318:40:33",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "5267:91:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 8910,
                                    "id": 8924,
                                    "nodeType": "Return",
                                    "src": "5253:105:33"
                                }
                            ]
                        },
                        "baseFunctions": [
                            4787
                        ],
                        "functionSelector": "01ffc9a7",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "supportsInterface",
                        "nameLocation": "5163:17:33",
                        "parameters": {
                            "id": 8907,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8906,
                                    "mutability": "mutable",
                                    "name": "interfaceId",
                                    "nameLocation": "5194:11:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8926,
                                    "src": "5187:18:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 8905,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5187:6:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5180:30:33"
                        },
                        "returnParameters": {
                            "id": 8910,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8909,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8926,
                                    "src": "5240:4:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 8908,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5240:4:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5239:6:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 8939,
                        "nodeType": "FunctionDefinition",
                        "src": "5372:154:33",
                        "nodes": [],
                        "body": {
                            "id": 8938,
                            "nodeType": "Block",
                            "src": "5524:2:33",
                            "nodes": [],
                            "statements": []
                        },
                        "baseFunctions": [
                            9890
                        ],
                        "functionSelector": "9e5d4c49",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "executeCall",
                        "nameLocation": "5381:11:33",
                        "overrides": {
                            "id": 8934,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "5492:8:33"
                        },
                        "parameters": {
                            "id": 8933,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8928,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "5411:2:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8939,
                                    "src": "5403:10:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8927,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5403:7:33",
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
                                    "id": 8930,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "5432:5:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8939,
                                    "src": "5424:13:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8929,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5424:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 8932,
                                    "mutability": "mutable",
                                    "name": "data",
                                    "nameLocation": "5463:4:33",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8939,
                                    "src": "5448:19:33",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 8931,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5448:5:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5392:82:33"
                        },
                        "returnParameters": {
                            "id": 8937,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8936,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8939,
                                    "src": "5510:12:33",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 8935,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5510:5:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5509:14:33"
                        },
                        "scope": 8947,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8946,
                        "nodeType": "FunctionDefinition",
                        "src": "5534:60:33",
                        "nodes": [],
                        "body": {
                            "id": 8945,
                            "nodeType": "Block",
                            "src": "5592:2:33",
                            "nodes": [],
                            "statements": []
                        },
                        "baseFunctions": [
                            9912
                        ],
                        "functionSelector": "affed0e0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nonce",
                        "nameLocation": "5543:5:33",
                        "overrides": {
                            "id": 8941,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "5565:8:33"
                        },
                        "parameters": {
                            "id": 8940,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5548:2:33"
                        },
                        "returnParameters": {
                            "id": 8944,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8943,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8946,
                                    "src": "5583:7:33",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8942,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5583:7:33",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5582:9:33"
                        },
                        "scope": 8947,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 8428,
                            "name": "IERC165",
                            "nameLocations": [
                                "605:7:33"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 4788,
                            "src": "605:7:33"
                        },
                        "id": 8429,
                        "nodeType": "InheritanceSpecifier",
                        "src": "605:7:33"
                    },
                    {
                        "baseName": {
                            "id": 8430,
                            "name": "IERC1271",
                            "nameLocations": [
                                "614:8:33"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 1776,
                            "src": "614:8:33"
                        },
                        "id": 8431,
                        "nodeType": "InheritanceSpecifier",
                        "src": "614:8:33"
                    },
                    {
                        "baseName": {
                            "id": 8432,
                            "name": "IERC6551Account",
                            "nameLocations": [
                                "624:15:33"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9913,
                            "src": "624:15:33"
                        },
                        "id": 8433,
                        "nodeType": "InheritanceSpecifier",
                        "src": "624:15:33"
                    },
                    {
                        "baseName": {
                            "id": 8434,
                            "name": "ERC404",
                            "nameLocations": [
                                "641:6:33"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11975,
                            "src": "641:6:33"
                        },
                        "id": 8435,
                        "nodeType": "InheritanceSpecifier",
                        "src": "641:6:33"
                    },
                    {
                        "baseName": {
                            "id": 8436,
                            "name": "Initializable",
                            "nameLocations": [
                                "649:13:33"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 448,
                            "src": "649:13:33"
                        },
                        "id": 8437,
                        "nodeType": "InheritanceSpecifier",
                        "src": "649:13:33"
                    }
                ],
                "canonicalName": "ProjectAccount",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    8947,
                    448,
                    11975,
                    9871,
                    9913,
                    1776,
                    4788
                ],
                "name": "ProjectAccount",
                "nameLocation": "587:14:33",
                "scope": 8948,
                "usedErrors": [
                    211,
                    214,
                    9604,
                    9606,
                    9608,
                    9610,
                    9612,
                    9614,
                    9616,
                    9618,
                    9620,
                    9622,
                    9624,
                    9626,
                    9628,
                    9630,
                    9632,
                    9634,
                    9636,
                    9638,
                    9971,
                    9974,
                    9977
                ],
                "usedEvents": [
                    219,
                    10317,
                    10325,
                    10334,
                    10342,
                    10350
                ]
            }
        ],
        "license": "MIT"
    },
    "id": 33
}


export const ProjectAccountABI = ProjectAccountContract["abi"];