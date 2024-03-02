import imovel1 from '../assets/imovel1.png';
import pic1_0 from '../assets/imovel1.png';
// Pictures for property 2
import pic2_1 from '../assets/imovel2_1.png';
import pic2_2 from '../assets/imovel2_2.png';
import pic2_3 from '../assets/imovel2_3.png';
import pic2_4 from '../assets/imovel2_4.png';
import pic2_5 from '../assets/imovel2_5.png';
import pic2_6 from '../assets/imovel2_6.png';
// Pictures for property 3
import pic3_1 from '../assets/imovel3_1.png';
import pic3_2 from '../assets/imovel3_2.png';
import pic3_3 from '../assets/imovel3_3.png';
import pic3_4 from '../assets/imovel3_4.png';
import pic3_5 from '../assets/imovel3_5.png';
import pic3_6 from '../assets/imovel3_6.png';
// Pictures for property 4
import pic4_1 from '../assets/imovel4_1.png';
import pic4_2 from '../assets/imovel4_2.png';
import pic4_3 from '../assets/imovel4_3.png';
import pic4_4 from '../assets/imovel4_4.png';
import pic4_5 from '../assets/imovel4_5.png';
import pic4_6 from '../assets/imovel4_6.png';

export const tokensData = [
    { value: 'Token1', label: 'Token 1' },
    { value: 'Token2', label: 'Token 2' },
    { value: 'Token3', label: 'Token 3' }
];

export const chainsData = [
    { value: 'Chain1', label: 'Chain 1' },
    { value: 'Chain2', label: 'Chain 2' },
    { value: 'Chain3', label: 'Chain 3' }
];

export const locationData = [
    { value: 'Denver, CO, USA', label: 'Denver, CO, USA' },
    { value: 'New York City, NY, USA', label: 'New York City, NY, USA' },
    { value: 'Ilhabela, SP, Brazil', label: 'Ilhabela, SP, Brazil' },
    { value: 'Los Angeles, CA, USA', label: 'Los Angeles, CA, USA' },
    { value: 'Chicago, IL, USA', label: 'Chicago, IL, USA' },
    { value: 'San Francisco, CA, USA', label: 'San Francisco, CA, USA' },
    { value: 'Seattle, WA, USA', label: 'Seattle, WA, USA' },
]

export const cardData = [
    {
        id: 1,
        title: 'House Card 1',
        image: pic1_0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic2_1,
            pic2_2,
            pic2_3,
            pic2_4,
            pic2_5,
            pic2_6,
        ]
    },
    {
        id: 2,
        title: 'House Card 2',
        image: pic1_0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic2_1,
            pic2_2,
            pic2_3,
            pic2_4,
            pic2_5,
            pic2_6,
        ]
    },
    {
        id: 3,
        title: 'House Card 3',
        image: pic1_0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic2_1,
            pic2_2,
            pic2_3,
            pic2_4,
            pic2_5,
            pic2_6,
        ]
    },
    {
        id: 4,
        title: 'House Card 4',
        image: pic1_0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic2_1,
            pic2_2,
            pic2_3,
            pic2_4,
            pic2_5,
            pic2_6,
        ]
    },
    {
        id: 5,
        title: 'House Card 5',
        image: pic1_0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic2_1,
            pic2_2,
            pic2_3,
            pic2_4,
            pic2_5,
            pic2_6,
        ]
    },
    {
        id: 6,
        title: 'House Card 6',
        image: pic4_1,
        location: 'Ilhabela, SP, Brazil',
        price: 100,
        rating: 4.5,
        pictures: [
            pic4_1,
            pic4_2,
            pic4_3,
            pic4_4,
            pic4_5,
            pic4_6,
        ]
    },
    {
        id: 7,
        title: 'House Card 7',
        image: pic4_1,
        location: 'Ilhabela, SP, Brazil',
        price: 100,
        rating: 4.5,
        pictures: [
            pic4_1,
            pic4_2,
            pic4_3,
            pic4_4,
            pic4_5,
            pic4_6,
        ]
    },
    {
        id: 8,
        title: 'House Card 8',
        image: pic4_1,
        location: 'Ilhabela, SP, Brazil',
        price: 100,
        rating: 4.5,
        pictures: [
            pic4_1,
            pic4_2,
            pic4_3,
            pic4_4,
            pic4_5,
            pic4_6,
        ]
    },
    {
        id: 9,
        title: 'House Card 9',
        image: pic3_1,
        location: 'New York City, NY, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic3_1,
            pic3_2,
            pic3_3,
            pic3_4,
            pic3_5,
            pic3_6,
        ]
    },
    {
        id: 10,
        title: 'House Card 10',
        image: pic3_1,
        location: 'New York City, NY, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic3_1,
            pic3_2,
            pic3_3,
            pic3_4,
            pic3_5,
            pic3_6,
        ]
    },
]


