import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import logo from './logo.svg';
import './music.css';
import BootstrapCarousel from './BootstrapCarousel';
function Music() {
    return (
        <div className="Music">
            <BootstrapCarousel></BootstrapCarousel>
        </div>
    )
}

export default Music;