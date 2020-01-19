import React, { useEffect, useState } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwitchSelector from "react-native-switch-selector";

import CalendarContainer from './components/calendar/CalendarContainer';
import { Reason } from './StyledComponents';
import { ToggleValue } from './Constants';
import EditContainer from './components/edit/EditContainer';
import { getDaysInMonthYear } from '../../common/utils/dates';
import Toasts from '../../common/components/Toasts';

const EditScreen = ({ inactiveIntimations, stageIntimation, activeIntimation, fetchInactiveIntimations, updateStageIntimation, toast }) => {

    const _fetchInactiveIntimations = () => {
        const getStartMonth = month => String(month - 2 <= 0 ? month + 10 : month - 2).padStart(2, '0');
        const getStartYear = (month, year) => month - 2 <= 0 ? year - 1 : year;

        const getEndMonth = month => String(month).padStart(2, '0');

        const getStart = (month, year) => `${getStartYear(month, year)}-${getStartMonth(month)}-01`;
        const getEnd = (month, year) => `${year}-${getEndMonth(month)}-${getDaysInMonthYear(month, year)}`;

        const limit = (month, year) => [getStart(month, year), getEnd(month, year)];

        const currentDate = new Date();
        let endPoint = currentDate;

        if (activeIntimation.reason !== '') {
            let requestDates = activeIntimation.requests.sort((a, b) => { return new Date(a.date) - new Date(b.date) });
            let lastRequestDate = new Date(requestDates[requestDates.length - 1].date);

            endPoint = lastRequestDate;
        }

        [start, end] = limit(endPoint.getMonth() + 1, endPoint.getFullYear());

        fetchInactiveIntimations(start, end);
    }

    const [toggleValue, setToggleValue] = useState(ToggleValue.WFH);

    useEffect(() => { _fetchInactiveIntimations() }, []);

    stageRequests = stageIntimation.requests ? stageIntimation.requests : [];

    const _onChangeText = text => {
        updateStageIntimation({
            'reason': text,
            'requests': stageRequests
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
            <ScrollView style={{ flex: 1, paddingTop: 0 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SwitchSelector
                        initial={1}
                        onPress={value => (value !== toggleValue) ? setToggleValue(value) : null}
                        buttonColor={'#3A8BCF'}
                        hasPadding
                        style={{ width: 250, marginBottom: 10 }}
                        height={38}
                        options={[
                            { label: 'Office ', value: ToggleValue.OFFICE },
                            { label: 'WFH ', value: ToggleValue.WFH },
                            { label: 'Leave ', value: ToggleValue.LEAVE }
                        ]}
                    />

                    <CalendarContainer
                        inactiveRequests={inactiveIntimations.map(ii => ii.requests).flatMap(i => i)}
                        toggleValue={toggleValue}
                    />

                    <Reason
                        placeholder='Reason...'
                        multiline
                        textAlignVertical={'top'}
                        value={stageIntimation.reason ? stageIntimation.reason : ''}
                        onChangeText={_onChangeText}
                    />

                    <EditContainer />

                    <Toasts showToast={toast.type} visible={toast.visible} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

EditScreen.navigationOptions = {
    title: 'Edit',
    headerTintColor: '#393939',
    headerTitleStyle: { width: Dimensions.get('window').width },
    tabBarVisible: 'false'
}

export default EditScreen;
