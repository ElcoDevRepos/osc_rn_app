
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1e1e28'
    },
    height50: {
        flexBasis: '50%'
    },
    height100: {
        height: '100%'
    },
    row_single_remote: {
        flexBasis: '12.2%'
    },
    row_double_remote: {
        flexBasis: '24.4%'
    },

    row_half_focus: {
        flexBasis: '5.75%'
    },
    row_single_focus: {
        flexBasis: '11.5%'
    },
    row_double_focus: {
        flexBasis: '23%'
    },


    enc_col: {
        width: '20.833333%'
    },
    enc_row_focus: {
        height: '41%'
    },

    encoder: {
        width: '100%',
        height: '100%',
        borderColor: '#4b5cb0',
        borderWidth: 2,
        borderRadius: 0,
        backgroundColor: '#141630',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    encoderBtn_col: {
        width: '33.3333%',
        height: '100%',
        borderColor: '#4b5cb0',
        borderTopWidth: 1,
    },

    encoderBtn_max: {
        borderColor: '#4b5cb0',
        borderRightWidth: 1,
        borderLeftWidth: 1
    },

    encoderBtn: {
        width: '100%',
        height: '100%',
        
        borderRadius: 0,
        backgroundColor: '#141630',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    encoderBtn_focus: {
        height: '15%',
        flexDirection: 'row'
    },
    encoderBtnText: {
        color: '#ffffff'
    },
    

    /* BUTTONS */
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

    /* INFO PANELS */
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 2,
        paddingLeft: 4
    },
    infoText: {
        fontSize: 16
    },
    info1: {
        borderColor: '#c61c00',
        backgroundColor: '#000000'
    },
    info1Text: {
        color: '#cccccc'
    },
    info3: {
        borderColor: '#eaa906',
        backgroundColor: '#000000'
    },
    info3Text: {
        color: '#cccccc'
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
});

export default styles;
