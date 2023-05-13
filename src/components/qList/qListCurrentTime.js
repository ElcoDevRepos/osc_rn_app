import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import { useSelector } from 'react-redux';

export default QListCurrentTime = () => {

    const current_q_time = useSelector(state => state.qListReducer.CURRENT_Q_TIME.label);

        return (

            <Text style={[styles.qListCurrentTime]}>{current_q_time}</Text>

        );
    
}
