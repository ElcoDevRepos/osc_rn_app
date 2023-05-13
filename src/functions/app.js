import buttonsAll from '../helpers/buttonsAll';

import tcpOsc from '../../services/tcpOsc';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import appState from './appState';
// import appConfig from './appConfig';


global.app = {};

require('./appConfig.js')
require('./dsFunctions.js');
require('./faderFunctions.js');
require('./layoutFunctions.js');

app.test = "This is a test";

// SET APP STATE TO THE DEFAULTS
app.appState = { ...appState };


export default app;

app.updater = (osc_message, dispatch = null) => {

    let address = osc_message.address;
    let fullMessage = JSON.stringify(osc_message);
    let argType = "";
    let argValue = "";
    let hasArgs = true;
    let fullArgArr = [];
    const rerenderArray = [];
    const connected = true;

    console.log("UPDATER :  ", osc_message);

    try {
        if (osc_message.args.length > 0) {
            argType = osc_message.args[1];
            argValue = osc_message.args[0];
            fullArgArr = osc_message.args;
            hasArgs = true;
        } else {
            //console.log("THIS MESSAGE HAS NO ARGS");
            //console.log(osc_message);
            hasArgs = false;
        }

        // LOG THE OSC
       // let logText = buttonsAll['oscLog']['label'];
        // let updateMessage = "CONSOLE :: " + address + " : " + argValue + " ";
        //console.log("UpdateMessage", updateMessage);

        //buttonsAll['oscLog']['label'] = updateMessage + '\n' + logText;
        //app.dispatch({ type: "oscLog", payload: { label: updateMessage + '\n' + logText } });

        //rerenderArray.push('oscLog');


        // PARSE THE ADDRESS
        if (address == '/eos/out/ping') {

            rerenderArray.push('remote', 'focus', 'facePanel', 'encoders', 'ds', 'playback');

            // //////////  ADDRESS  /////////// //
            //
            //             PING
            //
            // //////////////////////////////////

            if (!connected) {

            }

            // THINGS FROM THE WEBAPP
            // This is more or less the TODO List
            // connected = true;
            // sidebarCollapse();
            //dispatch(commandLine, { label: 'COMMANDLINE DISPATCH', style: "DISPATCH STYLE" });
            buttonsAll['commandLine']['label'] = "";
            buttonsAll['info_chan']['label'] = "Chan :: ";
            buttonsAll['info_level']['label'] = "Level :: ";
            buttonsAll['info_patch']['label'] = "Patch :: ";
            buttonsAll['info_notes']['label'] = "Notes :: ";
            // $('[data-asc-id="commandLine"]').text("");
            // $('[data-asc-id="info-chan"]').text("Chan : ");
            // $('[data-asc-id="info-level"]').text("Level : ");
            // $('[data-asc-id="info-patch"]').text("Patch : ");
            // $('[data-asc-id="info-notes"]').text("Notes : ");
            // reset OSC coming from EOS

            //reset();
            //requestFaders(1, app.appState.faderPage.page, 10);
            //requestDS();

        } else if (address.includes('/eos/out/cmd') || (address.includes('/eos/out/user/') && address.includes('/cmd'))) {
            // FROM JAVA : eosCommandLine.contains("LIVE:") || eosCommandLine.contains("BLIND:") || eosCommandLine.contains("Patch Channel:")
            // //////////  ADDRESS  /////////// //
            //
            //              CMD
            //
            // //////////////////////////////////

            rerenderArray.push('remote', 'focus', 'facePanel', 'encoders', 'ds', 'playback');

            if (argValue.includes("LIVE:")) {

                if (app.appState.cmdLine != argValue) {
                    // Only Rerender if the state has changed
                    app.dispatch({ type: "commandLine", payload: { label: argValue} });
                    app.appState.cmdLine = argValue;
                }

                if (app.appState.cmdState != "LIVE") {
                    // Only Rerender if the state has changed
                    app.dispatch({ type: "info_chan_style", payload: { style: buttonsAll['info_chan']['style'] } });
                    app.dispatch({ type: "info_patch_style", payload: { style: buttonsAll['info_patch']['style'] } });
                    app.dispatch({ type: "info_level_style", payload: { style: buttonsAll['info_level']['style'] } });
                    app.dispatch({ type: "info_notes_style", payload: { style: buttonsAll['info_notes']['style'] } });
                    app.dispatch({ type: "pageContainer", payload: { style: "pageContainerLive" } });
                    app.dispatch({ type: "COMMANDLINE_STYLE", payload: { style: buttonsAll['commandLine']['style'] } });
                    app.appState.cmdState = "LIVE";
                }

            } if (argValue.includes("BLIND:")) {

                if (app.appState.cmdLine != argValue) {
                    // Only Rerender if the state has changed
                    app.dispatch({ type: "commandLine", payload: { label: argValue} });
                    app.appState.cmdLine = argValue;
                }

                if (app.appState.cmdState != "BLIND") {
                    app.dispatch({ type: "COMMANDLINE_STYLE", payload: { style: "infoBlind" } });
                    app.dispatch({ type: "info_chan_style", payload: { style: "infoBlind" } });
                    app.dispatch({ type: "info_patch_style", payload: { style: "infoBlind" } });
                    app.dispatch({ type: "info_level_style", payload: { style: "infoBlind" } });
                    app.dispatch({ type: "info_notes_style", payload: { style: "infoBlind" } });
                    app.dispatch({ type: "pageContainer", payload: { style: "pageContainerBlind" } });
                    app.appState.cmdState = "BLIND";
                }

            } if (argValue.includes("Patch Channel:")) {

                if (app.appState.cmdLine != argValue) {
                    // Only Rerender if the state has changed
                    app.dispatch({ type: "commandLine", payload: { label: argValue} });
                    app.appState.cmdLine = argValue;
                }
                if (app.appState.cmdState != "PATCH") {
                    app.dispatch({ type: "COMMANDLINE_STYLE", payload: { label: argValue, style: "infoPatch" } });
                    app.dispatch({ type: "info_chan_style", payload: { style: "infoPatch" } });
                    app.dispatch({ type: "info_patch_style", payload: { style: "infoPatch" } });
                    app.dispatch({ type: "info_level_style", payload: { style: "infoPatch" } });
                    app.dispatch({ type: "info_notes_style", payload: { style: "infoPatch" } });
                    app.dispatch({ type: "pageContainer", payload: { style: "pageContainerPatch" } });
                    app.appState.cmdState = "PATCH";
                }

            }

        } else if (address.includes('/eos/out/softkey')) {

            rerenderArray.push('facePanel');

            // //////////  ADDRESS  /////////// //
            //
            //           SOFTKEYS
            //
            // Example
            // /eos/out/softkey/1 : Value = 's' (Make Man)
            // //////////////////////////////////

            let textArr = address.split('/');

            let softkeyNumber = textArr[textArr.length - 1];

            // console.log("SOFTKEY NUMBER : ", softkeyNumber, address);

            if (app.appState["softkey_" + softkeyNumber] != argValue) {
                app.dispatch({ type: "softkey_" + softkeyNumber, payload: { label: argValue } });
                app.appState["softkey_" + softkeyNumber] = argValue;
            }

        } else if (address.includes('/eos/out/active/chan')) {
            // console.log("UPDATER INPUT ACTIVE CHAN", osc_message);
            rerenderArray.push('remote', 'focus', 'facePanel');

            // //////////  ADDRESS  /////////// //
            //
            //              ACTIVE CHANNEL
            // EXAMPLE
            // /eos/out/active/chan : Value = 's' (1 [100] Label Text1 Generic Dimmer @ 1)
            // //////////////////////////////////
   
            // Check if Value is empty
            if (argValue == "") {

                if (app.appState["info_chan"] != "Chan : ") {
                    app.dispatch({ type: "info_chan", payload: { label: "Chan : " } });
                    app.appState["info_chan"] = "Chan : ";
                    }
                if (app.appState["info_patch"] != "Patch : ") {
                    app.dispatch({ type: "info_patch", payload: { label: "Patch : " } });
                    app.appState["info_patch"] = "Patch : ";
                    }
                if (app.appState["info_level"] != "Level : ") {
                    app.dispatch({ type: "info_level", payload: { label: "Level : " } });
                    app.appState["info_level"] = "Level : ";
                    }
                if (app.appState["info_notes"] != "Notes : ") {
                    app.dispatch({ type: "info_notes", payload: { label: "Notes : " } });
                    app.appState["info_notes"] = "Notes : ";
                    }

            }

            let value = argValue;

            if (value.includes('@')) {

                // get patch info
                argArr = value.split('@');
               
                let absAddress = argArr[argArr.length - 1];
                let universeAddrress  = absAddress;

                if (!isNaN(absAddress)) {
                    // absAddress is a number so we can do Math
                    universeAddrress = (Math.floor(absAddress/512)+1) + "/" + (absAddress % 512);   
                }


                if (typeof argArr[1] !== "undefined") {
                  if (app.appState["info_patch"] != "Patch : " + universeAddrress) {
                    app.dispatch({ type: "info_patch", payload: { label: "Patch : " + universeAddrress } });
                    app.appState["info_patch"] = "Patch : " + universeAddrress;
                    }
                }

                // Reduce the value for the next function
                value = argArr[0];

            }

            // console.log("NEW VALUE : " + value);


            if (value.includes('[')) {

                argArr = value.split('[');

                if (typeof argArr[0] !== "undefined") {
                    appState.activeChan = argArr[0];
                   
                   if (app.appState["info_chan"] != "Chan : " + argArr[0]) {
                    app.dispatch({ type: "info_chan", payload: { label: "Chan : " + argArr[0] } });
                    app.appState["info_chan"] = "Chan : " + argArr[0];
                    }

                }

                value = argArr[1];

                // console.log("NEW VALUE : " + value);

                argArr = value.split(']');

                if (typeof argArr[0] !== "undefined") {

                   if (app.appState["info_level"] != "Level : " + argArr[0]) {
                    app.dispatch({ type: "info_level", payload: { label: "Level : " + argArr[0] } });
                    app.appState["info_level"] = "Level : " + argArr[0];
                    }
                }

                value = argArr[1];

                // console.log("NEW VALUE : " + value);

            } else {
                // we have a blank channel
                appState.activeChan = "";
            }

            // Is this a new channel?
            if (appState.activeChan != appState.preActiveChan || appState.activeChan == "") {
                newChannel = true;
                appState.preActiveChan = appState.activeChan;
                app.disableAllEncoders();

            } else {
                newChannel = false;
            }

            if (app.appState["info_notes"] != "Notes : " + value) {
                app.dispatch({ type: "info_notes", payload: { label: "Notes : " + value } });
                app.appState["info_notes"] = "Notes : " + value;
            }  

            // END '/eos/out/active/chan/'
        } else if (address.includes('/eos/out/active/cue/text')) {

            rerenderArray.push('remote', 'facePanel', 'playback');

            // /eos/out/active/cue/text : 1 Cue 1 Label 5.0 100% (s)

            let line1 = "";
            let line2 = "";

            // console.log("This is cue/text", argValue);

            if (hasArgs && argValue != "") {

                let argArr = argValue.split(" ");
                //console.log(argArr);
                // Get the Cue Number
                let cueNum = argArr[0];
                argArr.splice(0, 1); // Remove 1 item at index 0
                //console.log(argArr);
                // Get the Percent Completed
                let completion = "";

                if (argArr[argArr.length - 1].includes("%")) {
                    completion = argArr[argArr.length - 1];
                    argArr.splice(argArr.length - 1, 1);
                }
                //console.log(argArr);
                // Get the Cue Time
                let cueTime = argArr[argArr.length - 1];
                argArr.splice(argArr.length - 1, 1);
                //console.log(argArr);
                // Construct The Cue Label
                let cueLabel = "";
                for (let i = 0; i < argArr.length; i++) {
                    cueLabel += argArr[i] + " ";
                }

                cueLabel = cueLabel.trim();

                if (cueLabel != "") {
                    line1 = 'Q' + cueNum + ' "' + cueLabel + '" ';
                } else {
                    line1 = 'Q' + cueNum;
                }

                line2 = cueTime + 'sec ' + completion;

            } // end if hasArgs

            if (app.appState["currentQ"] != line1) {
                app.dispatch({ type: "CURRENT_Q_LABEL", payload: { label: line1 } });
                app.appState["currentQ"] = line1;
            }
            
            if (app.appState["currentQTime"] != line2) {
                app.dispatch({ type: "CURRENT_Q_TIME", payload: { label: line2 } });
                app.appState["currentQTime"] = line2;
            }  

        } else if (address.includes('/eos/out/show/name')) {

           // console.log("SHOW NAME");
           // console.log(argValue);

            app.dispatch({ type: "showName", payload: { label: argValue, style: "showNameText" } });

            // $('#header-title').text(argValue);


        } else if (address.includes('/eos/out/pending/cue/text')) {
            // /eos/out/pending/cue/text : 2 Cue 2 Label 5.0 (s)

            let line1 = "";
            let line2 = "";

            if (hasArgs) {

                let argArr = argValue.split(" ");

                if (argValue != "") {

                    // Get the Cue Number
                    let cueNum = argArr[0];
                    argArr.splice(0, 1); // Remove 1 item at index 0
                    //console.log(argArr);
                    // Get the Percent Completed
                    let completion = "";

                    if (argArr[argArr.length - 1].includes("%")) {
                        completion = argArr[argArr.length - 1];
                        argArr.splice(argArr.length - 1, 1);
                    }
                    //console.log(argArr);
                    // Get the Cue Time
                    let cueTime = argArr[argArr.length - 1];
                    argArr.splice(argArr.length - 1, 1);
                    //console.log(argArr);
                    // Construct The Cue Label
                    let cueLabel = "";
                    for (let i = 0; i < argArr.length; i++) {
                        cueLabel += argArr[i] + " ";
                    }

                    cueLabel = cueLabel.trim();

                    if (cueLabel != "") {
                        line1 = 'Q' + cueNum + ' "' + cueLabel + '"';
                    } else {
                        line1 = 'Q' + cueNum;
                    }

                    line2 = cueTime + 'sec ' + completion;

                } // end argArr.length > 0

            }// end if hasArgs

            if (app.appState["pendingQ"] != line1) {
                app.dispatch({ type: "PENDING_Q_LABEL", payload: { label: line1 } });
                app.appState["pendingQ"] = line1;
            }
            
            if (app.appState["pendingQTime"] != line2) {
                app.dispatch({ type: "PENDING_Q_TIME", payload: { label: line2 } });
                app.appState["pendingQTime"] = line2;
            }  

        } else if (address.includes('/eos/out/previous/cue/text')) {
            // /eos/out/previous/cue/text : 2 Cue 2 Label 5.0 (s)

            let line1 = "";
            let line2 = "";

            if (hasArgs) {

                if (argValue != "") {

                    let argArr = argValue.split(" ");
                    //console.log(argArr);
                    // Get the Cue Number
                    let cueNum = argArr[0];
                    argArr.splice(0, 1); // Remove 1 item at index 0
                    //console.log(argArr);
                    // Get the Percent Completed
                    let completion = "";

                    if (argArr[argArr.length - 1].includes("%")) {
                        completion = argArr[argArr.length - 1];
                        argArr.splice(argArr.length - 1, 1);
                    }
                    //console.log(argArr);
                    // Get the Cue Time
                    let cueTime = argArr[argArr.length - 1];
                    argArr.splice(argArr.length - 1, 1);
                    //console.log(argArr);
                    // Construct The Cue Label
                    let cueLabel = "";
                    for (let i = 0; i < argArr.length; i++) {
                        cueLabel += argArr[i] + " ";
                    }

                    cueLabel = cueLabel.trim();

                    if (cueLabel != "") {
                        line1 = 'Q' + cueNum + ' "' + cueLabel + '"';
                    } else {
                        line1 = 'Q' + cueNum;
                    }

                    line2 = cueTime + 'sec ' + completion;



                } // end if no args

            } //end if hasArgs

        app.appState["previousQ"] = line1;
        app.appState["previousQTime"] = line2;

        } else if (address.includes('/eos/out/active/cue/')) {
            // /eos/out/active/cue : 0.07000000029802322 (f)
           // console.log("ACTIVE CUE");
           // console.log(argValue);

        } else if (address.includes('/eos/out/user')) {

            // /eos/out/user/1

            let userNum = argValue;

            if (!isNaN(userNum) && userNum != "" && userNum != " ") {
                // basic error checking
                // userNum is a number

                // app.appConfig.user = userNum;
                // app.applyAppState('users');
            }

            console.log("USER");
            console.log(argValue);


        } else if (address.includes('/eos/out/color/hs')) {

            // /eos/out/color/hs [{type : "f", value "100.000"},{type : "f", value "100.000"}]

            /*
            if (hasArgs) {
              let hue = fullArgArr[0].value;
              let sat = fullArgArr[1].value;
              let lightness = colorPicker.color.hsl["l"];
      
              if(Math.abs(colorPicker.color.hsl["h"] - hue) > 20 || Math.abs(colorPicker.color.hsl["s"] - sat) > 20) {
                  colorPicker.color.hsl = {h : hue, s: sat, l: lightness};
              }
            }
            */

        } else if (address.includes('/eos/fader/')) {
            // /eos/fader/1/1 : 0.26999998092651367 (f)
            // /eos/fader/bankNum/faderNum

            addWorking = address.replace('/eos/fader/', '');
            let addArr = addWorking.split('/');
            let bankNum = addArr[0];
            let faderNum = addArr[1];
            let value = 100 - Math.round(argValue * 100);
            let percentage = Math.round(argValue * 100) + "%";

            app.appState['fader' + faderNum].enabled = true;
           
            app.dispatch({ type: "FADER" + faderNum + "_PERCENTAGE", payload: { label: percentage } });
            app.dispatch({ type: "FADER" + faderNum + "_VALUE", payload: { value: value } });
            /*
            app.appState.faders[bankNum-1][faderNum-1].enabled = true;

            
      
            $('#fader'+faderNum).val(value).change();
            $('[data-asc-id="fader'+faderNum+'-level"]').text(percentage);
      
            console.log("Eos fader " + address, argValue);
            console.log("Change Value to " + value);
            */

        } else if (address.includes('/eos/out/fader/') && address.includes('/name')) {

            addWorking = address.replace('/eos/out/fader/', '');
            let addArr = addWorking.split('/');
            let bankNum = addArr[0];
            let faderNum = addArr[1];
            let value = argValue;

            let argArr = argValue.split(" ");

            if (argArr[0] == "S") {
                value = argArr[0] + argArr[1];
                value += "\n";
                for (let i = 2; i < argArr.length; i++) {
                    value += " " + argArr[i];
                }
            }

            if (value != "") {
                app.dispatch({ type: "FADER"+faderNum+"_LABEL", payload: { label: value} });
                //  $('[data-asc-id="fader'+faderNum+'-load"]').text(value);
            } else {
                app.dispatch({ type: "FADER" + faderNum + "_LABEL", payload: { label: faderNum } });
                //  $('[data-asc-id="fader'+faderNum+'-load"]').text("Load \n" + faderNum);
            }

        } else if (address.includes('/eos/out/active/wheel/')) {

            // //////////  ADDRESS  /////////// //
            //
            //             ENCODERS
            // EXAMPLE
            // /eos/out/active/wheel/1, Intens [43](s), 2(i), 43.201(f)
            // //////////////////////////////////

            let wheelNumber = address.replace('/eos/out/active/wheel/', '');
            let centerText = "------";
            let encoderValue = "-";
            let encNum = 1;

            if (typeof newChannel === "undefined") {
                newChannel = true;
            }

            if ((address === "/eos/out/active/wheel/1") && newChannel) {
                // There has been a channel change
                // $('.encoder-edit').html('');
                app.appState.wheels = [];
            }

            if (argValue.includes('[')) {

                argArr = argValue.split('[');

                if (typeof argArr[0] !== "undefined") {

                    centerText = argArr[0].trim();
                    
                    if (!app.appState.wheels.includes(centerText)) {
                      app.appState.wheels[wheelNumber] = centerText;
                    }
                    
                    // console.log(app.appState.wheels);
                }

                argArr = argArr[1].split(']');
                encoderValue = argArr[0];

            } // end Arg Value Includes [

            for (let i = 1; i <= 12; i++) {
                // Loop through all the encoders and check for matches
                // console.log(app.appState['encoder' + i]);

                if (app.appState['encoder' + i].centerText == centerText && centerText != "") {
                    // THE ENCODER CENTER TEXT MATCHES THE WHEEL CENTER TEXT

                    // ALWAYS UPDATE THE VALUE WHEN THE CENTER TEXT MATCHES
                    app.dispatch({ type: "ENCODER" + i + '_VALUE', payload: { label: encoderValue } });


                    if (app.appState['encoder' + i].enabled && app.appState['encoder' + i].wheel == wheelNumber) {
                        // CHECK TO SEE IF THE ENCODER IS ALREADY ENABLED AND IF IT'S THE SAME WHEEL
                        // IF IT IS, DO NOTHING
                        console.log("SKIPPING ENCODER UPDATE");
                    } else {
                        // THERE IS A DISCREPANCY.  REESTABLISH THE ENCODER MAPPING
                        app.enableEncoder(i, wheelNumber);
                    }
                    
                }
                
            }

            // END '/eos/out/active/wheel/'
        } else if (address.includes('/eos/out/ds/')) {

            // //////////  ADDRESS  /////////// //
            //
            //          DIRECT SELECTS
            // EXAMPLE
            // /eos/out/ds/modulenumber/buttonnumber, label [pagenumber] 
            // /eos/out/ds/modulenumber, Beam_Palettes [pagenumber]
            // ////////////////////////////////

            //

            let btnNum = 1;
            let dsModule = 0;

            address = address.replace('/eos/out/ds/', '');

            if (address.split('/').length >= 2) {
                // These are DS Buttons
                let addArr = address.split('/');
                dsModule = addArr[0];
                btnNum = addArr[1];

                app.dispatch({ type: "ds" + dsModule + '_' + btnNum, payload: { label: argValue } });

            } else {
                // This is a DS Label and Page Number
                dsModule = address;

                let label = "SELECT";
                let moduleStyle = "btn1";
                let pageNum = 1;

                if (argValue.includes('[')) {
                    let argArr = argValue.split('[');
                    pageNum = argArr[1].replace(']', '');
                } else {

                }

                // console.log("I HAVE A PAGE NUMBER " + pageNum, argArr);
                if (argValue.includes("Channels")) {
                    label = "CHAN";
                    moduleStyle = buttonsAll['ds_Channels']['style'];
                } else if (argValue.includes("Groups")) {
                    label = "GROUPS";
                    moduleStyle = buttonsAll['ds_Groups']['style'];
                } else if (argValue.includes("Intensity Palettes")) {
                    label = "IP";
                    moduleStyle = buttonsAll['ds_Intensity_Palettes']['style'];
                } else if (argValue.includes("Color Palettes")) {
                    label = "CP";
                    moduleStyle = buttonsAll['ds_Color_Palettes']['style'];
                } else if (argValue.includes("Beam Palettes")) {
                    label = "BP";
                    moduleStyle = buttonsAll['ds_Beam_Palettes']['style'];
                } else if (argValue.includes("Focus Palettes")) {
                    label = "FP";
                    moduleStyle = buttonsAll['ds_Focus_Palettes']['style'];
                } else if (argValue.includes("Presets")) {
                    label = "PRESET";
                    moduleStyle = buttonsAll['ds_Presets']['style'];
                } else if (argValue.includes("Effects")) {
                    label = "FX";
                    moduleStyle = buttonsAll['ds_Effects']['style'];
                } else if (argValue.includes("Macros")) {
                    label = "MACRO";
                    moduleStyle = buttonsAll['ds_Macros']['style'];
                } else if (argValue.includes("Snapshots")) {
                    label = "SNAP";
                    moduleStyle = buttonsAll['ds_Snapshots']['style'];
                } else if (argValue.includes("Magic Sheets")) {
                    label = "MS";
                    moduleStyle = buttonsAll['ds_Magic_Sheets']['style'];
                } else if (argValue.includes("Scene")) {
                    label = "SCENE";
                    moduleStyle = buttonsAll['ds_Scenes']['style'];
                }

                app.dispatch({ type: "ds" + dsModule + '_select', payload: { label: label } });
                app.dispatch({ type: "ds" + dsModule + '_request', payload: { label: label } });
                app.dispatch({ type: "ds" + dsModule + '_page', payload: { label: pageNum } });
                app.dispatch({ type: "ds" + dsModule + '_style', payload: { style: moduleStyle } });

                // app.appState.ds[dsModule - 1].label = label;
                // app.appState.ds[dsModule - 1].page = pageNum;

                // This is the last thing to happen with DS
                // We can Store the App State

                // storeFile(app.appState, 'appState');
            }

            // END '/eos/out/ds/'


        } // END updater
    } catch (e) {
        console.log(e);
    }
    return rerenderArray;

}



