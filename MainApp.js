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

// REACT NAVIGATION
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Drawer from 'react-native-drawer';

import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NativeEventEmitter
} from 'react-native';
import Header from './src/components/header/headerMain';
import { CheckBox, Dialog, ListItem } from '@rneui/base';
import SettingsDialog from './src/components/settingsDialog';
import DrawerContent from './src/components/drawerContent';

// PAGES
import Remote from './src/pages/remote';
import Focus from './src/pages/focus';
import FacePanel from './src/pages/facePanel';
import Encoders from './src/pages/encoders';
import DirectSelects from './src/pages/directSelects';
import Playback from './src/pages/playback';
import OscLog from './src/pages/osclog';

// MODALS AND POPUPS
import ColorPicker from './src/pages/colorPicker';
import EncoderEdit from './src/pages/encoderEdit';
import DSSelectionScreen from './src/components/ds/dsSelectionScreen';

// APPLICATION
import './src/functions/app';

// STYLES
import styles from './src/helpers/styles';

import './src/helpers/appState';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

import { useSelector, useDispatch } from 'react-redux';

import app from './src/functions/app';

export default function MainApp() {

    const dispatch = useDispatch();

    app.dispatch = dispatch;
    /*
  const [isRemoteShown, setIsRemoteShown] = useState(true);
  const [isFocusShown, setIsFocusShown] = useState(false);
  const [isFacePanel, setIsFacePanelShown] = useState(false);
  const [isEncodersShown, setIsEncodersShown] = useState(false);
  const [isDirectSelectsShown, setIsDirectSelectsShown] = useState(false);
  const [isPlaybackShown, setIsPlaybackShown] = useState(false);

  const [isOscLogShown, setIsOscLogShown] = useState(false);
  */
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isConsolesExpanded, setIsConsolesExpanded] = useState(false);

  const [isConnected, setIsConnected] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openSettings = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };



  /*
  const toggleRemoteView = event => {
    setIsRemoteShown(true)
    };

  const toggleFocusView = event => { setIsFocusShown(true) };
  const toggleFacePanel = event => { setIsFacePanelShown(true) };
  const toggleEncoders = event => { setIsEncodersShown(true) };
  const toggleDirectSelects = event => { setIsDirectSelectsShown(true) };
  const togglePlayback = event => { setIsPlaybackShown(true) };
  const toggleOscLogView = event => { setIsOscLogShown(true) };


  }
  */

    //console.log("This is MAIN APP ", app.appState);

    const hideAllViews = () => {
        setIsRemoteShown(false);
        setIsFocusShown(false);
        setIsOscLogShown(false);
        setIsFacePanelShown(false);
        setIsEncodersShown(false);
        setIsDirectSelectsShown(false);
        setIsPlaybackShown(false);
    }
    
    //console.log("ATTEMPTING TO UPDATE APP STATE");
    const initApp = () => {

        // FOR DEVELOPEMENT ONLY.  REMOVE FOR PRODUCTION
       // app.appState.console = 1;
       // app.updateAppState(app.appState);

        // On App load, read from local storage and store app config/state
        app.getAppState().then(
            function (appStateFromStorage) {
                /* code if successful */
                console.log("MainApp : Returned from Storage" + appStateFromStorage)

                console.log("Updated App State", app.appState)

            },
            function (error) {
                /* code if some error */
            }
        );


        // Wait for App to catch up 
        setTimeout(() => {
            // Get Direct Selects 
            app.ds.requestDS();
            app.faders.requestFaders();
            }, 2000);
        

    }

    if (!isConnected) {
        

        //app.dispatch = dispatch;

        const eventEmitter = new NativeEventEmitter(tcpOsc);
        try {
            tcpOsc.startConnection(3037, '192.168.50.119');

            setIsConnected(true);


            if (eventEmitter.listenerCount('GotMessage') > 0) {

                eventEmitter.removeAllListeners('GotMessage');
            }

            eventEmitter.addListener('GotMessage', async (oscMessage) => {

                app.updater(oscMessage, dispatch);

            })

        } catch (error) {

        }

    }

    useEffect(() => {
    // useEffect waits for the component to be mounted before running
    // On App load, read from local storage and store app config/state
      app.getAppConfig();
      initApp();

  }, [])



    


  /**
   * Use these connection methods to connect and send to the EOS Server as preferred
   */
  /**
   * TCP Connection and send
   */




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
  
  
    const PageStack = createBottomTabNavigator();

    const MyTheme = {
        dark: true,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'rgba(0, 0, 0, 0)',
            card: 'rgb(0, 0, 0, 0.3)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
        },
    };

    return (
        <NavigationContainer theme={ MyTheme }>
            <SafeAreaProvider style={styles.header}>
            
                <Drawer
                    type="overlay"
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

                    <Header openSettings={openSettings} />

                    <PageStack.Navigator initialRouteName="Remote" screenOptions={{
                        headerShown: false, animation: 'none', tabBarVisible: false, tabBarStyle: { display: 'none' }
                    }}
                        screenListeners={{
                            state: (e) => {
                                // Do something with the state
                                //console.log('state changed', e.data);
                                let currentPage = e.data.state.routeNames[e.data.state.index];
                                
                                switch (currentPage) {
                                    case "Remote":
                                    case "Focus":
                                    case "FacePanel":
                                    case "Encoders":
                                    case "DirectSelects":
                                    case "Playback":
                                    case "OscLog":

                                        app.appState.currentPage = currentPage;
                                        break;
                                    default:
                                        break;
                                }

                            },
                        }}
                    >
                        <PageStack.Group>
                            <PageStack.Screen name="Remote" component={Remote} />
                            <PageStack.Screen name="Focus" component={Focus} />
                            <PageStack.Screen name="FacePanel" component={FacePanel} />
                            <PageStack.Screen name="Encoders" component={Encoders} />
                            <PageStack.Screen name="DirectSelects" component={DirectSelects} />
                            <PageStack.Screen name="Playback" component={Playback} />
                            <PageStack.Screen name="OscLog" component={OscLog} />
                        </PageStack.Group>
                        <PageStack.Group screenOptions={{
                            presentation: 'transparentModal'
}}>
                            <PageStack.Screen name="ColorPicker" component={ColorPicker} screenOptions={{
                                presentation: 'transparentModal'
                            }} />
                            <PageStack.Screen name="EncoderEdit" component={EncoderEdit} />
                            <PageStack.Screen name="DSSelectionScreen" component={DSSelectionScreen} options={{ presentation: 'transparentModal' }} />
                        </PageStack.Group>
                    </PageStack.Navigator>

                </Drawer>

            </SafeAreaProvider>

        </NavigationContainer>
        
  );
}

