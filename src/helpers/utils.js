import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity
} from 'react-native';
import useState from 'react-native';
import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import CustomButton from '../components/zZ_old/button';
import StaticButton from '../components/zZ_old/staticButton_old';
import InfoText from '../components/zZ_old/info';
import CustomScrollView from '../components/zZ_old/scrollview';
import tcpOsc from '../../services/tcpOsc';
import { useSelector, useDispatch } from 'react-redux';

export const renderText = (text) => {

    return text;
}
/*

                    <InfoText
                        functype={button.functype}
                        title={button.label}
                        id={button.label}
                        key={button.label}
                        style={[styles.info, styles[button.style]]}
                        styleText={[styles.infoText, styles[button.styleText]]}
                        >
                    </InfoText>
*/

export const renderObject = (name) => {

    const buttonObject = [];
    button = buttonsAll[name];
    switch (button.functype) {
        case 'info':

            switch (name) {
                
                default:
                     buttonObject.push(
                        (

                        <View style={[styles.info, styles[button.style]]}>
                            <Text style={[styles.infoText, styles[button.styleText]]}>DEFAULT TEXT</Text>
                        </View>

                        )
                    )
                } // end switch name

            break;

        case 'btn':

            buttonObject.push(
                (
                    <StaticButton
                        title={button.label}
                        isPressed={false}
                        id={button.label}
                        key={button.address}
                        style={[styles.btn, styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        address={button.address}
                        argvalue={button.argvalue}
                        onPressIn={(data) => {
                            tcpOsc.sendMessage(data.address, [{ type: "i", value: 1 }])
                        }}
                        onPressOut={(data) => {
                            tcpOsc.sendMessage(data.address, [{ type: "i", value: 0 }])
                        }}>
                    </StaticButton>
                )
            )
            break;

        case 'select':
            // Direct Select "Select" Button.
            // This does not send OSC - but opens the select window
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        address={button.address}
                        argvalue={button.argvalue}
                        style={[styles.btn, styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        onPress={() => {
                            // Open Selection Menu Here
                        }}>
                    </CustomButton>
                )
            )
            break;

        case 'label':
            // Direct Select Labels.   Needs no borders, etc
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        address={button.address}
                        argvalue={button.argvalue}
                        style={[styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        >
                    </CustomButton>
                )
            )
            break;

        case 'encoder_btn':
            // Direct Select Labels.   Needs no borders, etc
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        address={button.address}
                        argvalue={button.argvalue}
                        style={[styles.encoderBtn, styles[button.style]]}
                        styleText={[styles.encoderBtnText, styles[button.styleText]]}
                    >
                    </CustomButton>
                )
            )
            break;

        case 'oscLog':
            // Direct Select Labels.   Needs no borders, etc
            buttonObject.push(
                (
                    <CustomScrollView
                        title={button.label}
                        id={button.label}
                        style={[styles[button.style]]}
                        styleText={[styles[button.styleText]]}
                    >
                    </CustomScrollView>
                )
            )
            break;
    }// switch

    return buttonObject;
};


// export const renderObject = React.memo(renderObjectImpl);
