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
    ScrollView
} from 'react-native';
export default class CustomScrollView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: props.address,
            argvalue: props.argvalue
        }
    }

    render() {
        return (
            <View>
                <ScrollView
                    style={this.props.style}
                >
                    <Text style={this.props.styleText}>{this.props.title}</Text>
                </ScrollView>
            </View>
        );
    }
}