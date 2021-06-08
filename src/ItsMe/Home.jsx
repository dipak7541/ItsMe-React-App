import React from 'react';
import {NavLink} from 'react-router-dom';
import homeImages from '../Images/homeImages.jpg'
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
            name="Best business Adviser"
            imgsrc={homeImages}
            visit="/service"
            btname="Get Started"
            />
        </>
    )
};

export default Home;