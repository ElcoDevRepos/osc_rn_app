import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';

// Placing Images here with some descriptions.  They will need States and Stuff.

export default FocusLayoutNav = () => {

        const navigation = useNavigation();

    return (
        <View style={[styles.row, styles.height50]} >

            <View style={[styles.col, styles.col12, styles.appNav]} >

                <Text onPress={() => { }} style={styles.text}>SAVE</Text>

                <Text style={styles.text}> | </Text>

                <Text onPress={() => { }} style={styles.text}>LABEL</Text>

                <Text style={styles.text}> | </Text>

                <Text style={styles.text} onPress={() => { }}>DELETE</Text>

            </View>

        </View>

    );
    
}