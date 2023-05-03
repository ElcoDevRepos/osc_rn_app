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
import { useNavigation } from '@react-navigation/native';

export default DSSelectButton = ({ name, module}) => {

    const navigation = useNavigation();

    const dsstyle = useSelector(state => state.directSelectReducer['ds' + module + '_style'].style, shallowEqual);
    const label = useSelector(state => state.directSelectReducer['ds' + module + "_" + name].label, shallowEqual);
    const button = buttonsAll['ds' + module + "_" + name];

    //console.log("DS MODULE: " + module + " NUM: " + name + " IS RERENDERING");

    return (

                    <Pressable
                        style={[styles.btn, styles[dsstyle]]}
                        address={button.address}
                        onPress={() => {
                            navigation.navigate('DSSelectionScreen', { module : module});
                        }}>
                        <Text style={[styles.btnText, styles[button.styleText]]}>{label}</Text>
                    </Pressable>
 
    );
    
}
