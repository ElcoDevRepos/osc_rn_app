import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';

export default InfoNotes = () => {

    const infoNotesLabel = useSelector(state => state.buttonsReducer.info_notes.label);
    const infoNotesStyle = useSelector(state => state.buttonsReducer.info_notes.style);

        return (

            <View style={[styles.info, styles[infoNotesStyle]]}>
                <Text style={[styles.infoText, styles[buttonsAll['info_notes']['styleText']]]}>{infoNotesLabel}</Text>
            </View>

        );
    
}
