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
import buttons from '../helpers/buttons';
export default class Remote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: buttons
          };
        // All Messages from EOS Will come here. 
        // They still need to be decoded. 
        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', (oscMessage) => {
            console.log("message: ", oscMessage);
            this.alterButtonData();
        });
    }

    alterButtonData() {
        // You can alter your buttons data here.
        // Then call the setState to update the buttons value
        
        //buttons[0].title = "Test";
        this.setState(buttons);
    }

    renderButtons() {
        const buttonObjects = [];
        this.state.buttons.forEach((button) => {
            buttonObjects.push(
                (
                    <CustomButton title={button.title} id={button.attribute} key={button.attribute} onPress={() => {
                        tcpOsc.sendMessage(button.attribute, button.arguments);
                    }}></CustomButton>
                )
            )
        })

        return buttonObjects;
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row'
            }}>
                {this.renderButtons()}
            </View>
        );
    }
}