import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../Images/web.jpg';

import Common from './Common';

const About = () => {
    return (
        <>
            <Common
            name="To Know us Better"
            imgsrc={web}
            visit="/contact"
            btname="Contact Now"
            />
        </>
    )
};

export default About;