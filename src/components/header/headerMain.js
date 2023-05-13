import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';

import { useSelector, useDispatch } from 'react-redux';

import ShowName from '../../components/infopanels/showName';
import HeaderNavMain from './headerNavMain';
import EncoderLayoutNav from './encoderLayoutNav';
import DSLayoutNav from './dsLayoutNav';
import PlaybackLayoutNav from './playbackLayoutNav';
import FocusLayoutNav from './focusLayoutNav';

import EditIcon from './editIcon';

// Placing Images here with some descriptions.  They will need States and Stuff.

const AlienLogo = (props) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
        <Image
            source={require('../../images/eos_remote_icon.png')}
            style={[styles.headerImage]}
        />
    </TouchableWithoutFeedback>

)

const ColorPickerIcon = (props) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
        <Image
        source={require('../../images/color_wheel.png')}
        style={[styles.headerImage]}
        />
    </TouchableWithoutFeedback>
)

const TenKeyIcon = (props) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
        <Image
            source={require('../../images/keyboard_popup_btn.png')}
            style={[styles.headerImage]}
            />
    </TouchableWithoutFeedback>
)






export default Header = ({ openSettings }) => {

    const navigation = useNavigation();

    const isMainNavShown = useSelector(state => state.appReducer.MAIN_NAV.bool);
    const isEncoderLayoutNavShown = useSelector(state => state.appReducer.ENCODER_LAYOUT_NAV.bool);
    const isDSLayoutNavShown = useSelector(state => state.appReducer.DS_LAYOUT_NAV.bool);
    const isPlaybackLayoutNavShown = useSelector(state => state.appReducer.PLAYBACK_LAYOUT_NAV.bool);
    const isFocusLayoutNavShown = useSelector(state => state.appReducer.FOCUS_LAYOUT_NAV.bool);


    return (
            
        <View style={[styles.row, styles.rowHeader]}>
            <View style={[styles.col, styles.col1]} >
                <AlienLogo onPress={openSettings} />
            </View>
            <View style={[styles.col, styles.col9]} >
                <View style={[styles.row, styles.height50]} >
                    <View style={[styles.col, styles.col12]} >
                        <ShowName />
                    </View>{/* /button columns */}
                </View>
                { isMainNavShown && ( <HeaderNavMain /> ) }
                { isEncoderLayoutNavShown && ( <EncoderLayoutNav /> ) }
                { isDSLayoutNavShown && ( <DSLayoutNav /> ) }
                { isPlaybackLayoutNavShown && ( <PlaybackLayoutNav /> ) }
                { isFocusLayoutNavShown && ( <FocusLayoutNav /> ) }
            </View>
            <View style={[styles.col, styles.col2]} >
                <View style={[styles.row, styles.height100]} >
                    <View style={[styles.col, styles.col4]} >
                        <ColorPickerIcon onPress={() => {
                            navigation.navigate('ColorPicker');
                        }} />
                    </View>
                    <View style={[styles.col, styles.col4]} >
                        <TenKeyIcon />
                    </View>
                    <View style={[styles.col, styles.col4]} >
                        <EditIcon />
                    </View>
                </View>
            </View>

        </View>
            
    );
    
}