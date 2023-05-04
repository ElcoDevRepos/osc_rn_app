
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    TouchableHighlight,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Button,
    PanResponder,
    Dimensions,
} from 'react-native';

import dial from '../../images/dial_full.png';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

const rotateValueHolder = new Animated.Value(0);

const { width, height } = Dimensions.get('window');

export default function EncoderWheel() {

    const [angle, setAngle] = useState(360);
    // const [oldAngle, setOldAngle] = useState(0);
    // const x = useRef(0);
    // const y = useRef(0);
    // const [viewX, setViewX] = useState(1);
    // const [viewY, setViewY] = useState(1);

    const pan = useState(new Animated.ValueXY())[0];
    const prevCountRef = useRef();

    // let radius = 1;
    // let deg = 1;


    let offset = {};

    let previousAngle = 0;
    let currentAngle = 0;
    let startAngle = 0;
    let releaseAngle = 0;
    let precision = 0.2;

    useEffect(() => {
        prevCountRef.current = angle;
    }, [angle]);

    useEffect(() => console.log(angle), [angle]);

    useEffect(() => updateCurrent(angle), [angle]);

    const updateCurrent = (angle) => {

        currentAngle = angle;

        console.log("This is the current angle: " + currentAngle);

    }

    const onLayout = (nativeEvent) => {
        /*
        * Multiple measures to avoid the gap between animated
        * and not animated views
        */
        measureOffset()
        setTimeout(() => measureOffset(), 200)
    }

    const measureOffset = () => {
        /*
        * const {x, y, width, height} = nativeEvent.layout
        * onlayout values are different than measureInWindow
        * x and y are the distances to its previous element
        * but in measureInWindow they are relative to the window
        */
        const { width: screenWidth } = Dimensions.get('window')

        self.measureInWindow((x, y, width, height) => {
            offset = {
                x: x % screenWidth + width / 2,
                y: y + height / 2,
            }
            radius = width / 2
        })

        //console.log(offset);
    }

    const updateAngle = (gestureState) => {
        let newAngle = calcAngle(gestureState);
        if (newAngle < 0) newAngle += 360;

        if (newAngle > previousAngle) {
            console.log('Clockwise Tick');
            console.log('current angle : ' + previousAngle + " new angle : " + newAngle);
        } else if (newAngle < previousAngle) {
            console.log('Counter-clockwise Tick');
        }

        if (Math.abs(previousAngle - newAngle) > precision) {
            updateState(newAngle);
        }
    }

    const calcAngle = (gestureState) => {

        measureOffset();

        //console.log(gestureState);
        if (!(-0.01 < gestureState.vx && gestureState.vx < 0.01)) {

            // Set these 4 variables from gestureState IF gestureState has those properties.
            const { pageX, pageY, moveX, moveY } = gestureState
            // In Android at least, pageX and pageY are undefined.
            // So here we use moveX and moveY instead.
            const [xNew, yNew] = [pageX || moveX, pageY || moveY]
            // Calculate Delta X and Delta Y from the original Position.
            const [dx, dy] = [xNew - offset.x, yNew - offset.y]

            let newAngle = (Math.atan2(dy, dx)) * 180 / Math.PI + 120;

            return newAngle;

        }
    }

    const updateState = (newAngle) => {

        const finalAngle = newAngle + releaseAngle - startingAngle;

        if (finalAngle != newAngle) {

            previousAngle = newAngle;

            setAngle(finalAngle);

        }
    }

    const panResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: (e, gestureState) => {
                measureOffset() // measure again
                const deg = calcAngle(e.nativeEvent);
                startingAngle = currentAngle;
                return true
            },
            onPanResponderGrant: (event, gestureState) => {
               // console.log("ON PAN RESPONDER GRANT", gestureState);
            },

            onPanResponderMove: (event, gestureState) => {

                updateAngle(gestureState);
                

            },
            onPanResponderRelease: (event, gestureState) => {

                console.log("ON PAN RESPONDER RELEASE");

                releaseAngle = angle;
},
        })
    )[0];

    return (
        <View style={localstyles.container}>
            <View
                style={localstyles.imageView}
                ref={(node) => { self = node }}
                onLayout={(nativeEvent) => onLayout(nativeEvent)}
                {...panResponder.panHandlers}>
                <Animated.Image
                    style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        transform: [
                            {
                                rotate: `${angle}deg`,
                            },
                        ],
                    }}
                    source={dial}
                />
            </View>
        </View>
    );
}

const localstyles = StyleSheet.create({
    container: {
        width: "85%",
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});







    








