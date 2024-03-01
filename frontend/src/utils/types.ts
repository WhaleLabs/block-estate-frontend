import { DateRange } from "react-day-picker"

export type PropertyType = {
    id: number;
    title: string;
    image: string;
    location: string;
    price: number;
    rating: number;
    pictures: string[];
};

export type LocationType = {
    label: string;
    value: string;
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
    holders: string[]; // have to Change to an array of objects
    totalTokens: number;
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

export interface DatePickerProps {
    className?: string;
    date?: DateRange;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}