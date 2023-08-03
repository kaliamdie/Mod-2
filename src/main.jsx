import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(<Router><App /></Router>);