app.getAppState = async () => {

    try {
        const appStateFromStorage = await AsyncStorage.getItem('app_state');

        if (appStateFromStorage !== null) {
            // value previously stored
            app.appState = JSON.parse(appStateFromStorage);
        } else {
            // There was no appState in storage - so we'll continue to use the default
        }

        return app.appState;

    } catch (e) {
        // error reading value
    }

}

app.getAppConfig = async () => {
    try {
        const appConfigFromStorage = await AsyncStorage.getItem('app_config');
        console.log("APPCONFIG FROM STORAGE" + appConfigFromStorage);
        if (appConfigFromStorage !== null) {
            // value previously stored
            app.appConfig = JSON.parse(appConfigFromStorage);

        } else {
            // There was no appConfig in storage - so we'll continue to use the default
        }

        return app.appConfig;
    } catch (e) {
        // error reading value
    }
}

app.updateAppState = async () => {

    // console.log("UPDATER  updateAppState");

    let stateToStore = JSON.stringify(app.appState);

    // console.log("State to Store : " + stateToStore);

    try {
        const storeAppState = await AsyncStorage.setItem('app_state', stateToStore);

       // console.log("This is the Store Return" + storeAppState);

    } catch (e) {
        // error reading value
    }

    return stateToStore

}

app.updateAppConfig = async () => {

    let config = JSON.stringify(app.appConfig);
    try {
        const storeAppConfig = await AsyncStorage.setItem('app_config', config);

        console.log("================= CONFIG SAVED ======================");
        console.log(JSON.stringify(storeAppConfig));    
    } catch (e) {
        // error reading value
    }

    // return config;
}

