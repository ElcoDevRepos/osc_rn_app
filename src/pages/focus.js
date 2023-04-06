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
    NativeEventEmitter
} from 'react-native';
import tcpOsc from '../../services/tcpOsc';

import CustomButton from '../components/button';
import buttons from '../helpers/buttons';
import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import updater from '../../services/updater';

export default class Focus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            buttonsAll: buttonsAll
        };

        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', async (oscMessage) => {
            console.log("focus message: ", oscMessage);
            await updater.alterSourceData(oscMessage);
            this.setState(buttonsAll);
        });
    }


    renderButton(name) {
        const buttonObject = [];
        button = this.state.buttonsAll[name];
        switch (button.functype) {
            case 'info':
                buttonObject.push(
                    (
                        <CustomButton
                            title={button.label}
                            id={button.label}
                            key={button.address}
                            style={[styles.info, styles[button.style]]}
                            styleText={[styles.infoText, styles[button.styleText]]}
                            onPress={() => {

                            }}
                            onPressIn={() => {

                            }}
                            onPressOut={() => {

                            }}>
                        </CustomButton>
                    )
                )
                break;

            case 'btn':
                buttonObject.push(
                    (
                        <CustomButton
                            title={button.label}
                            id={button.label}
                            key={button.address}
                            style={[styles.btn, styles[button.style]]}
                            styleText={[styles.btnText, styles[button.styleText]]}
                            onPress={() => {
                                tcpOsc.sendMessage(button.address, button.argvalue);
                            }}
                            onPressIn={() => {

                            }}
                            onPressOut={() => {

                            }}>
                        </CustomButton>
                    )
                )
                break;
        }// switch

        return buttonObject;
    }

    
    render() {
        return (
            <View style={styles.pageContainer}>
                <View style={[styles.row, styles.row_half_focus]} >
                    <View style={[styles.col, styles.col12]} >
                        {this.renderButton('commandLine')}
                    </View>
                </View>
                <View style={[styles.row, styles.height100]} >

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('1')}
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >
                            <View style={[styles.col, styles.col8]} >
                                {this.renderButton('0')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('0')}
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('0')}
                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.col7]} >

                        <View style={[styles.row]} >

                            <View style={[styles.col, styles.col10]} >
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                </View>
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderButton('0')}
                                    </View>
                                </View>
                                
                            </View>


                            <View style={[styles.col, styles.col2]} >
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('0')}
                                    </View>
                                </View>
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('0')}
                                    </View>
                                </View>

                            </View>


                        </View>  
                        {/* /ds row */}

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('part')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('cue')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('record')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('intensity_palette')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('focus_palette')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('record_only')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('color_palette')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('beam_palette')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('update')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('preset')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('sub')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('group')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('shift')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('delay')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('time')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}
                            </View>{/* /module column */}

                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('plus')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('thru')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('minus')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('7')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('8')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('9')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('4')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('5')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('6')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('1')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('2')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('3')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('clear_cmd')}
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('0')}
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        {this.renderButton('period')}
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                            </View>{/* /module column */}

                            <View style={[styles.col, styles.col2]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('part')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('intensity_palette')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('color_palette')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('preset')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('shift')}
                                    </View>
                                </View>{/* /button row */}
                            </View>
                        </View>

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col9]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    <View style={[styles.col, styles.col12]} >
                                        <View style={[styles.row, styles.height50]} >
                                            <View style={[styles.col, styles.col4]} >
                                                {this.renderButton('info-chan')}
                                            </View>{/* /button column */}
                                            <View style={[styles.col, styles.col4]} >
                                                {this.renderButton('info-level')}
                                            </View>{/* /button column */}
                                            <View style={[styles.col, styles.col4]} >
                                                {this.renderButton('info-patch')}
                                            </View>
                                        </View>
                                        <View style={[styles.row, styles.height50]} >
                                            <View style={[styles.col, styles.col12]} >
                                                    {this.renderButton('info-notes')}
                                            </View>{/* /button column */}
                                        </View>

                                      
                                    </View>{/* /button column */}
                                </View>
                            </View>
                        

                            <View style={[styles.col, styles.col3]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderButton('enter')}
                                    </View>
                                </View>
                            </View>{/* /module column */}
                        </View>

                    </View>
                    {/* /center column */}

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('0')}
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >
                            <View style={[styles.col, styles.col8]} >
                                {this.renderButton('0')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('0')}
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('0')}
                            </View>
                        </View>
                    </View>

                </View>
            </View> 
           
        );
    }
}