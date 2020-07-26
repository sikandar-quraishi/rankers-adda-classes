import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';

import config from './config';
import { persistor, store } from './store';
import App from './app';
import LoadingScreen from './components/LoadingScreen';




const app = (
    <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));