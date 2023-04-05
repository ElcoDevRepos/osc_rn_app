import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity
} from 'react-native';

import tcpOsc from '../../services/tcpOsc';
import {
    NativeEventEmitter
  } from 'react-native';
import CustomButton from '../components/button';
import buttons from '../helpers/buttons';
import buttonsAll from '../helpers/buttonsAll';
export default class Remote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: buttons,
            buttonsAll: buttonsAll
          };
        // All Messages from EOS Will come here. 
        // They still need to be decoded. 
        const eventEmitter = new NativeEventEmitter(tcpOsc);
        eventEmitter.addListener('GotMessage', (oscMessage) => {
            console.log("message: ", oscMessage);
            this.alterButtonData();
        });
    }

    alterButtonData() {
        // You can alter your buttons data here.
        // Then call the setState to update the buttons value
        
        //buttons[0].title = "Test";
        this.setState(buttons);
        this.setState(buttonsAll);
    }

    renderButtons() {
        const buttonObjects = [];
        this.state.buttons.forEach((button) => {
            buttonObjects.push(
                (
                    <CustomButton title={button.title} id={button.attribute} key={button.attribute} onPress={() => {
                        tcpOsc.sendMessage(button.attribute, button.arguments);
                    }}></CustomButton>
                )
            )
        })

        return buttonObjects;
    }

    renderButton(name) {
        const buttonObject = [];
        button = this.state.buttonsAll[name];
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        style={[styles.btn, styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        onPress={() => {
                        tcpOsc.sendMessage(button.address, button.argvalue);
                        }}
                        onPressIn={() => {
                            
                        }}
                        onPressOut={() => {
                            
                        }}>
                    </CustomButton>
                )
            )
        
        return buttonObject;
    }


    render() {
        return (
            <View style={styles.pageContainer}>
                <View style={[styles.row, styles.btn_Row_Remote]} >
                    <View style={[styles.col, styles.col12]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('intensity')}
                            </View>{/* /button column */}
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('intensity')}
                            </View>{/* /button column */}
                        </View>{/* /row height50 */}
                    </View>{/* /module column */}
                </View>{/* /module row */}  

                {/* /PAGE ROW 2 */}
                <View style={styles.row} >

                    {/* /MODULE 1 */}
                    <View style={[styles.col, styles.col2]} >
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('intensity')}   
                            </View> 
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('focus')}
                            </View>{/* /button column */}                           
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('color')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('beam')}
                            </View>{/* /button column */}
                        </View>{/* /button row */} 
                    </View>{/* /module column */} 

                    {/* /MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('address')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('learn')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('macro')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('delete')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('effect')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('Live')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('copy_to')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('recall_from')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('go_to_cue')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('block')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('assert')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}  

                    {/* /MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('flash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('check')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('about')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('offset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('highlight')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('fan')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('park')}
                            </View>
                        </View>{/* /button row */}
                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('capture')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */} 

                </View>{/* /PAGE ROW 2 */}


                {/* /PAGE ROW 3 */}
                <View style={styles.row} >

                    {/* /ROW 3 MODULE 1 */}
                    <View style={[styles.col, styles.col2]} >

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('load')}
                            </View>
                            <View style={[styles.col, styles.col6]} >
                                {this.renderButton('all_nps')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('Qlist')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('Qlist')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('back_stop')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('go')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */} 

                    {/* /ROW 3 MODULE 2 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('part')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('cue')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('record')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('intensity_palette')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('focus_palette')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('record_only')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('color_palette')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('beam_palette')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('update')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('preset')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('sub')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('group')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('shift')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('delay')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('time')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 3 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('plus')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('thru')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('minus')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('7')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('8')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('9')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('4')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('5')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('6')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('1')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('2')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('3')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('clear_cmd')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('0')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('period')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 4 */}
                    <View style={[styles.col, styles.col3]} >

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('slash')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('mark')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('sneak')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('rem_dim')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('plus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('home')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('out')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('minus_percent')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('trace')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('full')}
                            </View>
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('track')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col4]} >
                                {this.renderButton('at')}
                            </View>
                            <View style={[styles.col, styles.col8]} >
                                {this.renderButton('enter')}
                            </View>{/* /button column */}
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                    {/* /ROW 3 MODULE 5 */}
                    <View style={[styles.col, styles.col1]} >

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('select_last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('select_manual')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('select_active')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('last')}
                            </View>
                        </View>{/* /button row */}

                        <View style={[styles.row, styles.btn_Row_Remote]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderButton('next')}
                            </View>
                        </View>{/* /button row */}
                    </View>{/* /module column */}

                </View>{/* /PAGE ROW 3 */}

                {/*
                <View style={{ flex: 1, backgroundColor: 'red' }} >

                        <Text>
                            This is a todays test 7
                        </Text>
                    </View>
                <View style={{ flex: 1, backgroundColor: 'blue' }} >
                    {this.renderButtons()}
                        <Text>
                            This is a another test
                        </Text>
                </View>
                    */}
            </View> // pageContainer
                

        );
    }
}
const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1e1e28'
    },
    height50: {
        flexBasis: '50%'
    },
    btn_Row_Remote: {
        flexBasis: '12.2%',
    },
    btn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderRadius: 5
    },
    btnText: {
        fontSize: 16
    },
    /* style 1 - RED */
    btn1: {
        borderColor: '#c61c00',
        backgroundColor: '#290703'
    },
    btn1Text: {
        color: '#cccccc'
    },
    btn1Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#290703'
    },
    btn1TextPressed: {
        color: '#eaa906'
    },
    btn1Latched: {
        borderColor: '#c61c00',
        backgroundColor: '#480600'
    },
    btn1TextLatched: {
        color: '#c11d1d'
    },
    /* style 2 - ORANGE */
    btn2: {
        borderColor: '#eb750d',
        backgroundColor: '#2d0f00'
    },
    btn2Text: {
        color: '#cccccc'
    },
    btn2Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#2d0f00'
    },
    btn2TextPressed: {
        color: '#eaa906'
    },
    btn2Latched: {
        borderColor: '#eb750d',
        backgroundColor: '#732600'
    },
    btn2TextLatched: {
        color: '#c11d1d'
    },
    /* style 3 - YELLOW */
    btn3: {
        borderColor: '#eaa906',
        backgroundColor: '#2e2405'
    },
    btn3Text: {
        color: '#cccccc'
    },
    btn3Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#2e2405'
    },
    btn3TextPressed: {
        color: '#eaa906'
    },
    btn3Latched: {
        borderColor: '#eaa906',
        backgroundColor: '#583800'
    },
    btn3TextLatched: {
        color: '#eaa906'
    },

    /* style 4 - GREEN */
    btn4: {
        borderColor: '#49bb11',
        backgroundColor: '#0a1704'
    },
    btn4Text: {
        color: '#cccccc'
    },
    btn4Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#0a1704'
    },
    btn4TextPressed: {
        color: '#eaa906'
    },
    btn4Latched: {
        borderColor: '#49bb11',
        backgroundColor: '#143b06'
    },
    btn4TextLatched: {
        color: '#49bb11'
    },

    /* style 5 */
    btn5: {
        borderColor: '#07bbff',
        backgroundColor: '#0d2130'
    },
    btn5Text: {
        color: '#cccccc'
    },
    btn5Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#0d2130'
    },
    btn5TextPressed: {
        color: '#eaa906'
    },
    btn5Latched: {
        borderColor: '#07bbff',
        backgroundColor: '#004a51'
    },
    btn5TextLatched: {
        color: '#07bbff'
    },

    /* style 6 - CYAN */
    btn6: {
        borderColor: '#299cd1',
        backgroundColor: '#111922'
    },
    btn6Text: {
        color: '#cccccc'
    },
    btn6Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#111922'
    },
    btn6TextPressed: {
        color: '#eaa906'
    },
    btn6Latched: {
        borderColor: '#299cd1',
        backgroundColor: '#0a2d4e'
    },
    btn6TextLatched: {
        color: '#299cd1'
    },

    /* style 7 - LT BLUE */
    btn7: {
        borderColor: '#4b5cb0',
        backgroundColor: '#141630'
    },
    btn7Text: {
        color: '#cccccc'
    },
    btn7Pressed: {
        borderColor: '#eaa906',
            backgroundColor: '#141630'
    },
    btn7TextPressed: {
        color: '#eaa906'
    },
    btn7Latched: {
        borderColor: '#071a5a',
            backgroundColor: '#4b5cb0'
    },
    btn7TextLatched: {
        color: '#8397ff'
    },

    /* style 8 - BLUE*/
    btn8: {
        borderColor: '#6aa6ff',
        backgroundColor: '#090922'
    },
    btn8Text: {
        color: '#cccccc'
    },
    btn8Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#090922'
    },
    btn8TextPressed: {
        color: '#eaa906'
    },
    btn8Latched: {
        borderColor: '#6aa6ff',
        backgroundColor: '#000044'
    },
    btn8TextLatched: {
        color: '#6aa6ff'
    },

    /* style 9 - PURPLE */
    btn9: {
        borderColor: '#a665ff',
        backgroundColor: '#1a0420'
    },
    btn9Text: {
        color: '#cccccc'
    },
    btn9Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#1a0420'
    },
    btn9TextPressed: {
        color: '#eaa906'
    },
    btn9Latched: {
        borderColor: '#a665ff',
        backgroundColor: '#420b51'
    },
    btn9TextLatched: {
        color: '#a665ff'
    },

    /* style 10 - MAG */
    btn10: {
        borderColor: '#c318b0',
        backgroundColor: '#1b031a'
    },
    btn10Text: {
        color: '#cccccc'
    },
    btn10Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#1b031a'
    },
    btn10TextPressed: {
        color: '#eaa906'
    },
    btn10Latched: {
        borderColor: '#c318b0',
        backgroundColor: '#460043'
    },
    btn10TextLatched: {
        color: '#c318b0'
    },

    /* style 11 - BLACK */
    btn11: {
        borderColor: '#cccccc',
        backgroundColor: '#111111'
    },
    btn11Text: {
        color: '#cccccc'
    },
    btn11Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#111111'
    },
    btn11TextPressed: {
        color: '#eaa906'
    },
    btn11Latched: {
        borderColor: '#ffffff',
        backgroundColor: '#202020'
    },
    btn11TextLatched: {
        color: '#ffffff'
    },

    /* style 12 - GREY */
    btn12: {
        borderColor: '#bababa',
        backgroundColor: '#28282e'
    },
    btn12Text: {
        color: '#cccccc'
    },
    btn12Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#28282e'
    },
    btn12TextPressed: {
        color: '#eaa906'
    },
    btn12Latched: {
        borderColor: '#bababa',
        backgroundColor: '#4d4d51'
    },
    btn12TextLatched: {
        color: '#bababa'
    },

    /* BOOTSTRAP FOR DUMMIES */
    row: {
        width: '100%',
        flexDirection: 'row'
    },
    col: {
        height: '100%',
        padding: 4
    },
    col1: {
        width: '8.3333333%',
    },
    col2: {
        width: '16.666666%',
    },
    col3: {
        width: '25%',
    },
    col4: {
        width: '33.33333333%',
    },
    col5: {
        width: '41.666666667%',
    },
    col6: {
        width: '50%'
    },
    col7: {
        width: '58.3333333%',
    },
    col8: {
        width: '66.666666%',
    },
    col9: {
        width: '75%',
    },
    col10: {
        width: '83.33333333%',
    },
    col11: {
        width: '91.666666667%',
    },
    col12: {
        width: '100%'
    },
})