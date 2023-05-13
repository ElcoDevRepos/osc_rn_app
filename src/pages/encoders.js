import React from 'react';
import {
    View, 
    StyleSheet,
    Text
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
import LayoutButton from '../components/layouts/layoutButton';


import EncoderWheel from '../components/encoders/encoderWheel';

export default Encoders = () => {

    console.log("ENCODER PAGE IS RERENDERING");
    console.log(JSON.stringify(app.appConfig));


    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);


        return (

            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>
                <View style={[styles.row, styles.row_single_encoder]} >
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

                <View style={[styles.row, styles.enc_row_encoder]} >

                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'1'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'5'} />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'2'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'6'} />
                            </View>
                        </View>
                    </View>



                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.row_half_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                                LAYOUTS
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={1} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={2} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={3} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={4} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={5} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={6} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={7} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={8} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={9} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <LayoutButton pageName={'enc'} layoutNum={10} />
                            </View>
                        </View>
                    </View>




                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'3'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'7'} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'4'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderModule module={'8'} />
                            </View>
                        </View>
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
