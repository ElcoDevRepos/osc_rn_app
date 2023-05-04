import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable } from 'react-native';

export default EncoderButton = ({ name }) => {

    const button = buttonsAll[name];

    //console.log(button);
    /*
    FROM UTILS
    <CustomButton
        title={button.label}
        id={button.label}
        key={button.address}
        address={button.address}
        argvalue={button.argvalue}
        style={[styles.encoderBtn, styles[button.style]]}
        styleText={[styles.encoderBtnText, styles[button.styleText]]}
    >
    </CustomButton>
    */

    return (
        <Pressable
            style={[localstyles.encoderBtn, styles[button.style]]}
            address={button.address}
            onPressIn={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 1 }])
            }}
            onPressOut={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 0 }])
            }}>
            <Text style={[localstyles.encoderBtnText, styles[button.styleText]]}>{button.label}</Text>
        </Pressable>

    );

};

const localstyles = StyleSheet.create({

    encoderBtn: {
        width: '100%',
        height: '100%',

        borderRadius: 0,
        backgroundColor: '#141630',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    encoderBtnText: {
        color: '#ffffff'
    },

})
