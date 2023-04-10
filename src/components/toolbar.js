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
    Image
} from 'react-native';

import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import updater from '../../services/updater';

// Placing Images here with some descriptions.  They will need States and Stuff.

const AlienLogo = () => (
    <Image
        source={require('../images/eos_remote_icon.png')}
        style={[styles.headerImage]}
         />
)

const ColorPickerIcon = () => (
    <Image
        source={require('../images/color_wheel.png')}
        style={[styles.headerImage]}
    />
)

const TenKeyIcon = () => (
    <Image
        source={require('../images/keyboard_popup_btn.png')}
        style={[styles.headerImage]}
    />
)

const SettingsIcon = () => (
    <Image
        source={require('../images/edit_icon.png')}
        style={[styles.headerImage]}
    />
)

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View style={[styles.row, styles.rowHeader]}>
                <View style={[styles.col, styles.col1]} >
                    <AlienLogo />
                </View>
                <View style={[styles.col, styles.col9]} >
                    <View style={[styles.row, styles.height50]} >
                        <View style={[styles.col, styles.col12]} >
                            <Text>
                            OSC RFR 2.0
                            </Text>
                        </View>{/* /button columns */}
                    </View>
                    <View style={[styles.row, styles.height50]} >
                        <View style={[styles.col, styles.col12, styles.appNav]} >
                            <Text onPress={() => {
                                this.props.hideAllViews();
                                this.props.toggleRemoteView();
                            }} style={styles.text}>REMOTE</Text>
                            <Text style={styles.text}> | </Text>
                            <Text onPress={() => {
                                this.props.hideAllViews();
                                this.props.toggleFocusView();
                            }} style={styles.text}>FOCUS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text}>FACE PANEL</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text}>ENCODERS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text}>DIRECT SELECTS</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text}>PLAYBACK</Text>
                            <Text style={styles.text}> | </Text>
                            <Text onPress={() => {
                                this.props.hideAllViews();
                                this.props.toggleOscLogView();
                            }} style={styles.text}>oscLog</Text>
                            <Text style={styles.text}> | </Text>
                            <Text style={styles.text} onPress={this.props.openSettings}>Settings</Text>
                        </View>{/* /button columns */}
                    </View>
                </View>
                <View style={[styles.col, styles.col2]} >
                    <View style={[styles.row, styles.height100]} >
                        <View style={[styles.col, styles.col4]} >
                            <ColorPickerIcon />
                        </View>
                        <View style={[styles.col, styles.col4]} >
                            <TenKeyIcon />
                        </View>
                        <View style={[styles.col, styles.col4]} >
                            <SettingsIcon />
                        </View>
                    </View>
                    
                </View>
                
            </View>
        );
    }
}
const styles2 = StyleSheet.create({
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