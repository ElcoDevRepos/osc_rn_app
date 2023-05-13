import tcpOsc from '../../services/tcpOsc';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import buttonsAll from '../helpers/buttonsAll'

app.layouts = {};

app.logAppConfig = () => {
    
    console.log("app.appConfig: " + JSON.stringify(app.appConfig));

    }

app.deleteLayout = (layoutNum) => {

    const currentMaster = app.appState.currentMasterLayout;
    const currentPage = app.appState.currentPage;

    switch (currentPage) {

        case "Encoders":

            const pageName = "enc";
            const name = pageName + "_lay_" + layoutNum;
            const actionName = name.toUpperCase() + "_ACTIVE";
            const labelName = pageName + "Label";
            const button = buttonsAll[name];

            // STEP 1 : Reset the layout button style and activation to default
            app.dispatch({ type: actionName, payload: { style: button.style, active: false } });
            // STEP 2 : Reset the layout button text
            app.dispatch({ type: name.toUpperCase(), payload: { label: layoutNum.toString() } });
            // STEP 3 : Reset the text in appConfig
            app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1][labelName] = layoutNum.toString();
            // STEP 4 : Reset the active setting in appConfig
            app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1][pageName + "PageActive"] = false;


            // RESET ENCODER PROPERTIES IN APPCONFIG
            for (encoderNum = 1; encoderNum <= 8; encoderNum++) {
                app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder" + encoderNum] = JSON.parse(JSON.stringify(app.defaultEncoder));
            }

            break;




    }

}

app.storeLayout = (layoutNum) => {

    let currentMaster = app.appState.currentMasterLayout;
    let currentPage = app.appState.currentPage;

    switch (currentPage) {
        
        case "Remote":


            break;
        case "Encoders":

            const pageName = "enc";
            const name = pageName + "_lay_" + layoutNum;
            const actionName = name.toUpperCase() + "_ACTIVE";
            const labelName = pageName + "Label";
            const button = buttonsAll[name];

            // STEP 1 : Update Style and Active state in the Redux Store
            app.dispatch({ type: actionName, payload: { style: "layoutBtnActive", active: true } });
            // STEP 2 : Update the Active Flag in APPCONFIG
            app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1].encPageActive = true;
            

            // MOVE ENCODER PROPERTIES FROM APPSTATE TO APPCONFIG
            for (encoderNum = 1; encoderNum <= 8; encoderNum++) {

                for (let encoderProp in app.appState['encoder' + encoderNum]) {

                    //console.log("encoderProp: " + encoderProp + app.appState['encoder' + encoderNum][encoderProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum][encoderProp] = app.appState['encoder' + encoderNum][encoderProp];
                
                    }

                }

            break;

        case "Focus":

            for (encoderNum = 9; encoderNum <= 12; encoderNum++) {

                for (let encoderProp in app.appState['encoder' + encoderNum]) {

                    //console.log("encoderProp: " + encoderProp + app.appState['encoder' + encoderNum][encoderProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum][encoderProp] = app.appState['encoder' + encoderNum][encoderProp];
                
                    }

                }

             for (dsNum = 5; dsNum <= 5; dsNum++) {

                for (let dsProp in app.appState['ds' + dsNum]) {

                    //console.log("dsProp: " + dsProp + app.appState['ds' + dsNum][dsProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["ds"+dsNum][dsProp] = app.appState['ds' + dsNum][dsProp];
                
                    }

                }

            break;

        case "DirectSelects":

                for (dsNum = 1; dsNum <= 4; dsNum++) {

                for (let dsProp in app.appState['ds' + dsNum]) {

                    // console.log("dsProp: " + dsProp + app.appState['ds' + dsNum][dsProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["ds"+dsNum][dsProp] = app.appState['ds' + dsNum][dsProp];
                
                    }
                }

            break;

        case "Playback":

            app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1].faderPage = app.appState.faderPage;


                break;

        }

        app.updateAppConfig();

        console.log("app.appConfig: " + JSON.stringify(app.getAppConfig()));

}


