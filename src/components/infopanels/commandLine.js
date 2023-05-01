import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default CommandLine = () => {

    const commandLineLabel = useSelector(state => state.buttonsReducer['command' + 'Line'].label);
    const commandLineStyle = useSelector(state => state.buttonsReducer.commandLine.style);

        return (
            <View style={[styles.info, styles[commandLineStyle]]}>
                <Text style={[styles.infoText, styles[buttonsAll['commandLine']['styleText']]]}>{commandLineLabel}</Text>
            </View>

        );
    
}
