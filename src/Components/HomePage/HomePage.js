import React from 'react';
import Overlay from './Overlay/Overlay';
import ZaNas from './ZaNas/ZaNas';
import Education from './Education/Education';
import EventsHome from './EventsHome/EventsHome';
import Coworking from './Coworking/Coworking';
import SpaceEvent from './SpaceEvent/SpaceEvent';
import Partners from './Partners/Partners';

function HomePage (){
    return(
        <div className="homePage">
            {/* <NavbarBr /> */}
            <Overlay />
            <ZaNas/>
            <Education/>
            <EventsHome/>
            <Coworking/>
            <SpaceEvent/>
            <Partners/>
        </div>
    )
}
export default HomePage;