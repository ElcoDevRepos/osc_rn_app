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

import ShowName from '../../components/infopanels/showName';
import HeaderNavMain from './headerNavMain';
import EncoderLayoutNav from './encoderLayoutNav';
import DSLayoutNav from './dsLayoutNav';
import PlaybackLayoutNav from './playbackLayoutNav';
import FocusLayoutNav from './focusLayoutNav';

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

const SettingsIcon = (props) => (
    <TouchableWithoutFeedback onPress={props.onPress}>
        <Image
            source={require('../../images/edit_icon.png')}
            style={[styles.headerImage]}
            />
    </TouchableWithoutFeedback>
)



export default Header = ({ openSettings }) => {

    const navigation = useNavigation();
        
    const [isMainNavShown, setIsMainNavShown] = useState(true);
    const toggleMainNav = event => { setIsMainNavShown(true) };

    const [isEncoderLayoutNavShown, setIsEncoderLayoutNavShown] = useState(false);
    const toggleEncoderLayoutNav = event => { setIsEncoderLayoutNavShown(true) };

    const [isDSLayoutNavShown, setIsDSLayoutNavShown] = useState(false);
    const toggleDSLayoutNav = event => { setIsDSLayoutNavShown(true) };

    const [isPlaybackLayoutNavShown, setIsPlaybackLayoutNavShown] = useState(false);
    const togglePlaybackLayoutNav = event => { setIsPlaybackLayoutNavShown(true) };

    const [isFocusLayoutNavShown, setIsFocusLayoutNavShown] = useState(false);
    const toggleFocusLayoutNav = event => { setIsFocusLayoutNavShown(true) };

    const hideAllHeaderNav = event => {
        setIsMainNavShown(false);
        setIsEncoderLayoutNavShown(false);
        setIsDSLayoutNavShown(false);
        setIsPlaybackLayoutNavShown(false);
        setIsFocusLayoutNavShown(false);
        }

    const openEditMenu = () => {

        PAGENAME = 'ENCODERS';

        switch (PAGENAME) {
            case 'ENCODERS':
                navigation.navigate('EncoderEdit');
                break;

        }
    }

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
                        <SettingsIcon onPress={() => {
                            openEditMenu();
                        }} />
                    </View>
                </View>
            </View>

        </View>
            
    );
    
}