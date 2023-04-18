  function createAppState() {
    // App State is an object to store all the current conditions of the App
    // Will use appState to store config at appropriate Times
    let appState = {};

    appState.console = 0;
    appState.currentPage = "remotePage";
    appState.currentMasterLayout = 0;
    appState.edit = false;
    appState.editEnabled = true;
    appState.activeChan = "";
    appState.preActiveChan = "";
    // Direct Select Page
    appState.ds=[];
    for (let j = 0; j < 5; j++) {
    // Creates 4 DS Slots per page
    appState.ds[j] = JSON.parse(JSON.stringify(defaultDS));
    appState.ds[j].dsID = j + 1;
    }

    // Encoder Page

    appState.encoders=[];
    for (let j = 0; j < 12; j++) {
    // Creates 4 DS Slots per page
    appState.encoders[j] = JSON.parse(JSON.stringify(defaultEncoder));
    appState.encoders[j].encoderID = j + 1;
    appState.encoders[j].centerText = "--Clear--";
    appState.encoders[j].address = "/eos/active/wheel/2";
    appState.encoders[j].incValue = 8.00;
    appState.encoders[j].decValue = -8.00;
    appState.encoders[j].argType = 'f';
    }

    appState.faders=[];
    for (let i = 0; i < 1; i++) {
      // Create 1 FaderBank
      appState.faders[i] = JSON.parse(JSON.stringify([]));
      for (let j = 0; j < 10; j++) {
        // Create 10 Faders
        appState.faders[i][j] = {"level" : 0, "enabled" : false};
      }

    }

    appState.faderPage = {"page" : 1};

    appState.colorStore = false;

    appState.colors = [];
    appState.colors[0] = "#ffffff";
    appState.colors[1] = "#ffdd99";
    appState.colors[2] = "#ffaa66";
    appState.colors[3] = "#ff0000";
    appState.colors[4] = "#ff6600";
    appState.colors[5] = "#ffff00";
    appState.colors[6] = "#66ff00";
    appState.colors[7] = "#00ff66";
    appState.colors[8] = "#00ffff";
    appState.colors[9] = "#0066ff";
    appState.colors[10] = "#0000ff";
    appState.colors[11] = "#6600ff";
    appState.colors[12] = "#ff00ff";

    // Currently No Savable States
    appState.remotePage = {};
    appState.facepanelPage = {};

    return appState;

  }

