import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default InfoPatch = () => {

    const infoPatchLabel = useSelector(state => state.buttonsReducer.info_patch.label);
    const infoPatchStyle = useSelector(state => state.buttonsReducer.info_patch.style);

        return (

            <View style={[styles.info, styles[infoPatchStyle]]}>
                <Text style={[styles.infoText, styles[buttonsAll['info_patch']['styleText']]]}>{infoPatchLabel}</Text>
            </View>

        );
    
}
