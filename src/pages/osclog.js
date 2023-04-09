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

import tcpOsc from '../../services/tcpOsc';
import {
    NativeEventEmitter
  } from 'react-native';
import CustomButton from '../components/button';
// import buttons from '../helpers/buttons';
import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import { renderObject, renderText } from '../helpers/utils';
import updater from '../../services/updater';

export default class OscLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsAll: buttonsAll
        };
        this.renderObject = renderObject.bind(this);
        // All Messages from EOS Will come here. 
        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', async (oscMessage) => {
            console.log("remote message: ", oscMessage);
            updater.alterSourceData(oscMessage);
            this.setState(buttonsAll);
        });
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                
                <View style={[styles.col, styles.col12]} >
                    <View style={[styles.oscLogCont]} >
                        {this.renderObject('oscLog')}
                    </View>
                    </View>
                
            </View> // pageContainer

        );
    }
}
