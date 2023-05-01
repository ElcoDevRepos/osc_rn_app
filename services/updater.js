import buttonsAll from '../src/helpers/buttonsAll';
import appState from '../src/helpers/appState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const updater = {};

const addConsoletoLog = (consoleMessage) => {
    return (
      <View>
        <Text>{consoleMessage}</Text>
      </View>
    );
  };

updater.alterSourceData = (osc_message, dispatch = null) => {

    let address = osc_message.address;
    let fullMessage = JSON.stringify(osc_message);
    let argType = "";
    let argValue = "";
    let hasArgs = true;
    let fullArgArr = [];
    const rerenderArray = [];

    console.log("UPDATER :  " , osc_message);


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
        let logText = buttonsAll['oscLog']['label'];
        let updateMessage = "CONSOLE :: " + address + " : " + argValue + " ";
        //console.log("UpdateMessage", updateMessage);

        buttonsAll['oscLog']['label'] = updateMessage + '\n' + logText;
        dispatch({ type: "oscLog", payload: { label: updateMessage + '\n' + logText } });

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

                dispatch({ type: "commandLine", payload: { label: argValue, style: buttonsAll['commandLine']['style'] } });
                dispatch({ type: "info_chan_style", payload: { style: buttonsAll['info_chan']['style'] } });
                dispatch({ type: "info_patch_style", payload: { style: buttonsAll['info_patch']['style'] } });
                dispatch({ type: "info_level_style", payload: { style: buttonsAll['info_level']['style'] } });
                dispatch({ type: "info_notes_style", payload: { style: buttonsAll['info_notes']['style'] } });
                dispatch({ type: "pageContainer", payload: { style: "pageContainerLive" } });

                // $('.app-header').addClass('app-header-live');
                // $('.app-wrapper').addClass('app-wrapper-live');
                // $('[data-asc-id="commandLine"]').addClass('info-live');
                // $('.app-header').removeClass('app-header-blind app-header-patch');
                // $('.app-wrapper').removeClass('app-wrapper-blind app-wrapper-patch');
                // $('[data-asc-id="commandLine"]').removeClass('info-patch');
                // $('[data-asc-id="commandLine"]').removeClass('info-blind info-patch');

            } if (argValue.includes("BLIND:")) {

                dispatch({ type: "commandLine", payload: { label: argValue, style: "infoBlind" } });
                dispatch({ type: "info_chan_style", payload: { style: "infoBlind" } });
                dispatch({ type: "info_patch_style", payload: { style: "infoBlind" } });
                dispatch({ type: "info_level_style", payload: { style: "infoBlind" } });
                dispatch({ type: "info_notes_style", payload: { style: "infoBlind" } });
                dispatch({ type: "pageContainer", payload: { style: "pageContainerBlind" } });


                // $('.app-header').addClass('app-header-blind');
                // $('.app-wrapper').addClass('app-wrapper-blind');
                // $('[data-asc-id="commandLine"]').addClass('info-blind');
                // $('.app-header').removeClass('app-header-live app-header-patch');
                // $('.app-wrapper').removeClass('app-wrapper-live app-wrapper-patch');
                // $('[data-asc-id="commandLine"]').removeClass('info-live info-patch');

            } if (argValue.includes("Patch Channel:")) {


                dispatch({ type: "commandLine", payload: { label: argValue, style: "infoPatch" } });
                dispatch({ type: "info_chan_style", payload: { style: "infoPatch" } });
                dispatch({ type: "info_patch_style", payload: { style: "infoPatch" } });
                dispatch({ type: "info_level_style", payload: { style: "infoPatch" } });
                dispatch({ type: "info_notes_style", payload: { style: "infoPatch" } });
                dispatch({ type: "pageContainer", payload: { style: "pageContainerPatch" } });

                // $('.app-header').addClass('app-header-patch');
                // $('.app-wrapper').addClass('app-wrapper-patch');
                // $('[data-asc-id="commandLine"]').addClass('info-patch');
                // $('.app-header').removeClass('app-header-blind app-header-live');
                // $('.app-wrapper').removeClass('app-wrapper-blind app-wrapper-live');
                // $('[data-asc-id="commandLine"]').removeClass('info-blind info-live');

            }
            
            


            //buttonsAll['commandLine']['label'] = argValue;

            // $('[data-asc-id="commandLine"]').text(argValue);

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

            dispatch({ type: "softkey_" + softkeyNumber, payload: { label: argValue } });


            // $('[data-asc-id="softkey_'+ softkeyNumber +'"]').text(argValue);

        } else if (address.includes('/eos/out/active/chan')) {
            console.log("UPDATER INPUT ACTIVE CHAN", osc_message);
            rerenderArray.push('remote', 'focus', 'facePanel');

            // //////////  ADDRESS  /////////// //
            //
            //              ACTIVE CHANNEL
            // EXAMPLE
            // /eos/out/active/chan : Value = 's' (1 [100] Label Text1 Generic Dimmer @ 1)
            // //////////////////////////////////


            //wheels = [];
            // Check if Value is empty
            if (argValue == "") {
                dispatch({ type: "info_chan", payload: { label: "Chan : " } });
                dispatch({ type: "info_patch", payload: { label: "Patch : " } });
                dispatch({ type: "info_level", payload: { label: "Level : " } });
                dispatch({ type: "info_notes", payload: { label: "Notes : " } });
                // $('[data-asc-id="info-chan"]').text("Chan : ");
                // $('[data-asc-id="info-level"]').text("Level : ");
                // $('[data-asc-id="info-patch"]').text("Patch : ");
                // $('[data-asc-id="info-notes"]').text("Notes : ");
            }

            let value = argValue;

            if (value.includes('@')) {

                // get patch info
                argArr = value.split('@');

                
                if (typeof argArr[1] !== "undefined") {
                    dispatch({ type: "info_patch", payload: { label: "Patch : " + argArr[argArr.length - 1] } });
                    // $('[data-asc-id="info-patch"]').text("Patch : " + argArr[argArr.length - 1]);
                }

                // Reduce the value for the next function
                value = argArr[0];

            }

            console.log("NEW VALUE : " + value);


            if (value.includes('[')) {

                argArr = value.split('[');

                if (typeof argArr[0] !== "undefined") {
                    appState.activeChan = argArr[0];
                    // console.log("Active Chan :" + app.appState.activeChan);
                    dispatch({ type: "info_chan", payload: { label: "Chan : " + argArr[0] } });
                    //buttonsAll['info_chan']['label'] = "Chan : " + argArr[0];
                    // $('[data-asc-id="info-chan"]').text("Chan : " + argArr[0]);
                    
                }

                value = argArr[1];

                console.log("NEW VALUE : " + value);

                argArr = value.split(']');

                if (typeof argArr[0] !== "undefined") {

                    // buttonsAll['info-level']['label'] = "Level : " + argArr[0];
                    dispatch({ type: "info_level", payload: { label: "Level : " + argArr[0] } });

                    // $('[data-asc-id="info-level"]').text("Level : " + argArr[0]);
                }

                value = argArr[1];

                console.log("NEW VALUE : " + value);

            } else {
                // we have a blank channel
                appState.activeChan = "";
            }

            // Is this a new channel?
            if (appState.activeChan != appState.preActiveChan || appState.activeChan == "") {
                newChannel = true;
                appState.preActiveChan = appState.activeChan;
                //disableAllEncoders();
            } else {
                newChannel = false;
            }

            // buttonsAll['info-notes']['label'] = "Notes : " + value;
            dispatch({ type: "info_notes", payload: { label: "Notes : " + value } });

            // $('[data-asc-id="info-notes"]').text("Notes : " + value);



            //console.log("argArr", argArr);

            // END '/eos/out/active/chan/'

        } else if (address.includes('/eos/out/active/cue/text')) {

            rerenderArray.push('remote', 'facePanel', 'playback');

            // /eos/out/active/cue/text : 1 Cue 1 Label 5.0 100% (s)

            let line1 = "";
            let line2 = "";

            console.log("This is cue/text", argValue);

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
                    line1 = '<span class="active-number">Q' + cueNum + '</span> "' + cueLabel + '"';
                } else {
                    line1 = '<span class="active-number">Q' + cueNum;
                }

                line2 = cueTime + 'sec ' + completion;

            } // end if hasArgs

            // $('[data-asc-id="active-cue"]').html(line1);
            // $('[data-asc-id="active-time"]').text(line2);


        } else if (address.includes('/eos/out/show/name')) {

            console.log("SHOW NAME");
            console.log(argValue);

            dispatch({ type: "showName", payload: { label: argValue, style : "showNameText" } });

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
                        line1 = '<span class="nonactive-number">Q' + cueNum + '</span> "' + cueLabel + '"';
                    } else {
                        line1 = '<span class="nonactive-number">Q' + cueNum;
                    }

                    line2 = cueTime + 'sec ' + completion;

                } // end argArr.length > 0

            }// end if hasArgs

            // $('[data-asc-id="pending-cue"]').html(line1);
            // $('[data-asc-id="pending-time"]').text(line2);


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
                        line1 = '<span class="nonactive-number">Q' + cueNum + '</span> "' + cueLabel + '"';
                    } else {
                        line1 = '<span class="nonactive-number">Q' + cueNum;
                    }

                    line2 = cueTime + 'sec ' + completion;

                } // end if no args

            } //end if hasArgs

            // $('[data-asc-id="previous-cue"]').html(line1);
            // $('[data-asc-id="previous-time"]').text(line2);


        } else if (address.includes('/eos/out/active/cue/')) {
            // /eos/out/active/cue : 0.07000000029802322 (f)
            console.log("ACTIVE CUE");
            console.log(argValue);

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
            let value = Math.round(argValue * 100) / 100;
            let percentage = Math.round(argValue * 100) + "%";

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
                //  $('[data-asc-id="fader'+faderNum+'-load"]').text(value);
            } else {
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
                wheels = [];
            }

            if (argValue.includes('[')) {

                argArr = argValue.split('[');

                if (typeof argArr[0] !== "undefined") {

                    centerText = argArr[0].trim();
                    /*
                    if (!wheels.includes(centerText)) {
                      wheels[wheelNumber] = centerText;
                    }
                    */
                    // console.log(wheels);
                }

                argArr = argArr[1].split(']');
                encoderValue = argArr[0];

            } // end Arg Value Includes [

            for (let i = 0; i < 12; i++) {
                // Loop through all the encoders and check for matches
                //console.log(app.appState.encoders[i]);

                /*
                if (app.appState.encoders[i].centerText == centerText && centerText != "") {
        
                  if (app.appState.encoders[i].mode == 'superfine') {
                    app.appState.encoders[i].address = "/eos/active/wheel/fine/"+wheelNumber;
                  } else {
                    app.appState.encoders[i].address = "/eos/active/wheel/"+wheelNumber;
                  }
        
                  app.appState.encoders[i].wheel = wheelNumber;
                  enableEncoder(i);
                  encNum = i+1;
                  $('[data-asc-id="encoder'+encNum+'-level"]').text(encoderValue);
        
                }
                */
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

                dispatch({ type: "ds" + dsModule + '_' + btnNum, payload: { label: argValue } });

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

                dispatch({ type: "ds" + dsModule + '_select', payload: { label: label } });
                dispatch({ type: "ds" + dsModule + '_request', payload: { label: label } });
                dispatch({ type: "ds" + dsModule + '_page', payload: { label: pageNum } });
                dispatch({ type: "ds" + dsModule + '_style', payload: { style: moduleStyle } });

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
     
    /*
    return new Promise((resolve, reject) => {
        resolve();
    })
    */
    
}

updater.getAppState = async () => {
    try {
        const appState = await AsyncStorage.getItem('app_state');
        console.log(appState);
        if (appState !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
}

updater.getAppConfig = async () => {
    try {
        const appConfig = await AsyncStorage.getItem('app_config');
        console.log(appConfig);
        if (appConfig !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
}

updater.updateAppState = async () => {
    try {
        const appState = await AsyncStorage.setItem('app_state', {});
    } catch (e) {
        // error reading value
    }
}

updater.updateAppConfig = async () => {
    try {
        const appConfig = await AsyncStorage.setItem('app_config', {});
    } catch (e) {
        // error reading value
    }
}
export default updater;