app.enableEncoder = (encoderNum, wheelNumber = undefined) => {
    
    if (wheelNumber == undefined) {
      
        const wheelNumber = app.appState['encoder' + encoderNum].wheel;  
    
    }

    console.log("ENABLE ENCODER" + encoderNum);

    if (app.appState['encoder' + encoderNum].mode == 'superfine') {
        app.appState['encoder' + encoderNum].address = "/eos/active/wheel/fine/" + wheelNumber;
        app.appState['encoder' + encoderNum].incValue = app.appConfig.fine;
        app.appState['encoder' + encoderNum].decValue = -app.appConfig.fine;
    } else if (app.appState['encoder' + encoderNum].mode == 'fine') {
        app.appState['encoder' + encoderNum].address = "/eos/active/wheel/" + wheelNumber;
        app.appState['encoder' + encoderNum].incValue = app.appConfig.fine;
        app.appState['encoder' + encoderNum].decValue = -app.appConfig.fine;
    } else {
        // it's either blank or coarse
        app.appState['encoder' + encoderNum].address = "/eos/active/wheel/" + wheelNumber;
        app.appState['encoder' + encoderNum].incValue = app.appConfig.coarse;
        app.appState['encoder' + encoderNum].decValue = -app.appConfig.coarse;
    }

    app.appState['encoder' + encoderNum].wheel = wheelNumber;
    app.appState['encoder' + encoderNum].enabled = true;
    app.dispatch({ type: "ENCODER" + encoderNum + '_ENABLE', payload: { bool: true } });
    app.dispatch({ type: "ENCODER" + encoderNum + '_CENTERTEXT', payload: { label: app.appState["encoder"+encoderNum].centerText } });

    tcpOsc.sendMessage(app.appState['encoder' + encoderNum].address, [{ type: "i", value: 0 }])
}

