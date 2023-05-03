import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  View
} from 'react-native';

import {
  NativeEventEmitter
} from 'react-native';



import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import MainApp from './MainApp';




const globalTest = () => {
    console.log("GLOBAL TEST");
}

export default function App() {

//

//console.log(variableName);
        
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
  );
}

