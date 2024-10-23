
import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleCounter from './component/SimpleCounter';
import '../styles/index.css';

let counter = 0;
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(four, three, two, one);
    //render your react application
    counter++;
    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />)
}, 1000);


