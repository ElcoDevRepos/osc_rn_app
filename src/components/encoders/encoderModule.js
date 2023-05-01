import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch } from 'react-redux';
import EncoderButton from './encoderBTN';

export default EncoderModule = ({ module }) => {
    
    //const button = buttonsAll[name];

    //console.log(button);
 

    return (
        
        < View style = { [styles.encoder]} >
            <View style={[styles.row, styles.encoderBtn_focus]}>
                <View style={[styles.encoderBtn_col]} >
                    <EncoderButton name={'encoder'+module+'_min'} />
                </View>
                <View style={[styles.encoderBtn_col, styles.encoderBtn_max]} >
                    <EncoderButton name={'encoder' + module +'_max'} />
                </View>
                <View style={[styles.encoderBtn_col]} >
                    <EncoderButton name={'encoder' + module +'_home'} />
                </View>
            </View>
          </View >

        );
    
}
