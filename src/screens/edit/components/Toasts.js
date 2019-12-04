import React from 'react';
import Toast from 'react-native-root-toast';

export const PAST = 'PAST';
export const ALREADY5 = 'ALREADY5';
export const WEEKENDS = 'WEEKENDS';
export const INCOMPLETE_REQUEST = 'INCOMPLETE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_FAILURE = 'CREATE_FAILURE';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';
export const CANCEL_SUCCESS = 'CANCEL_SUCCESS';
export const CANCEL_FAILURE = 'CANCEL_FAILURE';

const TYPES = {
    Info: { backgroundColor: '#3A8BCF', textColor: '#FFFFFF' },
    Warning: { backgroundColor: '#BDA101', textColor: '#FFFFFF' },
    Success: { backgroundColor: '#8FB935', textColor: '#FFFFFF' },
    Failure: { backgroundColor: '#D12219', textColor: '#FFFFFF' }
}

const TEXTS = {
    Past: "Intimations can't be created/modified for dates in the past. Please select dates in present or from future",
    Already5: "Can't update intimation for today after 5 PM",
    Weekends: "Please select dates from weekdays",
    IncompleteRequest: "Dates that belong to an intimation must have requests specified for both the halves",
    CreateSuccess: "Intimation created",
    CreateFailure: "Failed to create intimation",
    UpdateSuccess: "Intimation updated",
    UpdateFailure: "Failed to update intimation",
    CancelSuccess: "Intimation cancelled",
    CancelFailure: "Failed to cancel intimation"
};

export default ({ showToast, visible }) => {
    let text = ''; let type = TYPES.Info;

    switch (showToast) {
        case PAST:
            text = TEXTS.Past;
            type = TYPES.Info;
            break;
        case ALREADY5:
            text = TEXTS.Already5;
            type = TYPES.Info;
            break;
        case WEEKENDS:
            text = TEXTS.Weekends;
            type = TYPES.Info;
            break;
        case INCOMPLETE_REQUEST:
            text = TEXTS.IncompleteRequest;
            type = TYPES.Info;
            break;
        case CREATE_SUCCESS:
            text = TEXTS.CreateSuccess;
            type = TYPES.Success;
            break;
        case CREATE_FAILURE:
            text = TEXTS.CreateFailure;
            type = TYPES.Failure;
            break;
        case UPDATE_SUCCESS:
            text = TEXTS.UpdateSuccess;
            type = TYPES.Success;
            break;
        case UPDATE_FAILURE:
            text = TEXTS.UpdateFailure;
            type = TYPES.Failure;
            break;
        case CANCEL_SUCCESS:
            text = TEXTS.CancelSuccess;
            type = TYPES.Success;
            break;
        case CANCEL_FAILURE:
            text = TEXTS.CancelFailure;
            type = TYPES.Failure;
            break;
        default:
            text = '';
            type = TYPES.Info;
            break;
    }

    return (
        <Toast
            visible={visible}
            position={-30}
            opacity={1}
            textColor={type.textColor}
            backgroundColor={type.backgroundColor}
            shadow={true}
            animation={false}
            hideOnPress={false}
        >
            {text}
        </Toast>
    );
}
