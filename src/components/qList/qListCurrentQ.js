import React from 'react';
import {
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import { useSelector } from 'react-redux';

export default QListCurrentQ = () => {

    const current_q_label = useSelector(state => state.qListReducer.CURRENT_Q_LABEL.label);
        
    return (
                    <Text style={[styles.qListCurrentLabel]}>{current_q_label}</Text>
        );
    
}
