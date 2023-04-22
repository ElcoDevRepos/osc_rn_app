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
    TouchableHighlight,
    Button,
    Pressable
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
            return false;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <View>
                <Pressable
                    title={this.props.title}
                    style={this.props.style}
                    onPressIn={() => {
                        this.props.onPressIn({ address: this.props.address, argvalue: this.props.argvalue });
                    }}
                    onPressOut={() => {
                        this.props.onPressOut({ address: this.props.address, argvalue: this.props.argvalue });
                    }}
                >
                    <Text style={this.props.styleText}>{this.props.title}</Text>
                </Pressable>
            </View>
        );
    }
}