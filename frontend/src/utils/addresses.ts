

export const contractAddresses = {
    51: { //XDC
        "BlockEstate": "0x08845C33822e772bC534A3E0EF55e5f9782A0c43",
        "PaymentToken": "0xaD4642839321c98754ddcB2aAa1ba073E57E952F"
    }, 
    84532: { //BASE
        "BlockEstate": "0xBd6ed8BAF6904a97c3125f1b6920f268fF39Aaa2",
        "PaymentToken": "0xb0744daaf6E84855C3551CDfbCec5892A8892B86"
    },
    59140: {//LINEA
        "BlockEstate": "0xBd6ed8BAF6904a97c3125f1b6920f268fF39Aaa2",
        "PaymentToken": "0xb0744daaf6E84855C3551CDfbCec5892A8892B86"
    }
} as {[chainId: number]: {[contractName: string]: string}};

export const scanUrls = {
    51: "https://explorer.apothem.network/"
} as {[chainId: number]: string};