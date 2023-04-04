import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
import osc from 'react-native-osc';
import tcpOsc from './services/tcpOsc';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NativeEventEmitter
} from 'react-native';
import CustomButton from './src/components/button';
import Toolbar from './src/components/toolbar';
import { CheckBox, Dialog, ListItem } from '@rneui/base';
import SettingsDialog from './src/components/settingsDialog';
import Remote from './src/pages/remote';
import Focus from './src/pages/focus';

export default function App() {
  const [isRemoteShown, setIsRemoteShown] = useState(true);
  const [isFocusShown, setIsFocusShown] = useState(false);

  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isConsolesExpanded, setIsConsolesExpanded] = useState(false);

  const [isConnected, setIsConnected] = useState(false);
  const openSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  

  const toggleRemoteView = event => {const eventEmitter = new NativeEventEmitter(tcpOsc);
    console.log(eventEmitter.listenerCount('GotMessage'));setIsRemoteShown(true)};
  const toggleFocusView = event => {setIsFocusShown(true)};

  const hideAllViews = () => {
    const eventEmitter = new NativeEventEmitter(tcpOsc);
    console.log(eventEmitter.listenerCount('GotMessage'));
    if (eventEmitter.listenerCount('GotMessage') > 0) {
      eventEmitter.removeAllListeners('GotMessage');
    }
    console.log(eventEmitter.listenerCount('GotMessage'));

    setIsRemoteShown(false);
  }
  /**
   * Use these connection methods to connect and send to the EOS Server as preferred
   */
  /**
   * TCP Connection and send
   */
  if (!isConnected) {
    try {
      tcpOsc.startConnection(3037, '192.168.50.119');
      setIsConnected(true);
    } catch (error) {
      
    }
    
  }
  
  /** 
   * UDP Connection and Send 
   * */

  //osc.createClient("192.168.50.119", 8000);
  //osc.sendMessage("/eos/ping", ['0']);

  return (
    <SafeAreaProvider>
      <HeaderRNE
        backgroundColor='#000'
        centerComponent={{ text: 'OSC', style: styles.heading }}
      />
      <Toolbar 
        openSettings={openSettings}
        toggleRemoteView={toggleRemoteView}
        toggleFocusView={toggleFocusView}
        hideAllViews={hideAllViews}
      ></Toolbar>
      {
        isRemoteShown && (
          <Remote></Remote>
        )
      }
      {
        isFocusShown && (
          <Focus></Focus>
        )
      }
      <SettingsDialog openSettings={openSettings} isSettingsVisible={isSettingsVisible} isConsolesExpanded={isConsolesExpanded} setIsConsolesExpanded={setIsConsolesExpanded}></SettingsDialog>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
