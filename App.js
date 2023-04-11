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
import DrawerContent from './src/components/drawerContent';

import Remote from './src/pages/remote';
import Focus from './src/pages/focus';
import OscLog from './src/pages/osclog';
import updater from './services/updater';
import styles from './src/helpers/styles';
import FacePanel from './src/pages/facePanel';
import Encoders from './src/pages/encoders';
import DirectSelects from './src/pages/directSelects';
import Playback from './src/pages/playback';
import Drawer from 'react-native-drawer'

export default function App() {
  const [isRemoteShown, setIsRemoteShown] = useState(true);
  const [isFocusShown, setIsFocusShown] = useState(false);
  const [isFacePanel, setIsFacePanelShown] = useState(false);
  const [isEncodersShown, setIsEncodersShown] = useState(false);
  const [isDirectSelectsShown, setIsDirectSelectsShown] = useState(false);
  const [isPlaybackShown, setIsPlaybackShown] = useState(false);

  const [isOscLogShown, setIsOscLogShown] = useState(false);

  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isConsolesExpanded, setIsConsolesExpanded] = useState(false);

  const [isConnected, setIsConnected] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openSettings = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };



  const toggleRemoteView = event => {
    const eventEmitter = new NativeEventEmitter(tcpOsc);
    console.log(eventEmitter.listenerCount('GotMessage')); setIsRemoteShown(true)
  };
  const toggleFocusView = event => { setIsFocusShown(true) };
  const toggleFacePanel = event => { setIsFacePanelShown(true) };
  const toggleEncoders = event => { setIsEncodersShown(true) };
  const toggleDirectSelects = event => { setIsDirectSelectsShown(true) };
  const togglePlayback = event => { setIsPlaybackShown(true) };

  const toggleOscLogView = event => { setIsOscLogShown(true) };

  const hideAllViews = () => {
    const eventEmitter = new NativeEventEmitter(tcpOsc);
    if (eventEmitter.listenerCount('GotMessage') > 0) {
      eventEmitter.removeAllListeners('GotMessage');
    }
    setIsRemoteShown(false);
    setIsFocusShown(false);
    setIsOscLogShown(false);
    setIsFacePanelShown(false);
    setIsEncodersShown(false);
    setIsDirectSelectsShown(false);
    setIsPlaybackShown(false);
  }

  useEffect(() => {
    console.log(isDrawerOpen);
    // On App load, read from local storage and store app config/state
    updater.getAppConfig();
    updater.getAppState();
  }, [])

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

  /*
        <HeaderRNE
      backgroundColor='#000'
      centerComponent={{ text: 'OSC', style: styles.heading }}
    />
  */

  /** 
   * UDP Connection and Send 
   * */

  //osc.createClient("192.168.50.119", 8000);
  //osc.sendMessage("/eos/ping", ['0']);

  return (
    <SafeAreaProvider style={styles.header}>
      <Drawer
        ref={(ref) => this._drawer = ref}
        open={isDrawerOpen}
        openDrawerOffset={0.7}
        content={<DrawerContent />}     
        tapToClose={true}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        onOpen={() => {
          setIsDrawerOpen(true);
        }}
      >

        <Toolbar
          openSettings={openSettings}
          toggleRemoteView={toggleRemoteView}
          toggleFocusView={toggleFocusView}
          toggleOscLogView={toggleOscLogView}
          toggleFacePanel={toggleFacePanel}
          toggleDirectSelects={toggleDirectSelects}
          togglePlayback={togglePlayback}
          toggleEncoders={toggleEncoders}
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
        {
          isFacePanel && (
            <FacePanel></FacePanel>
          )
        }
        {
          isEncodersShown && (
            <Encoders></Encoders>
          )
        }
        {
          isDirectSelectsShown && (
            <DirectSelects></DirectSelects>
          )
        }
        {
          isPlaybackShown && (
            <Playback></Playback>
          )
        }
        {
          isOscLogShown && (
            <OscLog></OscLog>
          )
        }
      </Drawer>

    </SafeAreaProvider>
  );
}

const styles2 = StyleSheet.create({
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
