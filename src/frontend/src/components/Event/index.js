import React from 'react';
import stlyes from './style.css';

const Event = (props) => {
    return(
        <div className="event-container">
            <div className="event-title">
                <p>{props.title}</p>
            </div>
            <div className="event-footer">
                <div className="event-location">
                    <p>{props.address}</p>
                </div>
                <div className="event-attendees">
                    <p>Attendees: {props.attendees}</p>
                </div>
            </div>
        </div>
    );
}

export default Event