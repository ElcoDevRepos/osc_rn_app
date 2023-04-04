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

import CustomButton from '../components/button';
import buttons from '../helpers/buttons';
export default class Remote extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButtons() {
        const buttonObjects = [];
        buttons.forEach((button) => {
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