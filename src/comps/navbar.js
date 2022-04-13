import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='projectName' style={{float: 'left' , padding: '5px'}}>Gainz Club</div>
            <a href="https://twitter.com/GainzClubNFT"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
            <a href="https://www.instagram.com/gainzclubnft/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
            {/* <a href="https://discord.gg/eTYbrQvBTV"><FontAwesomeIcon icon={faDiscord} size="2x"/></a> */}
            <a href="https://www.linkedin.com/in/jake-owen/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
        </nav>
    );
};

export default Navbar;
