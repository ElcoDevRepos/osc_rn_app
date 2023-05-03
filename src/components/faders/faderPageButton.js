import React from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export default FaderPageButton = ({ num }) => {

    const buttonName = 'fader' + num + '_load';
    const styleName = 'FADER' + num + '_STYLE';
    const labelName = 'FADER' + num + '_LABEL';

    const button = buttonsAll['fader_page_select'];

    return (

        <Pressable
            style={[styles.btn, buttonsAll['fader_page_select'].style]}
            address={button.address}
            onPressIn={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 1 }])
            }}
            onPressOut={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 0 }])
            }}>
            <Text style={[styles.btnText, styles[button.styleText]]}>PAGE</Text>
        </Pressable>
 
    );
    
}