const appState = {
  "console": "0",
  "currentPage": "encoderPage",
  "currentMasterLayout": 0,
  "edit": false,
  "editEnabled": true,
  "activeChan": "1  ",
  "preActiveChan": "1  ",
  "ds1" : 
    {
      "dsID": 1,
      "type": "none",
      "enabled": false,
      "flexi": "off",
      "page": "1",
      "label": "SELECT"
    },
  "ds2" : 
    {
      "dsID": 2,
      "type": "none",
      "enabled": false,
      "flexi": "off",
      "page": "1",
      "label": "SELECT"
    },
  "ds3" : 
    {
      "dsID": 3,
      "type": "none",
      "enabled": false,
      "flexi": "off",
      "page": "1",
      "label": "SELECT"
    },
  "ds4" : 
    {
      "dsID": 4,
      "type": "none",
      "enabled": false,
      "flexi": "off",
      "page": "1",
      "label": "SELECT"
    },
  "ds5" : 
    {
      "dsID": "5",
      "type": "none",
      "enabled": false,
      "flexi": "off",
      "page": "1",
      "label": "SELECT"
    },
  "encoder1" :
    {
      "encoderID": 1,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder2" :
    {
      "encoderID": 2,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder3" :
    {
      "encoderID": 3,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
   "encoder4" :
    {
      "encoderID": 4,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder5" :
    {
      "encoderID": 5,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder6" :
    {
      "encoderID": 6,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder7" :
    {
      "encoderID": 7,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder8" :
    {
      "encoderID": 8,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder9" :
    {
      "encoderID": 9,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder10" :
    {
      "encoderID": 10,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
  "encoder11" :
    {
      "encoderID": 11,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
 "encoder12" :
    {
      "encoderID": 12,
      "wheel": "",
      "mode": "coarse",
      "enabled": false,
      "value": "",
      "centerText": "--Clear--",
      "incValue": 8,
      "decValue": -8,
      "argType": "f",
      "address": "/eos/active/wheel/2"
    },
"fader1" : 
    {
        "level": 0,
        "enabled": false
    },
"fader2" : 
    {
        "level": 0,
        "enabled": false
    },
"fader3" : 
    {
        "level": 0,
        "enabled": false
    },
"fader4" : 
    {
        "level": 0,
        "enabled": false
    },
"fader5" : 
    {
        "level": 0,
        "enabled": false
    },
"fader6" : 
    {
        "level": 0,
        "enabled": false
    },
"fader7" : 
    {
        "level": 0,
        "enabled": false
    },
"fader8" : 
    {
        "level": 0,
        "enabled": false
    },
"fader9" : 
    {
        "level": 0,
        "enabled": false
    },
"fader10" : 
    {
        "level": 0,
        "enabled": false
    },
  "faderPage": {
    "page": 1
  },
  "colorStore": false,
  "colors": [
    "#faf6ff",
    "#7acaff",
    "#ffe0ab",
    "#ff7f08",
    "#ff0004",
    "#00eaff",
    "#ff6600",
    "#0004ff",
    "#ffd903",
    "#7700ff",
    "#4dff00",
    "#ff00b3",
    "#ff00ff"
  ],
  "remotePage": {},
  "facepanelPage": {}
};





const defaultConsole = {
          'name' : '',
          'label' : '',
          'type' : '',
          'remoteAddress' : '10.101.0.1',
          'localAddress' : '10.101.0.2',
          'remotePort' : '8000',
          'localPort' : '9000'
      };

    const defaultEncoder = {
        'encoderID' : '1',
        'wheel' : '',
        'mode' : 'coarse',
        'enabled' : false,
        'value' : '',
        'centerText' : '',
        'incValue' : '',
        'decValue' : '',
        'argType' : 'f',
        'address' : '/eos/active/wheel/'
    };

    const defaultDS = {
        'dsID' : 1,
        'type' : 'none',
        'enabled' : false,
        'flexi' : 'off',
        'page' : '1'
    };

    const defaultMasterLayout = {
      'label' : 'New Layout'
    };

    const defaultAppConfig = {
      'configVersion' : '1.0.28',
      'type' : 'EOS',
      'remoteAddress' : '192.168.50.119',
      'localAddress' : '192.168.0.101',
      'remotePort' : '8000',
      'localPort' : '9000',
      'connectionType' : 'TCP',
      'oscVersion' : '1.1',
      'user' : '0',
      'curMaster' : '0',
      'consoles' : [],
      'remotePage' :
      {
        "encoderStart" : 0,
        "encoderCount" : 0,
        "dsStart" : 0,
        "dsCount" : 0,
        "faderStart" : 0,
        "faderCount" : 0,
      },
      'facepanelPage' :
      {
        "encoderStart" : 0,
        "encoderCount" : 0,
        "dsStart" : 0,
        "dsCount" : 0,
        "faderStart" : 0,
        "faderCount" : 0,
      },
      'focusPage' :
      {
        "encoderStart" : 9,
        "encoderCount" : 4,
        "dsStart" : 5,
        "dsCount" : 1,
        "faderStart" : 0,
        "faderCount" : 0,
      },
      'encoderPage' :
      {
        "encoderStart" : 1,
        "encoderCount" : 8,
        "dsStart" : 0,
        "dsCount" : 0,
        "faderStart" : 0,
        "faderCount" : 0,
      },
      'dsPage' :
      {
        "encoderStart" : 0,
        "encoderCount" : 0,
        "dsStart" : 1,
        "dsCount" : 4,
        "faderStart" : 0,
        "faderCount" : 0,
      },
      'faderPage' :
      {
        "encoderStart" : 0,
        "encoderCount" : 0,
        "dsStart" : 0,
        "dsCount" : 0,
        "faderStart" : 1,
        "faderCount" : 10,
      }
    };// JavaScript source code

    export default appState;
