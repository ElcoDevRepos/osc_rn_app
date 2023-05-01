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

import styles from '../helpers/styles';
import { renderObject } from '../helpers/utils';
import { useSelector, useDispatch } from 'react-redux';

import CommandLine from '../components/commandLine';
import InfoChan from '../components/infoChan';
import InfoLevel from '../components/infoLevel';
import InfoPatch from '../components/infoPatch';
import InfoNotes from '../components/infoNotes';


export default Remote = () => {

console.log("REMOTE PAGE IS RERENDERING 4");

    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

        return (
            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>
                <View style={[styles.row, styles.row_single_remote]} >
                    <View style={[styles.col, styles.col12]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <CommandLine></CommandLine>                              
                            </View>{/* /button columns */}
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col2]} >
                                <InfoChan></InfoChan>
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                <InfoLevel></InfoLevel>
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                <InfoPatch></InfoPatch>
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col6]} >
                                <InfoNotes></InfoNotes>
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
                                {renderObject('intensity')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {renderObject('focus')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {renderObject('color')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {renderObject('beam')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('address')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('learn')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('macro')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('delete')}
                            </View>
                            <View style={[styles.col, styles.col4]} >

                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('effect')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('Live')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('copy_to')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('recall_from')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('go_to_cue')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('block')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('assert')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('flash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('check')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('about')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('offset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('highlight')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('fan')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('park')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('capture')}
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
                                {renderObject('load')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {renderObject('all_nps')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_double_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('Qlist')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('back_stop')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('go')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('part')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('cue')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('record')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('intensity_palette')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('focus_palette')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('record_only')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('color_palette')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('beam_palette')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('update')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('preset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('sub')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('group')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('shift')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('delay')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('time')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('plus')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('thru')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('minus')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('7')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('8')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('9')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('4')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('5')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('6')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('1')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('2')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('3')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('clear_cmd')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('0')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('period')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('slash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('mark')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('sneak')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('rem_dim')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('plus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('home')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('out')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('minus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('trace')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('full')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('track')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {renderObject('at')}
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                {renderObject('enter')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('select_last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('select_manual')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('select_active')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {renderObject('next')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                </View>{/* /PAGE ROW 3 */}

            </View> // pageContainer

        );
    
}
