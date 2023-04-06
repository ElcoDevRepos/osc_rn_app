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
import updater from '../../services/updater';

export default class Remote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsAll: buttonsAll
          };
        // All Messages from EOS Will come here. 
        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', async (oscMessage) => {
            console.log("remote message: ", oscMessage);
            await updater.alterSourceData(oscMessage);
            this.setState(buttonsAll);
        });
    }

    /*
    renderButtons() {
        const buttonObjects = [];
        this.state.buttons.forEach((button) => {
            buttonObjects.push(
                (
                    <CustomButton title={button.title} id={button.attribute} key={button.attribute} onPress={() => {
                        tcpOsc.sendMessage(button.attribute, button.arguments);
                    }}></CustomButton>
                )
            )
        })

        return buttonObjects;
    }
    */

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
                <View style={[styles.row, styles.row_single_remote]} >
                    <View style={[styles.col, styles.col12]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('commandLine')}
                            </View>{/* /button column */}
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col2]} >
                                {this.renderButton('info-chan')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                {this.renderButton('info-level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                {this.renderButton('info-patch')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('info-notes')}
                            </View>{/* /button column */}
                        </View>{/* /row height50 */}
                    </View>{/* /module column */}
                </View>{/* /module row */}  

                {/* /PAGE ROW 2 */}
                <View style={styles.row} >

                    {/* /MODULE 1 */}
                    <View style={[styles.col, styles.col2]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('intensity')}   
                            </View> 
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('focus')}
                            </View>{/* /button column */}                           
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('color')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('beam')}
                            </View>{/* /button column */}
                        </View>{/* /button row */} 
                    </View>{/* /module column */} 

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('address')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('learn')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('macro')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('delete')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('effect')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('Live')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('copy_to')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('recall_from')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('go_to_cue')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('block')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('assert')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}  

                    {/* /MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('flash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('check')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('about')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('offset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('highlight')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('fan')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('park')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('capture')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */} 

                </View>{/* /PAGE ROW 2 */}


                {/* /PAGE ROW 3 */}
                <View style={styles.row} >

                    {/* /ROW 3 MODULE 1 */}
                    <View style={[styles.col, styles.col2]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('load')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('all_nps')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_double_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('Qlist')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('back_stop')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('go')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */} 

                    {/* /ROW 3 MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                    {/* /ROW 3 MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                        <View style={[styles.row, styles.row_single_remote]} >
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

                    {/* /ROW 3 MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('slash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('mark')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('sneak')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('rem_dim')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('plus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('home')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('out')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('minus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('trace')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('full')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('track')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('at')}
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                {this.renderButton('enter')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('select_last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('select_manual')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('select_active')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('next')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                </View>{/* /PAGE ROW 3 */}

                {/*
                <View style={{ flex: 1, backgroundColor: 'red' }} >

                        <Text>
                            This is a todays test 7
                        </Text>
                    </View>
                <View style={{ flex: 1, backgroundColor: 'blue' }} >
                    {this.renderButtons()}
                        <Text>
                            This is a another test
                        </Text>
                </View>
                    */}
            </View> // pageContainer
                

        );
    }
}
