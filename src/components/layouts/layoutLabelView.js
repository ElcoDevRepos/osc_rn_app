import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from '../../helpers/styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Pressable } from 'react-native';
import LayoutSaveButton from './layoutSaveButton';

import LayoutLabelItem from './layoutLabelItem';    

export default LayoutLabelView = ({ pageName }) => {

    const isLayoutLabelViewShown = useSelector(state => state.layoutsReducer.LAYOUT_LABEL_VIEW.bool);

    return (

        <View>

            { isLayoutLabelViewShown && 
            ( 
                <View style={[styles.layoutMenu, styles.layoutLabelMenu]}>
                    <LayoutLabelItem layoutNum={1} pageName={pageName} />
                    <LayoutLabelItem layoutNum={2} pageName={pageName} />
                    <LayoutLabelItem layoutNum={3} pageName={pageName} />
                    <LayoutLabelItem layoutNum={4} pageName={pageName} />
                    <LayoutLabelItem layoutNum={5} pageName={pageName} />
                    <LayoutLabelItem layoutNum={6} pageName={pageName} />
                    <LayoutLabelItem layoutNum={7} pageName={pageName} />
                    <LayoutLabelItem layoutNum={8} pageName={pageName} />
                    <LayoutLabelItem layoutNum={9} pageName={pageName} />
                    <LayoutLabelItem layoutNum={10} pageName={pageName} />
                </View>

            ) 
        }

        </View>
 
    );
    
}
