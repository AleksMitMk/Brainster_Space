import React from 'react';
import FirstSpacePart from './FirstSpacePart/FirstSpacePart';
import OurSpace from './OurSpace/OurSpace';
import SpaceKitchen from './SpaceKitchen/SpaceKitchen';
import './EventsSpace.css';
import Offer from './Offer/Offer';
import EventHost from './EventHost/EventHost';

function EventsSpace(){
    return(
        <div className="eventsSpace">
            <FirstSpacePart />
            <OurSpace/>
            <SpaceKitchen/>
            <Offer/>
            <EventHost/>
        </div>
    )
}
export default EventsSpace;