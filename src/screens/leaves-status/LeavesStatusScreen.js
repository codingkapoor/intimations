import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class LeavesStatusScreen extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchEmployeeDetails(128);
        console.log(this.props.employeeDetails);
    }

    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.container}>
                    <Text style={styles.figure}>23</Text>
                    <Text style={styles.label}>Earned Leaves</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.figure}>11</Text>
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
    }
});

LeavesStatusScreen.navigationOptions = {
    title: 'Leaves',
    tabBarIcon: <FontAwesomeIcon icon='box' size={20} />
}

export default LeavesStatusScreen;
