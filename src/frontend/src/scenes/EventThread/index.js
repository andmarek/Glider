import React from 'react';
import styles from './style.css';

class EventThread extends React.Component {
    render(){
        var res = this.props.location.state.address.split(" ");
        var link = "https://www.google.com/maps/place/";
        var i;
        for (i = 0; i < res.length; i++){
            link = link + "+" + res[i];
        }
        return(
            <div className="EventThreadWrapper">
                <div className="EventThread-Header">
                    <div className="top">
                        <div className="title">
                            <p>{this.props.location.state.title}</p>
                        </div>
                        <div className="tags">
                            <p>{this.props.location.state.tags}</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <p>organizer: Bill</p>
                    </div>
                    <div className="description">
                        <p>Description go here</p>
                    </div>
                    <div className="location">
                        <a href={link} target="_blank">{this.props.location.state.address}</a>
                    </div>
                </div>
                <div className="attendees-list">
                    <div className="num-attendees">
                        <p>attendees: {this.props.location.state.attendees}</p>
                    </div> 
                </div>
            </div>
        )
    }
}

export default EventThread