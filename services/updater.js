import buttonsAll from '../src/helpers/buttonsAll';
import AsyncStorage from '@react-native-async-storage/async-storage';

const updater = {};

updater.alterSourceData = async (osc_message) => {
    return new Promise((resolve, reject) => {
        resolve();
    })
}

updater.getAppState = async () => {
    try {
        const appState = await AsyncStorage.getItem('app_state');
        console.log(appState);
        if(appState !== null) {
          // value previously stored
        }
      } catch(e) {
        // error reading value
      }
}

updater.getAppConfig = async () => {
    try {
        const appConfig = await AsyncStorage.getItem('app_config');
        console.log(appConfig);
        if(appConfig !== null) {
          // value previously stored
        }
      } catch(e) {
        // error reading value
      }
}

updater.updateAppState = async () => {
    try {
        const appState = await AsyncStorage.setItem('app_state', {});
      } catch(e) {
        // error reading value
      }
}

updater.updateAppConfig = async () => {
    try {
        const appConfig = await AsyncStorage.setItem('app_config', {});
      } catch(e) {
        // error reading value
      }
}
export default updater;