
import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export default EncoderValue = ({ module }) => {

   
    const encoderValue = useSelector(state => state.encodersReducer['ENCODER' + module + '_VALUE'].label);

    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end" }}>
        <Text style={{
            color: "red", fontSize: 18, alignSelf: "baseline", textAlign: "right"
        }}>{encoderValue}</Text>
        </View>
    );
}

const localstyles = StyleSheet.create({
    
});







    








