import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './ItsMe/Home';
import About from './ItsMe/About';
import Contact from './ItsMe/Contact';
import Service from './ItsMe/Service';
import NavBar from './ItsMe/NavBar';
import Footer from './ItsMe/Footer';

const App =()=>{
    return(
        <>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Redirect to="/"/>
        </Switch>
        <Footer />
       
        </>
    )
};

export default App;