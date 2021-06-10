import React from 'react';
import homeImages from '../Images/homeImages.jpg'
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
            name="Best Business Adviser"
            imgsrc={homeImages}
            visit="/service"
            btname="Get Started"
            />
        </>
    )
};

export default Home;