import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default InfoChan = () => {

    const infoChanLabel = useSelector(state => state.buttonsReducer.info_chan.label);
    const infoChanStyle = useSelector(state => state.buttonsReducer.info_chan.style);

        return (

            <View style={[styles.info, styles[infoChanStyle]]}>
                <Text style={[styles.infoText, styles[buttonsAll['info_chan']['styleText']]]}>{infoChanLabel}</Text>
            </View>

        );
    
}
