import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import DirectSelectButton from './directselectBTN';
import DirectSelectPage from './directselectPageBTN';

export default DirectSelectModule = ({ module }) => {

    console.log("DS MODULE::" + module);

    return (
        <View>
            <View style={[styles.row, styles.row_single_ds]} >
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={1} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={2} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={3} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={4} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={5} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={6} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={7} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={8} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={9} />
                </View>
                <View style={[styles.col, styles.col1]} >
                   <DirectSelectButton module={module} num={10} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={'request'} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={'up'} />
                </View>
            </View>
            
            <View style={[styles.row, styles.row_single_ds]} >
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={11} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={12} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={13} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={14} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={15} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={16} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={17} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={18} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={19} />
                </View>
                <View style={[styles.col, styles.col1]} >
                   <DirectSelectButton module={module} num={20} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectPage module={module} num={'page'} />
                </View>
                <View style={[styles.col, styles.col1]} >
                    <DirectSelectButton module={module} num={'down'} />
                </View>
            </View>
        </View>
    );
    
}
