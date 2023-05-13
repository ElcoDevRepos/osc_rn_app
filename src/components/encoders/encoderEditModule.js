import React, { memo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { FlashList } from "@shopify/flash-list";

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

    console.log("ENCODER EDIT MODULE "+ module + " IS RERENDERING");

    let DATA = [];
    let wheelIndex = 0;
    let wheelCount = app.appState.wheels.length;

    for (let i = 1; i < wheelCount; i++) {

        const item = {
        "id" : i,
        "title" : app.appState.wheels[i]
        }

        if (app.appState['encoder'+module].centerText == item.title) {
            wheelIndex = item.id-1;
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
   


    const flatListRef = useRef(null);
    
    const scrollToIndex = (index) => {
        try{
            flatListRef.current.scrollToIndex({ animated: true, index: index });
        } catch (error) {
                console.log(error);
        }
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
    
        
    const Item = ({item, onPress, backgroundColor, textColor}) => (
        <Pressable onPress={onPress} style={[localstyles.item, {backgroundColor}]}>
            <Text style={[localstyles.title, {color: textColor}]}>{item.title}</Text>
        </Pressable>
    );

    const MemoizedItem = memo(Item);

    const renderItem = ({item}) => {

        if (app.appState['encoder'+module].centerText == item.title) {
            // The Center Text matches.
            try {
                setTimeout(() => setSelectedId(item.id), 20);
                setTimeout(() => scrollToIndex(item.id-1), 20);
            } catch (error) {
                console.log(error);
            }
            
            
        }

        const backgroundColor = item.id === selectedId ? '#2064f855' : 'transparent';
        const color = 'white';

        return (
            <Item
            item={item}
            onPress={()=>handlePress(item)}
            backgroundColor={backgroundColor}
            textColor={color}

            />
        );
  };

  // Key Extractor function to prevent FlatList from re-rendering
  const keyExtractor = useCallback((item, index) => index.toString(),[]);

    return (
        
        < View style={[localstyles.encoder]} >
            <FlashList
            ref={flatListRef}
            data={DATA}
            renderItem={renderItem}
            initialNumToRender ={6}
            maxToRenderPerBatch = {40}
            initialScrollIndex={wheelIndex}
            estimatedItemSize={69}
            /*
            getItemLayout={(data, index) => (
                {length: 69, offset: 69 * index, index}
                )}
                */
            keyExtractor={keyExtractor}
            extraData={selectedId}
            contentContainerStyle={{
                }}
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
       // alignItems: 'center',
       // justifyContent: 'flex-end'
    },

   item: {
        width: wp('20%'),
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
