import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_resets.scss';
import './styles/_typography.scss';
import App from './App';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
