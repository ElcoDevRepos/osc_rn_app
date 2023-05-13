import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { CheckBox, Icon } from '@rneui/themed';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Toast from 'react-native-root-toast';
import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Pressable } from 'react-native';

export default LayoutSaveButton = ({ layoutNum, pageName }) => {

    const name = pageName + "_lay_" + layoutNum;
    const actionName = name.toUpperCase() + "_ACTIVE";

    const isActive = useSelector(state => state.layoutsReducer[name.toUpperCase()].active);
  
    const button = buttonsAll[name];

    const handlePress = () => {
        app.storeLayout(layoutNum);
        

        let toast = Toast.show('Layout ' + layoutNum + ' Saved', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: "#000000",
            textColor: "#ffffff",
            pacity: 0.8,
            onShow: () => {
                // calls on toast\`s appear animation start
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
            }
        });


        }

    return (

        

                    <Pressable
                        style={[localstyles.container]}
                        onPress={handlePress}>
                        <View style={[styles.col, styles.col10, localstyles.labelContainer]}>
                            <Text style={[localstyles.text]}>Save Layout {layoutNum}</Text>
                        </View>
                        <View style={[styles.col, styles.col2]}>
                            <CheckBox
                              center={true}
                              checked={isActive}
                              containerStyle={{
                                backgroundColor: "transparent",
                                height: "100%",
                              }}
                              size={hp('4%')}
                              textStyle={{}}
                              titleProps={{}}
                              checkedColor="#297efd"
                              uncheckedColor="#ffffff44"
    />
                        </View>
                    </Pressable>
 
    );
    
}


const localstyles = StyleSheet.create({
    container: {
        borderBottomColor: '#666666',
        borderBottomWidth: hp('0.3%'),
        height: hp('8%'),
        flexDirection: "row", 
        padding: hp('0.6%')
    },

    labelContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: hp('0.6%')
    },

    text: {
        color: "#ffffff",
        fontSize: hp('2.4%'),
    },

});
