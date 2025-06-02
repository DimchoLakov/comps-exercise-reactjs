import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <StrictMode>
        <App />
    </StrictMode>)