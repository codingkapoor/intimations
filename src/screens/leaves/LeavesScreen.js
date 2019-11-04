import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SpinnerWrapper, Figure, Label, LeavesContainer, StyledLeaves, Wrapper } from './StyledComponents';

class LeavesScreen extends Component {
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
            <Wrapper>
                <StyledLeaves>
                    <Figure>{el}</Figure>
                    <Label>Earned Leaves</Label>
                </StyledLeaves>
                <StyledLeaves>
                    <Figure>{sl}</Figure>
                    <Label>Sick Leaves</Label>
                </StyledLeaves>
            </Wrapper>
        );
    }
};

LeavesScreen.navigationOptions = {
    title: 'Leaves',
    tabBarIcon: <FontAwesomeIcon icon='box' size={20} />
}

export default LeavesScreen;
