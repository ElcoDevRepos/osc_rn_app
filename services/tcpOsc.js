import TcpSocket from 'react-native-tcp-socket';
import * as oscLib from './osc';

const tcpOsc = {};

tcpOsc.startConnection = (port, ip) => {
    const options = {
        port: port,
        host: ip,
    };

    // Create socket
    this.client = TcpSocket.createConnection(options, () => { });
    
    this.client.setKeepAlive(true);
    this.client.on('data', function (data) {
        //console.log('message was received', data);
    });

    this.client.on('error', function (error) {
        console.log(error);
    });

    this.client.on('close', function () {
        console.log('Connection closed!');
    });
}

tcpOsc.sendMessage = (address, args) => {
    let msg = { address: address, args: args };
    var msgCollection = oscLib.default.collectMessageParts(msg, {});
    msg = oscLib.default.joinParts(msgCollection);
    framed = oscLib.default.encode(msg);
    var buf = oscLib.default.nativeBuffer(framed);
    console.log(this.client);
    this.client.write(buf);
}
export default tcpOsc;