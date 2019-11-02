import React from 'react';
import styles from './style.css';

const Event = (props) => {
    var res = props.address.split(" ");
    var link = "https://www.google.com/maps/place/";
    var i;
    for (i = 0; i < res.length; i++){
        link = link + "+" + res[i];
    }
    console.log(res);
    return(
        <div className="event-container">
            <div className="event-title">
                <p>{props.title}</p>
            </div>
            <div className="event-tags">
                <p>{props.tags}</p>
            </div>
            <div className="event-footer">
                <div className="event-location">
                    <a href={link} target="_blank">{props.address}</a>
                </div>
                <div className="event-attendees">
                    <p>Attendees: {props.attendees}</p>
                </div>
            </div>
        </div>
    );
}

export default Event