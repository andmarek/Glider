import React from 'react';
import styles from './style.css';

class Postevent extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const rawdata = new FormData(event.target);
        var tags = rawdata.get('tags').split(", ");
        const data = {
            eventName: rawdata.get('title'),
            eventTags: tags,
            eventDate: rawdata.get('date'),
            eventAttendees: [],
            eventAddress: rawdata.get('address')
        }
        /*
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
        */
        console.log(data);
      }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" />

                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" />

                <label htmlFor="tags">Tags</label>
                <input id="tags" name="tags" type="text" />

                <button>Send data!</button>
            </form>
        );
    }
}

export default Postevent