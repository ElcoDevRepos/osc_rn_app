import React from 'react';

import tcpOsc from '../../../services/tcpOsc';

const ds = {};





ds.setAppState = (module, type) => {

    if (type == "clear") {
        // Disable the DS
        app.appState['ds' + module].enabled = false;
        app.appState['ds' + module].type = "none";
        app.appState['ds' + module].label = "SELECT";
        app.appState['ds' + module].page = "1";
        app.appState['ds' + module].flexi = "off";

    } else if (type == "flexi") {
        // Turn Flexi On 
    } else {
        // This is a request for a DS
        let count = 20;
        if (module > 4) { count = 10; }

        app.appState['ds' + module].enabled = true;
        app.appState['ds' + module].type = type;

        let address = "/eos/ds/" + module + "/" + type + "/1/" + count;
        tcpOsc.sendMessage(address, [{ type: "i", value: 1 }]);
    }



}

ds.enableModule = (module, type) => {

}


export default ds;