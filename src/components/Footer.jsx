import React from 'react';
import "../styles/footer.scss"

function Footer()  {
    return (
        <div className='footer'>
            <div className='logo-footer'>
                <img src="./img/logo_footer_kasa.png" alt="logo de Kasa" />
            </div>
            <div className='footer-text'>
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
};

export default Footer;