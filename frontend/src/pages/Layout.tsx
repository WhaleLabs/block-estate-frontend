import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/Header';
// import { useScrollDirection } from "../../hooks/use-scroll-direction";

export default function Layout() {

    // const scrollDirection = useScrollDirection(50);

    // const hiddenClass = (scrollDirection === 'down') ? 'opacity-0' : '';

    return (
        <div className='w-[100vw] md:h-[100vh] md:flex md:flex-col lg:h-[100vh] lg:flex lg:flex-col overflow-y-auto overflow-x-hidden relative'>
            <AppHeader/>
            <Outlet/>
        </div>
    )
}