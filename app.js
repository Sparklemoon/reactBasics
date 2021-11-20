import React from 'react';
import { ReactDOM } from 'react-dom';


ReactDOM.render(
    React.createElement("ul",{style: {color:"blue"}}, React.createElement("li", null, "hot potatoe")),
    document.getElementById('root')
);