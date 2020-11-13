import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const title = 'React with Webpack and Babel';
ReactDom.render(<App title={title} />, document.getElementById("root"));
module.hot.accept();
