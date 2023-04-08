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


import buttonsAll from '../helpers/buttonsAll';
import updater from '../../services/updater';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.row}>
                <Text onPress={() => {
                    this.props.hideAllViews(); 
                    this.props.toggleRemoteView();
                }} style={styles.text}>Remote</Text>
                <Text onPress={() => {
                    this.props.hideAllViews(); 
                    this.props.toggleFocusView();
                }}style={styles.text}>Focus</Text>
                <Text style={styles.text}>Face Panel</Text>
                <Text style={styles.text}>Encoders</Text>
                <Text style={styles.text}>Direct Selects</Text>
                <Text style={styles.text}>Playback</Text>
                <Text style={styles.text} onPress={this.props.openSettings}>Settings</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginTop: 25
    },
    row: {
        width: '100%',
        height: 55,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'nowrap'
    }
})