import React, { memo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable
} from 'react-native';

import {setState, useState, useRef, useCallback} from 'react';

import styles from '../../helpers/styles';
import buttonsAll from '../../helpers/buttonsAll';
import tcpOsc from '../../../services/tcpOsc';
import { useSelector, useDispatch } from 'react-redux';
import EncoderButton from './encoderBTN';
import EncoderWheel from './encoderWheel';
import EncoderMode from './encoderMode';
import EncoderValue from './encoderValue';
import EncoderCenterText from './encoderCenterText';



export default EncoderEditModule = ({ module }) => {

    // console.log(app.appState['encoder'+module]);

    // console.log("ENCODER EDIT MODULE "+ module + " IS RERENDERING");

    let DATA = [];

    let currentIndex = 0;

    let wheelCount = app.appState.wheels.length;

    for (let i = 1; i < wheelCount; i++) {

        const item = {
        "id" : i,
        "title" : app.appState.wheels[i]
        }

        if (app.appState['encoder'+module].centerText == item.title) {
            currentIndex = item.id-1;
        }

        DATA.splice(i-1, 0, item);

        //console.log(DATA);
    }

    const clearItem = {
        "id" : wheelCount,
        "title" : "-- Clear --"
    }

    DATA.splice(wheelCount, 0, clearItem);

    //console.log(DATA);
   
    const Item = ({item, onPress, backgroundColor, textColor}) => (
        <Pressable onPress={onPress} style={[localstyles.item, {backgroundColor}]}>
            <Text style={[localstyles.title, {color: textColor}]}>{item.title}</Text>
        </Pressable>
    );

    const MemoizedItem = memo(Item);

    const flatListRef = useRef(null);
    
    const scrollToIndex = (index) => {
    
        flatListRef.current.scrollToIndex({ animated: true, index: index });
    
    };

    const initialState = {};

    const clearSelectedId = () => {
        //setState({ ...initialState });
    };

    const [selectedId, setSelectedId] = useState(initialState);

    const handlePress = (item) => {
        // console.log("HANDLE PRESS");
        if(item.title == "-- Clear --") {
            // console.log("CLEARING ENCODER");
            app.clearEncoder(module);
            setTimeout(() => setSelectedId(item.id), 50);
        
        } else {
            setSelectedId(item.id);
            app.appState['encoder'+module].centerText = item.title;
            app.enableEncoder(module, item.id);
        }
        

        }

    const renderItem = ({item}) => {

        //console.log("ENCODER EDIT MODULE "+ module + ": " +item.id+" IS RERENDERING");
            
        if (app.appState['encoder'+module].centerText == item.title) {
            // The Center Text matches.
            setTimeout(() => setSelectedId(item.id), 20);
            setTimeout(() => scrollToIndex(item.id-1), 20);
            
        }

        const backgroundColor = item.id === selectedId ? '#2064f855' : 'transparent';
        const color = item.id === selectedId ? 'white' : 'white';

        return (
            <MemoizedItem
            item={item}
            onPress={()=>handlePress(item)}
            backgroundColor={backgroundColor}
            textColor={color}

            />
        );
  };

  const keyExtractor = useCallback((item, index) => index.toString(),[]);

    return (
        
        < View style={[localstyles.encoder]} >
            <FlatList
            ref={flatListRef}
            style={{width: '100%'}}
            data={DATA}
            renderItem={renderItem}
            initialNumToRender ={6}
            maxToRenderPerBatch = {40}
            initialScrollIndex={currentIndex}
            getItemLayout={(data, index) => (
                {length: 69, offset: 69 * index, index}
                )}
            keyExtractor={keyExtractor}
            extraData={selectedId}
            />
        </View >

        );
    
}

const localstyles = StyleSheet.create({
    encoder: {
        width: '100%',
        height: '100%',
        borderColor: '#4b5cb0',
        borderWidth: 2,
        borderRadius: 0,
        backgroundColor: '#141630',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

   item: {
        width: '100%',
        backgroundColor: 'transparent',
        padding: 16,
        borderBottomColor: '#297efd',
        borderBottomWidth: 2,
    },

    title: {
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
    },

});
