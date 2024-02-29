import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos, MdAttachMoney } from "react-icons/md";
import { PropertyType, ReservationType } from '../utils/types';
import { MdLocationOn, MdDateRange, MdPerson } from 'react-icons/md';

export function PaymentSection({loading, reservation, property} : 
    {loading: boolean, reservation: ReservationType | null, property: PropertyType | null}) {

    const navigator = useNavigate();

    // Calculate total price for stay
    const totalPrice = reservation ? reservation.pricePerNight * reservation.nights : 0;

    return (
        <div className=" bg-transparent rounded-xl overflow-hidden">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <></>
            :
            <>
            {(reservation && property) && (
                <div className='flex flex-row justify-between items-stretch'>

                    {/* Confirm data about the payment */}

                    <div className='min-w-min w-96 px-6 py-12 rounded-xl shadow-xl backdrop-blur-lg bg-white/30 rounded-xl'>
                        <button className='p-3 bg-[rgba(255,255,255,0.1)] text-white rounded-full shadow-xl' onClick={() => navigator(-1)}><MdArrowBackIos/></button>
                        <div className='flex flex-col space-y-4'>
                            <h1 className='py-6 text-2xl font-semibold text-white'>Confirm and Pay</h1>
                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                <MdLocationOn className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                <div className="">{property.location}</div>
                            </div>
                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                <MdDateRange className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                <div className="">{reservation.checkIn} - {reservation.checkOut}</div>
                            </div>
                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                <MdPerson className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                <div className="">{reservation.guests} guests</div>
                            </div>
                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] text-white p-3 rounded-full shadow-sm">
                                <MdAttachMoney className="text-white text-xl mr-2 rounded-full shadow-xl" />
                                <div className="">{totalPrice} <span className='ml-2 text-sm italic'>(total value)</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction interface here */}

                    <div className='min-w-min mt-60 w-96 px-6 py-6 rounded-xl shadow-xl backdrop-blur-lg bg-white/30 rounded-xl'>
                    <div className='flex flex-col space-y-4'>
                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] border-[1px] border-white text-white p-3 rounded-full shadow-sm">
                                <div className="">Select the Blockchain</div>
                            </div>
                            <div className="flex items-center bg-[rgba(255,255,255,0.1)] border-[1px] border-white text-white p-3 rounded-full shadow-sm">
                                <div className="">Select the Token</div>
                            </div>
                            <button 
                                className="w-full bg-primary-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-primary-700 transition-colors shadow-xl"
                                onClick={() => navigator("/")}
                            >
                                Reserve
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </>
            }
        </div>
    );
};