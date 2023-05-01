import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default InfoLevel = () => {

    const infoLevelLabel = useSelector(state => state.buttonsReducer.info_level.label);
    const infoLevelStyle = useSelector(state => state.buttonsReducer.info_level.style);

        return (
            <View style={[styles.info, styles[infoLevelStyle]]}>
                <Text style={[styles.infoText, styles[buttonsAll['info_level']['styleText']]]}>{infoLevelLabel}</Text>
            </View>
        );
    
}
