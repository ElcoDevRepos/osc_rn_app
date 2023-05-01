import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default ShowName = () => {

    const showNameLabel = useSelector(state => state.buttonsReducer.showName.label);
    const showNameStyle = useSelector(state => state.buttonsReducer.showName.style);

        return (
            <View style={[styles.showNameView]}>
                <Text style={[styles[showNameStyle]]}>{showNameLabel}</Text>
            </View>

        );
    
}
