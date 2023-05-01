import React from 'react';
import { memo } from 'react';
import {
    View,
    Text,
} from 'react-native';
 

import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import tcpOsc from '../../services/tcpOsc';
import { Pressable } from 'react-native';
import { createSelector } from 'reselect'


export default DisplaysButton = memo(() => {

    const button = buttonsAll['displays'];

    console.log("DISPLAYS BUTTON IS RENDERING 3:");

    return (
        <View
            style={[styles.btn, styles[button.style]]}
            address={button.address}
            argvalue={button.argvalue}
            onPressIn={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 1 }])
            }}
            onPressOut={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 0 }])
            }}>
            <Text style={[styles.btnText, styles[button.styleText]]}>{button.label}</Text>
        </View>

    );

}, () => true);

function shallowEqual(prevProps, nextProps) {
    //return prevProps.name == nextProps.name;
    return true;
}

// export default DisplaysButton = memo(DisplaysButtonBase, shallowEqual);




