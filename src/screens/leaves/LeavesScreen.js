import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Figure, Label, StyledLeaves, Wrapper } from './StyledComponents';
import { SpinnerWrapper } from '../../common/StyledComponents';

class LeavesScreen extends Component {
    componentDidMount() {
        this.props.fetchEmployeeDetails(144);
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
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='box' size={22} color={'#0977D3'} />
            : <FontAwesomeIcon icon='box' size={22} color={'#393939'} />
        return i;
    }
}

export default LeavesScreen;
