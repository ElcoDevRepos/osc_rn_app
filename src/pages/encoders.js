import React from 'react';
import {
    View, 
    StyleSheet
} from 'react-native';

import styles from '../helpers/styles';
import { useSelector, useDispatch } from 'react-redux';

import SliderHandle from '../components/faders/sliderHandle';

import CommandLine from '../components/infopanels/commandLine';
import InfoChan from '../components/infopanels/infoChan';
import InfoLevel from '../components/infopanels/infoLevel';
import InfoPatch from '../components/infopanels/infoPatch';
import InfoNotes from '../components/infopanels/infoNotes';
import StaticButton from '../components/staticButton';


import EncoderWheel from '../components/encoders/encoderWheel';

export default Encoders = () => {

console.log("ENCODER PAGE IS RERENDERING");

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

                <View style={[styles.row, styles.row_fader_playback]} >
                    <View style={[styles.col, styles.col6]} >
                        <EncoderWheel />
                    </View>
                    <View style={[styles.col, styles.col6]} >
                        <EncoderWheel />
                    </View>
                </View>

            </View> // pageContainer

        );
    
}
const localStyles = StyleSheet.create({
    responderStyle: {
        backgroundColor: 'blue',
        elevation: 3,
        shadowColor: 'rgba(0,0,0,.7)',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    wheelWrapper: {
        borderRadius: 120,
        elevation: 5,
        padding: 0,
        shadowColor: 'rgba(100,0,0,1)',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        zIndex: 1,
    },
})
