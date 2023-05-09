import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { Icon, ListItem } from '@rneui/base';
import tcpOsc from '../../services/tcpOsc';

export default class DrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConsolesExpanded: false,
            isLayoutsExpanded: false,
            isUserExpanded: true,
            isSettingsExpanded: false,
            isAdding: false
        }
    }

    renderTextButtons = () => {
        let buttons = [];
        for (let i = 1; i < 10; i++) {
            buttons.push(<Pressable style={{ height: 75, width: "33%", backgroundColor: "darkblue", borderColor: 'lightblue', borderWidth: 2 }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 20 }}>{i}</Text>
            </Pressable>)
        }
        buttons.push(<Pressable style={{ height: 75, width: "33%", backgroundColor: "darkblue", borderColor: 'lightblue', borderWidth: 2 }}>
            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 20 }}>0</Text>
        </Pressable>)
        return buttons
    }
    render() {
        const styles = {
            row: {
                flexDirection: "row"
            },
            "1col": {
                backgroundColor: "lightblue",
                borderColor: "#fff",
                borderWidth: 1,
                flex: 1
            },
            "2col": {
                backgroundColor: "green",
                borderColor: "#fff",
                borderWidth: 1,
                flex: 2
            },
            "3col": {
                backgroundColor: "orange",
                borderColor: "#fff",
                borderWidth: 1,
                flex: 3
            },
            "4col": {
                flex: 4
            }
        };
        const Col = ({ numRows, children }) => {
            return (
                <View style={styles[`${numRows}col`]}>{children}</View>
            )
        }

        const Row = ({ children }) => (
            <View style={styles.row}>{children}</View>
        )


        return (
            <View style={{ backgroundColor: "black", height: "100%" }}>
                <ListItem.Accordion
                    style={{ marginTop: 25 }}
                    content={
                        <>
                            <Icon name="computer" size={30} />
                            <ListItem.Content style={{ marginLeft: 15 }}>
                                <ListItem.Title>CONSOLES</ListItem.Title>
                                <ListItem.Subtitle></ListItem.Subtitle>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={this.state.isConsolesExpanded}
                    onPress={() => {
                        this.setState({ isConsolesExpanded: !this.state.isConsolesExpanded, isAdding: !this.state.isConsolesExpanded ? false : true })
                    }}
                >
                    <ListItem key={0} onPress={tcpOsc.reconnect} bottomDivider>
                        {
                            !this.state.isAdding ?
                                <ListItem.Content>
                                    <ListItem.Title>Reconnect</ListItem.Title>
                                    <ListItem.Subtitle>10.10.0.1</ListItem.Subtitle>
                                    <Row>
                                        <Col>
                                            <Pressable style={{ padding: 5, backgroundColor: "black", borderColor: 'blue', borderWidth: 3, margin: 10 }}>
                                                <Text style={{ color: "white", fontSize: 15 }}>Edit</Text>
                                            </Pressable>
                                        </Col>
                                        <Col>
                                            <Pressable style={{ padding: 5, backgroundColor: "black", borderColor: 'red', borderWidth: 3, margin: 10 }}>
                                                <Text style={{ color: "white", fontSize: 15 }}>Delete</Text>
                                            </Pressable>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Pressable onPressIn={() => {
                                                this.setState({ isAdding: true })
                                            }}>
                                                <Text style={{ textTransform: 'uppercase' }}>New Console</Text>
                                            </Pressable>
                                        </Col>
                                    </Row>
                                </ListItem.Content>
                                : <><ListItem.Content>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <ListItem.Input containerStyle={{}}
                                            disabledInputStyle={{ background: "#ddd" }}
                                            inputContainerStyle={{ width: "50%", }}
                                            errorStyle={{}}
                                            errorProps={{}}
                                            inputStyle={{ textAlign: 'left' }}
                                            label="Console Name"
                                            labelStyle={{ marginBottom: 10 }}
                                            labelProps={{}}
                                            leftIconContainerStyle={{}}
                                            rightIconContainerStyle={{}}
                                            placeholder="New Console"></ListItem.Input>
                                        <ListItem.Input containerStyle={{}}
                                            disabledInputStyle={{ background: "#ddd" }}
                                            inputContainerStyle={{ width: "50%" }}
                                            errorStyle={{}}
                                            errorProps={{}}
                                            inputStyle={{ textAlign: 'left' }}
                                            label="IP Address"
                                            labelStyle={{ marginBottom: 10 }}
                                            labelProps={{}}
                                            leftIconContainerStyle={{}}
                                            rightIconContainerStyle={{}}
                                            placeholder="10.10.0.1"></ListItem.Input>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 35 }}>
                                        <Pressable>
                                            <Text style={{ color: "black", fontSize: 15 }}>SAVE</Text>
                                        </Pressable>
                                    </View>
                                </ListItem.Content></>

                        }
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
                        this.setState({ isLayoutsExpanded: !this.state.isLayoutsExpanded, isAdding: !this.state.isLayoutsExpanded ? false : true })
                    }}
                >
                    <ListItem key={0} onPress={tcpOsc.reconnect} bottomDivider>
                        {
                            !this.state.isAdding ?
                                <ListItem.Content>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                                        <ListItem.Title>New Layout</ListItem.Title>
                                        <Pressable style={{ padding: 5, backgroundColor: "black", borderColor: 'blue', borderWidth: 3, margin: 10 }}>
                                            <Text style={{ color: "white", fontSize: 15 }}>Edit</Text>
                                        </Pressable>
                                        <Pressable style={{ padding: 5, backgroundColor: "black", borderColor: 'red', borderWidth: 3, margin: 10 }}>
                                            <Text style={{ color: "white", fontSize: 15 }}>Edit</Text>
                                        </Pressable>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                                        <Pressable onPressIn={() => {
                                            this.setState({ isAdding: true })
                                        }} >
                                            <Text style={{ textTransform: 'uppercase' }}>New Master Layout</Text>
                                        </Pressable>
                                    </View>
                                </ListItem.Content>
                                : <><ListItem.Content>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <ListItem.Input containerStyle={{}}
                                            disabledInputStyle={{ background: "#ddd" }}
                                            inputContainerStyle={{ width: "50%", }}
                                            errorStyle={{}}
                                            errorProps={{}}
                                            inputStyle={{ textAlign: 'left' }}
                                            label="Label for Master Layout"
                                            labelStyle={{ marginBottom: 10 }}
                                            labelProps={{}}
                                            leftIconContainerStyle={{}}
                                            rightIconContainerStyle={{}}
                                            placeholder="New Layout"></ListItem.Input>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 35 }}>
                                        <Pressable>
                                            <Text style={{ color: "black", fontSize: 15 }}>SAVE</Text>
                                        </Pressable>
                                    </View>
                                </ListItem.Content></>
                        }
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
                            <View>
                                <Text>USER NUMBER:</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {this.renderTextButtons()}
                                <Pressable style={{ height: 75, width: "33%", backgroundColor: "darkblue", borderColor: 'lightblue', borderWidth: 2 }}>
                                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 20 }}>Set</Text>
                                </Pressable>
                                <Pressable style={{ height: 75, width: "33%", backgroundColor: "darkblue", borderColor: 'lightblue', borderWidth: 2 }}>
                                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 20 }}>Back</Text>
                                </Pressable>
                            </View>
                        </ListItem.Content>
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

            </View >
        );
    }
}


