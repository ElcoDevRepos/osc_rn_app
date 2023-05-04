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

export default EncoderModule = ({ module }) => {
    
    //const button = buttonsAll[name];

    //console.log(button);
 

    return (
        
        < View style={[localstyles.encoder]} >
            <View style={[styles.row, localstyles.encoderWheel_row]}>

                <View style={[{width: "10%", height: "10%", position: 'absolute', top: "5%", left: '5%', backgroundColor: "cyan"}] }></View>

                <Text style={[{ color: "#FFF", fontSize: 20, zIndex: 900, position: 'absolute', top: '45%' }]}>CENTER TEXT</Text>

                <EncoderWheel>                    

                </EncoderWheel>

                <View style={[{ width: "10%", height: "10%", position: 'absolute', bottom: "5%", right: '5%', backgroundColor: "red" }]}></View>
                
            </View>
            <View style={[styles.row, localstyles.encoderBtn_row]}>
                <View style={[localstyles.encoderBtn_col]} >
                    <EncoderButton name={'encoder'+module+'_min'} />
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
