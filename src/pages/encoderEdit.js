import React from 'react';
import {
    View, 
    Text, 
    Button
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
import { useNavigation } from '@react-navigation/native';
import EncoderEditModule from '../components/encoders/encoderEditModule';
import LayoutSaveView from '../components/layouts/layoutSaveView';
import LayoutLabelView from '../components/layouts/layoutLabelView';
import LayoutDeleteView from '../components/layouts/layoutDeleteView';


export default EncoderEdit = ({ }) => {
    
    const navigation = useNavigation();

  return (
            <View style={[styles.pageContainer, styles.pageContainerEdit]}>
            
                <View style={[styles.row, styles.row_single_encoder]} >
                    <View style={[styles.col, styles.col12]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                                              
                            </View>{/* /button columns */}
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col2]} >
                                
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col6]} >
                                
                            </View>{/* /button column */}
                        </View>{/* /row height50 */}
                    </View>{/* /module column */}
                </View>{/* /module row */}

                <View style={[styles.row, styles.enc_row_encoder]} >

                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'1'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'5'} />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'2'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'6'} />
                            </View>
                        </View>
                    </View>



                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.row_half_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
                                
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.row_layout_encoder]} >
                            <View style={[styles.col, styles.col12]} >
                                
                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'3'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'7'} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.col, styles.enc_col_encoder]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'4'} />
                            </View>
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                <EncoderEditModule module={'8'} />
                            </View>
                        </View>
                    </View>
                </View>

              <LayoutSaveView pageName={'enc'} />

              <LayoutLabelView pageName={'enc'} /> 

              <LayoutDeleteView pageName={'enc'} />            

            </View> // pageContainer

  );
}

