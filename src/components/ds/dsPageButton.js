import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable } from 'react-native';

export default DSPageButton = ({ name, module }) => {

    const style = useSelector(state => state.directSelectReducer['ds_page'].style);
    const label = useSelector(state => state.directSelectReducer['ds' + module + "_page"].label);
    const button = buttonsAll['ds' + module + "_page"];

    return (

                    <View
                        style={[styles['btnlabel'], styles[style]]}
        >
                        <Text style={[styles.labeltext, styles[button.styleText]]}>PAGE</Text>
                        <Text style={[styles.labeltext, styles[button.styleText]]}>{label}</Text>
                    </View>
 
    );
    
}
