import React from 'react';
import {
    View,
    Text,
    Pressable, 
    Image
} from 'react-native';
import { useState } from 'react';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Slider, Icon } from '@rneui/themed';

export default Fader = ({ num }) => {

    const buttonName = 'fader' + num + '_load';
    const styleName = 'FADER' + num + '_STYLE';
    const labelName = 'FADER' + num + '_LABEL';
    const valueName = 'FADER' + num + '_VALUE';
    const percentageName = 'FADER' + num + '_PERCENTAGE';

    const style = useSelector(state => state.fadersReducer[styleName].style, shallowEqual);
    const eosValue = useSelector(state => state.fadersReducer[valueName].value, shallowEqual);
    const percentage = useSelector(state => state.fadersReducer[percentageName].label, shallowEqual);

    const address = "/eos/fader/1/" + num;

    const finishChange = (value) => {
        //value = eosValue;
        app.dispatch({ type: "FADER" + num + "_VALUE", payload: { value: value } });
    }

    const valueChange = (value) => {

        // console.log("onValueChange()", value);

        const percentageValue = (100 - value) + "%";
        const floatValue = (100 - value) / 100;

        if (app.appState["fader" + num].enabled == true) {

            app.dispatch({ type: "FADER" + num + "_PERCENTAGE", payload: { label: percentageValue } });

            tcpOsc.sendMessage(address, [{ type: "f", value: floatValue }]);

        } else {

            app.dispatch({ type: "FADER" + num + "_VALUE", payload: { value: 0 } });

        }


    }

    return (
        <View style={[styles.faderContainer]} >

            <View style={[styles.row, styles.h10]} >
                <View style={[styles.faderPercentageContainer]} >
                    <Text style={[styles.faderPercentageText]}>{percentage}</Text>
                </View>
            </View>

            <View style={[styles.row, styles.h90 ]} >

                <Slider
                    value={eosValue}
                    onValueChange={value => valueChange(value)}
                    onSlidingComplete={value => finishChange(value)}
                    maximumTrackTintColor="#54d5fc"
                    minimumTrackTintColor="#1e335e"
                    trackStyle={{ height: '100%', width: '10%', borderRadius: 0 }}
                    maximumValue={100}
                    minimumValue={0}
                    style={{ width: "100%", height: "100%", paddingBottom: 10 }}
                    step={0.5}
                    orientation="vertical"
                    thumbTouchSize={{ width: 100, height: 40 }}
                    thumbStyle={{ height: '10%', width: '60%', backgroundColor: '#000000', borderColor: "#cccccc", borderRadius: 0, borderWidth: 2 }}
                    thumbProps={{
                        children: (
                            <View />
                        ),
                    }}
                />
            </View>
        
        </View>
       

    );

}