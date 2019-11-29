import React, { useState } from 'react';
import Toast from 'react-native-root-toast';

const TOASTS = {
    Create: "Intimations can't be created for dates in the past. Please select dates in present or from future.",
    Update: "Intimations in the past can't be modified. Please select dates in present or from future."
};

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';

export default ({ showToast, visible }) => {
    switch (showToast) {
        case CREATE:
            return (
                <Toast
                    visible={visible}
                    position={-30}
                    opacity={1}
                    backgroundColor={'#E70000'}
                    shadow={true}
                    animation={false}
                    hideOnPress={false}
                >
                    {TOASTS['Create']}
                </Toast>
            );

        default:
            return null;
    }
}
