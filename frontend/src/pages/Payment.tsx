import { useNavigate } from 'react-router-dom';

export function Payment() {

    const navigator = useNavigate();

    return (
        <div className='w-[100vw] h-[100vh] text-primary-text p-12'>
            PAYMENT
            <button className='p-2 m-6 bg-primary-400' onClick={() => navigator(-1)}>Back</button>
        </div>
    );
};