

export const contractAddresses = {
    51: { //XDC
        "BlockEstate": "0x69801C169647Ad125707Dd40096D4EDC20Bb521a",
        "PaymentToken": "0x536527976E98E253B424a3655E695D144E343341"
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