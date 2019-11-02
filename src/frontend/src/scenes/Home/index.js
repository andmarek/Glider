import React from 'react';
import stlyes from './style.css';
import Event from '../../components/Event/index.js';

const Home = () => {
    return(
        <div className="home-page">
            <Event title={'The Good Event'} address={'2700 Lincoln Way'} attendees={365}/>
        </div>
    );
}

export default Home