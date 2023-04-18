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
        this.state = {
            text: props.text,
            style: props.style
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        if (nextState !== this.state) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <View>
                <Text style={this.state.style}>{this.state.text}</Text>
            </View>
        );
    }
}