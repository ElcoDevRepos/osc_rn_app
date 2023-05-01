import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';


export default OscLog = () => {

    const oscLogLabel = useSelector(state => state.buttonsReducer.oscLog.label);
    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

    //console.log("OSC LOG LABEL", oscLogLabel);

    console.log("OSC LOG IS RERENDERING");
        return (
            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>
                
                <View style={[styles.col, styles.col12]} >
                    <View style={[styles.oscLogCont]} >
                        <ScrollView
                            style={[styles[buttonsAll['oscLog'].style]]}
                            
                        ><Text style={[styles[buttonsAll['oscLog'].styleText]]} >{oscLogLabel}</Text>
                        </ScrollView>
                    </View>
                </View>
                
            </View> // pageContainer

        );
    
}
