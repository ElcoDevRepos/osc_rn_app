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
import { useNavigation } from '@react-navigation/native';

export default DSModuleTypeButton = ({ name, module }) => {

    const navigation = useNavigation();

    const button = buttonsAll[name];
    //eos/ds/4/macro/1/20

    let type = "chan";
    let enabled = true;

    switch (name) {
        case "ds_Channels":
            type = "chan";
            break;
        case "ds_Macros":
            type = "macro";
            break;
        case "ds_Cues":
            type = "cues";
            break;
        case "ds_Groups":
            type = "group";
            break;
        case "ds_Intensity_Palettes":
            type = "ip";
            break;
        case "ds_Focus_Palettes":
            type = "fp";
            break;
        case "ds_Color_Palettes":
            type = "cp";
            break;
        case "ds_Beam_Palettes":
            type = "bp";
            break;
        case "ds_Effects":
            type = "fx";
            break;
        case "ds_Presets": 
            type = "preset";
            break;
        case "ds_Magic_Sheets":
            type = "ms";
            break;
        case "ds_Scenes":
            type = "scene";
            break;
        case "ds_Snapshots":
            type = "snap";
            break;
        case "ds_Clear":
            type = "clear";
            break;
        case "ds_Flexi":
            type = "flexi";
            break;
    }

    let returnPage = "DirectSelects";

    if (app.appState.currentPage == "Focus") {
        returnPage = "Focus";
    }


    const pressAction = () => {
        //ds.setAppState will request the module.
        app.ds.setAppState(module, type);  
        navigation.navigate(returnPage);
    }

    return (

        <Pressable
            style={[styles.btn, styles[button.style]]}
            address={button.address}
            onPress={() => {
                pressAction()
            }}>
            <Text style={[styles.btnText, styles[button.styleText]]}>{button.label}</Text>
        </Pressable>
 
    );
    
}
