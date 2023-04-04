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


export default function App() {
  const [isRemoteShown, setIsRemoteShown] = useState(false);
  const [isFocusShown, setIsFocusShown] = useState(false);

  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isConsolesExpanded, setIsConsolesExpanded] = useState(false);

  const openSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };
  const eventEmitter = new NativeEventEmitter(osc);
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    console.log("message: ", oscMessage);
  });

  const toggleRemoteView = event => {setIsRemoteShown(true)};
  const toggleFocusView = event => {setIsFocusShown(true)};

  const hideAllViews = () => {
    setIsRemoteShown(false);
  }
  /**
   * Use these connection methods to connect and send to the EOS Server as preferred
   */
  /**
   * TCP Connection and send
   */
  //tcpOsc.startConnection(3037, '192.168.50.119');

  //tcpOsc.sendMessage('/eos/ping', ['0']);

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
