import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import DSButton from './dsButton';
import DSSelectButton from './dsSelectButton';
import DSPageButton from './dsPageButton';

export default DSModule10 = ({ module }) => {

    console.log("DS MODULE::" + module);

    return (
        <View>
            <View style={[styles.row, styles.row_single_ds]} >
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={1} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={2} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={3} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={4} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={5} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSSelectButton module={module} name={'select'} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={'up'} />
                </View>
            </View>
            
            <View style={[styles.row, styles.row_single_ds]} >
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={6} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={7} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={8} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={9} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={10} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSPageButton module={module} name={'page'} />
                </View>
                <View style={[styles.col, styles.colds5]} >
                    <DSButton module={module} name={'down'} />
                </View>
            </View>
        </View>
    );
    
}
