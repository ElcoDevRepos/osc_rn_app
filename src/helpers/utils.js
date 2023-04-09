import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';
import CustomButton from '../components/button';

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
                    <CustomButton
                        title={button.label}
                        id={button.label}
                        key={button.address}
                        style={[styles.info, styles[button.style]]}
                        styleText={[styles.infoText, styles[button.styleText]]}
                        >
                    </CustomButton>
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
                        onPress={() => {
                            tcpOsc.sendMessage(button.address, button.argvalue);
                        }}
                        onPressIn={() => {

                        }}
                        onPressOut={() => {

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
                        style={[styles.encoderBtn, styles[button.style]]}
                        styleText={[styles.encoderBtnText, styles[button.styleText]]}
                    >
                    </CustomButton>
                )
            )
            break;
    }// switch

    return buttonObject;
};
