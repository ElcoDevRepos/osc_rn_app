import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import { useSelector } from 'react-redux';

export default QListPendingQ = () => {

    const pending_q_label = useSelector(state => state.qListReducer.PENDING_Q_LABEL.label);

        return (
            <Text style={[styles.qListPendingLabel]}>{pending_q_label}</Text>
        );
    
}
