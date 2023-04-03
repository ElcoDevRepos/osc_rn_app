import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import osc from 'react-native-osc';
import tcpOsc from './services/tcpOsc';
import {
  NativeEventEmitter
} from 'react-native';


export default function App() {
  const eventEmitter = new NativeEventEmitter(osc);
  eventEmitter.addListener('GotMessage', (oscMessage) => {
    console.log("message: ", oscMessage);
  });

  /**
   * Use these connection methods to connect and send to the EOS Server as preferred
   */
  /**
   * TCP Connection and send
   */
  //tcpOsc.startConnection(3037, '192.168.50.119');

  //tcpOsc.sendMessage('/eos/ping', ['0']);

  /** 
   * UDP Connection and Send 
   * */

  //osc.createClient("192.168.50.119", 8000);
  //osc.sendMessage("/eos/ping", ['0']);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
