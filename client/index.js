/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';
import {Provider} from 'react-redux';

import configureStore from './src/store';

const store = configureStore();

const Application = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Application);
