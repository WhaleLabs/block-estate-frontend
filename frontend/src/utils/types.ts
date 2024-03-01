export type PropertyType = {
    id: number;
    title: string;
    image: string;
    location: string;
    price: number;
    rating: number;
};

export type HoldingType = {
    id: number;
    title: string;
    image: string;
    location: string;
    price: number;
    startDate: string;
    endDate: string;
    status: string;
    rating: number;
    tokens: number;
    numNFTs: number;
    pictures: string[];
};

export type ReservationType = {
    pricePerNight: number;
    nights: number;
    cleaningFee: number;
    serviceFee: number;
    total: number;
    checkIn: string;
    checkOut: string;
    guests: number;
};