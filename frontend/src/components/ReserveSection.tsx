import { useNavigate } from 'react-router-dom';
// import { DatePicker, Space } from 'antd';
import { ReservationType } from '../utils/types';

export function ReserveSection({id, reservation, loading} : 
    {id: string, reservation: ReservationType | null, loading: boolean}) {

    // Calculate total price for stay
    const totalPrice = reservation ? reservation.pricePerNight * reservation.nights : 0;

    const navigator = useNavigate();

    return (
        // <div className="max-w-96 border-[1px] border-gray-100 shadow-2xl p-6 bg-transparent rounded-xl overflow-hidden cursor-pointer">
        //     {loading ? 
        //     // Refazer o loading depois com algo um pouco melhor
        //     <></>
        //     :
        //     <div className="h-[200px]">
        //         BBBBBBBBBBBBBBB
        //     </div>
        //     }
        // </div>

        <div className="min-w-min w-96 rounded-xl shadow-xl border-[1px] border-gray-200 p-6">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <></>
            :
            <>
                {reservation && (
                    <>
                        <div className="text-2xl font-semibold mb-4">${reservation.pricePerNight} <span className="text-sm font-normal">night</span></div>
                        <div className="flex justify-between border p-2 rounded-t-xl">
                            <div className="text-sm text-primary-text px-2">
                                <div>check-in</div>
                                <div className="font-semibold">{reservation.checkIn}</div>
                            </div>
                            <div className="text-sm text-primary-text px-2">
                                <div>checkout</div>
                                <div className="font-semibold">{reservation.checkOut}</div>
                            </div>
                        </div>

                        {/* <Space direction="vertical" style={{ width: '100%' }}>
                            <DatePicker.RangePicker status="warning" style={{ width: '100%' }} />
                        </Space> */}

                        <div className="flex justify-between border items-center mb-4 p-4 rounded-b-xl">
                            <div className="text-sm text-primary-text">guests</div>
                            <div className="font-semibold">{reservation.guests} guests</div>
                        </div>

                        <button 
                            className="w-full bg-primary-600 text-white text-lg font-semibold py-2 px-4 rounded-lg mb-2 hover:bg-primary-700 transition-colors"
                            onClick={() => navigator(`/checkout/${id}`)}
                        >
                            Reserve
                        </button>

                        <div className="text-center text-gray-600 text-sm mb-6">
                        You won't be charged yet
                        </div>

                        <div className="space-y-2">
                        <div className="flex justify-between">
                            <div>${reservation.pricePerNight} x {reservation.nights} nights</div>
                            <div>${totalPrice}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Cleaning fee</div>
                            <div>${reservation.cleaningFee}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Service fee</div>
                            <div>${reservation.serviceFee}</div>
                        </div>
                        </div>

                        <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between font-semibold">
                            <div>Total before taxes</div>
                            <div>${reservation.total}</div>
                        </div>
                        </div>
                    </>
                )}
            </>
            }
        </div>
    );
};