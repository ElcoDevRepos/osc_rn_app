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

            // TODO
            // Derived State from props.... probably need to fix this?
            title: props.title
        }
    }

    // shouldComponentUpdate works perfectly.  Only updates the buttons that need to update
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.title !== this.state.title ) {
            return true;
        }
        else {
            return false;
        }
    }

    // This is the command Line.  So whatever needs to be added  

    render() {
        return (
            <View style={this.props.style}>
                <Text style={this.props.styleText}>{this.props.title}</Text>
            </View>
        );
    }
}