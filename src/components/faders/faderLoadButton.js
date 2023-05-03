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

export default FaderLoadButton = ({ num }) => {

    const buttonName = 'fader' + num + '_load';
    const styleName = 'FADER' + num + '_STYLE';
    const labelName = 'FADER' + num + '_LABEL';

    const style = useSelector(state => state.fadersReducer[styleName].style, shallowEqual);
    const label = useSelector(state => state.fadersReducer[labelName].label, shallowEqual);

    const button = buttonsAll[buttonName];

    return (

        <Pressable
            style={[styles.btn, styles[style]]}
            address={button.address}
            onPressIn={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 1 }])
            }}
            onPressOut={() => {
                tcpOsc.sendMessage(button.address, [{ type: "i", value: 0 }])
            }}>
            <Text style={[styles.btnText, styles[button.styleText]]}>{label}</Text>
        </Pressable>
 
    );
    
}
