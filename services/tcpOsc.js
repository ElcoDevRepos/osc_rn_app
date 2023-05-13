import TcpSocket from 'react-native-tcp-socket';
import * as oscLib from './osc';
import {
    NativeEventEmitter
} from 'react-native';

const tcpOsc = {};

tcpOsc.isConnected = false;

tcpOsc.startConnection = (port, ip) => {

    if (tcpOsc.isConnected == true) {
        // We already have a connection.  Destroy it.

        this.client.destroy();
        tcpOsc.isConnected = false;

    }

    const eventEmitter = new NativeEventEmitter(tcpOsc);

    const options = {
        port: port,
        host: ip,
    };

    // Create socket
    oscLib.default.options.address = ip;
    oscLib.default.options.remoteAddress = ip;
    oscLib.default.options.port = port;

    //console.log(TcpSocket);
    this.client = TcpSocket.createConnection(options, () => { });

    console.log("================ THIS IS THE CONNECTION =================");
   // console.log(this.client);

    tcpOsc.isConnected = true;

    this.client.setKeepAlive(true);

    this.client.on('data', function (data) {
        oscLib.default.decodeSLIP(data, eventEmitter);
        //const finalDecode = oscLib.default.decodeOSC(decode, null, eventEmitter);
        //eventEmitter.emit("GotMessage", finalDecode);
        //console.log("3. " + finalDecode.address);
    });

    this.client.on('error', function (error) {
        console.log("CLIENT HAS HAD AN ERROR");
        console.log(error);

    });

    this.client.on('close', function () {
    });

}

tcpOsc.reconnect = () => {
    tcpOsc.isConnected = false;
    this.client.destroy();
    tcpOsc.startConnection(oscLib.default.options.port, oscLib.default.options.address);
}

tcpOsc.sendMessage = (address, args) => {

    try {
        let msg = { address: address, args: args };
        var msgCollection = oscLib.default.collectMessageParts(msg, {});
        msg = oscLib.default.joinParts(msgCollection);
        framed = oscLib.default.encode(msg);
        var buf = oscLib.default.nativeBuffer(framed);
        this.client.write(buf);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export default tcpOsc;