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
import Softkey from '../components/softkey';
import StaticButton from '../components/staticButton';



export default FacePanel = () => {


    console.log("FACEPANEL PAGE IS RERENDERING");

    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

        return (
            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>

                {/* /PAGE ROW 1 */}
                <View style={styles.row} >

                    {/* /MODULE 1 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'displays' } />
                            </View> 
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'ping' } /> 
                            </View> 
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'address' } />
                            </View> 
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'macro' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'help' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'learn' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'delete' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'path' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'effect' } />
                            </View>
                        </View>
                    </View>
                    {/* /MODULE 1 */}

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <Softkey num={1}></Softkey>
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <Softkey num={2}></Softkey>
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <Softkey num={3}></Softkey>
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'query' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'copy_to' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'recall_from' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'go_to_cue' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'block' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'assert' } />
                            </View>
                        </View>
                    </View>
                    {/* /MODULE 2 */}

                    {/* /MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <Softkey num={4}></Softkey>
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <Softkey num={5}></Softkey>
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <Softkey num={6}></Softkey>
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'flash' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'check' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'about' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'undo' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'highlight' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'fan' } />
                            </View>
                        </View>
                    </View>
                    {/* /MODULE 3 */}

                    {/* /MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'more_softkeys' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Live' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Blind' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'park' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Escape' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Select' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'capture' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Arrow_Up' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'intensity' } />
                            </View>
                        </View>

                    </View>
                    {/* /ROW 1 MODULE 4 */}

                </View>
                {/* /PAGE ROW 1 */}

                {/* /PAGE ROW 2 */}
                <View style={styles.row} >

                    {/* /MODULE 1 */}
                    <View style={[styles.col, styles.col9]} >

                        <View style={[styles.row, styles.row_half_facepanel]} >
                                    <View style={[styles.col, styles.col12]} >
                                        <CommandLine></CommandLine>
                                    </View>{/* /button columns */}
                        </View>
                        <View style={[styles.row, styles.row_half_facepanel]} >
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

                    </View>
                    {/* /ROW 2 MODULE 1 */}

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Arrow_Left' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Arrow_Down' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'Arrow_Right' } />
                            </View>
                        </View>

                    </View>
                    {/* /ROW 2 MODULE 2 */}
                </View>
                {/* /PAGE ROW 2 */}

                {/* /PAGE ROW 3 */}
                <View style={styles.row} >

                    {/* /MODULE 1 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'part' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'cue' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'record' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'intensity_palette' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'focus_palette' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'record_only' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'color_palette' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'beam_palette' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'update' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'preset' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'sub' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'group' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'shift' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'delay' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'time' } />
                            </View>
                        </View>{/* /button row */}
                    </View>
                    {/* /ROW 3 MODULE 1 */}

                    {/* /ROW 3 MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'plus' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'thru' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'minus' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '7' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '8' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '9' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '4' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '5' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '6' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '1' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '2' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '3' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'clear_cmd' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ '0' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'period' } />
                            </View>
                        </View>{/* /button row */}

                    </View>
                    {/* /ROW 3 MODULE 2 */}

                    {/* /ROW 3 MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'slash' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'mark' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'sneak' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'rem_dim' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'plus_percent' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'home' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'out' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'minus_percent' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'trace' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'full' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'level' } />
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'track' } />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'at' } />
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                <StaticButton name={ 'enter' } />
                            </View>
                        </View>{/* /button row */}

                    </View>
                    {/* /ROW 3 MODULE 3 */}

                    {/* /ROW 3 MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'select_last' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'tab' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'flexi' } />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'select_manual' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'format' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'expand' } />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'select_active' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'offset' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'time' } />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'last' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'data' } />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_facepanel]} >
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'next' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'snapshot' } />
                            </View>
                        </View>
                        
                    </View>
                    {/* /MODULE 4 */}
                </View>
                {/* /PAGE ROW 3 */}


              {/* /PAGE CONTAINER */}
            </View>

        );
    
}
