import React from 'react';
import {
    View,
    Text,
    Pressable,
    Image, 
    StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';

import { useSelector, useDispatch } from 'react-redux';

import editIconDisabled from '../../images/edit_icon_disable.png';
import editIconImage from '../../images/edit_icon.png';
import editIconHighlighted from '../../images/edit_icon_highlighted.png';

// Placing Images here with some descriptions.  They will need States and Stuff.

export default EditIcon = () => {

    const navigation = useNavigation();

    const isEditEnabled = useSelector(state => state.appReducer['EDIT_ENABLED'].bool);
    const isEditOpen = useSelector(state => state.appReducer['EDIT_OPEN'].bool);

    const hideAllHeaderNav = () => {
        app.dispatch({ type: 'MAIN_NAV', payload: { bool: true } });
        app.dispatch({ type: 'ENCODER_LAYOUT_NAV', payload: { bool: false } });
        app.dispatch({ type: 'DS_LAYOUT_NAV', payload: { bool: false } });
        app.dispatch({ type: 'PLAYBACK_LAYOUT_NAV', payload: { bool: false } });
        app.dispatch({ type: 'FOCUS_LAYOUT_NAV', payload: { bool: false } });
    }

    const handleEditMenu = () => {

        console.log("EDIT MENU PRESSED");
        console.log("CURRENTPAGE :" + app.appState.currentPage);
        console.log("EDIT ENABLED : " + app.appState.editEnabled);
        
        //PAGENAME = 'ENCODERS';

        if (app.appState.editEnabled) {
            // THIS PAGE HAS AN EDIT MENU

            if (!app.appState.editOpen) {
                // THE EDIT MENU IS CLOSED BUT AVAILABLE

                switch (app.appState.currentPage) {
                    case "Remote":

                        //app.appState.editOpen = true;
                        //app.dispatch({ type: "EDITOPEN", payload: { bool: true } });

                        break;
                    case "Focus":

                        app.appState.editOpen = true;
                        app.dispatch({ type: "EDIT_OPEN", payload: { bool: true } });
                        app.dispatch({ type: 'MAIN_NAV', payload: { bool: false } });
                        app.dispatch({ type: 'FOCUS_LAYOUT_NAV', payload: { bool: true } });
                        navigation.navigate('FocusEdit');

                        break;
                    case "FacePanel":

                        //app.appState.editOpen = true;
                        //app.dispatch({ type: "EDITOPEN", payload: { bool: true } });
                        break;

                    case "Encoders":

                        app.appState.editOpen = true;
                        app.dispatch({ type: "EDIT_OPEN", payload: { bool: true } });
                        navigation.navigate('EncoderEdit');
                        app.dispatch({ type: 'MAIN_NAV', payload: { bool: false } });
                        app.dispatch({ type: 'ENCODER_LAYOUT_NAV', payload: { bool: true } });
                        break;

                    case "DirectSelects":

                        app.appState.editOpen = true;
                        app.dispatch({ type: "EDIT_OPEN", payload: { bool: true } });
                        app.dispatch({ type: 'MAIN_NAV', payload: { bool: false } });
                        app.dispatch({ type: 'DS_LAYOUT_NAV', payload: { bool: true } });
                        navigation.navigate('DirectSelectEdit');
                        break;
                    case "Playback":
                        app.appState.editOpen = true;
                        app.dispatch({ type: "EDIT_OPEN", payload: { bool: true } });
                        app.dispatch({ type: 'MAIN_NAV', payload: { bool: false } });
                        app.dispatch({ type: 'PLAYBACK_LAYOUT_NAV', payload: { bool: true } });
                        navigation.navigate('PlaybackEdit');
                        break;
                    case "OscLog":
                        app.appState.editOpen = true;
                        app.dispatch({ type: "EDIT_OPEN", payload: { bool: true } });
                        break;
                }

                console.log("EDIT OPEN : " + app.appState.editOpen);

            } else {
                // THE EDIT MENU IS OPEN
                // CLOSE THE EDIT MENU AND RETURN TO THE PREVIOUS PAGE
                navigation.navigate(app.appState.currentPage);
                app.appState.editOpen = false;
                app.dispatch({ type: "EDIT_OPEN", payload: { bool: false } });
                hideAllHeaderNav();
                // STORE CONFIG AND STATE
                app.updateAppConfig();
                app.updateAppState();
            }

        }
    }


   // console.log("EDIT ENABLED : " + isEditEnabled);
   // console.log("EDIT OPEN : " + isEditOpen);

    return (
        <View style={[localstyles.container]}>

            {(isEditEnabled && !isEditOpen) && (
                <Pressable onPress={() => handleEditMenu()}>
                    <Image
                        style={[localstyles.headerImage]}
                        source={editIconImage}
                    />
                </Pressable>

            )}

            {(isEditOpen && isEditEnabled) && (

                <Pressable onPress={() => handleEditMenu()}>
                    <Image
                        style={[localstyles.headerImage]}
                        source={editIconHighlighted}
                    />
                </Pressable>

            )}

            { (!isEditEnabled && !isEditOpen) && (
                <Pressable onPress={() => handleEditMenu()}>
                    <Image
                        style={[localstyles.headerImage]}
                        source={editIconDisabled}
                    />
                </Pressable>

            )}

        </View>
            
        );
    
}

const localstyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        alignSelf: 'center',
    },
    button: {
        height: '100%',
        width: '100%',
    },
    headerImage: {

        maxHeight: '90%',
        maxWidth: '100%',
        padding: 10,
        margin: 4,
        alignSelf: 'center',
        resizeMode: 'contain'

    },
})

