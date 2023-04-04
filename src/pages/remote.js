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
import CustomButton from '../components/button';
export default class Remote extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <View>
                <CustomButton buttonText="1"></CustomButton>
            </View>
        );
    }
}