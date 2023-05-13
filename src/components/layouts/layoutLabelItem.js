import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { Input } from '@rneui/themed';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Toast from 'react-native-root-toast';
import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Pressable } from 'react-native';

export default LayoutLabelItem = ({ layoutNum, pageName }) => {

    const name = pageName + "_lay_" + layoutNum;
    const labelName = pageName + "Label";

    const currentMaster = app.appState.currentMasterLayout;

    const label = useSelector(state => state.layoutsReducer[name.toUpperCase()].label).toString();

    const button = buttonsAll[name];

    const handleChange = (value) => {

        app.dispatch({ type: name.toUpperCase(), payload: { label: value } });
        app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1][labelName] = value;
       // console.log(value);

        }

    return (
                    <View
                        style={[localstyles.container, {width: '100%', height: hp('8%'), backgroundColor: "#33333399", flexDirection: "row", padding: hp('0.6%')}]}
                    >
                    <View style={[styles.col, styles.col2]}>
                        <Text style={[styles.btnText, styles[button.styleText]]}>{layoutNum} :</Text>
                    </View>
                        <View style={[styles.col, styles.col10, localstyles.labelContainer]}>
                            <Input
                                style={[{ color: "#FFFFFF" }]}
                                placeholder='Enter Custom Name'
                                onChangeText={value => handleChange(value)}
                                value={ label }
                                        />
                        </View>
                    </View>
 
    );
    
}


const localstyles = StyleSheet.create({
    container: {
        borderColorBottom: '#4b5cb0',
        borderWidthBottom: 2
    },

    labelContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

   item: {
        width: wp('20%'),
        backgroundColor: 'transparent',
        padding: 16,
        borderBottomColor: '#297efd',
        borderBottomWidth: 2,
    },

    title: {
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
    },

});
