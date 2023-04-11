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
export default class InfoText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={this.props.style}>{this.props.text}</Text>
            </View>
        );
    }
}