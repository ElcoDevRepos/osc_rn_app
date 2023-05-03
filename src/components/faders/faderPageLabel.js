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

export default FaderPageLabel = ({ name }) => {

    const faderPage = useSelector(state => state.fadersReducer["FADER_PAGE"].label, shallowEqual);

    const button = buttonsAll[name];

    return (
        <View>
        <Text style={[styles.faderPageLabel]} > PAGE </Text >
            <Text style={[styles.faderPageLabel]} > {faderPage}</Text >
        </View>
    );
    
}
