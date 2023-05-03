import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Pressable } from 'react-native';

export default DSFlexiButton = ({ name, module }) => {

    const button = buttonsAll[name];
    //eos/ds/4/macro/1/20
    const style = useSelector(state => state.directSelectReducer['ds_Flexi'].style, shallowEqual);
    const label = useSelector(state => state.directSelectReducer['ds_Flexi'].label, shallowEqual);
    
    const pressAction = () => {
        //ds.setAppState will request the module.
        app.ds.setAppState(module, "flexi");
    }

    return (

        <Pressable
            style={[styles.btn, styles[style]]}
            address={button.address}
            onPress={() => {
                pressAction()
            }}>
            <Text style={[styles.btnText, styles[button.styleText]]}>{label}</Text>
        </Pressable>
 
    );
    
}
