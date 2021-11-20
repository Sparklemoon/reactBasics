import React from 'react';
import { ReactDOM } from 'react-dom';


ReactDOM.render(
    React.createElement("ul",{style: {color:"blue"}}, "Hello"),
    document.getElementById('root')
);

// React.createElement() method takes the three arguments type , props ,children.