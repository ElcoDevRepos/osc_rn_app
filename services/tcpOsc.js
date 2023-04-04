import TcpSocket from 'react-native-tcp-socket';
import * as oscLib from './osc';
import {
    NativeEventEmitter
  } from 'react-native';
const tcpOsc = {};

tcpOsc.startConnection = (port, ip) => {
    const eventEmitter = new NativeEventEmitter(tcpOsc);
    const options = {
        port: port,
        host: ip,
    };

    // Create socket
    this.client = TcpSocket.createConnection(options, () => { });
    
    this.client.setKeepAlive(true);
    this.client.on('data', function (data) {
        eventEmitter.emit("GotMessage", data)
    });

    this.client.on('error', function (error) {
    });

    this.client.on('close', function () {
    });
}

tcpOsc.sendMessage = (address, args) => {
    let msg = { address: address, args: args };
    var msgCollection = oscLib.default.collectMessageParts(msg, {});
    msg = oscLib.default.joinParts(msgCollection);
    framed = oscLib.default.encode(msg);
    var buf = oscLib.default.nativeBuffer(framed);
    this.client.write(buf);
}
export default tcpOsc;