import React from 'react';
import {
    View
} from 'react-native';

import styles from '../helpers/styles';
import { useSelector, useDispatch } from 'react-redux';

import CommandLine from '../components/infopanels/commandLine';
import DirectSelectModule from '../components/ds/directselect10';
import StaticButton from '../components/staticButton';

export default DirectSelects = () => {

console.log("DS PAGE IS RERENDERING");

    const pageContainerStyle = useSelector(state => state.buttonsReducer.pageContainer.style);

        return (
            <View style={[styles.pageContainer, styles[pageContainerStyle]]}>
                <View style={[styles.row]} >
                    <View style={[styles.col, styles.col11]} >
                        <View style={[styles.row, styles.row_half_ds]} >
                            <View style={[styles.col, styles.col12]} >
                                <CommandLine></CommandLine>
                            </View>{/* /button columns */}
                        </View>{/* /module row */}

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DirectSelectModule module={1}></DirectSelectModule>
                            </View>
                        </View>{/* /module row */}
                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DirectSelectModule module={2}></DirectSelectModule>
                            </View>
                        </View>{/* /module row */}
                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DirectSelectModule module={3}></DirectSelectModule>
                            </View>
                        </View>{/* /module row */}
                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DirectSelectModule module={4}></DirectSelectModule>
                            </View>
                        </View>{/* /module row */}
                    </View>

                    <View style={[styles.col, styles.col1]} >
                    </View>

                </View>
                

            </View> // pageContainer

        );
    
}
