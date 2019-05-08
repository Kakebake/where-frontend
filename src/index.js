import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './state';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

render(<Root store={configureStore()} />, document.getElementById('root'));

registerServiceWorker();
