import React from 'react';
import {
    View, 
    Text, 
    Button
} from 'react-native';

import styles from '../../helpers/styles';

import DSModuleTypeButton from './dsModuleTypeButton';
import DSFlexiButton from './dsFlexiButton';


export default DSSelectionScreen = ({ route = undefined, navigation }) => {
    
    console.log("======================MODULE IS: " + route.params);

    let module = 1;

    if (route.params == undefined) {
       // const { module }  = 1;
        console.log("ROUTE.PARAMS IS UNDEFINED " + module);
    } else {
        console.log(route);
        console.log("ROUTE.PARAMS IS DEFINED " + module);
         module  = route.params.module;
    }
    
   
    console.log("APPSTATE" + app.appState['ds' + module]);

    if (app.appState['ds' + module].flexi == "on") {
        // Update the UI
        console.log("FLEXI IS ON");
        app.dispatch({ type: "ds_Flexi", payload: { style: "btn12Pressed", label: "Flexi On" } });
    } else {
        // Update the UI
console.log("FLEXI IS OFF");
        app.dispatch({ type: "ds_Flexi", payload: { style: "btn12", label: "Flexi Off" } });
    }

    let returnPage = "DirectSelects";

    if (app.appState.currentPage == "Focus") {
        returnPage = "Focus";
    }

  return (
      <View style={[styles.modal]}>

          <View style={[styles.modalContainer, styles.w80]}>
              <View style={[styles.row]} >
                  <View style={[styles.col, styles.col12]} >
                      <View style={[styles.row]} >
                          <View style={[styles.col, styles.col11]} >
                              <Text style={[styles.text, { fontSize: 30 }]}>CHOOSE A DIRECT SELECT TYPE FOR MODULE {module}</Text>
                          </View>
                          <View style={[styles.col, styles.col1]} >
                              <Button onPress={() => navigation.navigate(returnPage)} title="X" />
                          </View>
                      </View>
                  </View>
              </View>
          

          <View style={[styles.row]} >
              <View style={[styles.col, styles.col12]} >
                  <View style={[styles.row, styles.row_single_remote]} >
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Channels'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Groups'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Intensity_Palettes'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Color_Palettes'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Focus_Palettes'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Beam_Palettes'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Clear'} module={module} />
                      </View>
                  </View>

                  <View style={[styles.row, styles.row_single_remote]} >
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Presets'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Effects'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Macros'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Snapshots'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Magic_Sheets'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSModuleTypeButton name={'ds_Scenes'} module={module} />
                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >

                      </View>
                      <View style={[styles.col, styles.coldsSelect]} >
                          <DSFlexiButton name={'ds_Flexi'} module={module} />
                      </View>
                  </View>

              </View>
          </View>

   

          </View>
    </View>
  );
}