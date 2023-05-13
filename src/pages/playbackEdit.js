import React from 'react';
import {
    View, 
    Text, 
    Button
} from 'react-native';

import styles from '../helpers/styles';
import { renderObject } from '../helpers/utils';
import { useSelector, useDispatch } from 'react-redux';

import StaticButton from '../components/staticButton';
import { useNavigation } from '@react-navigation/native';


export default PlaybackEdit = ({ }) => {
    const navigation = useNavigation();

  return (
      <View style={[styles.pageContainer, styles.pageContainerEdit]}>
     
      </View>

  );
}