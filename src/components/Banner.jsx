import React from 'react';

function Banner ({isHomePage})  {
    const backgroundImage = isHomePage ? "url(../img/banner.png)" : "url(../img/banner-about.png)";
    const bannerText = isHomePage ? "Chez vous, partout et ailleurs" : "";
    return (
        <div className="banner" style={{ backgroundImage }}>
           <h2>{bannerText}</h2>
        </div>
    );
};

export default Banner;