import React from 'react';
import { memo } from 'react';
import {
    View,
    Text,
} from 'react-native';
 

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { Pressable } from 'react-native';
import StaticButton from '../staticButton';

const DisplaysBtnBase = ({ name }) => {
    console.log("DISPLAYS");
    return (
        <StaticButton name={ 'displays'} />
    );

};

export default DisplaysBtn = memo(DisplaysBtnBase);
