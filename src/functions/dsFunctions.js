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

app.ds = {};

app.ds.setAppState = (module, type) => {

    if (type == "clear") {
        // Disable the DS
        app.appState['ds' + module].enabled = false;
        app.appState['ds' + module].type = "none";
        app.appState['ds' + module].label = "SELECT";
        app.appState['ds' + module].page = "1";
        app.appState['ds' + module].flexi = "off";

        const moduleStyle = "btn12";

        app.updateAppState(app.appState);

        for (let btnNum = 1; btnNum <= 20; btnNum++) {
            app.dispatch({ type: "ds" + module + '_' + btnNum, payload: { label: "-" } });
        }

        app.dispatch({ type: "ds" + module + '_select', payload: { label: app.appState['ds' + module].label } });
        app.dispatch({ type: "ds" + module + '_request', payload: { label: "REQUEST" } });
        app.dispatch({ type: "ds" + module + '_page', payload: { label: app.appState['ds' + module].page } });
        app.dispatch({ type: "ds" + module + '_style', payload: { style: moduleStyle } });

    } else if (type == "flexi") {

        if (app.appState['ds' + module].flexi == "off") {
            // Turn Flexi On 
            app.appState['ds' + module].flexi = "on";
            // Update the appState
            app.updateAppState(app.appState);
            // Update the UI
            app.dispatch({ type: "ds_Flexi", payload: { style: "btn12Pressed", label: "Flexi On" } });
        } else {
            // Turn Flexi On 
            app.appState['ds' + module].flexi = "off";
            // Update the appState
            app.updateAppState(app.appState);
            // Update the UI
            app.dispatch({ type: "ds_Flexi", payload: { style: "btn12", label: "Flexi Off" } });
        }


    } else {
        // This is a request for a DS
        let count = 20;
        if (module > 4) { count = 10; }

        app.appState['ds' + module].enabled = true;
        app.appState['ds' + module].type = type;

        app.updateAppState(app.appState);

        let flexi = "";

        if (app.appState['ds' + module].flexi == "on") {
            flexi = "/flexi";
        }
            // Update the appState)

        let address = "/eos/ds/" + module + "/" + type + flexi + "/1/" + count;
        tcpOsc.sendMessage(address, [{ type: "i", value: 1 }]);
    }

}

app.ds.requestDS = () => {

    let address = "";
    let count = 20;

    for (let i = 1; i <= 5; i++) {

        if (app.appState['ds' + i].enabled) {

            console.log("DS " + i + " ENABLED");

            if (i > 4) {
                count = 10;
            }

            let flexi = "";

            if (app.appState['ds' + i].flexi == "on") {
                flexi = "/flexi";
            }

            address = "/eos/ds/" + i + "/" + app.appState['ds' + i].type + flexi + "/1/" + count;

            tcpOsc.sendMessage(address, [{ type: "i", value: 1 }]);

        } else {
            console.log("DS " + i + " is not enabled");
        }
    }

}
