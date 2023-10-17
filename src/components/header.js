import React from 'react';

import troll from '../images/trollface.png';
const Header = () => {
    return (
            <header className="header">
                <img 
                    src = {troll} alt='Logo'
                    className="header--image"
                />
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">Meme's by vishvraj</h4>
            </header>
    )
}

export default Header;