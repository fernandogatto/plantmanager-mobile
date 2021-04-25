import React from 'react';

import {
    Portal,
    Dialog,
    Paragraph,
    Button,
} from 'react-native-paper';

const CustomDialog = ({ isVisible, onClose, title, message, handleAction }) => {
    return (
        <Portal>
            <Dialog
                visible={isVisible}
                onDismiss={onClose}
            >
                <Dialog.Title>
                    {title}
                </Dialog.Title>

                <Dialog.Content>
                    <Paragraph>
                        {message}
                    </Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <Button
                        mode="text"
                        onPress={onClose}
                    >
                        Cancelar
                    </Button>
                    
                    <Button
                        mode="text"
                        onPress={handleAction}
                    >
                        Ok
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default CustomDialog;