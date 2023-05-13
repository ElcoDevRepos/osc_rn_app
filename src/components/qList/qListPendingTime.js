import React from 'react';
import {
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import { useSelector } from 'react-redux';

export default QListPendingTime = () => {

    const pending_q_time = useSelector(state => state.qListReducer.PENDING_Q_TIME.label);

        return (
            <Text style={[styles.qListPendingTime]}>{pending_q_time}</Text>
        );
    
}
