import React from 'react';
import {
    View
} from 'react-native';

import styles from '../helpers/styles';
import { useSelector, useDispatch } from 'react-redux';

import CommandLine from '../components/infopanels/commandLine';
import DSModule20 from '../components/ds/dsModule20';
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
                                <DSModule20 module={1}></DSModule20>
                            </View>
                        </View>{/* /module row */}
                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DSModule20 module={2}></DSModule20>
                            </View>
                        </View>{/* /module row */}
                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DSModule20 module={3}></DSModule20>
                            </View>
                        </View>{/* /module row */}
                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col12]} >
                                <DSModule20 module={4}></DSModule20>
                            </View>
                        </View>{/* /module row */}
                    </View>

                    <View style={[styles.col, styles.col1]} >
                    </View>

                </View>
                

            </View> // pageContainer

        );
    
}
