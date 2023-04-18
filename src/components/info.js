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
            ttitle: props.title
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.title !== this.state.title ) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <View style={this.props.style}>
                <Text style={this.props.styleText}>{this.props.title}</Text>
            </View>
        );
    }
}