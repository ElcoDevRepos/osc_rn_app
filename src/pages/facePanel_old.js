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
import styles from '../helpers/styles';
import { renderObject, renderText } from '../helpers/utils';
import buttonsAll from '../helpers/buttonsAll';
import updater from '../../services/updater';
/*
// buttonsAll has about 400 other definitions in it.   This abbreviated list is to simplify things.
const buttonsAll = {
    'commandLine': { 'address': '', 'style': 'info3', 'stylePressed': 'info3Pressed', 'styleText': 'info3Text', 'functype': 'info', 'label': 'LIVE: CMD LINE', 'argtype': 'i', 'argvalue': '0' },
    'info-chan': { 'address': '', 'style': 'info1', 'stylePressed': 'info1Pressed', 'styleText': 'info1Text', 'functype': 'info', 'label': 'Chan : ', 'argtype': 'i', 'argvalue': '0' },
    'info-patch': { 'address': '', 'style': 'info1', 'stylePressed': 'info1Pressed', 'styleText': 'info1Text', 'functype': 'info', 'label': 'Patch : ', 'argtype': 'i', 'argvalue': '0' },
    'info-level': { 'address': '', 'style': 'info1', 'stylePressed': 'info1Pressed', 'styleText': 'info1Text', 'functype': 'info', 'label': 'Level : ', 'argtype': 'i', 'argvalue': '0' },
    'info-notes': { 'address': '', 'style': 'info1', 'stylePressed': 'info1Pressed', 'styleText': 'info1Text', 'functype': 'info', 'label': 'Notes : ', 'argtype': 'i', 'argvalue': '0' },
}

// renderObject Returns a button, infoPanel, slider, etc based on the functype.
// Source files for infoText and StaticButton are found in src\components
const renderObject = (name) => {

    const buttonObject = [];
    button = buttonsAll[name];
    switch (button.functype) {
        case 'info':
            buttonObject.push(
                (
                    <InfoText
                        functype={button.functype}
                        title={button.label}
                        id={button.label}
                        key={button.label}
                        style={[styles.info, styles[button.style]]}
                        styleText={[styles.infoText, styles[button.styleText]]}
                    >
                    </InfoText>
                )
            )
            break;

        case 'btn':
            // TODO
            // While we are looking at buttons.  onPressIn - it would be great to change to styles[button.stylePressed].
            // onPressOut - Switch back to styles[button.style]
            buttonObject.push(
                (
                    <StaticButton
                        title={button.label}
                        isPressed={false}
                        id={button.label}
                        key={button.address}
                        style={[styles.btn, styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        address={button.address}
                        argvalue={button.argvalue}
                        onPressIn={(data) => {
                            tcpOsc.sendMessage(data.address, [{ type: "i", value: 1 }])
                        }}
                        onPressOut={(data) => {
                            tcpOsc.sendMessage(data.address, [{ type: "i", value: 0 }])
                        }}>
                    </StaticButton>
                )
            )
            break;
    }// switch

    return buttonObject;
};

const updater = {};

    updater.alterSourceData = (osc_message) => {

        // updater breaks the OSC messages up into their component parts
        // updater then updates the buttonsAll object with the new values
        // This is helpful if I need to render a new page but retain the new button values.
        // updater can return whatever we need to consume at the page level so that we can specify which button to update.
        // example : 
        buttonsAll['info-chan']['label'] = "Chan :: ";
        buttonsAll['info-level']['label'] = "Level :: ";

        const rerenderArray = {
            'info-chan': { ' label': 'Chan :: ' }
            'info-level': { ' label': 'Level :: ' }
        };

        return rerenderArray;
}

*/
export default class FacePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            // TODO
            // Here we probably need to specify a specific states for each object.  That's fine.
            // If there is a way not to write them all out by hand that would be great.
             // buttonsAll: buttonsAll
        };

        this.renderObject = renderObject.bind(this);
        this.eventEmitter = null;
        this.buttonsAll = buttonsAll
        

        
    }

    componentDidMount() {
        // TODO
        // Probably want to put the event listener in here.
        // All Messages from EOS Will come here. 
        const pageName = 'facepanel';
        this.eventEmitter = new NativeEventEmitter(tcpOsc);

        this.eventEmitter.addListener('GotMessage', async (oscMessage) => {
            // TODO : Explanation
            // This function updater takes the message and decodes it's contents.
            // To keep it simple assume that the message is a string with a format "output/button/id/title, 'newTitleText'"
            // updater can return whatever we need to consume at the page level so that we can specify which button to update.  
            // Just specify what it wants to be
            // for now assume it's { id : "new title text" }
            const rerenderArray = await updater.alterSourceData(oscMessage);

            // console.log(rerenderArray);

            // TODO
            // This causes the whole page to rerender.  We dont want that.
            this.setState({
               buttonsAll: {...buttonsAll}
             });

            // Spelling Mistake here.   buttonsAll 
        });
    }

    componentWillUnmount() {
        // TODO
        // Probably want to remove the event listener in here.
        // Would take advice
        this.eventEmitter.removeListener('GotMessage')

    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.state) {
            return true;
        }
        else {
            return false;
        }
    }

    // THIS IS A VERY SMALL PORTION OF THE PAGE.  THE REST IS SIMILAR. JUST A LOT MORE BUTTONS AND INFO PANELS 

    render() {
        console.log("FACE PANEL PAGE IS RERENDERING");
        
        return (
            <View style={styles.pageContainer}>
                <View style={[styles.row, styles.row_single_remote]} >
                    <View style={[styles.col, styles.col12]} >
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col12]} >
                                {this.renderObject('commandLine')}
                            </View>{/* /button columns */}
                        </View>
                        <View style={[styles.row, styles.height50]} >
                            <View style={[styles.col, styles.col2]} >
                                {this.renderObject('info-chan')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                {this.renderObject('info-level')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col2]} >
                                {this.renderObject('info-patch')}
                            </View>{/* /button column */}
                            <View style={[styles.col, styles.col6]} >
                                {this.renderObject('info-notes')}
                            </View>{/* /button column */}
                        </View>{/* /row height50 */}
                    </View>{/* /module column */}
                </View>{/* /module row */}

            </View> // pageContainer


        );
    }
}
