import React from 'react';
import '../../App.css';
import './Section.css';
import {Button} from '../Button/Button';

function Section() {
    return (
        <div className='section-container'>
            <h1>ADVENTURE AWAITS</h1>
            <>What are you waiting for?</>
            <div className='section-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER
                    <i className='far fa-play-circle'/>
                </Button>

            </div>
        </div>
    )
};

export default Section;
