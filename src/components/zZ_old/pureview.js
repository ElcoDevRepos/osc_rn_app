import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class PureView extends PureComponent {


    
    render() {
        console.log("PureComponent Render");
        const { style } = this.props;
        return (
            <View style={style}>
                {this.props.children}
            </View>
        );
    }
}

export default PureView;