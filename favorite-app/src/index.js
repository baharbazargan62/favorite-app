import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import { FavoritesContextProvider } from './store/favorites-contxt';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
    < BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesContextProvider>,
);

