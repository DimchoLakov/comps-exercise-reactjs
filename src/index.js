import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <StrictMode>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </StrictMode>)