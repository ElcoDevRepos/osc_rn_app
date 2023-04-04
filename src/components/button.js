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
                <TouchableOpacity style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: '#000000',
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    margin: 5
                }} onPress={this.props.onPress}>
                    <Text style={{ textAlign: 'center' }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}