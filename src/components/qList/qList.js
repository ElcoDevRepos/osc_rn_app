import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

import QListCurrentQ from './qListCurrentQ';
import QListCurrentTime from './qListCurrentTime';
import QListPendingQ from './qListPendingQ';
import QListPendingTime from './qListPendingTime';

export default QList = () => {


        return (
            <View style={[styles.qListContainer]}>
                <View style={[styles.qListCurrentContainer]}>
                    <QListCurrentQ />
                    <QListCurrentTime />
                </View>
                <View style={[styles.qListPendingContainer]}>
                    <QListPendingQ />
                    <QListPendingTime />
                </View>
             </View>

        );
    
}
