
import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export default EncoderMode = ({ module }) => {

    const encoderMode = useSelector(state => state.encodersReducer['ENCODER' + module + '_MODE'].label);

    const handlePress = () => {

        const coarse = app.appConfig.coarse;
        const fine = app.appConfig.fine;
        const wheelNumber = app.appState['encoder' + module].wheel;

        if (app.appState['encoder' + module].mode == 'superfine') {
            // Change to coarse

           // console.log("CHANGING TO COARSE");


            app.appState['encoder' + module].mode = 'coarse';
            app.appState['encoder' + module].address = "/eos/active/wheel/" + wheelNumber;
            app.appState['encoder' + module].incValue = coarse;
            app.appState['encoder' + module].decValue = -coarse;

            // UPDATE THE UI
            app.dispatch({ type: "ENCODER" + module + '_MODE', payload: { label: "C" } });
 
            // console.log(app.appState['encoder' + module]);

        } else if (app.appState['encoder' + module].mode == 'coarse') {
            // change to Superfine
            app.appState['encoder' + module].mode = 'fine';
            app.appState['encoder' + module].address = "/eos/active/wheel/" + wheelNumber;
            app.appState['encoder' + module].incValue = fine;
            app.appState['encoder' + module].decValue = -fine;

            // UPDATE THE UI
            app.dispatch({ type: "ENCODER" + module + '_MODE', payload: { label: "F" } });
        } else {
            // coarse or undefined
            // change to fine
            app.appState['encoder' + module].mode = 'superfine';
            app.appState['encoder' + module].address = "/eos/active/wheel/fine/" + wheelNumber;
            app.appState['encoder' + module].incValue = fine;
            app.appState['encoder' + module].decValue = -fine;

            // UPDATE THE UI
            app.dispatch({ type: "ENCODER" + module + '_MODE', payload: { label: "SF" } });
        }
        
        
        // UPDATE THE ACTIVE WHEEL ADDRESSES
        // app.dispatch({ type: "ENCODER" + module + '_ADDRESS', payload: { label: app.appState['encoder' + module].address, incValue: app.appState['encoder' + module].incValue, decValue: app.appState['encoder' + module].decValue } });

    }

    return (

    <Pressable
        style={[localstyles.container]}
        onPress={() => {
            handlePress();
        }}>
 
        <Text style={[localstyles.text]}>{encoderMode}</Text>

    </Pressable>
    );
}

const localstyles = StyleSheet.create({
    
    container: {
        width: "100%", 
        height: "100%", 
        backgroundColor: "transparent", 
        justifyContent: "center", 
        alignContent: "center"
        },
    text: {
        color: "cyan", 
        fontSize: 15, 
        alignSelf: "center", 
        textAlign: "center" 
        }
});







    








