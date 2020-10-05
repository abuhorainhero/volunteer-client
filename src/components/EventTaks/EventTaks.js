import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App'
import EventCard from '../EventCard/EventCard';
import Header from '../Header/Header';

const EventTaks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-beach-73677.herokuapp.com/volunteerEvents?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container">
            <div className="row">
                {
                    events.map(event => <EventCard key={event._id} eventInfo={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default EventTaks;