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
        this.state = {
            address: props.address,
            argvalue: props.argvalue,
            title: props.title,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.title !== this.state.title || 
            nextProps.address !== this.state.address || 
            nextProps.argvalue !== this.state.argvalue) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={this.props.style}
                    onPressIn={() => {
                        this.props.onPressIn({ address: this.state.address, argvalue: this.state.argvalue });
                    }}
                    onPressOut={() => {
                        this.props.onPressOut({ address: this.state.address, argvalue: this.state.argvalue });
                    }}
                >
                    <Text style={this.props.styleText}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}