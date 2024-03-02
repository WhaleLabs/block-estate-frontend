const ERC20Contract = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "symbol",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "allowance",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
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
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
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
                    "name": "account",
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
            "name": "mint",
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
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
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
                    "name": "value",
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
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ERC20InsufficientAllowance",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "allowance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "needed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InsufficientBalance",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "balance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "needed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidApprover",
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
            "name": "ERC20InvalidReceiver",
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
            "name": "ERC20InvalidSender",
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
            "name": "ERC20InvalidSpender",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x60806040523480156200001157600080fd5b5060405162000e8c38038062000e8c8339810160408190526200003491620002ba565b81816003620000448382620003b5565b506004620000538282620003b5565b50505062000075336c0c9f2c9cd04674edea400000006200007d60201b60201c565b5050620004a9565b6001600160a01b038216620000ad5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000bb60008383620000bf565b5050565b6001600160a01b038316620000ee578060026000828254620000e2919062000481565b90915550620001629050565b6001600160a01b03831660009081526020819052604090205481811015620001435760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000a4565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821662000180576002805482900390556200019f565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e591815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021a57600080fd5b81516001600160401b0380821115620002375762000237620001f2565b604051601f8301601f19908116603f01168101908282118183101715620002625762000262620001f2565b81604052838152602092508660208588010111156200028057600080fd5b600091505b83821015620002a4578582018301518183018401529082019062000285565b6000602085830101528094505050505092915050565b60008060408385031215620002ce57600080fd5b82516001600160401b0380821115620002e657600080fd5b620002f48683870162000208565b935060208501519150808211156200030b57600080fd5b506200031a8582860162000208565b9150509250929050565b600181811c908216806200033957607f821691505b6020821081036200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003b0576000816000526020600020601f850160051c810160208610156200038b5750805b601f850160051c820191505b81811015620003ac5782815560010162000397565b5050505b505050565b81516001600160401b03811115620003d157620003d1620001f2565b620003e981620003e2845462000324565b8462000360565b602080601f831160018114620004215760008415620004085750858301515b600019600386901b1c1916600185901b178555620003ac565b600085815260208120601f198616915b82811015620004525788860151825594840194600190910190840162000431565b5085821015620004715787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004a357634e487b7160e01b600052601160045260246000fd5b92915050565b6109d380620004b96000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806340c10f191161007657806395d89b411161005b57806395d89b4114610183578063a9059cbb1461018b578063dd62ed3e1461019e57600080fd5b806340c10f191461013857806370a082311461014d57600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101e4565b6040516100d891906107bf565b60405180910390f35b6100f46100ef366004610855565b610276565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f461012436600461087f565b610290565b604051601281526020016100d8565b61014b610146366004610855565b6102b4565b005b61010861015b3660046108bb565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100cb6102c2565b6100f4610199366004610855565b6102d1565b6101086101ac3660046108dd565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f390610910565b80601f016020809104026020016040519081016040528092919081815260200182805461021f90610910565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b5050505050905090565b6000336102848185856102df565b60019150505b92915050565b60003361029e8582856102f1565b6102a98585856103c5565b506001949350505050565b6102be8282610470565b5050565b6060600480546101f390610910565b6000336102848185856103c5565b6102ec83838360016104cc565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103bf57818110156103b0576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064015b60405180910390fd5b6103bf848484840360006104cc565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610415576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff8216610465576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102ec838383610614565b73ffffffffffffffffffffffffffffffffffffffff82166104c0576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102be60008383610614565b73ffffffffffffffffffffffffffffffffffffffff841661051c576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff831661056c576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020908152604080832093871683529290522082905580156103bf578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161060691815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff831661064c5780600260008282546106419190610963565b909155506106fe9050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156106d2576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103a7565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661072757600280548290039055610753565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107b291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156107ed578581018301518582016040015282016107d1565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461085057600080fd5b919050565b6000806040838503121561086857600080fd5b6108718361082c565b946020939093013593505050565b60008060006060848603121561089457600080fd5b61089d8461082c565b92506108ab6020850161082c565b9150604084013590509250925092565b6000602082840312156108cd57600080fd5b6108d68261082c565b9392505050565b600080604083850312156108f057600080fd5b6108f98361082c565b91506109076020840161082c565b90509250929050565b600181811c9082168061092457607f821691505b60208210810361095d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8082018082111561028a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212209fb5a11f3b666ec29f33140ce5ccf59fe60c88f4ca5d270e2db3ecf440978d0a64736f6c63430008170033",
        "sourceMap": "122:267:56:-:0;;;157:130;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;217:4;223:6;1963:5:15;:13;217:4:56;1963:5:15;:13;:::i;:::-;-1:-1:-1;1986:7:15;:17;1996:7;1986;:17;:::i;:::-;;1897:113;;241:38:56::1;247:10;259:19;241:5;;;:38;;:::i;:::-;157:130:::0;;122:267;;7722:208:15;-1:-1:-1;;;;;7792:21:15;;7788:91;;7836:32;;-1:-1:-1;;;7836:32:15;;7865:1;7836:32;;;4288:51:64;4261:18;;7836:32:15;;;;;;;;7788:91;7888:35;7904:1;7908:7;7917:5;7888:7;:35::i;:::-;7722:208;;:::o;6272:1107::-;-1:-1:-1;;;;;6361:18:15;;6357:540;;6513:5;6497:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6357:540:15;;-1:-1:-1;6357:540:15;;-1:-1:-1;;;;;6571:15:15;;6549:19;6571:15;;;;;;;;;;;6604:19;;;6600:115;;;6650:50;;-1:-1:-1;;;6650:50:15;;-1:-1:-1;;;;;4797:32:64;;6650:50:15;;;4779:51:64;4846:18;;;4839:34;;;4889:18;;;4882:34;;;4752:18;;6650:50:15;4577:345:64;6600:115:15;-1:-1:-1;;;;;6835:15:15;;:9;:15;;;;;;;;;;6853:19;;;;6835:37;;6357:540;-1:-1:-1;;;;;6911:16:15;;6907:425;;7074:12;:21;;;;;;;6907:425;;;-1:-1:-1;;;;;7285:13:15;;:9;:13;;;;;;;;;;:22;;;;;;6907:425;7362:2;-1:-1:-1;;;;;7347:25:15;7356:4;-1:-1:-1;;;;;7347:25:15;;7366:5;7347:25;;;;5073::64;;5061:2;5046:18;;4927:177;7347:25:15;;;;;;;;6272:1107;;;:::o;14:127:64:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:844;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:64;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:64;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;732:3;725:4;720:2;712:6;708:15;704:26;701:35;698:55;;;749:1;746;739:12;698:55;771:1;762:10;;781:133;795:2;792:1;789:9;781:133;;;883:14;;;879:23;;873:30;852:14;;;848:23;;841:63;806:10;;;;781:133;;;958:1;951:4;946:2;938:6;934:15;930:26;923:37;978:6;969:15;;;;;;146:844;;;;:::o;995:562::-;1094:6;1102;1155:2;1143:9;1134:7;1130:23;1126:32;1123:52;;;1171:1;1168;1161:12;1123:52;1198:16;;-1:-1:-1;;;;;1263:14:64;;;1260:34;;;1290:1;1287;1280:12;1260:34;1313:61;1366:7;1357:6;1346:9;1342:22;1313:61;:::i;:::-;1303:71;;1420:2;1409:9;1405:18;1399:25;1383:41;;1449:2;1439:8;1436:16;1433:36;;;1465:1;1462;1455:12;1433:36;;1488:63;1543:7;1532:8;1521:9;1517:24;1488:63;:::i;:::-;1478:73;;;995:562;;;;;:::o;1562:380::-;1641:1;1637:12;;;;1684;;;1705:61;;1759:4;1751:6;1747:17;1737:27;;1705:61;1812:2;1804:6;1801:14;1781:18;1778:38;1775:161;;1858:10;1853:3;1849:20;1846:1;1839:31;1893:4;1890:1;1883:15;1921:4;1918:1;1911:15;1775:161;;1562:380;;;:::o;2073:543::-;2175:2;2170:3;2167:11;2164:446;;;2211:1;2235:5;2232:1;2225:16;2279:4;2276:1;2266:18;2349:2;2337:10;2333:19;2330:1;2326:27;2320:4;2316:38;2385:4;2373:10;2370:20;2367:47;;;-1:-1:-1;2408:4:64;2367:47;2463:2;2458:3;2454:12;2451:1;2447:20;2441:4;2437:31;2427:41;;2518:82;2536:2;2529:5;2526:13;2518:82;;;2581:17;;;2562:1;2551:13;2518:82;;;2522:3;;;2164:446;2073:543;;;:::o;2792:1345::-;2912:10;;-1:-1:-1;;;;;2934:30:64;;2931:56;;;2967:18;;:::i;:::-;2996:97;3086:6;3046:38;3078:4;3072:11;3046:38;:::i;:::-;3040:4;2996:97;:::i;:::-;3148:4;;3205:2;3194:14;;3222:1;3217:663;;;;3924:1;3941:6;3938:89;;;-1:-1:-1;3993:19:64;;;3987:26;3938:89;-1:-1:-1;;2749:1:64;2745:11;;;2741:24;2737:29;2727:40;2773:1;2769:11;;;2724:57;4040:81;;3187:944;;3217:663;2020:1;2013:14;;;2057:4;2044:18;;-1:-1:-1;;3253:20:64;;;3371:236;3385:7;3382:1;3379:14;3371:236;;;3474:19;;;3468:26;3453:42;;3566:27;;;;3534:1;3522:14;;;;3401:19;;3371:236;;;3375:3;3635:6;3626:7;3623:19;3620:201;;;3696:19;;;3690:26;-1:-1:-1;;3779:1:64;3775:14;;;3791:3;3771:24;3767:37;3763:42;3748:58;3733:74;;3620:201;-1:-1:-1;;;;;3867:1:64;3851:14;;;3847:22;3834:36;;-1:-1:-1;2792:1345:64:o;4350:222::-;4415:9;;;4436:10;;;4433:133;;;4488:10;4483:3;4479:20;4476:1;4469:31;4523:4;4520:1;4513:15;4551:4;4548:1;4541:15;4433:133;4350:222;;;;:::o;4927:177::-;122:267:56;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100be5760003560e01c806340c10f191161007657806395d89b411161005b57806395d89b4114610183578063a9059cbb1461018b578063dd62ed3e1461019e57600080fd5b806340c10f191461013857806370a082311461014d57600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101e4565b6040516100d891906107bf565b60405180910390f35b6100f46100ef366004610855565b610276565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f461012436600461087f565b610290565b604051601281526020016100d8565b61014b610146366004610855565b6102b4565b005b61010861015b3660046108bb565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100cb6102c2565b6100f4610199366004610855565b6102d1565b6101086101ac3660046108dd565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f390610910565b80601f016020809104026020016040519081016040528092919081815260200182805461021f90610910565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b5050505050905090565b6000336102848185856102df565b60019150505b92915050565b60003361029e8582856102f1565b6102a98585856103c5565b506001949350505050565b6102be8282610470565b5050565b6060600480546101f390610910565b6000336102848185856103c5565b6102ec83838360016104cc565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103bf57818110156103b0576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064015b60405180910390fd5b6103bf848484840360006104cc565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610415576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff8216610465576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102ec838383610614565b73ffffffffffffffffffffffffffffffffffffffff82166104c0576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102be60008383610614565b73ffffffffffffffffffffffffffffffffffffffff841661051c576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff831661056c576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020908152604080832093871683529290522082905580156103bf578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161060691815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff831661064c5780600260008282546106419190610963565b909155506106fe9050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156106d2576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103a7565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661072757600280548290039055610753565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107b291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156107ed578581018301518582016040015282016107d1565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461085057600080fd5b919050565b6000806040838503121561086857600080fd5b6108718361082c565b946020939093013593505050565b60008060006060848603121561089457600080fd5b61089d8461082c565b92506108ab6020850161082c565b9150604084013590509250925092565b6000602082840312156108cd57600080fd5b6108d68261082c565b9392505050565b600080604083850312156108f057600080fd5b6108f98361082c565b91506109076020840161082c565b90509250929050565b600181811c9082168061092457607f821691505b60208210810361095d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8082018082111561028a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212209fb5a11f3b666ec29f33140ce5ccf59fe60c88f4ca5d270e2db3ecf440978d0a64736f6c63430008170033",
        "sourceMap": "122:267:56:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2075:89:15;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4294:186;;;;;;:::i;:::-;;:::i;:::-;;;1251:14:64;;1244:22;1226:41;;1214:2;1199:18;4294:186:15;1086:187:64;3145:97:15;3223:12;;3145:97;;;1424:25:64;;;1412:2;1397:18;3145:97:15;1278:177:64;5040:244:15;;;;;;:::i;:::-;;:::i;3003:82::-;;;3076:2;1935:36:64;;1923:2;1908:18;3003:82:15;1793:184:64;295:89:56;;;;;;:::i;:::-;;:::i;:::-;;3300:116:15;;;;;;:::i;:::-;3391:18;;3365:7;3391:18;;;;;;;;;;;;3300:116;2277:93;;;:::i;3611:178::-;;;;;;:::i;:::-;;:::i;3847:140::-;;;;;;:::i;:::-;3953:18;;;;3927:7;3953:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3847:140;2075:89;2120:13;2152:5;2145:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2075:89;:::o;4294:186::-;4367:4;735:10:24;4421:31:15;735:10:24;4437:7:15;4446:5;4421:8;:31::i;:::-;4469:4;4462:11;;;4294:186;;;;;:::o;5040:244::-;5127:4;735:10:24;5183:37:15;5199:4;735:10:24;5214:5:15;5183:15;:37::i;:::-;5230:26;5240:4;5246:2;5250:5;5230:9;:26::i;:::-;-1:-1:-1;5273:4:15;;5040:244;-1:-1:-1;;;;5040:244:15:o;295:89:56:-;357:19;363:3;368:7;357:5;:19::i;:::-;295:89;;:::o;2277:93:15:-;2324:13;2356:7;2349:14;;;;;:::i;3611:178::-;3680:4;735:10:24;3734:27:15;735:10:24;3751:2:15;3755:5;3734:9;:27::i;8990:128::-;9074:37;9083:5;9090:7;9099:5;9106:4;9074:8;:37::i;:::-;8990:128;;;:::o;10664:477::-;3953:18;;;;10763:24;3953:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;10849:17;10829:37;;10825:310;;10905:5;10886:16;:24;10882:130;;;10937:60;;;;;3112:42:64;3100:55;;10937:60:15;;;3082:74:64;3172:18;;;3165:34;;;3215:18;;;3208:34;;;3055:18;;10937:60:15;;;;;;;;10882:130;11053:57;11062:5;11069:7;11097:5;11078:16;:24;11104:5;11053:8;:57::i;:::-;10753:388;10664:477;;;:::o;5657:300::-;5740:18;;;5736:86;;5781:30;;;;;5808:1;5781:30;;;3399:74:64;3372:18;;5781:30:15;3253:226:64;5736:86:15;5835:16;;;5831:86;;5874:32;;;;;5903:1;5874:32;;;3399:74:64;3372:18;;5874:32:15;3253:226:64;5831:86:15;5926:24;5934:4;5940:2;5944:5;5926:7;:24::i;7722:208::-;7792:21;;;7788:91;;7836:32;;;;;7865:1;7836:32;;;3399:74:64;3372:18;;7836:32:15;3253:226:64;7788:91:15;7888:35;7904:1;7908:7;7917:5;7888:7;:35::i;9950:432::-;10062:19;;;10058:89;;10104:32;;;;;10133:1;10104:32;;;3399:74:64;3372:18;;10104:32:15;3253:226:64;10058:89:15;10160:21;;;10156:90;;10204:31;;;;;10232:1;10204:31;;;3399:74:64;3372:18;;10204:31:15;3253:226:64;10156:90:15;10255:18;;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;:35;;;10300:76;;;;10350:7;10334:31;;10343:5;10334:31;;;10359:5;10334:31;;;;1424:25:64;;1412:2;1397:18;;1278:177;10334:31:15;;;;;;;;9950:432;;;;:::o;6272:1107::-;6361:18;;;6357:540;;6513:5;6497:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6357:540:15;;-1:-1:-1;6357:540:15;;6571:15;;;6549:19;6571:15;;;;;;;;;;;6604:19;;;6600:115;;;6650:50;;;;;3112:42:64;3100:55;;6650:50:15;;;3082:74:64;3172:18;;;3165:34;;;3215:18;;;3208:34;;;3055:18;;6650:50:15;2880:368:64;6600:115:15;6835:15;;;:9;:15;;;;;;;;;;6853:19;;;;6835:37;;6357:540;6911:16;;;6907:425;;7074:12;:21;;;;;;;6907:425;;;7285:13;;;:9;:13;;;;;;;;;;:22;;;;;;6907:425;7362:2;7347:25;;7356:4;7347:25;;;7366:5;7347:25;;;;1424::64;;1412:2;1397:18;;1278:177;7347:25:15;;;;;;;;6272:1107;;;:::o;14:607:64:-;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;612:2;542:66;537:2;529:6;525:15;521:88;510:9;506:104;502:113;494:121;;;;14:607;;;;:::o;626:196::-;694:20;;754:42;743:54;;733:65;;723:93;;812:1;809;802:12;723:93;626:196;;;:::o;827:254::-;895:6;903;956:2;944:9;935:7;931:23;927:32;924:52;;;972:1;969;962:12;924:52;995:29;1014:9;995:29;:::i;:::-;985:39;1071:2;1056:18;;;;1043:32;;-1:-1:-1;;;827:254:64:o;1460:328::-;1537:6;1545;1553;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1645:29;1664:9;1645:29;:::i;:::-;1635:39;;1693:38;1727:2;1716:9;1712:18;1693:38;:::i;:::-;1683:48;;1778:2;1767:9;1763:18;1750:32;1740:42;;1460:328;;;;;:::o;1982:186::-;2041:6;2094:2;2082:9;2073:7;2069:23;2065:32;2062:52;;;2110:1;2107;2100:12;2062:52;2133:29;2152:9;2133:29;:::i;:::-;2123:39;1982:186;-1:-1:-1;;;1982:186:64:o;2173:260::-;2241:6;2249;2302:2;2290:9;2281:7;2277:23;2273:32;2270:52;;;2318:1;2315;2308:12;2270:52;2341:29;2360:9;2341:29;:::i;:::-;2331:39;;2389:38;2423:2;2412:9;2408:18;2389:38;:::i;:::-;2379:48;;2173:260;;;;;:::o;2438:437::-;2517:1;2513:12;;;;2560;;;2581:61;;2635:4;2627:6;2623:17;2613:27;;2581:61;2688:2;2680:6;2677:14;2657:18;2654:38;2651:218;;2725:77;2722:1;2715:88;2826:4;2823:1;2816:15;2854:4;2851:1;2844:15;2651:218;;2438:437;;;:::o;3484:279::-;3549:9;;;3570:10;;;3567:190;;;3613:77;3610:1;3603:88;3714:4;3711:1;3704:15;3742:4;3739:1;3732:15",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "decimals()": "313ce567",
        "mint(address,uint256)": "40c10f19",
        "name()": "06fdde03",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.23+commit.f704f362\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the ERC. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MockERC20.sol\":\"MockERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":@upgradeable/safeAccount/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/openzeppelin-contracts/lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xca12be071e48f0378179113989f057819c3c1fe70e73e778fb00c9441768cb61\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://60e10ff5a0dd6e15a89cd7e1c0190ba139772efeb696994933d2e54a23fab6cc\",\"dweb:/ipfs/QmVt9Ndx7AiWq1qtzjS5NXsqzfhfUeEQ7XXcLLQJXFvJtK\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323\",\"dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"src/MockERC20.sol\":{\"keccak256\":\"0xb772ea2735aa2e2ef2ea1baa47539338dc037028bc3c1865bfe59cd94f92d5b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a3beadbd6c61ac44cc0a03511c45f91df5f2b0946d2e67b4d7141b02d86d195e\",\"dweb:/ipfs/QmVGaSyhgUVeQcCstWBsL4WRMAk7CXGpqPYp3R7jSSnsdN\"]}},\"version\":1}",
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
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "symbol",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "allowance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "needed",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InsufficientAllowance"
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
                            "name": "balance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "needed",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InsufficientBalance"
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
                    "name": "ERC20InvalidApprover"
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
                    "name": "ERC20InvalidReceiver"
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
                    "name": "ERC20InvalidSender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidSpender"
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
                            "name": "value",
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
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
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
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
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
                            "name": "account",
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
                    "name": "mint"
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
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
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
                            "name": "value",
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
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "allowance(address,address)": {
                        "details": "See {IERC20-allowance}."
                    },
                    "approve(address,uint256)": {
                        "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
                    },
                    "balanceOf(address)": {
                        "details": "See {IERC20-balanceOf}."
                    },
                    "decimals()": {
                        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
                    },
                    "name()": {
                        "details": "Returns the name of the token."
                    },
                    "symbol()": {
                        "details": "Returns the symbol of the token, usually a shorter version of the name."
                    },
                    "totalSupply()": {
                        "details": "See {IERC20-totalSupply}."
                    },
                    "transfer(address,uint256)": {
                        "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
                    },
                    "transferFrom(address,address,uint256)": {
                        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the ERC. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
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
                "src/MockERC20.sol": "MockERC20"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229",
                "urls": [
                    "bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155",
                    "dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xca12be071e48f0378179113989f057819c3c1fe70e73e778fb00c9441768cb61",
                "urls": [
                    "bzz-raw://60e10ff5a0dd6e15a89cd7e1c0190ba139772efeb696994933d2e54a23fab6cc",
                    "dweb:/ipfs/QmVt9Ndx7AiWq1qtzjS5NXsqzfhfUeEQ7XXcLLQJXFvJtK"
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
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28",
                "urls": [
                    "bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323",
                    "dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR"
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
            "src/MockERC20.sol": {
                "keccak256": "0xb772ea2735aa2e2ef2ea1baa47539338dc037028bc3c1865bfe59cd94f92d5b2",
                "urls": [
                    "bzz-raw://a3beadbd6c61ac44cc0a03511c45f91df5f2b0946d2e67b4d7141b02d86d195e",
                    "dweb:/ipfs/QmVGaSyhgUVeQcCstWBsL4WRMAk7CXGpqPYp3R7jSSnsdN"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "src/MockERC20.sol",
        "id": 50400,
        "exportedSymbols": {
            "Context": [
                4515
            ],
            "ERC20": [
                2931
            ],
            "IERC20": [
                3009
            ],
            "IERC20Errors": [
                1826
            ],
            "IERC20Metadata": [
                3035
            ],
            "MockERC20": [
                50399
            ]
        },
        "nodeType": "SourceUnit",
        "src": "33:356:56",
        "nodes": [
            {
                "id": 50364,
                "nodeType": "PragmaDirective",
                "src": "33:24:56",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".13"
                ]
            },
            {
                "id": 50365,
                "nodeType": "ImportDirective",
                "src": "61:55:56",
                "nodes": [],
                "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
                "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 50400,
                "sourceUnit": 2932,
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "id": 50399,
                "nodeType": "ContractDefinition",
                "src": "122:267:56",
                "nodes": [
                    {
                        "id": 50385,
                        "nodeType": "FunctionDefinition",
                        "src": "157:130:56",
                        "nodes": [],
                        "body": {
                            "id": 50384,
                            "nodeType": "Block",
                            "src": "230:57:56",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 50379,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "247:3:56",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 50380,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "251:6:56",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "247:10:56",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "hexValue": "31303030303030303030303030",
                                                "id": 50381,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "259:19:56",
                                                "subdenomination": "ether",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1000000000000000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000000000000000"
                                                },
                                                "value": "1000000000000"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_1000000000000000000000000000000_by_1",
                                                    "typeString": "int_const 1000000000000000000000000000000"
                                                }
                                            ],
                                            "id": 50378,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2771,
                                            "src": "241:5:56",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 50382,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "241:38:56",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 50383,
                                    "nodeType": "ExpressionStatement",
                                    "src": "241:38:56"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 50374,
                                        "name": "name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 50369,
                                        "src": "217:4:56",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    {
                                        "id": 50375,
                                        "name": "symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 50371,
                                        "src": "223:6:56",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    }
                                ],
                                "id": 50376,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 50373,
                                    "name": "ERC20",
                                    "nameLocations": [
                                        "211:5:56"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 2931,
                                    "src": "211:5:56"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "211:19:56"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 50372,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 50369,
                                    "mutability": "mutable",
                                    "name": "name",
                                    "nameLocation": "183:4:56",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50385,
                                    "src": "169:18:56",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 50368,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "169:6:56",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 50371,
                                    "mutability": "mutable",
                                    "name": "symbol",
                                    "nameLocation": "203:6:56",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50385,
                                    "src": "189:20:56",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 50370,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "189:6:56",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "168:42:56"
                        },
                        "returnParameters": {
                            "id": 50377,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "230:0:56"
                        },
                        "scope": 50399,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 50398,
                        "nodeType": "FunctionDefinition",
                        "src": "295:89:56",
                        "nodes": [],
                        "body": {
                            "id": 50397,
                            "nodeType": "Block",
                            "src": "346:38:56",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 50393,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 50387,
                                                "src": "363:3:56",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 50394,
                                                "name": "_amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 50389,
                                                "src": "368:7:56",
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
                                            "id": 50392,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2771,
                                            "src": "357:5:56",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 50395,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "357:19:56",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 50396,
                                    "nodeType": "ExpressionStatement",
                                    "src": "357:19:56"
                                }
                            ]
                        },
                        "functionSelector": "40c10f19",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "304:4:56",
                        "parameters": {
                            "id": 50390,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 50387,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "317:3:56",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50398,
                                    "src": "309:11:56",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 50386,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "309:7:56",
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
                                    "id": 50389,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "330:7:56",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 50398,
                                    "src": "322:15:56",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 50388,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "322:7:56",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "308:30:56"
                        },
                        "returnParameters": {
                            "id": 50391,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "346:0:56"
                        },
                        "scope": 50399,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 50366,
                            "name": "ERC20",
                            "nameLocations": [
                                "144:5:56"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 2931,
                            "src": "144:5:56"
                        },
                        "id": 50367,
                        "nodeType": "InheritanceSpecifier",
                        "src": "144:5:56"
                    }
                ],
                "canonicalName": "MockERC20",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    50399,
                    2931,
                    1826,
                    3035,
                    3009,
                    4515
                ],
                "name": "MockERC20",
                "nameLocation": "131:9:56",
                "scope": 50400,
                "usedErrors": [
                    1796,
                    1801,
                    1806,
                    1815,
                    1820,
                    1825
                ],
                "usedEvents": [
                    2943,
                    2952
                ]
            }
        ],
        "license": "MIT"
    },
    "id": 56
}



export const ERC20ABI = ERC20Contract["abi"];