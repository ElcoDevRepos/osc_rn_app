import React from 'react';
import {
    View
} from 'react-native';

import styles from '../helpers/styles';
import { useSelector, useDispatch } from 'react-redux';

import CommandLine from '../components/infopanels/commandLine';
import InfoChan from '../components/infopanels/infoChan';
import InfoLevel from '../components/infopanels/infoLevel';
import InfoPatch from '../components/infopanels/infoPatch';
import InfoNotes from '../components/infopanels/infoNotes';
import DirectSelectModule from '../components/ds/directselect5';
import StaticButton from '../components/staticButton';
import EncoderModule from '../components/encoders/encoderModule';

export default Focus = () => {

console.log("FOCUS PAGE IS RERENDERING");

    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

        return (
            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>
                <View style={[styles.row, styles.row_half_focus]} >
                    <View style={[styles.col, styles.col12]} >
                        <CommandLine></CommandLine> 
                    </View>
                </View>
                <View style={[styles.row, styles.height100]} >

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                <EncoderModule module={ '9' } />

                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >
                            <View style={[styles.col, styles.col8]} >
                                <StaticButton name={ 'last' } />
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'select_manual' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                <EncoderModule module={ '11' } />

                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.col7]} >
                        { /* DS 5 */}
                        <View style={[styles.row]} >

                            <View style={[styles.col, styles.col12]} >

                                <DirectSelectModule module={5}></DirectSelectModule>

                            </View>


                        </View>
                        {/* /ds row */}

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                                <View style={[styles.row, styles.row_single_focus]} >
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

                            <View style={[styles.col, styles.col2]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        <StaticButton name={ 'part' } />
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        <StaticButton name={ 'intensity_palette' } />
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        <StaticButton name={ 'color_palette' } />
                                    </View>
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        <StaticButton name={ 'preset' } />
                                    </View>
                                </View>

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col12]} >
                                        <StaticButton name={ 'shift' } />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col9]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    <View style={[styles.col, styles.col12]} >
                                        <View style={[styles.row, styles.height50]} >
                                            <View style={[styles.col, styles.col4]} >
                                                <InfoChan></InfoChan>
                                            </View>
                                            <View style={[styles.col, styles.col4]} >
                                                <InfoLevel></InfoLevel>
                                            </View>
                                            <View style={[styles.col, styles.col4]} >
                                                <InfoPatch></InfoPatch>
                                            </View>
                                        </View>
                                        <View style={[styles.row, styles.height50]} >
                                            <View style={[styles.col, styles.col12]} >
                                                <InfoNotes></InfoNotes>
                                            </View>
                                        </View>


                                    </View>
                                </View>
                            </View>


                            <View style={[styles.col, styles.col3]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    <View style={[styles.col, styles.col12]} >
                                        <StaticButton name={ 'enter' } />
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                   

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                <EncoderModule module={ '10' } />

                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >

                            <View style={[styles.col, styles.col4]} >
                                <StaticButton name={ 'select_last' } />
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                <StaticButton name={ 'next' } />
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                <EncoderModule module={'12'} />

                            </View>
                        </View>
                    </View>

                </View>
                
            </View>  
        );
    
}
