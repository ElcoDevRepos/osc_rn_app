import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux'; 

import styles from '../../helpers/styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import buttonsAll from '../../helpers/buttonsAll';

// Placing Images here with some descriptions.  They will need States and Stuff.

export default EncoderLayoutNav = () => {

    const navigation = useNavigation();

    const isLayoutSaveShown = useSelector(state => state.layoutsReducer.LAYOUT_SAVE_VIEW.bool);
    const isLayoutLabelShown = useSelector(state => state.layoutsReducer.LAYOUT_LABEL_VIEW.bool);
    const isLayoutDeleteShown = useSelector(state => state.layoutsReducer.LAYOUT_DELETE_VIEW.bool);

    const toggleSaveView = () => {

        app.dispatch({ type: "LAYOUT_SAVE_VIEW", payload: { bool: !isLayoutSaveShown } });
        app.dispatch({ type: "LAYOUT_DELETE_VIEW", payload: { bool: false } });
        app.dispatch({ type: "LAYOUT_LABEL_VIEW", payload: { bool: false } });
        
    }

    const toggleLabelView = () => {
        app.dispatch({ type: "LAYOUT_SAVE_VIEW", payload: { bool: false } });
        app.dispatch({ type: "LAYOUT_LABEL_VIEW", payload: { bool: !isLayoutLabelShown } });
        app.dispatch({ type: "LAYOUT_DELETE_VIEW", payload: { bool: false } });
    }

    const toggleDeleteView = () => {
        app.dispatch({ type: "LAYOUT_SAVE_VIEW", payload: { bool: false } });
        app.dispatch({ type: "LAYOUT_LABEL_VIEW", payload: { bool: false } });
        app.dispatch({ type: "LAYOUT_DELETE_VIEW", payload: { bool: !isLayoutDeleteShown } });
    }

    const hideAllViews = () => {


    }

    return (
        <View style={[styles.row, styles.height50]} >

            <View style={[styles.col, styles.col12, styles.appNav]} >

                <Pressable onPress={toggleSaveView} style={[localstyles.layoutHeaderButton]} >
                    
                        <Text style={styles.text}>SAVE</Text>
                    
                </Pressable>

                <Text style={styles.text}> | </Text>

                <Pressable onPress={toggleLabelView}  style={[localstyles.layoutHeaderButton]} >
                    <Text style={styles.text}>LABEL</Text>
                </Pressable>

                <Text style={styles.text}> | </Text>

                <Pressable onPress={toggleDeleteView} style={[localstyles.layoutHeaderButton]} >
                    <Text style={styles.text} >DELETE</Text>
                </Pressable>
                

            </View>

            

        </View>

    );
    
}

const localstyles = StyleSheet.create({

    layoutHeaderButton: {
        width: wp('10%'),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    layoutHeaderSpacer: {
        width: wp('5%'),
        flexDirection: 'row',
        justifyContent: 'center',
    }
            

})