import React from 'react';
import {
    View
} from 'react-native';

import styles from '../helpers/styles';
import { renderObject } from '../helpers/utils';
import { useSelector, useDispatch } from 'react-redux';

import CommandLine from '../components/infopanels/commandLine';
import InfoChan from '../components/infopanels/infoChan';
import InfoLevel from '../components/infopanels/infoLevel';
import InfoPatch from '../components/infopanels/infoPatch';
import InfoNotes from '../components/infopanels/infoNotes';
import StaticButton from '../components/staticButton';
import QList from '../components/qList/qList';

export default Remote = () => {

console.log("REMOTE PAGE IS RENDERING");

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
                                <StaticButton name={ 'intensity' } />
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                <StaticButton name={ 'focus' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col6]} >
                                <StaticButton name={ 'color' } />
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                <StaticButton name={ 'beam' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'address' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'learn' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'macro' } />
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'delete' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >

                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'effect' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Live' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'copy_to' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'recall_from' } />
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'go_to_cue' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'block' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'assert' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'flash' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'check' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'about' } />
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'offset' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'highlight' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'fan' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'park' } />
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'capture' } />
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
                                <StaticButton name={ 'load' } />
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                <StaticButton name={ 'all_nps' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_double_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <QList name={ 'Qlist' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'back_stop' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'go' } />
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'part' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'cue' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'record' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'intensity_palette' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'focus_palette' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'record_only' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'color_palette' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'beam_palette' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'update' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'preset' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'sub' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'group' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'shift' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'delay' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'time' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'plus' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'thru' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'minus' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '7' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '8' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '9' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '4' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '5' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '6' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '1' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '2' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '3' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'clear_cmd' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '0' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'period' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'slash' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'mark' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'sneak' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'rem_dim' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'plus_percent' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'home' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'out' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'minus_percent' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'trace' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'full' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'level' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'track' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'at' } />
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                <StaticButton name={ 'enter' } />
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'select_last' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'select_manual' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'select_active' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'last' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_remote]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={ 'next' } />
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                </View>{/* /PAGE ROW 3 */}

            </View> 

        );
    
}
