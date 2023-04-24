import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity,
    NativeEventEmitter
} from 'react-native';
import SliderHandle from '../components/slider';


export default class Encoders extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <View>
                <SliderHandle></SliderHandle>
            </View> 
           
        );
    }
}