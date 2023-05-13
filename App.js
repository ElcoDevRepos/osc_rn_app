import { ExpoStatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  View
} from 'react-native';

import {
  NativeEventEmitter
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import { RootSiblingParent } from 'react-native-root-siblings';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import MainApp from './MainApp';


export default class App extends React.Component {
        constructor(props) {
        super(props);

        StatusBar.setHidden(true);
    }

  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
//

//console.log(variableName);


    
render(){
    return (
        <Provider store={store}>
            <RootSiblingParent>
                <MainApp />
            </RootSiblingParent>
        </Provider>
  );
  }
}

