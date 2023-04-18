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
import { renderObject, renderText } from '../helpers/utils';
import updater from '../../services/updater';

export default class Focus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsAll: buttonsAll
        };
        this.renderObject = renderObject.bind(this);

        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', async (oscMessage) => {
            updater.alterSourceData(oscMessage);
            this.setState(buttonsAll);
        });
    }
    
    render() {
        return (
            <View style={styles.pageContainer}>
                <View style={[styles.row, styles.row_half_focus]} >
                    <View style={[styles.col, styles.col12]} >
                        {this.renderObject('commandLine')}
                    </View>
                </View>
                <View style={[styles.row, styles.height100]} >

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                { /* ENCODER */ }
                                <View style={[styles.encoder]} >
                                    <View style={[styles.row, styles.encoderBtn_focus]}>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder9_min')}
                                        </View>
                                        <View style={[styles.encoderBtn_col, styles.encoderBtn_max]} >
                                            {this.renderObject('encoder9_max')}
                                        </View>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder9_home')}
                                        </View>
                                    </View>
                                </View>
                                { /* ENCODER */}
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >
                            <View style={[styles.col, styles.col8]} >
                                {this.renderObject('last')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('select_manual')}
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                { /* ENCODER */}
                                <View style={[styles.encoder]} >
                                    <View style={[styles.row, styles.encoderBtn_focus]}>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder11_min')}
                                        </View>
                                        <View style={[styles.encoderBtn_col, styles.encoderBtn_max]} >
                                            {this.renderObject('encoder11_max')}
                                        </View>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder11_home')}
                                        </View>
                                    </View>
                                </View>
                                { /* ENCODER */}
                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.col7]} >
                        { /* DS 5 */  }
                        <View style={[styles.row]} >

                            <View style={[styles.col, styles.col10]} >
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_1')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_2')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_3')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_4')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_5')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_select')}
                                    </View>
                                </View>
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_6')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_7')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_8')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_9')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_10')}
                                    </View>
                                    <View style={[styles.col, styles.col2]} >
                                        {this.renderObject('ds5_page')}
                                    </View>
                                </View>
                                
                            </View>


                            <View style={[styles.col, styles.col2]} >
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('ds5_up')}
                                    </View>
                                </View>
                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('ds5_down')}
                                    </View>
                                </View>

                            </View>


                        </View>  
                        {/* /ds row */}

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                            <View style={[styles.col, styles.col2]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('part')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('intensity_palette')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('color_palette')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('preset')}
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('shift')}
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
                                                {this.renderObject('info-chan')}
                                            </View>{/* /button column */}
                                            <View style={[styles.col, styles.col4]} >
                                                {this.renderObject('info-level')}
                                            </View>{/* /button column */}
                                            <View style={[styles.col, styles.col4]} >
                                                {this.renderObject('info-patch')}
                                            </View>
                                        </View>
                                        <View style={[styles.row, styles.height50]} >
                                            <View style={[styles.col, styles.col12]} >
                                                    {this.renderObject('info-notes')}
                                            </View>{/* /button column */}
                                        </View>

                                      
                                    </View>{/* /button column */}
                                </View>
                            </View>
                        

                            <View style={[styles.col, styles.col3]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    <View style={[styles.col, styles.col12]} >
                                        {this.renderObject('enter')}
                                    </View>
                                </View>
                            </View>{/* /module column */}
                        </View>

                    </View>
                    {/* /center column */}

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                { /* ENCODER */}
                                <View style={[styles.encoder]} >
                                    <View style={[styles.row, styles.encoderBtn_focus]}>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder10_min')}
                                        </View>
                                        <View style={[styles.encoderBtn_col, styles.encoderBtn_max]} >
                                            {this.renderObject('encoder10_max')}
                                        </View>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder10_home')}
                                        </View>
                                    </View>
                                </View>
                                { /* ENCODER */}
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >
                            
                            <View style={[styles.col, styles.col4]} >
                                {this.renderObject('select_last')}
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                {this.renderObject('next')}
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >
                                { /* ENCODER */}
                                <View style={[styles.encoder]} >
                                    <View style={[styles.row, styles.encoderBtn_focus]}>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder12_min')}
                                        </View>
                                        <View style={[styles.encoderBtn_col, styles.encoderBtn_max]} >
                                            {this.renderObject('encoder12_max')}
                                        </View>
                                        <View style={[styles.encoderBtn_col]} >
                                            {this.renderObject('encoder12_home')}
                                        </View>
                                    </View>
                                </View>
                                { /* ENCODER */}
                            </View>
                        </View>
                    </View>

                </View>
            </View> 
           
        );
    }
}