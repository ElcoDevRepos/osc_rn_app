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
    Pressable,
    useState
} from 'react-native';
export default class StaticButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false
        }

    }
    /*
    handleDown = () => {
        this.setState({ isPressed: true });
    };

    handleUp = () => {
        this.setState({ isPressed: false });
    };
       */
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.isPressed !== this.state.isPressed) {
            return false;
        }
        else {
            return false;
        }
    }
 

    render() {
        console.log("STATIC BUTTON IS RERENDERING");
        // const { isPressed } = this.state.isPressed;
        return (
            <View>
                <Pressable
                    isPressed={false}
                    title={this.props.title}
                    style={[this.props.style]}
                    onPressIn={() =>
                    {
                         //this.handleDown,
                         this.props.onPressIn({ address: this.props.address, argvalue: this.props.argvalue, style: this.props.sylePressed });
                    }}
                    onPressOut={() => {
                        //this.handleUp,
                        this.props.onPressOut({ address: this.props.address, argvalue: this.props.argvalue, style: this.props.style });
                    }}
                >
                    <Text style={this.props.styleText}>{this.props.title}</Text>
                </Pressable>
            </View>
        );
    }
}