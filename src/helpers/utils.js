import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import CustomButton from '../components/button';
import InfoText from '../components/info';
import CustomScrollView from '../components/scrollview';
import tcpOsc from '../../services/tcpOsc';

export const renderText = (text) => {
    return text;
}

export const renderObject = (name) => {
    const buttonObject = [];
    button = buttonsAll[name];
    switch (button.functype) {
        case 'info':
            buttonObject.push(
                (
                    <InfoText
                        functype={button.functype}
                        title={button.label}
                        id={button.label}
                        key={button.label}
                        style={[styles.info, styles[button.style]]}
                        styleText={[styles.infoText, styles[button.styleText]]}
                        >
                    </InfoText>
                )
            )
            break;

        case 'btn':
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        style={[styles.btn, styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        address={button.address}
                        argvalue={button.argvalue}
                        onPressIn={(data) => {
                            tcpOsc.sendMessage(data.address, [{type: "i", value: 1}])
                        }}
                        onPressOut={(data) => {
                            tcpOsc.sendMessage(data.address, [{ type: "i", value: 0 }])
                        }}>
                    </CustomButton>
                )
            )
            break;

        case 'select':
            // Direct Select "Select" Button.
            // This does not send OSC - but opens the select window
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        address={button.address}
                        argvalue={button.argvalue}
                        style={[styles.btn, styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        onPress={() => {
                            // Open Selection Menu Here
                        }}>
                    </CustomButton>
                )
            )
            break;

        case 'label':
            // Direct Select Labels.   Needs no borders, etc
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        address={button.address}
                        argvalue={button.argvalue}
                        style={[styles[button.style]]}
                        styleText={[styles.btnText, styles[button.styleText]]}
                        >
                    </CustomButton>
                )
            )
            break;

        case 'encoder_btn':
            // Direct Select Labels.   Needs no borders, etc
            buttonObject.push(
                (
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        address={button.address}
                        argvalue={button.argvalue}
                        style={[styles.encoderBtn, styles[button.style]]}
                        styleText={[styles.encoderBtnText, styles[button.styleText]]}
                    >
                    </CustomButton>
                )
            )
            break;

        case 'oscLog':
            // Direct Select Labels.   Needs no borders, etc
            buttonObject.push(
                (
                    <CustomScrollView
                        title={button.label}
                        id={button.label}
                        style={[styles[button.style]]}
                        styleText={[styles[button.styleText]]}
                    >
                    </CustomScrollView>
                )
            )
            break;
    }// switch

    return buttonObject;
};
