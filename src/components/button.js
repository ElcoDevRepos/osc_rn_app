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
export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={this.props.style}
                    onPress={this.props.onPress}
                    onPressIn={this.props.onPressIn}
                    onPressOut={this.props.onPressOut}
                >
                    <Text style={this.props.styleText}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}