import React from 'react';

const Footer = () =>{

    const year = new Date().getFullYear();
    return(
        <>
            <Footer>
                <p> Copyright © {year} </p>
            </Footer>
        </>
    );
};

export default Footer;