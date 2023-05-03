import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default QList = () => {

    const current_q_label = useSelector(state => state.qListReducer.CURRENT_Q_LABEL.label);
    const pending_q_label = useSelector(state => state.qListReducer.PENDING_Q_LABEL.label);

    const current_q_time = useSelector(state => state.qListReducer.CURRENT_Q_TIME.label);
    const pending_q_time = useSelector(state => state.qListReducer.PENDING_Q_TIME.label);


        return (
            <View style={[styles.qListContainer]}>
                <View style={[styles.qListCurrentContainer]}>
                    <Text style={[styles.qListCurrentLabel]}>{current_q_label}</Text>
                    <Text style={[styles.qListCurrentTime]}>{current_q_time}</Text>
                </View>
                <View style={[styles.qListPendingContainer]}>
                    <Text style={[styles.qListPendingLabel]}>{pending_q_label}</Text>
                    <Text style={[styles.qListPendingTime]}>{pending_q_time}</Text>
                </View>
             </View>

        );
    
}
