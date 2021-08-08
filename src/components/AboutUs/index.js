import React from 'react';
const rafikaLink = 'https://github.com/RafikaAT';
const polinaLink = 'https://github.com/Poligera';
const fpLink = 'https://getfutureproof.co.uk/'


const AboutUs = () => 
  <div id='about-us'>
    <p> We are <a href={polinaLink}><strong>Polina Moore</strong></a> and <a href={rafikaLink}><strong>Rafika Turemis.</strong></a></p>
    <p>This website was created for practice of React.JS fundamentals <br></br> (<a href={fpLink}><i><u>futureproof Morris Cohort</u></i></a>, LAP 3, August 2021)</p>
  </div>;

export default AboutUs;
