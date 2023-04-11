import React from 'react';
import { View } from 'react-native';
import { Icon, ListItem } from '@rneui/base';
import tcpOsc from '../../services/tcpOsc';

export default class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConsolesExpanded: false,
            isLayoutsExpanded: false,
            isUserExpanded: false,
            isSettingsExpanded: false
        }
    }

    render() {
        return (
            <View>
                <ListItem.Accordion
                    style={{ marginTop: 25 }}
                    content={
                        <>
                            <Icon name="computer" size={30} />
                            <ListItem.Content style={{ marginLeft: 15 }}>
                                <ListItem.Title>CONSOLES</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={this.state.isConsolesExpanded}
                    onPress={() => {
                        this.setState({ isConsolesExpanded: !this.state.isConsolesExpanded })
                    }}
                >
                    <ListItem key={0} onPress={tcpOsc.reconnect} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Reconnect</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </ListItem.Accordion>
                <ListItem.Accordion
                    content={
                        <>
                            <Icon name="image" size={30} />
                            <ListItem.Content style={{ marginLeft: 15 }}>
                                <ListItem.Title>LAYOUTS</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={this.state.isLayoutsExpanded}
                    onPress={() => {
                        this.setState({ isLayoutsExpanded: !this.state.isLayoutsExpanded })
                    }}
                >
                    <ListItem key={0} onPress={tcpOsc.reconnect} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Reconnect</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </ListItem.Accordion>
                <ListItem.Accordion
                    content={
                        <>
                            <Icon name="people" size={30} />
                            <ListItem.Content style={{ marginLeft: 15 }}>
                                <ListItem.Title>USER</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={this.state.isUserExpanded}
                    onPress={() => {
                        this.setState({ isUserExpanded: !this.state.isUserExpanded })
                    }}
                >
                    <ListItem key={0} onPress={tcpOsc.reconnect} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Reconnect</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </ListItem.Accordion>
                <ListItem.Accordion
                    content={
                        <>
                            <Icon name="computer" size={30} />
                            <ListItem.Content style={{ marginLeft: 15 }}>
                                <ListItem.Title>SETTINGS</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={this.state.isSettingsExpanded}
                    onPress={() => {
                        this.setState({ isSettingsExpanded: !this.state.isSettingsExpanded })
                    }}
                >
                    <ListItem key={0} onPress={tcpOsc.reconnect} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Reconnect</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </ListItem.Accordion>

            </View>
        );
    }
}