app.recallLayout = (layoutNum) => {

    let currentMaster = app.appState.currentMasterLayout;
    let currentPage = app.appState.currentPage;

    switch (currentPage) {
        
        case "Remote":


            break;

        case "Encoders":

            for (encoderNum = 1; encoderNum <= 8; encoderNum++) {

                if (app.appState['encoder' + encoderNum].centerText != app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum].centerText) {
                    // CHECK IF APPSTATE AND LAYOUT CONFIG MATCH.  IF THEY DON'T, CLEAR THE ENCODER
                    app.clearEncoder(encoderNum);
                }

                for (let encoderProp in app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum]) {

                    console.log("encoderProp: " + encoderProp + " : " +app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum][encoderProp]);
                    // Copy the encoder properties from the LAYOUT CONFIG to the appSTATE
                    app.appState['encoder' + encoderNum][encoderProp] = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum][encoderProp];
                
                    }

                if(app.appState['encoder' + encoderNum].centerText != "---") {
                    
                app.dispatch({ type: "ENCODER" + encoderNum + '_CENTERTEXT', payload: { label: app.appState['encoder' + encoderNum].centerText } });
                }
                
                
             for (wheelNum = 1; wheelNum <= app.appState.wheels.length; wheelNum++) {
                // GO THROUGH EACH WHEEL AND CHECK IF THE ENCODER MATCHES THE WHEEL.  IF IT DOES, ENABLE THE WHEEL
                if (app.appState.wheels[wheelNum] == app.appState['encoder'+encoderNum].centerText) {
                    app.enableEncoder(encoderNum, wheelNum);
                }           
              }

            }

            break;

        case "Focus":

            for (encoderNum = 9; encoderNum <= 12; encoderNum++) {

                app.clearEncoder(encoderNum);

                for (let encoderProp in app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum]) {

                    //console.log("encoderProp: " + encoderProp + app.appState['encoder' + encoderNum][encoderProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appState['encoder' + encoderNum][encoderProp] = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encoder"+encoderNum][encoderProp];
                
                    }

                }

             for (dsNum = 5; dsNum <= 5; dsNum++) {

                for (let dsProp in app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["ds"+dsNum]) {

                    // console.log("dsProp: " + dsProp + app.appState['ds' + dsNum][dsProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appState['ds' + dsNum][dsProp] = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["ds"+dsNum][dsProp];
                
                    }

                }

            break;

        case "DirectSelects":

                for (dsNum = 1; dsNum <= 4; dsNum++) {

                for (let dsProp in app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["ds"+dsNum]) {

                    // console.log("dsProp: " + dsProp + app.appState['ds' + dsNum][dsProp]);
                    // Copy the encoder properties from the appState to the appConfig
                    app.appState['ds' + dsNum][dsProp] = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["ds"+dsNum][dsProp];
                
                    }
                }

            break;

        case "Playback":

            app.appState.faderPage = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1].faderPage;


                break;

        }

        app.updateAppState();
       // app.updateUI();

}

app.updateUI = () => {

    // app.disableAllEncoders();

    console.log("WHEELS : " + app.appState.wheels);

    for (wheelNum = 1; wheelNum <= app.appState.wheels.length; wheelNum++) {

        for (encoderNum = 1; encoderNum <= 8; encoderNum++) {
            
            if (app.appState.wheels[wheelNum] == app.appState['encoder'+encoderNum].centerText) {
                app.enableEncoder(encoderNum);
            }   
        }
    }
}

app.populateLayouts = () => {

    let currentMaster = app.appState.currentMasterLayout;
    let currentPage = app.appState.currentPage;
    /*
    layout["encLabel"] = layoutNum;
    layout["dsLabel"] = layoutNum;
    layout["faderLabel"] = layoutNum;
    layout["focusLabel"] = layoutNum;
    layout["encPageActive"] = false;
    layout["dsPageActive"] = false;
    layout["faderPageActive"] = false;
    layout["focusPageActive"] = false;
    */

    console.log("POPULATE LAYOUTS");
    for (i = 0; i < 10; i++) {
        // LOOP THROUGH ALL THE LAYOUTS
        console.log("======================= LAYOUT  " + i);
        const layoutNum = i + 1;
        console.log(JSON.stringify(app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]));
        
        const encLabel = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]['encLabel'];
        const dsLabel = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]['dsLabel'];
        const focusLabel = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]['focusLabel'];
        const faderLabel = app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]['faderLabel'];

        app.dispatch({ type: "ENC_LAY_" + layoutNum, payload: { label: encLabel } });
        app.dispatch({ type: "DS_LAY_" + layoutNum, payload: { label: dsLabel } });
        app.dispatch({ type: "FOCUS_LAY_" + layoutNum, payload: { label: focusLabel } });

        if (app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["encPageActive"]) {
            // If the Layout Has data mark it as such
            console.log("ENCODER PAGE IS ACTIVE");
            app.dispatch({ type: "ENC_LAY_" + layoutNum + "_ACTIVE", payload: { style: "layoutBtnActive" } });
        }

        if (app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["dsPageActive"]) {
            // If the Layout Has data mark it as such
            app.dispatch({ type: "DS_LAY_" + layoutNum + "_ACTIVE", payload: { style: "layoutBtnActive" } });
        }

        if (app.appConfig.masterLayouts[currentMaster].layouts[layoutNum - 1]["focusPageActive"]) {
            // If the Layout Has data mark it as such
            app.dispatch({ type: "FOCUS_LAY_" + layoutNum + "_ACTIVE", payload: { style: "layoutBtnActive" } });
        }
        
    }

}


