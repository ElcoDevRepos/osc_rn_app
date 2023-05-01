import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity
} from 'react-native';
import { Provider } from 'react-redux';
import createStore from 'redux';
//import store from './src/redux/configureStore';
import MainApp from './MainApp';

const initialState = {
    test : "This is a test"
}

const reducer = (state = initialState, action) => {
    
    return state;

}

const store = createStore(reducer);

//console.log(store);


export default function App() {

    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
  );
}

