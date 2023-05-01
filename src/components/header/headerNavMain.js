import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';

// Placing Images here with some descriptions.  They will need States and Stuff.

export default HeaderNavMain = () => {

        const navigation = useNavigation();

        return (
                    <View style={[styles.row, styles.height50]} >
                        <View style={[styles.col, styles.col12, styles.appNav]} >
                            <Text onPress={() => {
                                navigation.navigate('Remote');
                            }} style={styles.text}>REMOTE</Text>
                            
                            <Text style={styles.text}> | </Text>
                            <Text onPress={() => {
                                navigation.navigate('Focus');
                            }} style={styles.text}>FOCUS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                                navigation.navigate('FacePanel');
                            }}>FACE PANEL</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                                navigation.navigate('Encoders');
                            }}>ENCODERS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                                navigation.navigate('DirectSelects');
                            }}>DIRECT SELECTS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                                navigation.navigate('Playback');
                            }}>PLAYBACK</Text>
                            <Text style={styles.text}> | </Text>
                            <Text onPress={() => {
                                navigation.navigate('OscLog');
                            }} style={styles.text}>oscLog</Text>
                        </View>{/* /button columns */}
                    </View>
            
        );
    
}