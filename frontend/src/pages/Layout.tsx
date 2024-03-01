import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/Header';
import { LocationType } from '../utils/types';

export default function Layout({filteredLocation, setFilteredLocation} : {filteredLocation: LocationType[], setFilteredLocation: React.Dispatch<React.SetStateAction<LocationType[]>>}) {

    return (
        <div className='relative w-[100vw] md:h-[100vh] md:flex md:flex-col lg:h-[100vh] lg:flex lg:flex-col overflow-y-auto overflow-x-hidden relative'>
            <AppHeader filteredLocation={filteredLocation} setFilteredLocation={setFilteredLocation}/>
            <Outlet/>
        </div>
    )
}