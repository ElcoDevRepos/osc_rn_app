import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';

import { useSelector, useDispatch } from 'react-redux';

export default HeaderNavMain = () => {

    const navigation = useNavigation();

    const handlePress = (pageName) => {

        switch (pageName) {
            
            case "Remote":

                app.appState.editEnabled = false;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: false } });


                break;
            case "Focus":
                
                app.appState.editEnabled = true;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: true } });


                break;
            case "FacePanel":

                app.appState.editEnabled = false;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: false } });

                break;

            case "Encoders":

                app.appState.editEnabled = true;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: true } });

                break;

            case "DirectSelects":

                app.appState.editEnabled = true;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: true } });
                    
                break;
            case "Playback":
                app.appState.editEnabled = true;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: true } });

                break;
            case "OscLog":
                app.appState.editEnabled = false;
                app.dispatch({ type: "EDIT_ENABLED", payload: { bool: false } });
                    
                break;


        }
        navigation.navigate(pageName);
        app.appState.currentPage = pageName;
    };

        return (
                    <View style={[styles.row, styles.height50]} >
                        <View style={[styles.col, styles.col12, styles.appNav]} >
                            <Text onPress={() => {
                        handlePress('Remote');
                            }} style={styles.text}>REMOTE</Text>
                            
                            <Text style={styles.text}> | </Text>
                            <Text onPress={() => {
                        handlePress('Focus');
                            }} style={styles.text}>FOCUS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                        handlePress('FacePanel');
                            }}>FACE PANEL</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                        handlePress('Encoders');
                            }}>ENCODERS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                        handlePress('DirectSelects');
                            }}>DIRECT SELECTS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={() => {
                        handlePress('Playback');
                            }}>PLAYBACK</Text>
                            <Text style={styles.text}> | </Text>
                            <Text onPress={() => {
                        handlePress('OscLog');
                            }} style={styles.text}>oscLog</Text>
                        </View>
                    </View>
            
        );
    
}