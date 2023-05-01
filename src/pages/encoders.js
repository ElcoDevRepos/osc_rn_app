import React from 'react';
import {
    View
} from 'react-native';
<<<<<<< HEAD

import styles from '../helpers/styles';
import { useSelector, useDispatch } from 'react-redux';
=======
import SliderHandle from '../components/slider';
>>>>>>> fc87df155e6e0f3c76ff259055a37942c2c38256

import CommandLine from '../components/infopanels/commandLine';
import InfoChan from '../components/infopanels/infoChan';
import InfoLevel from '../components/infopanels/infoLevel';
import InfoPatch from '../components/infopanels/infoPatch';
import InfoNotes from '../components/infopanels/infoNotes';
import StaticButton from '../components/staticButton';

export default Encoders = () => {

console.log("ENCODER PAGE IS RERENDERING");

    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

        return (
<<<<<<< HEAD
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

            </View> // pageContainer

=======
            <View>
                <SliderHandle></SliderHandle>
            </View> 
           
>>>>>>> fc87df155e6e0f3c76ff259055a37942c2c38256
        );
    
}
