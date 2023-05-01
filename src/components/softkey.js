import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import tcpOsc from '../../services/tcpOsc';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable } from 'react-native';

export default Softkey = ({ num }) => {

    const softkeyLabel = useSelector(state => state.buttonsReducer['softkey_' + num].label);
    const button = buttonsAll['softkey_' + num];

    console.log(button);

    return (        
            <Pressable
                style={[styles.btn, styles[button.style]]}
                address={button.address}
                argvalue={button.argvalue}
                onPressIn={(data) => {
                    tcpOsc.sendMessage(button.address, [{ type: "i", value: 1 }])
                }}
                onPressOut={(data) => {
                    tcpOsc.sendMessage(button.address, [{ type: "i", value: 0 }])
                }}>
                <Text style={[styles.btnText, styles[button.styleText]]}>{softkeyLabel}</Text>
            </Pressable>

        );
    
}
