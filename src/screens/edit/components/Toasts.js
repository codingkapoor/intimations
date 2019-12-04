import React from 'react';
import Toast from 'react-native-root-toast';

export const PAST = 'PAST';
export const ALREADY5 = 'ALREADY5';
export const WEEKENDS = 'WEEKENDS';
export const INCOMPLETE_REQUEST = 'INCOMPLETE_REQUEST';

const TOASTS = {
    Past: "Intimations can't be created/modified for dates in the past. Please select dates in present or from future.",
    Already5: "Can't update intimation for today after 5 PM.",
    Weekends: "Please select dates from weekdays.",
    IncompleteRequest: "Dates that belong to an intimation must have requests specified for both the halves.",
};

export default ({ showToast, visible }) => {
    switch (showToast) {
        case PAST:
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
                    {TOASTS['Past']}
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

        case WEEKENDS:
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
                    {TOASTS['Weekends']}
                </Toast>
            );

        case INCOMPLETE_REQUEST:
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
                    {TOASTS['IncompleteRequest']}
                </Toast>
            );

        default:
            return null;
    }
}
