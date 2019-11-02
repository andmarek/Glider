import React from 'react';
import stlyes from './style.css';

const Event = (props) => {
    console.log(props);
    return(
        <div className="event-container">
            <div className="event-info">
                <div className="event-title">
                    <a>The good event</a>
                </div>
                <div className="event-footer">
                    <div className="event-location">
                        <a>2700 Lincoln Way</a>
                    </div>
                    <div className="event-attendees">
                        <a>Attendees: 365</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event