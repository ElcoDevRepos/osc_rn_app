import { Dialog, Icon, ListItem } from '@rneui/base';
import React from 'react';

export default class SettingsDialog extends React.Component {
    constructor(props) {super(props)}
    
    render() {
        return (
            <Dialog
                isVisible={this.props.isSettingsVisible}
                onBackdropPress={this.props.openSettings}
            >

                <ListItem.Accordion
                    content={
                        <>
                            <Icon name="computer" size={30} />
                            <ListItem.Content>
                                <ListItem.Title>CONSOLES</ListItem.Title>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={this.props.isConsolesExpanded}
                    onPress={() => {
                        this.props.setIsConsolesExpanded(!this.props.isConsolesExpanded);
                    }}
                >
                    <ListItem key={0} onPress={() => { }} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{"test1"}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </ListItem.Accordion>

                <Dialog.Actions>
                    <Dialog.Button
                        title="CONFIRM"
                        onPress={() => {
                        }}
                    />
                    <Dialog.Button title="CANCEL" onPress={this.props.openSettings} />
                </Dialog.Actions>
            </Dialog>
        )
    }
}