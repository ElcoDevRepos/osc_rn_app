import React from 'react';
import { memo, useState } from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native';
 
import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import tcpOsc from '../../services/tcpOsc';

function StaticButtonBase({ name }){
    console.log("STATIC BUTTON IS RENDERING : " + name);
    const button = buttonsAll[name];
    const [ isPress, setIsPress ] = useState(false);
    
    return (
        <Pressable
            style={({pressed}) => [styles.btn, pressed ? styles[button.stylePressed] : styles[button.style]]}
            address={button.address}
            argvalue={button.argvalue}
            onHideUnderlay = {() => setIsPress(false)}
            onShowUnderlay = {() => setIsPress(true)}
            onPressIn={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 1 }])
            }}
            onPressOut={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 0 }])
            }}
            >
            <Text style={[styles.btnText, styles[button.styleText]]}>{button.label}</Text>
        </Pressable>

    );

};

export default StaticButton = memo(StaticButtonBase);


