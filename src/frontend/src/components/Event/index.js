import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import styles from './style.css';

const Event = (props) => {
    var res = props.address.split(" ");
    var link = "https://www.google.com/maps/place/";
    var i;
    for (i = 0; i < res.length; i++){
        link = link + "+" + res[i];
    }
    return(
        <div className="event-container">
            <nav>
                <div className="event-title">
                    <Link to={{pathname: '/Event/'+props.id, state: props}}>
                        <div className={"link"+ (props.location.pathname === "/" ? " active": "")}>{props.title}</div>
                    </Link>
                </div>
            </nav>
            <div className="event-date">
                <p>{props.date}</p>
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

export default withRouter(Event)