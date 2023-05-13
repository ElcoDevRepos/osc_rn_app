import tcpOsc from '../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

/*
APPSTATE DEFINITION OF A DS 
"ds1" :
{
    "dsID": 1,
    "type": "none",
    "enabled": false,
    "flexi": "off",
    "page": "1",
    "label": "SELECT"
}
*/
/*

FROM WEB VERSION
function requestFaders(bankNum = undefined, pageNum = undefined, faderCount = undefined) {
    // Define the Faderbank with eos
    if (typeof bankNum == "undefined") {
        bankNum = 1;
    }

    if (typeof pageNum == "undefined") {
        pageNum = 1;
    }

    if (typeof faderCount == "undefined") {
        faderCount = 10;
    }

    // disable all the faders in the appState
    for (var b = 0; b < 1; b++) {
        for (var i = 0; i < faderCount; i++) {
            app.appState.faders[b][i].enabled = false;
            app.appState.faders[b][i].level = 0;
        }
    } // end for Bank

    let oscMessage = "/eos/fader/" + bankNum + "/config/" + pageNum + "/" + faderCount;

    sendOSC(oscMessage, "1", "s");

} // end requestFaders()
*/
app.faders = {};

app.faders.requestFaders = (bankNum = undefined, pageNum = undefined, faderCount = undefined) => {

    // Define the Faderbank with eos
    if (typeof bankNum == "undefined") {
        bankNum = 1;
    }

    if (typeof pageNum == "undefined") {
        pageNum = 1;
    }

    if (typeof faderCount == "undefined") {
        faderCount = 10;
    }

    // disable all the faders in the appState
    
        for (var i = 1; i <= faderCount; i++) {
            app.appState['fader' + i].enabled = false;
            app.appState['fader' + i].level = 0;
        }
    

    let address = "/eos/fader/" + bankNum + "/config/" + pageNum + "/" + faderCount;

    tcpOsc.sendMessage(address, [{ type: "i", value: 1 }]);

}
