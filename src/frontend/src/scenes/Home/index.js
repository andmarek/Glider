import React from 'react';
import styles from './style.css';
import Event from '../../components/Event/index.js';
import EventThread from '../EventThread/index.js'

const Home = () => {
    return(
        <div className="home-page">
            <Event date={'Nov 1, 2019'} title={'The Good Event'} tags={"Outdoor, swimming, birthday, free"} address={'2700 Lincoln Way'} attendees={365}/>
        </div>
    );
}

export default Home