import styles from '../helpers/styles';
import buttonsAll from '../helpers/buttonsAll';

export const renderObject = (whichButton) => {
    const buttonObject = [];

    // button = this.state.buttonsAll[name];
    // renderObject(this.state.buttonsAll[name].bind(this), buttonsAll['commandLine'])

    button = this.state.whichButton;
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
                        onPress={() => {

                        }}
                        onPressIn={() => {

                        }}
                        onPressOut={() => {

                        }}>
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
    }// switch

    return buttonObject;
};
