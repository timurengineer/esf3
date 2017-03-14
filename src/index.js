import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app';

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
