import React, {Component, Fragment} from 'react';
import {Nav} from '../components/Nav/Nav';
import {Main} from '../components/Main/Main';
import {Footer} from '../components/Footer/Footer';

class Body extends Component{

    render(){

        return(
            <Fragment>
                <Nav brand="Martin Pszczola" byline="Web & Mobile App Developer"/>
                <Main/>
                <Footer brand="Martin Pszczola"/>
            </Fragment>

        )   
    }
}

export default Body;