import React from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native';
import tcpOsc from '../../../services/tcpOsc';
import buttonsAll from '../../helpers/buttonsAll';
import styles from '../../helpers/styles';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        const button = buttonsAll[props.name];

        console.log(button);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.title !== this.props.title) {
            return false;
        }
        else {
            return false;
        }
    }

    button = buttonsAll[this.props.name];

    render() {

        console.log("CUSTOM BUTTON RENDERING:");
        return (
            
                <Pressable
                    title={this.button.label}
                    style={[styles.btn, styles[this.button.style]]}
                onPressIn={() => {
                    tcpOsc.sendMessage(this.button.address, [{ type: "i", value: 1 }])
                }}
                onPressOut={() => {
                    tcpOsc.sendMessage(this.button.address, [{ type: "i", value: 0 }])
                }}>
             
                <Text style={[styles.btnText, styles[this.button.styleText]]}>{this.button.label}</Text>
                </Pressable>
            
        );
    }
}