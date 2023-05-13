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


export default FocusEdit = ({ }) => {
    const navigation = useNavigation();

  return (
      <View style={[styles.pageContainer, styles.pageContainerEdit]}>
      <View style={[styles.row, styles.row_half_focus]} >
                    <View style={[styles.col, styles.col12]} >
                        
                    </View>
                </View>
                <View style={[styles.row, styles.height100]} >

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                
                                <EncoderEditModule module={'9'} />

                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >
                            <View style={[styles.col, styles.col8]} >
                            
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                
                            </View>
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                <EncoderEditModule module={'11'} />

                            </View>
                        </View>
                    </View>

                    <View style={[styles.col, styles.col7]} >
                        { /* DS 5 */}
                        <View style={[styles.row]} >

                            <View style={[styles.col, styles.col12]} >

                                

                            </View>


                        </View>
                        {/* /ds row */}

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>{/* /button column */}
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>
                                    <View style={[styles.col, styles.col4]} >
                                        
                                    </View>{/* /button column */}
                                    <View style={[styles.col, styles.col4]} >
                                       
                                    </View>{/* /button column */}
                                </View>{/* /button row */}
                            </View>{/* /module column */}

                            <View style={[styles.col, styles.col5]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                    
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
          
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
               
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                 
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                  
                                </View>{/* /button row */}

                            </View>{/* /module column */}

                            <View style={[styles.col, styles.col2]} >

                                <View style={[styles.row, styles.row_single_focus]} >
                                    
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    
                                </View>{/* /button row */}

                                <View style={[styles.row, styles.row_single_focus]} >
                                    
                                </View>

                                <View style={[styles.row, styles.row_single_focus]} >
                                    
                                </View>
                            </View>
                        </View>

                        <View style={[styles.row]} >
                            <View style={[styles.col, styles.col9]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    
                                </View>
                            </View>


                            <View style={[styles.col, styles.col3]} >
                                <View style={[styles.row, styles.row_single_focus]}>
                                    
                                </View>
                            </View>
                        </View>

                    </View>
                   

                    <View style={[styles.col, styles.enc_col]} >
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                               
                                <EncoderEditModule module={'10'} />

                            </View>
                        </View>
                        <View style={[styles.row, styles.row_single_focus]} >

                         
                        </View>
                        <View style={[styles.row, styles.enc_row_focus]} >
                            <View style={[styles.col, styles.col12]} >

                                <EncoderEditModule module={'12'} />

                            </View>
                        </View>
                    </View>

                </View>
      </View>

  );
}