import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch } from 'react-redux';
import EncoderButton from './encoderBTN';
import EncoderWheel from './encoderWheel';
import EncoderMode from './encoderMode';
import EncoderValue from './encoderValue';
import EncoderCenterText from './encoderCenterText';

export default EncoderModule = ({ module }) => {
    
    //const button = buttonsAll[name];

    //console.log(button);



    return (
        
        < View style={[localstyles.encoder]} >
            <View style={[styles.row, localstyles.encoderWheel_row]}>



 
                


                <EncoderWheel module={module} />

                <EncoderCenterText module={module} />

                <View style={[{ width: "40%", height: "12%", position: 'absolute', alignContent: "flex-end", justifyContent: "flex-end", bottom: "3%", right: '3%', backgroundColor: "transparent" }]}>
                    <EncoderValue module={module}  />
                </View>

                <View style={[{ width: "12%", height: "12%", position: 'absolute', top: "6%", left: '6%', backgroundColor: "transparent", alignContent: "center", justifyContent: "center" }]}>

                    <View style={[{ width: "100%", height: "100%", borderColor: "cyan", borderWidth: 2, borderRadius: 100, alignContent: "center", justifyContent: "center" }]} >
                        <EncoderMode module={module} />
                    </View>

                </View>
                
            </View>
            <View style={[styles.row, localstyles.encoderBtn_row]}>
                <View style={[localstyles.encoderBtn_col]} >
                    <EncoderButton name={'encoder' + module + '_min'} />
                </View>
                <View style={[localstyles.encoderBtn_col, localstyles.encoderBtn_max]} >
                    <EncoderButton name={'encoder' + module +'_max'} />
                </View>
                <View style={[localstyles.encoderBtn_col]} >
                    <EncoderButton name={'encoder' + module +'_home'} />
                </View>
            </View>
          </View >

        );
    
}

const localstyles = StyleSheet.create({
    encoder: {
        width: '100%',
        height: '100%',
        borderColor: '#4b5cb0',
        borderWidth: 2,
        borderRadius: 0,
        backgroundColor: '#141630',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    encoderBtn_col: {
        width: '33.3333%',
        height: '100%',
        borderColor: '#4b5cb0',
        borderTopWidth: 1,
    },

    encoderBtn_max: {
        borderColor: '#4b5cb0',
        borderRightWidth: 1,
        borderLeftWidth: 1
    },


    encoderBtn_row: {
        height: '15%',
        flexDirection: 'row'
    },

    encoderWheel_row: {
        height: '85%',
        flexDirection: 'row', 
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },

});