app.disableAllEncoders = () => {

    for (let encoderNum = 1; encoderNum <= 12; encoderNum++) {
        app.disableEncoder(encoderNum);
    }

    app.appState.wheels = [];
    
}

app.clearEncoder = (encoderNum) => {
    
    app.appState['encoder' + encoderNum].centerText = "---";
    app.appState['encoder' + encoderNum].wheel = "";
    app.appState['encoder' + encoderNum].value = "";
    app.dispatch({ type: "ENCODER" + encoderNum + '_CENTERTEXT', payload: { label: "---" } });

    app.disableEncoder(encoderNum);

}

app.disableEncoder = (encoderNum) => {
    app.appState['encoder' + encoderNum].enabled = false;
    app.dispatch({ type: "ENCODER" + encoderNum + '_ENABLE', payload: { bool: false } });
    // app.dispatch({ type: "ENCODER" + encoderNum + '_CENTERTEXT', payload: { label: "---" } });
    app.dispatch({ type: "ENCODER" + encoderNum + '_VALUE', payload: { label: "" } });
}

app.sendTick = (encoderNum, type) => {
    // Send the good news to EOS

    console.log("SEND TICK " + encoderNum + " " + type);

    console.log("SEND TICK APPSTATE: " + JSON.stringify(app.appState['encoder' + encoderNum]));
    if (type == "+") {

        tcpOsc.sendMessage(app.appState['encoder' + encoderNum].address, [{ type: "i", value: app.appState['encoder' + encoderNum].incValue }])

    } else if (type == "-") {

        tcpOsc.sendMessage(app.appState['encoder' + encoderNum].address, [{ type: "i", value: app.appState['encoder' + encoderNum].decValue }])

    }

}