export const reservationData = [
    {
        id: 1,
        reserveData: {
            pricePerNight: 800,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 2,
        reserveData: {
            pricePerNight: 900,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 3,
        reserveData: {
            pricePerNight: 1000,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 4,
        reserveData: {
            pricePerNight: 1100,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 5,
        reserveData: {
            pricePerNight: 1200,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 6,
        reserveData: {
            pricePerNight: 1200,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 7,
        reserveData: {
            pricePerNight: 1200,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 8,
        reserveData: {
            pricePerNight: 1200,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 9,
        reserveData: {
            pricePerNight: 1200,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
    {
        id: 10,
        reserveData: {
            pricePerNight: 1200,
            nights: 5,
            cleaningFee: 235,
            serviceFee: 615,
            total: 4848,
            checkIn: '3/19/2024',
            checkOut: '3/24/2024',
            guests: 3
        }
    },
]

export const tripData = [
    {
        title: 'Trip 1',
        image: imovel1,
        location: 'Denver, CO, USA',
        price: 100,
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        status: 'Upcoming'
    },
    {
        title: 'Trip 2',
        image: imovel1,
        location: 'Denver, CO, USA',
        price: 120,
        startDate: '2024-04-10',
        endDate: '2024-04-15',
        status: 'Completed'
    },
    {
        title: 'Trip 3',
        image: imovel1,
        location: 'New York City, NY, USA',
        price: 150,
        startDate: '2024-05-20',
        endDate: '2024-05-25',
        status: 'Upcoming'
    },
    {
        title: 'Trip 4',
        image: imovel1,
        location: 'Los Angeles, CA, USA',
        price: 90,
        startDate: '2024-06-15',
        endDate: '2024-06-20',
        status: 'Completed'
    },
    {
        title: 'Trip 5',
        image: imovel1,
        location: 'Chicago, IL, USA',
        price: 110,
        startDate: '2024-07-05',
        endDate: '2024-07-10',
        status: 'Upcoming'
    },
    {
        title: 'Trip 6',
        image: imovel1,
        location: 'San Francisco, CA, USA',
        price: 130,
        startDate: '2024-08-12',
        endDate: '2024-08-17',
        status: 'Completed'
    },
    {
        title: 'Trip 7',
        image: imovel1,
        location: 'Seattle, WA, USA',
        price: 95,
        startDate: '2024-09-25',
        endDate: '2024-09-30',
        status: 'Upcoming'
    },
];

export const fundingData = [
    {
        id: 1,
        title: 'Holding 1',
        // image: imovel1,
        location: 'New York City, NY, USA',
        price: 1000000,
        status: 'Available', //Available, Reserved, Funded
        // startDate: '2024-03-01',
        // endDate: '2024-03-05',
        // rating: 4.5,
        // tokens: 100,
        // numNFTs: 5,
        holders: [
            { name: 'John Doe', tokens: 50, nfts: 3 },
            { name: 'Alice Smith', tokens: 30, nfts: 2 },
            { name: 'Emily Johnson', tokens: 20, nfts: 0 }
        ],
        totalTokens: 500,
        pictures: [
            pic2_1,
            pic2_2,
            pic2_3,
            pic2_4,
            pic2_5,
            pic2_6,
        ]
    },
    {
        id: 2,
        title: 'Holding 2',
        location: 'Los Angeles, CA, USA',
        price: 1200000,
        status: 'Funded',
        holders: [
            { name: 'Michael Johnson', tokens: 60, nfts: 4 },
            { name: 'Sophia Brown', tokens: 40, nfts: 2 },
            { name: 'William Davis', tokens: 20, nfts: 1 }
        ],
        totalTokens: 600,
        pictures: [
            pic3_1,
            pic3_2,
            pic3_3,
            pic3_4,
            pic3_5,
            pic3_6,
        ]
    },
    {
        id: 3,
        title: 'Holding 3',
        location: 'Chicago, IL, USA',
        price: 900000,
        status: 'Funded',
        holders: [
            { name: 'Emma Wilson', tokens: 40, nfts: 2 },
            { name: 'James Miller', tokens: 30, nfts: 1 },
            { name: 'Olivia Taylor', tokens: 10, nfts: 0 }
        ],
        totalTokens: 400,
        pictures: [
            pic4_1,
            pic4_2,
            pic4_3,
            pic4_4,
            pic4_5,
            pic4_6,
        ]
    }
    
];


export const proposalData = [
    {
        id: 1,
        owner: 'John Doe',
        timestamp: '2024-03-01',
        image: 'https://source.unsplash.com/random',
        title: 'Proposal 1',
        type: 'sell',
        amount: 500000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere nulla nec quam posuere, a vehicula turpis lacinia. Cras id erat in ligula volutpat ultricies a id dui. Duis interdum nisl nec ipsum ullamcorper, a facilisis est dignissim. Nullam at nulla nec nunc dictum sodales ut nec lectus.',
        status: 'Pending'
    },
    {
        id: 2,
        owner: 'Alice Smith',
        timestamp: '2024-03-05',
        image: 'https://source.unsplash.com/random',
        title: 'Proposal 2',
        type: 'bailout',
        amount: 800000,
        description: 'Sed suscipit bibendum ligula id placerat. Aliquam ut urna nec arcu rhoncus mattis. Maecenas eleifend sodales neque, et placerat nisi sollicitudin in. Nam lacinia luctus nulla eu placerat. Donec lobortis aliquet ipsum, eu iaculis lacus faucibus nec. Phasellus sodales, arcu at consectetur scelerisque, justo orci tincidunt libero, vel eleifend justo nulla nec nisi.',
        status: 'Approved'
    },
    {
        id: 3,
        owner: 'Emily Johnson',
        timestamp: '2024-03-10',
        image: 'https://source.unsplash.com/random',
        title: 'Proposal 3',
        type: 'sell',
        amount: 700000,
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris varius dui quis convallis gravida. Aliquam vel ligula nec magna sodales mattis. Vestibulum posuere erat in mauris scelerisque, sed convallis elit congue. Cras pharetra interdum enim id tristique.',
        status: 'Rejected'
    }
];
