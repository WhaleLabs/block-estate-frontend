import imovel1 from '../assets/imovel1.png';
import pic0 from '../assets/imovel1.png';
import pic1 from '../assets/imovel2_1.png';
import pic2 from '../assets/imovel2_2.png';
import pic3 from '../assets/imovel2_3.png';
import pic4 from '../assets/imovel2_4.png';
import pic5 from '../assets/imovel2_5.png';
import pic6 from '../assets/imovel2_6.png';

export const cardData = [
    {
        id: 1,
        title: 'House Card 1',
        image: pic0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
    {
        id: 2,
        title: 'House Card 2',
        image: pic0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
    {
        id: 3,
        title: 'House Card 3',
        image: pic0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
    {
        id: 4,
        title: 'House Card 4',
        image: pic0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
    {
        id: 5,
        title: 'House Card 5',
        image: pic0,
        location: 'Denver, CO, USA',
        price: 100,
        rating: 4.5,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
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

export const holdingData = [
    {
        id: 1,
        title: 'Holding 1',
        image: imovel1,
        location: 'New York City, NY, USA',
        price: 1000000,
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        status: 'Available',
        rating: 4.5,
        tokens: 100,
        numNFTs: 5,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
    {
        id: 2,
        title: 'Holding 2',
        image: imovel1,
        location: 'Los Angeles, CA, USA',
        price: 1200000,
        startDate: '2024-04-10',
        endDate: '2024-04-15',
        status: 'Rented',
        rating: 4.8,
        tokens: 120,
        numNFTs: 3,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
    {
        id: 3,
        title: 'Holding 3',
        image: imovel1,
        location: 'Chicago, IL, USA',
        price: 900000,
        startDate: '2024-05-20',
        endDate: '2024-05-25',
        status: 'Available',
        rating: 4.2,
        tokens: 80,
        numNFTs: 7,
        pictures: [
            pic1,
            pic2,
            pic3,
            pic4,
            pic5,
            pic6,
        ]
    },
];
