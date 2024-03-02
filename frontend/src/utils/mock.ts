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
        description: 'Experience the beauty of Denver, CO, USA with this charming house card. Located in the heart of the Rocky Mountains, this property offers breathtaking views, outdoor adventures, and a vibrant city life. Whether youre skiing in the winter or hiking in the summer, Denver has something for everyone.',
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
        description: 'Discover the charm of Denver, CO, USA with this cozy house card. Situated in a peaceful neighborhood, this property offers a relaxing retreat while still being close to the city\'s attractions. Explore nearby parks, restaurants, and cultural landmarks during your stay.',
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
        description: 'Enjoy the comforts of home in Denver, CO, USA with this stylish house card. Located in a bustling neighborhood, this property offers easy access to shopping, dining, and entertainment options. Relax in modern amenities and explore the vibrant city life during your stay.',
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
        description: 'Escape to the paradise of Ilhabela, SP, Brazil with this stunning house card. Nestled amidst lush greenery and pristine beaches, this property offers a serene retreat away from the hustle and bustle of city life. Immerse yourself in nature, relax on beautiful shores, and experience the magic of Ilhabela.',
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
        description: 'Indulge in luxury at Ilhabela, SP, Brazil with this exquisite house card. Surrounded by tropical beauty and crystal-clear waters, this property offers a luxurious escape for discerning travelers. Experience world-class amenities, breathtaking views, and unparalleled hospitality during your stay.',
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
        description: 'Immerse yourself in the excitement of New York City, NY, USA with this luxurious house card. Located in the heart of Manhattan, this property offers easy access to world-famous attractions, shopping districts, and entertainment venues. Experience the energy of the city that never sleeps during your stay.',
        pictures: [
            pic3_1,
            pic3_2,
            pic3_3,
            pic3_4,
            pic3_5,
            pic3_6,
        ]
    },
];



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
        id: 1,
        title: 'Trip 1',
        image: pic1_0,
        location: 'Denver, CO, USA',
        price: 100,
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        status: 'Upcoming'
    },
    {
        id: 2,
        title: 'Trip 2',
        image: pic2_1,
        location: 'New York City, NY, USA',
        price: 120,
        startDate: '2024-04-10',
        endDate: '2024-04-15',
        status: 'Completed'
    },
    {
        id: 3,
        title: 'Trip 3',
        image: pic4_1,
        location: 'Chicago, IL, USA',
        price: 90,
        startDate: '2024-06-15',
        endDate: '2024-06-20',
        status: 'Completed'
    },
];

export const fundingData = [
    {
        id: 1,
        title: 'Holding 1',
        // image: imovel1,
        location: 'New York City, NY, USA',
        price: 1000000,
        raised: 800000,
        status: 'Available', //Available, Reserved, Funded
        description: 'Explore the vibrant city of New York City, NY, USA with this luxurious holding. Located in the heart of the bustling city, this property offers easy access to iconic landmarks such as Times Square, Central Park, and the Statue of Liberty. Indulge in the rich culture, diverse cuisine, and endless entertainment options that New York City has to offer.',
        holders: [
            { name: 'John Doe',raised:3000, tokens: 50, nfts: 3 },
            { name: 'Alice Smith',raised:39000 , tokens: 30, nfts: 2 },
            { name: 'Emily Johnson',raised:9000, tokens: 20, nfts: 0 }
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
        raised: 100000,
        status: 'Funded',
        description: 'Immerse yourself in the sunny vibes of Los Angeles, CA, USA with this exquisite holding. Nestled in the heart of Hollywood, this property offers stunning views of the iconic Hollywood Sign, Griffith Observatory, and the Pacific Ocean. Experience the glamour of celebrity life, explore world-class attractions, and relax on beautiful beaches.',
        holders: [
            { name: 'Michael Johnson',raised:3000, tokens: 60, nfts: 4 },
            { name: 'Sophia Brown',raised:3000, tokens: 40, nfts: 2 },
            { name: 'William Davis',raised:3000, tokens: 20, nfts: 1 }
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
        raised: 700000,
        status: 'Funded',
        description: 'Discover the charm of the Windy City with this elegant holding in Chicago, IL, USA. Situated in the heart of downtown Chicago, this property offers breathtaking views of the iconic skyline, Millennium Park, and Lake Michigan. Delight in world-renowned architecture, renowned cuisine, and vibrant cultural attractions.',
        holders: [
            { name: 'Emma Wilson',raised:3000, tokens: 40, nfts: 2 },
            { name: 'James Miller',raised:3000, tokens: 30, nfts: 1 },
            { name: 'Olivia Taylor',raised:3000, tokens: 10, nfts: 0 }
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
