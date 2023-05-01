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

function StaticButtonBase({ name }){

    const button = buttonsAll[name];

    console.log("STATIC BUTTON IS RENDERING : " + name);

    return (
        <Pressable
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
        </Pressable>

    );

};

export default StaticButton = memo(StaticButtonBase);


