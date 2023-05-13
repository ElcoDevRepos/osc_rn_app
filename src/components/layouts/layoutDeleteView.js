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
import LayoutDeleteButton from './layoutDeleteButton';

export default LayoutDeleteView = ({ pageName }) => {

    const isLayoutDeleteViewShown = useSelector(state => state.layoutsReducer.LAYOUT_DELETE_VIEW.bool);

    return (

        <View>

        { isLayoutDeleteViewShown && 
            ( 
                <View style={[styles.layoutMenu, styles.layoutDeleteMenu]}>
                    <LayoutDeleteButton layoutNum={1} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={2} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={3} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={4} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={5} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={6} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={7} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={8} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={9} pageName={pageName} />
                    <LayoutDeleteButton layoutNum={10} pageName={pageName} />
                </View>

            ) 
        }

        </View>
 
    );
    
}
