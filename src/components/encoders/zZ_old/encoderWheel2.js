import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';

export default EncoderWheel = () => {

    let offset = { x: 0, y: 0 };
    let startingAngle = 0;
    let startingRadius = 1;
    let releaseAngle = 0;
    let releaseRadius = 1;
    let angle = 0;
    let radius = 1;

    let startX = 0;
    let startY = 0;

    let deltaX = 0;
    let deltaY = 0;

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({      // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) =>
                true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
                true,

            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
                startX = gestureState.x0;
                startY = gestureState.y0;
            },
            onPanResponderMove: (evt, gestureState) => {
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
                //console.log(gestureState);

                deltaX = gestureState.moveX - startX;
                deltaY = gestureState.moveY - startY;

                startX = gestureState.moveX;
                startY = gestureState.moveY;

                if (deltaX > 1 || deltaY > 1) {

                    if (deltaX >= 0 && deltaY >= 0) {
                        console.log("Clockwise 1");
                    } else if (deltaX < 0 && deltaY >= 0) {
                        console.log("Counter Clockwise 1");
                    } else if (deltaX < 0 && deltaY < 0) {
                        console.log("Clockwise 2");
                    } else if (deltaX >= 0 && deltaY < 0) {
                        console.log("Counter Clockwise 2");
                    }

                }



                console.log("Move of X:" + deltaX);
                console.log("Move of Y:" + deltaY);
                //updateAngle(gestureState);
            },
            onPanResponderTerminationRequest: (evt, gestureState) =>
                true,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
            /*
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: () => {
                Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: true });
                console.log(pan.x, pan.y);
            },
            
            onPanResponderRelease: () => {
                pan.extractOffset();
            },
            */
        }),
    ).current;

    const updateAngle = (gestureState) => {
        let { deg, radius } = calcAngle(gestureState);
        if (deg < 0) deg += 360;
        console.log('updateAngle : DEG :' + deg + " RADIUS :" +radius);
        /*
        if (Math.abs(this.state.angle - deg) > 0.001) {
            console.log('updateAngle', deg, radius);
        }
        */
    }

    const calcAngle = (gestureState) => {
        const { pageX, pageY, moveX, moveY } = gestureState
        const [x, y] = [pageX || moveX, pageY || moveY]
        const [dx, dy] = [x - offset.x, y - offset.y]
        return {
            deg: Math.atan2(dy, dx) * 180 / Math.PI + 120,
            radius: Math.sqrt(dy * dy + dx * dx) / radius, // pitagoras r^2 = x^2 + y^2 normalizado
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Drag this box!</Text>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }],
                }}
                {...panResponder.panHandlers}>
                <View style={styles.box} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
});

