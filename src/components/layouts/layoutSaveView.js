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

export default LayoutSaveView = ({ pageName }) => {

    const isLayoutSaveViewShown = useSelector(state => state.layoutsReducer.LAYOUT_SAVE_VIEW.bool);

    return (

        <View>

        { isLayoutSaveViewShown && 
            ( 
                <View style={[styles.layoutMenu, styles.layoutSaveMenu]}>
                    <LayoutSaveButton layoutNum={1} pageName={pageName} />
                    <LayoutSaveButton layoutNum={2} pageName={pageName} />
                    <LayoutSaveButton layoutNum={3} pageName={pageName} />
                    <LayoutSaveButton layoutNum={4} pageName={pageName} />
                    <LayoutSaveButton layoutNum={5} pageName={pageName} />
                    <LayoutSaveButton layoutNum={6} pageName={pageName} />
                    <LayoutSaveButton layoutNum={7} pageName={pageName} />
                    <LayoutSaveButton layoutNum={8} pageName={pageName} />
                    <LayoutSaveButton layoutNum={9} pageName={pageName} />
                    <LayoutSaveButton layoutNum={10} pageName={pageName} />
                </View>

            ) 
        }

        </View>
 
    );
    
}
