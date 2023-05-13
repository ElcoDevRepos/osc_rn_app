import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Pressable } from 'react-native';

export default LayoutButton = ({ layoutNum, pageName }) => {

    const name = pageName + "_lay_" + layoutNum;
    const actionName = name + "_ACTIVE";
    const currentMaster = app.appState.currentMasterLayout;


    const style = useSelector(state => state.layoutsReducer[name.toUpperCase()].style);
    const label = useSelector(state => state.layoutsReducer[name.toUpperCase()].label);
    const button = buttonsAll[name];    

    /*
    if (app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1][pageName + "PageActive"]) {
        app.dispatch({ type: actionName.toUpperCase(), payload: { style: "layoutBtnActive" } });
    }
    */

        const handlePress = () => {

            app.recallLayout(layoutNum);

        }
    

    return (

                    <Pressable
                        style={[styles.btn, styles[style]]}
                        address={button.address}
                        onPress={handlePress}>
                        <Text style={[styles.btnText, styles[button.styleText]]}>{label}</Text>
                    </Pressable>
 
    );
    
}
