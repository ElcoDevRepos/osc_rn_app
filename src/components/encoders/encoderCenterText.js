
import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import tcpOsc from '../../../services/tcpOsc';

export default EncoderCenterText = ({ module }) => {

   
    const centerText = useSelector(state => state.encodersReducer['ENCODER' + module + '_CENTERTEXT'].label);

    const attribute = app.appState['encoder' + module].centerText;

    const oscAttribute = attribute.replace(" ", "_");

    const address = "/eos/cmd/" + oscAttribute;

    const handlePressIn = () => {

        if (app.appState['encoder' + module].enabled) {
            tcpOsc.sendMessage(address, [{ type: "i", value: 1 }]);
        }
     
    }

    const handlePressOut = () => {

        if (app.appState['encoder' + module].enabled) {
            tcpOsc.sendMessage(address, [{ type: "i", value: 0 }]);
        }

    }

    return (

        <Pressable

            style={[localstyles.container]}
            onPressIn={() => {
                handlePressIn();
            }}
            onPressOut={() => {
                handlePressOut();
            }}>
                        

            <Text style={[localstyles.text]}>{centerText}</Text>

       </Pressable>

    );
}

const localstyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '45%',
        justifyContent: "center",
        alignContent: "center"
    },
    text: {
        color: "#FFF",
        fontSize: 20
    }
});







    








