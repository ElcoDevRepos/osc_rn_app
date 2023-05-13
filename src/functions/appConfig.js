
// THE GOAL IS TO CREATE A CONFIG OF LAYOUTS SO THAT WE CAN GET INFORMATION LIKE THIS:
//
//  app.appConfig.masterlayouts[currentMasterLayout].layouts[currentLayout].currentPage.encoder[module-1].centerText

app.defaultEncoder = {
      'encoderID': '',
      'wheel': '',
      'mode': 'coarse',
      'enabled': false,
      'value': '',
      'centerText': '---',
      'incValue': 8,
      'decValue': -8,
      'argType': 'f',
      'address': '/eos/active/wheel/'
}

app.defaultDS = {
      "dsID": "",
      "type": "chan",
      "enabled": true,
      "flexi": "off",
      "page": "1",
      "label": "SELECT"
}

app.defaultConsole = {
        'name' : '',
        'label' : '',
        'type' : '',
        'remoteAddress' : '10.101.0.101',
        'localAddress' : '10.101.0.2',
        'remotePort' : '8000',
        'localPort' : '9000'
    };

app.createLayout = (layoutNum) => {

    let layout = {};

    layout["faderPage"] = 1;
    layout["encLabel"] = layoutNum;
    layout["dsLabel"] = layoutNum;
    layout["faderLabel"] = layoutNum;
    layout["focusLabel"] = layoutNum;
    layout["encPageActive"] = false;
    layout["dsPageActive"] = false;
    layout["faderPageActive"] = false;
    layout["focusPageActive"] = false;

    for (let encoderNum = 1; encoderNum <= 12; encoderNum++) {
        
        layout["encoder" + encoderNum] = JSON.parse(JSON.stringify(app.defaultEncoder));
              
        layout["encoder" + encoderNum].encoderID = encoderNum;
    }

    for (let dsNum = 1; dsNum <= 5; dsNum++) {
        
        layout["ds" + dsNum] = JSON.parse(JSON.stringify(app.defaultDS));
              
        layout["ds" + dsNum].dsID = dsNum;
    }



    return layout;

  } // end createLayout


app.createMasterLayout = () => {

    let layouts = [];
    
    for (let i = 0; i < 10; i++) {
        
        layouts[i] = app.createLayout(i+1);
    
    }

    let masterLayout = {
        "label" : "New Master Layout",
        "layouts" : layouts
    };

    return masterLayout;

  } // end createMasterLayout

  app.createConsole = () => {
  
    let console = JSON.parse(JSON.stringify(app.defaultConsole));
    
    return console;
  
  }

app.createNewAppConfig = () => {

    let appConfig = {...defaultAppConfig}
    
    appConfig.masterLayouts[0] = app.createMasterLayout();

    appConfig.consoles[0] = app.createConsole();

    return appConfig;

}


const defaultAppConfig = {

    'configVersion': '1.0.1',
    'type': 'EOS',
    'connectionType': 'TCP',
    'oscVersion': '1.1',
    'user': '0',
    'curMaster': '0',
    'consoles': [],
    'masterLayouts': [],
    'coarse': 8,
    'fine': 1,
    'pages' : {
        'Remote':
    {
        "encoderStart": 0,
        "encoderCount": 0,
        "dsStart": 0,
        "dsCount": 0,
        "faderStart": 0,
        "faderCount": 0,
    },
    'FacePanel':
    {
        "encoderStart": 0,
        "encoderCount": 0,
        "dsStart": 0,
        "dsCount": 0,
        "faderStart": 0,
        "faderCount": 0,
    },
    'Focus':
    {
        "encoderStart": 9,
        "encoderCount": 4,
        "dsStart": 5,
        "dsCount": 1,
        "faderStart": 0,
        "faderCount": 0,
    },
    'Encoders':
    {
        "encoderStart": 1,
        "encoderCount": 8,
        "dsStart": 0,
        "dsCount": 0,
        "faderStart": 0,
        "faderCount": 0,
    },
    'DirectSelects':
    {
        "encoderStart": 0,
        "encoderCount": 0,
        "dsStart": 1,
        "dsCount": 4,
        "faderStart": 0,
        "faderCount": 0,
    },
    'Playback':
    {
        "encoderStart": 0,
        "encoderCount": 0,
        "dsStart": 0,
        "dsCount": 0,
        "faderStart": 1,
        "faderCount": 10,
    }
    }
    
};

 
