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
                orientation="vertical"
                step={1}
                style={{ width: "100%", height: 400 }}
                thumbStyle={{ height: 20, width: 20 }}
                thumbProps={{
                    children: (
                        <Icon
                            name="bars"
                            type="font-awesome"
                            size={25}
                            reverse
                            containerStyle={{ bottom: 25, right: 25 }}
                            color="#f50"
                        />
                    )
                }}
                thumbTintColor="#0c0"
                thumbTouchSize={{ width: 20, height: 20 }}
                trackStyle={{ height: 20, borderRadius: 20 }}
                value={this.props.value}
            />
        );
    }
}


