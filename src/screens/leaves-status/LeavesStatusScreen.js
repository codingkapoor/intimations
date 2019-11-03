import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class LeavesStatusScreen extends Component {
    componentDidMount() {
        this.props.fetchEmployeeDetails(128);
    }

    render() {
        let employeeDetails = this.props.employeeDetails;

        if (!employeeDetails.leaves)
            return (
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            );

        let el = employeeDetails.leaves.earned;
        let sl = employeeDetails.leaves.sick;

        return (
            <View style={styles.parent}>
                <View style={styles.container}>
                    <Text style={styles.figure}>{el}</Text>
                    <Text style={styles.label}>Earned Leaves</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.figure}>{sl}</Text>
                    <Text style={styles.label}>Sick Leaves</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'space-evenly'

    },
    container: {
        alignItems: 'center'
    },
    figure: {
        fontSize: 80
    },
    label: {
        fontSize: 20
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});

LeavesStatusScreen.navigationOptions = {
    title: 'Leaves',
    tabBarIcon: <FontAwesomeIcon icon='box' size={20} />
}

export default LeavesStatusScreen;
