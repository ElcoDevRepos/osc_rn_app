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
import FaderLoadButton from '../components/faders/faderLoadButton';
import Fader from '../components/faders/fader';
import FaderPageLabel from '../components/faders/faderPageLabel';
import FaderPageButton from '../components/faders/faderPageButton';
    
export default Playback = () => {

console.log("PLAYBACK PAGE IS RERENDERING");

    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

        return (
            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>

                <View style={[styles.row, styles.row_top_playback]} >

                    <View style={[styles.col, styles.col11]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <CommandLine></CommandLine>
                            </View>
                        </View>

                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'group'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'sub'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'cue'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'preset'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'intensity_palette'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'beam_palette'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'focus_palette'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'effect'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'shift'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'release'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'off'} />
                            </View>
                            <View style={[styles.col, styles.col1]} >
                                <StaticButton name={'stop_effect'} />
                            </View>
                        </View>{/* /row height50 */}
                    </View>{/* /module column */}
                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={'clear_cmd'} />
                            </View>
                        </View>{/* /row height50 */}
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={'enter'} />
                            </View>
                        </View>{/* /row height50 */}
                    </View>{/* /module column */}

                </View>{/* /module row */}

                <View style={[styles.row, styles.h100]} >


                    <View style={[styles.col, styles.col2]} >

                        <View style={[styles.row, styles.row_single_playback]} >
                            <View style={[styles.col, styles.col6]} >
                                <FaderPageLabel name={'fader_page'} />
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                <StaticButton name={'fader_up'} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_playback]} >
                            <View style={[styles.col, styles.col6]} >
                                <FaderPageButton name={'fader_page_select'} />
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                <StaticButton name={'fader_down'} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_playback]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={'load'} />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_double_playback]} >
                            <View style={[styles.col, styles.col12]} >
                                <QList name={'Qlist'} />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_playback]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={'back_stop'} />
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.row_single_playback]} >
                            <View style={[styles.col, styles.col12]} >
                                <StaticButton name={'go'} />
                            </View>
                        </View>{/* /button row */}

                    </View>

                    <View style={[styles.col, styles.col10]} >

                        <View style={[styles.row, styles.row_single_playback]} >

                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={1} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={2} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={3} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={4} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={5} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={6} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={7} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={8} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={9} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <FaderLoadButton num={10} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_fader_playback]} >

                            <View style={[styles.col, styles.w10]} >
                                <Fader num={1} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={2} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={3} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={4} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={5} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={6} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={7} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={8} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={9} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <Fader num={10} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_playback]} >

                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader1_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader2_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader3_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader4_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader5_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader6_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader7_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader8_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader9_back'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader10_back'} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.row_single_playback]} >

                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader1_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader2_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader3_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader4_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader5_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader6_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader7_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader8_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader9_go'} />
                            </View>
                            <View style={[styles.col, styles.w10]} >
                                <StaticButton name={'fader10_go'} />
                            </View>
                        </View>
                    </View>

                </View>{/* /module row */} 
         

            </View> // pageContainer

        );
    
}
