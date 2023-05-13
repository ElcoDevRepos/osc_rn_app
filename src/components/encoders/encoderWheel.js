
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    PanResponder,
    Dimensions,
    Image
} from 'react-native';

import tcpOsc from '../../../services/tcpOsc';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import dial from '../../images/dial_single_tick.png';
import dialbg from '../../images/dial_back_circle.png';
import dialticks from '../../images/dial_ticks.png';
import dialBgDisabled from '../../images/dial_bg_disabled.png';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

const rotateValueHolder = new Animated.Value(0);

const { width, height } = Dimensions.get('window');

export default EncoderWheel = ({ module }) => {

    const encoderEnabled = useSelector(state => state.encodersReducer['ENCODER' + module + '_ENABLE'].bool);
    const encoderAddress = useSelector(state => state.encodersReducer['ENCODER' + module + '_ADDRESS'].label);
    const encoderIncValue = useSelector(state => state.encodersReducer['ENCODER' + module + '_ADDRESS'].incValue);
    const encoderDecValue = useSelector(state => state.encodersReducer['ENCODER' + module + '_ADDRESS'].decValue);

    const [imageAngle, setImageAngle] = useState(360);

    const pan = useState(new Animated.ValueXY())[0];
    const prevCountRef = useRef();


    let offset = {};

    let previousAngle = 0;
    let currentAngle = 0;
    let startAngle = 0;
    let releaseAngle = 0;
    let precision = 0.5;
    let tickPrecision = 22.5;

    let currentImageAngle = 0;
    let previousTickAngle = 0;

    /*
    useEffect(() => {
        prevCountRef.current = imageAngle;
    }, [imageAngle]);
    */
    // useEffect(() => console.log(imageAngle), [imageAngle]);

    // useEffect(() => updateCurrent(imageAngle), [imageAngle]);

    const updateCurrent = (imageAngle) => {

        currentAngle = imageAngle;

       // console.log("This is the current angle: " + currentAngle);

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

        try {

          self.measureInWindow((x, y, width, height) => {
            offset = {
                x: x % screenWidth + width / 2,
                y: y + height / 2,
            }
            radius = width / 2
        })

        } catch (error) {

        }

        //console.log(offset);
    }

    const calcAngle = (gestureState) => {
        // Calculates the angle of the gesture relative to the center of the wheel
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


    function roundTo (num, step) {

        return Math.floor((num / step) + .5) * step;

    }

    const updateAngle = (gestureState) => {

        let newAngle = calcAngle(gestureState);
        let newTickAngle = 0;

        //updateImageState(currentImageAngle);

       // if (newAngle < 0) newAngle += 360;

        if (Math.abs(previousAngle - newAngle) >= precision) {
            // Determine if this new angle is positive or negative relative to the previous angle

            const angleChange = roundTo(newAngle - previousAngle, 0.5);

              // console.log("Angle Change = " + angleChange);
            if (newAngle > previousAngle) {

               // console.log('Clockwise Tick');
                // Perform the tick on the wheel
                currentImageAngle = currentImageAngle + angleChange;

              //  console.log("currentImageAngle =  " + currentImageAngle);

                app.sendTick( module, "+");
                
            } else if (newAngle < previousAngle) {

               // console.log('Counter-clockwise Tick');

                currentImageAngle = currentImageAngle + angleChange;

                app.sendTick( module, "-");

            }

            // updateImageState(newAngle);

            // Update the previous gesture angle
            previousAngle = newAngle;

            // Now determine if we should rotate the image.
            if (Math.abs(previousTickAngle - currentImageAngle) >= tickPrecision) {

                if (currentImageAngle > previousTickAngle) {

                    newTickAngle = previousTickAngle + roundTo((currentImageAngle - previousTickAngle), 22.5);

                    //newTickAngle = previousTickAngle + tickPrecision;

                } else if (currentImageAngle < previousTickAngle) {

                    newTickAngle = previousTickAngle - roundTo((previousTickAngle - currentImageAngle), 22.5);

                   // newTickAngle = previousTickAngle - tickPrecision;

                }

                 if (newTickAngle < 0) newTickAngle += 360;

                // if (newTickAngle > 360) newTickAngle -= 360;

                //newTickAngle = roundTo(newTickAngle, 22.5);


               // previousTickAngle = newTickAngle;
               // currentImageAngle = newTickAngle;

              //  updateImageState(newTickAngle);

                currentImageAngle = roundTo((currentImageAngle), 22.5)
                previousTickAngle = currentImageAngle;
                currentImageAngle = currentImageAngle;

                updateImageState(currentImageAngle);

            }

            
        }
    }

    const updateImageState = (currentImageAngle) => {

            setImageAngle(currentImageAngle);
        
    }

    const panResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: (e, gestureState) => {
                measureOffset() // measure again
                // const deg = calcAngle(e.nativeEvent);
                // startingAngle = previousAngle;
                return true
            },
            onPanResponderGrant: (event, gestureState) => {
               // console.log("ON PAN RESPONDER GRANT", gestureState);
                measureOffset();
                //setImageAngle(currentImageAngle);
            },

            onPanResponderMove: (event, gestureState) => {

                updateAngle(gestureState);
                

            },
            onPanResponderRelease: (event, gestureState) => {

              //  console.log("ON PAN RESPONDER RELEASE");

                //releaseAngle = previousAngle;
},
        })
    )[0];

    return (
        <View style={localstyles.container}>

            { !encoderEnabled && (
                <View
                    style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        position: 'absolute',
                    }}>
                    <Image
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            position: 'relative',

                        }}
                        source={dialBgDisabled} />
                </View>

            )}

            {encoderEnabled && (

                <View
                    style={localstyles.imageView}
                    ref={(node) => { self = node }}
                    onLayout={(nativeEvent) => onLayout(nativeEvent)}
                    {...panResponder.panHandlers}>
                    <View
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            position: 'absolute',
                        }}>
                        <Image
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                resizeMode: 'contain',
                                alignSelf: 'center',
                                position: 'relative',

                            }}
                            source={dialbg} />
                    </View>
                    <View
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            position: 'absolute',
                        }}>
                        <Animated.Image
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                resizeMode: 'contain',
                                alignSelf: 'center',
                                position: 'relative',
                                transform: [
                                    {
                                        rotate: `${imageAngle}deg`,
                                    },
                                ],
                            }}
                            source={dial}
                        />
                    </View>
                    <View
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            position: 'absolute',
                        }}>
                        <Image
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                resizeMode: 'contain',
                                alignSelf: 'center',
                                position: 'relative',

                            }}
                            source={dialticks} />
                    </View>



                </View>

            )}
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
        backgroundColor: 'transparent',
        borderRadius: 100,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});







    








