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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

// import LinearGradient from 'react-native-linear-gradient';
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
import FocusEdit from './src/pages/focusEdit';
import PlaybackEdit from './src/pages/playbackEdit';
import DirectSelectEdit from './src/pages/directSelectEdit';
import DSSelectionScreen from './src/components/ds/dsSelectionScreen';

// APPLICATION
import app from './src/functions/app';

// STYLES
import styles from './src/helpers/styles';

// import './src/helpers/appState';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

import { useSelector, useDispatch } from 'react-redux';



if (typeof global.app.ds.requestDS === 'undefined') {
    // During Development this is causing crashes on hot reload
    require('./src/functions/dsFunctions.js');
}

export default MainApp = () => {
    
    const dispatch = useDispatch();

    app.dispatch = dispatch;
        
    
    useEffect(() => {
    // useEffect waits for the component to be mounted before running
    // On App load, read from local storage and store app config/state
    // Anything in here is fired on component mount.
        
        //app.getAppConfig();
        initApp();

        return () => {
            
        // Anything in here is fired on component unmount.
        }

  }, [])

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


       // FOR DEVELOPEMENT ONLY.  REMOVE FOR PRODUCTION
       // RESET THE APP STATE
       // app.updateAppState(app.appState);

       // FOR DEVELOPEMENT ONLY.  REMOVE FOR PRODUCTION
       // RESET THE APP CONFIG
       // app.appConfig = app.createNewAppConfig();
       // app.updateAppConfig(app.appConfig);
        

       // On App load, read from local storage and store app config/state
       

       
       // On App load, read from local storage and store app config/state
        app.getAppState().then(
            function (appStateFromStorage) {
                
                // console.log("appState : Returned from Storage" + JSON.stringify(app.appState));

                //console.log("appConfig : Returned from Storage" + JSON.stringify(app.appConfig));

                //console.log("Updated App State", app.appState)

                app.getAppConfig().then(
                    function () {

                        // console.log("appState : Returned from Storage" + JSON.stringify(app.appState));

                        //console.log("appConfig : Returned from Storage" + JSON.stringify(app.appConfig));

                        //console.log("Updated App State", app.appState)

                        app.populateLayouts();

                    }
                );
            },
            function (error) {
               
            }
        );

       


        // GATHER IP ADDRESS AND PORT INFORMATION FROM LOCAL STORAGE HERE AND TRY TO CONNECT

        if (!isConnected) {

            //app.dispatch = dispatch;

            const eventEmitter = new NativeEventEmitter(tcpOsc);

            try {

                if (tcpOsc.isConnected) {
                    tcpOsc.destroyConnection();
                }

                tcpOsc.startConnection(3037, '192.168.50.119');

                setIsConnected(true);


                if (eventEmitter.listenerCount('GotMessage') > 0) {

                    eventEmitter.removeAllListeners('GotMessage');
                }

                eventEmitter.addListener('GotMessage', (oscMessage) => {

                    app.updater(oscMessage, dispatch);

                })

            } catch (error) {

            }

            // THE CONNECTION IS A MAYBE.   TRY TO PING EOS
            setTimeout(() => {
                try {
                    console.log("===== SENDING EOS PING =====");


                    if (tcpOsc.sendMessage("/eos/ping", [{ type: "i", value: 1 }])) {
                        console.log("RETURN IS TRUE");
                        //setIsConnected(true);
                    } else {
                        console.log("RETURN IS FALSE");
                    };


                }

                catch (error) {

                    console.log("===== EOS PING FAILED =====");

                }
            }, 1000);



        }

        
            // Wait for App to catch up 
        setTimeout(() => {
            if (1) {
                // Get Direct Selects 
                app.ds.requestDS();
                app.faders.requestFaders();
               // app.disableAllEncoders();
            }
            }, 2000);
        

    }


    app.dispatch({ type: "LAYOUT_SAVE_VIEW", payload: { bool: false } });
    app.dispatch({ type: "LAYOUT_LABEL_VIEW", payload: { bool: false } });
    app.dispatch({ type: "LAYOUT_DELETE_VIEW", payload: { bool: false } });



  
  
    // const PageStack = createBottomTabNavigator();

     const PageStack = createNativeStackNavigator();

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
                        headerShown: false,
                        animation: 'none',
                        tabBarVisible: false,
                        tabBarStyle: { display: 'none' },
                        lazy: false,
                        optimizationsEnabled: false
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

                                       // app.appState.currentPage = currentPage;
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
                            <PageStack.Screen name="FocusEdit" component={FocusEdit} />
                            <PageStack.Screen name="DirectSelectEdit" component={DirectSelectEdit} />
                            <PageStack.Screen name="PlaybackEdit" component={PlaybackEdit} />
                            <PageStack.Screen name="DSSelectionScreen" component={DSSelectionScreen} options={{ presentation: 'transparentModal' }} />
                        </PageStack.Group>
                    </PageStack.Navigator>

                </Drawer>

            </SafeAreaProvider>

        </NavigationContainer>
        
  );
}

