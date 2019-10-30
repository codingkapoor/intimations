import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const LeavesStatusScreen = () => {
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
        fontSize: 110
    },
    label: {
        fontSize: 24
    }
});

LeavesStatusScreen.navigationOptions = {
    title: 'Leaves',
    tabBarIcon: <FontAwesomeIcon icon='box' size={20} />
}

export default LeavesStatusScreen;
