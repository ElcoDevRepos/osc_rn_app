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
import { renderObject, renderText } from '../helpers/utils';
import buttonsAll from '../helpers/buttonsAll';
import updater from '../../services/updater';

export default class Remote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsAll: buttonsAll
        };
        this.renderObject = renderObject.bind(this);
        // All Messages from EOS Will come here. 
        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', async (oscMessage) => {
            updater.alterSourceData(oscMessage);
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

    render() {
        return (
            <View style={styles.pageContainer}>
                <View style={[styles.row, styles.row_single_remote]} >
                    <View style={[styles.col, styles.col12]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('commandLine')}
                            </View>{/* /button columns */}
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col2]} >
                                {this.renderObject('info-chan')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                {this.renderObject('info-level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                {this.renderObject('info-patch')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col6]} >
                                {this.renderObject('info-notes')}
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
                                {this.renderObject('intensity')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderObject('focus')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderObject('color')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderObject('beam')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('address')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('learn')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('macro')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('delete')}
                            </View>
                            <View style={[styles.col, styles.col4]} >

                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('effect')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('Live')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('copy_to')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('recall_from')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('go_to_cue')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('block')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('assert')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('flash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('check')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('about')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('offset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('highlight')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('fan')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('park')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('capture')}
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
                                {this.renderObject('load')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderObject('all_nps')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_double_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('Qlist')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('back_stop')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('go')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('part')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('cue')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('record')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('intensity_palette')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('focus_palette')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('record_only')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('color_palette')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('beam_palette')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('update')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('preset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('sub')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('group')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('shift')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('delay')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('time')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('plus')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('thru')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('minus')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('7')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('8')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('9')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('4')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('5')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('6')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('1')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('2')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('3')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('clear_cmd')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('0')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('period')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('slash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('mark')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('sneak')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('rem_dim')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('plus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('home')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('out')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('minus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('trace')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('full')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('track')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('at')}
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                {this.renderObject('enter')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('select_last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('select_manual')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('select_active')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('next')}
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
