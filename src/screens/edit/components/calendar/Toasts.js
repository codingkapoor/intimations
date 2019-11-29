import React from 'react';
import Toast from 'react-native-root-toast';

const TOASTS = {
    Create: "Intimations can't be created for dates in the past. Please select dates in present or from future.",
    Update: "Intimations in the past can't be modified. Please select dates in present or from future.",
    Already5: "Can't update intimation for today after 5 PM."
};

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const ALREADY5 = 'ALREADY5';

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

        case ALREADY5:
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
                    {TOASTS['Already5']}
                </Toast>
            );

        default:
            return null;
    }
}
