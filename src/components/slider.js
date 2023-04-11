import React from 'react';
import { View } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';

export default class SliderHandle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="#ccc"
                maximumValue={100}
                minimumTrackTintColor="#222"
                minimumValue={0}
                onSlidingComplete={() =>
                    console.log("onSlidingComplete()")
                }
                onSlidingStart={() =>
                    console.log("onSlidingStart()")
                }
                onValueChange={value =>
                    console.log("onValueChange()", value)
                }
                orientation="horizontal"
                step={this.props.steps}
                style={{ width: "100%"}}
                thumbStyle={{ height: 20, width: 20 }}
                thumbTintColor="#0c0"
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 10, borderRadius: 20 }}
                value={this.props.value}
            />
        );
    }
}


