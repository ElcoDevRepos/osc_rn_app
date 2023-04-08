import React from 'react';
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

import tcpOsc from '../../services/tcpOsc';
import {
    NativeEventEmitter
  } from 'react-native';
import CustomButton from '../components/button';
// import buttons from '../helpers/buttons';
import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import updater from '../../services/updater';

export default class Remote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsAll: buttonsAll
          };
        // All Messages from EOS Will come here. 
        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', async (oscMessage) => {
            console.log("remote message: ", oscMessage);
            updater.alterSourceData(oscMessage);
            this.setState(buttonsAll);
        });
    }

    renderButton(name) {
        const buttonObject = [];
        button = this.state.buttonsAll[name];
        switch (button.functype) {
            case 'info':
                buttonObject.push(
                    (
                        <CustomButton
                            title={button.label}
                            id={button.label}
                            key={button.address}
                            style={[styles.info, styles[button.style]]}
                            styleText={[styles.infoText, styles[button.styleText]]}
                            onPress={() => {
                                
                            }}
                            onPressIn={() => {

                            }}
                            onPressOut={() => {

                            }}>
                        </CustomButton>
                    )
                )
                break;

            case 'btn':
                buttonObject.push(
                    (
                        <CustomButton
                            title={button.label}
                            id={button.label}
                            key={button.address}
                            style={[styles.btn, styles[button.style]]}
                            styleText={[styles.btnText, styles[button.styleText]]}
                            onPress={() => {
                                tcpOsc.sendMessage(button.address, button.argvalue);
                            }}
                            onPressIn={() => {

                            }}
                            onPressOut={() => {

                            }}>
                        </CustomButton>
                    )
                )
                break;
        }// switch
        
        return buttonObject;
    }

    render() {
        return (
            <View style={styles.pageContainer}>
            </View> // pageContainer

        );
    }
}
