import React, { Component } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Figure, Label, StyledLeaves, Wrapper } from './StyledComponents';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

class LeavesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { refreshing: false }
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.props.fetchEmployeeDetails(11);
        wait(2000).then(() => this.setState({ refreshing: false }));
    }

    componentDidMount() {
        this.props.fetchEmployeeDetails(11);
    }

    render() {
        let employeeDetails = this.props.employeeDetails;

        if (!employeeDetails.leaves)
            return (
                <SpinnerWrapper>
                    <ActivityIndicator size="large" color="#000000" />
                </SpinnerWrapper>
            );

        let el = employeeDetails.leaves.earned;
        let sl = employeeDetails.leaves.sick;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-evenly" }} refreshControl={
                    <RefreshControl progressViewOffset={30} refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                }>
                    <StyledLeaves>
                        <Figure>{el}</Figure>
                        <Label>Earned Leaves</Label>
                    </StyledLeaves>
                    <StyledLeaves>
                        <Figure>{sl}</Figure>
                        <Label>Sick Leaves</Label>
                    </StyledLeaves>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

LeavesScreen.navigationOptions = {
    title: 'Leaves',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='box' size={22} color={'#0977D3'} />
            : <FontAwesomeIcon icon='box' size={22} color={'#393939'} />
        return i;
    }
}

export default LeavesScreen;
